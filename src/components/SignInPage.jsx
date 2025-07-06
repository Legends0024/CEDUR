
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      let data;
      try {
        data = await res.json();
      } catch {
        throw new Error("Server error: Invalid JSON response");
      }
      if (!res.ok) throw new Error(data.message || "Sign in failed");
      setSuccess("Signed in successfully!");
      // Store user and token in localStorage
      localStorage.setItem("cedur_token", data.token);
      localStorage.setItem("cedur_user", JSON.stringify(data.user));
      window.dispatchEvent(new Event("cedur_auth_change"));
      // Redirect to home or dashboard after a short delay
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ede7f6] via-[#e6dbf7] to-[#b39ddb] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-10 mx-auto mt-20 sm:mt-28">
        <div className="flex flex-col items-center mb-8">
          <a href="/" className="mb-4 block">
            <img src="/images/cedur.png" alt="Cedur Logo" className="h-14 w-auto mx-auto" />
          </a>
          <h2 className="text-3xl font-extrabold text-black mb-2">Welcome back</h2>
          <p className="text-gray-700 mb-6 text-center">Sign in to your account</p>
        </div>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label className="block text-sm font-medium mb-1 text-black" htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border border-[#e6dbf7] rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#a78bfa] bg-[#f5f3ff] text-black"
            required
          />
          <label className="block text-sm font-medium mb-1 text-black" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full border border-[#e6dbf7] rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#a78bfa] bg-[#f5f3ff] text-black"
            required
          />
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-black">Remember me</span>
            </label>
            <a href="#" className="text-sm text-[#6c47c7] hover:underline">Forgot your password?</a>
          </div>
          {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
          {success && <div className="text-green-600 text-sm mb-2">{success}</div>}
          <button type="submit" className="w-full bg-[#a78bfa] text-white py-2 rounded-md font-bold hover:bg-[#7c5fd4] transition-colors mb-4" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
        <p className="text-center text-gray-700 mt-4">Don&apos;t have an account? <Link to="/signup" className="text-[#6c47c7] font-semibold hover:underline">Sign up now</Link></p>
      </div>
    </div>
  );
};

export default SignInPage;
