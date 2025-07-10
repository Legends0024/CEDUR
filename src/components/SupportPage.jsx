import Footer from "../sections/Footer.jsx";
import Header from "../sections/Header.jsx";
import { useState } from "react";

const SupportPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      let data = {};
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await res.json();
      }
      if (!res.ok) {
        // If backend returns no JSON, show generic error
        throw new Error(data && data.message ? data.message : `Error: ${res.status} ${res.statusText}`);
      }
      setStatus(data && data.message ? data.message : "Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus(err.message);
    } finally {
      setLoading(false);
    }
  };

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
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#e6dbf7]">
            <h2 className="text-2xl font-bold mb-2 text-black">Contact Us</h2>
            <p className="mb-6 text-gray-700">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Full Name *</label>
                <input name="name" value={form.name} onChange={handleChange} className="w-full rounded-md p-2 bg-[#f5f3ff] text-black border border-[#e6dbf7] focus:outline-none focus:ring-2 focus:ring-[#a78bfa]" placeholder="Your Name" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Email *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full rounded-md p-2 bg-[#f5f3ff] text-black border border-[#e6dbf7] focus:outline-none focus:ring-2 focus:ring-[#a78bfa]" placeholder="you@example.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Message *</label>
                <textarea name="message" value={form.message} onChange={handleChange} className="w-full rounded-md p-2 bg-[#f5f3ff] text-black border border-[#e6dbf7] focus:outline-none focus:ring-2 focus:ring-[#a78bfa]" placeholder="How can we help you?" rows={4} required />
              </div>
              <button type="submit" className="w-full bg-[#a78bfa] text-white py-2 rounded-md font-bold hover:bg-[#7c5fd4] transition-colors" disabled={loading}>{loading ? "Sending..." : "Send Message"}</button>
              {status && <div className="mt-2 text-center text-sm text-black">{status}</div>}
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
