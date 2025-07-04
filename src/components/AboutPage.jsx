

const AboutPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#ede7f6]">
      {/* Top Gradient Section */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-br from-[#4e5d94] via-[#4e5d94]/80 to-[#6c8ae4] text-white text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">About Cedur</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto">
          We&apos;re on a mission to revolutionize HR management by making it simple, intelligent, and accessible for businesses of all sizes.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 bg-white rounded-2xl shadow-xl -mt-16 mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-black">Our Story</h2>
        <p className="text-lg md:text-xl text-gray-800 text-center">
          Founded with the vision of simplifying complex HR processes, Cedur emerged from the recognition that businesses spend too much time on administrative tasks instead of focusing on their people and growth. Our team of experienced developers and HR professionals came together to create a platform that automates the mundane while empowering the meaningful.
        </p>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black">Our Motto: Outthink, Outwork, Outlast</h2>
        <p className="text-xl text-center mb-12 text-gray-700">We are driven by our values–</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-2">🏪</span>
            <h3 className="font-semibold text-lg mb-1 text-black">Championing Small Businesses</h3>
            <p className="text-center text-gray-700">Small businesses are the heartbeat of India&apos;s economy, and we exist to empower them.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-2">🤝</span>
            <h3 className="font-semibold text-lg mb-1 text-black">Service Above Self</h3>
            <p className="text-center text-gray-700">We put our customers first, always striving to deliver with a service mindset.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-2">📈</span>
            <h3 className="font-semibold text-lg mb-1 text-black">Relentless Ambition</h3>
            <p className="text-center text-gray-700">We dream big, set bold goals, and work tirelessly to turn them into reality.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-2">❤️</span>
            <h3 className="font-semibold text-lg mb-1 text-black">Humble Growth</h3>
            <p className="text-center text-gray-700">We celebrate collective wins and value humility over individual accolades.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-2">💸</span>
            <h3 className="font-semibold text-lg mb-1 text-black">Mastery in Action</h3>
            <p className="text-center text-gray-700">We take pride in our expertise and are committed to continuous learning.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-2">🧑‍🤝‍🧑</span>
            <h3 className="font-semibold text-lg mb-1 text-black">Forging Greatness Together</h3>
            <p className="text-center text-gray-700">We trust the process, support each other, and scale new heights as a team.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
