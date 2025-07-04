import Footer from "../sections/Footer.jsx";
import Header from "../sections/Header.jsx";

const SupportPage = () => {
  return (
    <>
      <Header />
      <main className="overflow-hidden pt-24 bg-gradient-to-br from-[#4e5d94] via-[#4e5d94]/80 to-[#6c8ae4] min-h-screen">
        <section className="bg-transparent py-16 text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Let&apos;s Talk About Your HR Needs</h1>
            <p className="text-lg md:text-xl mb-2">Ready to streamline your HR and payroll operations? Get in touch with our experts for a personalized demo.</p>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Demo Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#e6dbf7]">
            <h2 className="text-2xl font-bold mb-2 text-black">Schedule Your Free Demo</h2>
            <p className="mb-6 text-gray-700">Fill out the form below and we&apos;ll schedule a personalized demo within 24 hours.</p>
            <form className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1 text-gray-700">Full Name *</label>
                  <input className="w-full rounded-md p-2 bg-[#f5f3ff] text-black border border-[#e6dbf7] focus:outline-none focus:ring-2 focus:ring-[#a78bfa]" placeholder="Your Name" required />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1 text-gray-700">Work Email *</label>
                  <input className="w-full rounded-md p-2 bg-[#f5f3ff] text-black border border-[#e6dbf7] focus:outline-none focus:ring-2 focus:ring-[#a78bfa]" placeholder="you@example.com" type="email" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Company Name *</label>
                <input className="w-full rounded-md p-2 bg-[#f5f3ff] text-black border border-[#e6dbf7] focus:outline-none focus:ring-2 focus:ring-[#a78bfa]" placeholder="Company Name" required />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1 text-gray-700">Number of Employees</label>
                  <select className="w-full rounded-md p-2 bg-[#f5f3ff] text-black border border-[#e6dbf7]">
                    <option>Select company size</option>
                    <option>1-10</option>
                    <option>11-50</option>
                    <option>51-200</option>
                    <option>201-500</option>
                    <option>500+</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1 text-gray-700">Primary Interest</label>
                  <input className="w-full rounded-md p-2 bg-[#f5f3ff] text-black border border-[#e6dbf7]" placeholder="What interests you most?" />
                </div>
              </div>
              <button type="submit" className="w-full bg-[#a78bfa] text-white py-2 rounded-md font-bold hover:bg-[#7c5fd4] transition-colors">Request Demo</button>
            </form>
          </div>
          {/* Contact Info */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#e6dbf7] flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-black">Get in Touch</h2>
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#6c47c7]">📞</span>
                  <span className="text-gray-700 font-semibold">Contact Numbers</span>
                </div>
                <div className="text-gray-700 ml-7">
                  For Help: 011-4345-1244<br />
                  For Sales: +91-85959 21201
                </div>
              </div>
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#6c47c7]">✉️</span>
                  <span className="text-gray-700 font-semibold">Email Support</span>
                </div>
                <div className="text-gray-700 ml-7">
                  info@cedurnow.com<br />
                  <span className="text-xs">24/7 response</span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#6c47c7]">⏰</span>
                  <span className="text-gray-700 font-semibold">Business Hours</span>
                </div>
                <div className="text-gray-700 ml-7">
                  Mon - Fri: 9:00 AM - 6:00 PM IST<br />
                  Sat: 10:00 AM - 2:00 PM IST<br />
                  Sun: Closed
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SupportPage;
