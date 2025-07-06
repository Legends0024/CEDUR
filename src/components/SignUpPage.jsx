import { useState } from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

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
        <form>
          <button type="button" className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 mb-4 font-semibold text-gray-700 hover:bg-gray-50">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" className="w-5 h-5" alt="Google" />
            Sign up with Google
          </button>
          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-4 text-gray-400 text-sm">or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-black" htmlFor="firstName">First name</label>
              <input id="firstName" className="w-full border border-[#e6dbf7] rounded-md p-2 bg-[#f5f3ff] text-black" placeholder="First name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-black" htmlFor="lastName">Last name</label>
              <input id="lastName" className="w-full border border-[#e6dbf7] rounded-md p-2 bg-[#f5f3ff] text-black" placeholder="Last name" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1 text-black" htmlFor="email">Work email</label>
            <input id="email" type="email" className="w-full border border-[#e6dbf7] rounded-md p-2 bg-[#f5f3ff] text-black" placeholder="Work email" />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1 text-black" htmlFor="companyName">Company name</label>
            <input id="companyName" className="w-full border border-[#e6dbf7] rounded-md p-2 bg-[#f5f3ff] text-black" placeholder="Company name" />
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-black" htmlFor="numEmployees">No. of employees</label>
              <input id="numEmployees" className="w-full border border-[#e6dbf7] rounded-md p-2 bg-[#f5f3ff] text-black" placeholder="No. of employees" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-black" htmlFor="companyPhone">Company phone</label>
              <input id="companyPhone" className="w-full border border-[#e6dbf7] rounded-md p-2 bg-[#f5f3ff] text-black" placeholder="Company phone" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1 text-black" htmlFor="password">Create password</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="w-full border border-[#e6dbf7] rounded-md p-2 bg-[#f5f3ff] text-black pr-12"
                placeholder="Create password"
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
                className="w-full border border-[#e6dbf7] rounded-md p-2 bg-[#f5f3ff] text-black pr-12"
                placeholder="Confirm password"
              />
              <button type="button" className="absolute right-2 top-2 text-xs text-[#6c47c7] font-semibold" onClick={() => setShowConfirm(v => !v)}>
                {showConfirm ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <button type="submit" className="w-full mt-6 bg-[#a78bfa] text-white py-2 rounded-md font-bold hover:bg-[#7c5fd4] transition-colors">
            Create account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
