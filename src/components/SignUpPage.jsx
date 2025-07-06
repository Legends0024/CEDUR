import { useState } from "react";
import { Link } from "react-router-dom";


const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    numEmployees: "",
    companyPhone: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          companyName: form.companyName,
          numEmployees: form.numEmployees,
          companyPhone: form.companyPhone,
          password: form.password,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Sign up failed");
      setSuccess("Account created! You can now sign in.");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        numEmployees: "",
        companyPhone: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ede7f6] via-[#e6dbf7] to-[#b39ddb] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 sm:p-10 mx-auto mt-20 sm:mt-28">
        <div className="flex flex-col items-center mb-8">
          <Link to="/" className="mb-4 block">
            <img src="/images/cedur.png" alt="Cedur Logo" className="h-14 w-auto mx-auto" />
          </Link>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-black mb-2 text-center">Create your free account on CEDUR</h2>
          <p className="text-gray-700 mb-6 text-center text-base sm:text-lg">Get unlimited access and don&apos;t pay a cent until you run payroll.</p>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Google button can be removed if not needed */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-4 text-gray-400 text-sm">or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-black" htmlFor="firstName">First name</label>
              <input id="firstName" value={form.firstName} onChange={handleChange} className="w-full border border-[#e6dbf7] rounded-md p-2 bg-[#f5f3ff] text-black" placeholder="First name" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-black" htmlFor="lastName">Last name</label>
              <input id="lastName" value={form.lastName} onChange={handleChange} className="w-full border border-[#e6dbf7] rounded-md p-2 bg-[#f5f3ff] text-black" placeholder="Last name" required />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1 text-black" htmlFor="email">Work email</label>
            <input id="email" type="email" value={form.email} onChange={handleChange} className="w-full border border-[#e6dbf7] rounded-md p-2 bg-[#f5f3ff] text-black" placeholder="Work email" required />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1 text-black" htmlFor="companyName">Company name</label>
            <input id="companyName" value={form.companyName} onChange={handleChange} className="w-full border border-[#e6dbf7] rounded-md p-2 bg-[#f5f3ff] text-black" placeholder="Company name" required />
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-black" htmlFor="numEmployees">No. of employees</label>
              <input id="numEmployees" value={form.numEmployees} onChange={handleChange} className="w-full border border-[#e6dbf7] rounded-md p-2 bg-[#f5f3ff] text-black" placeholder="No. of employees" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-black" htmlFor="companyPhone">Company phone</label>
              <input id="companyPhone" value={form.companyPhone} onChange={handleChange} className="w-full border border-[#e6dbf7] rounded-md p-2 bg-[#f5f3ff] text-black" placeholder="Company phone" required />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1 text-black" htmlFor="password">Create password</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={handleChange}
                className="w-full border border-[#e6dbf7] rounded-md p-2 bg-[#f5f3ff] text-black pr-12"
                placeholder="Create password"
                required
              />
              <button type="button" className="absolute right-2 top-2 text-xs text-[#6c47c7] font-semibold" onClick={() => setShowPassword(v => !v)}>
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <ul className="text-xs text-gray-500 mt-2 ml-1 list-disc list-inside">
              <li>Use 8 or more characters.</li>
              <li>Use a minimum of one letter.</li>
              <li>Use a minimum of one number.</li>
            </ul>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1 text-black" htmlFor="confirmPassword">Confirm password</label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirm ? "text" : "password"}
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full border border-[#e6dbf7] rounded-md p-2 bg-[#f5f3ff] text-black pr-12"
                placeholder="Confirm password"
                required
              />
              <button type="button" className="absolute right-2 top-2 text-xs text-[#6c47c7] font-semibold" onClick={() => setShowConfirm(v => !v)}>
                {showConfirm ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          {error && <div className="text-red-600 text-sm mt-2">{error}</div>}
          {success && <div className="text-green-600 text-sm mt-2">{success}</div>}
          <button type="submit" className="w-full mt-6 bg-[#a78bfa] text-white py-2 rounded-md font-bold hover:bg-[#7c5fd4] transition-colors" disabled={loading}>
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
