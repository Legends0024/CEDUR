

const SignInPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ede7f6] via-[#e6dbf7] to-[#b39ddb] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-10 mx-auto">
        <div className="flex flex-col items-center mb-8">
          <a href="/" className="mb-4 block">
            <img src="/images/cedur.png" alt="Cedur Logo" className="h-12 mx-auto" />
          </a>
          <h2 className="text-3xl font-extrabold text-black mb-2">Welcome back</h2>
          <p className="text-gray-700 mb-6">Sign in to your account</p>
        </div>
        <form>
          <label className="block text-sm font-medium mb-1 text-black" htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full border border-[#e6dbf7] rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#a78bfa] bg-[#f5f3ff] text-black"
          />
          <label className="block text-sm font-medium mb-1 text-black" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full border border-[#e6dbf7] rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#a78bfa] bg-[#f5f3ff] text-black"
          />
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-black">Remember me</span>
            </label>
            <a href="#" className="text-sm text-[#6c47c7] hover:underline">Forgot your password?</a>
          </div>
          <button type="submit" className="w-full bg-[#a78bfa] text-white py-2 rounded-md font-bold hover:bg-[#7c5fd4] transition-colors mb-4">
            Sign in
          </button>
        </form>
        <p className="text-center text-gray-700 mt-4">Don&apos;t have an account? <a href="#" className="text-[#6c47c7] font-semibold hover:underline">Sign up now</a></p>
      </div>
    </div>
  );
};

export default SignInPage;
