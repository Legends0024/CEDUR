
const featuresData = [
  {
    title: "Seamless 2-Step On-Boarding, Optimised for Speed & Simplicity",
    text: "With Cedur, it only takes a few minutes to on-board your employees. No lengthy forms with irrelevant details, just what you need to get the job done. Process so simple even a child can do it. Specify how much your employees earn just once, it's a set and forget system.",
    image: "/images/detail-1.png",
  },
  {
    title: "Be thorough with Attendance that Never Leaves Room for Doubt",
    text: "When you mark attendance with Cedur, you can rest assured that no employee falls between cracks. You can mark manually for every employee every day or make bulk attendance uploads with our import tool.",
    image: "/images/detail-2.png",
  },
  {
    title: "Leave Management for Robust HR Policy",
    text: "With Leave Management your organization can have a robust HR policy that makes both your and your employee's lives easier.",
    image: "/images/detail-3.png",
  },
  {
    title: "Run Automatic Payroll with Just 1 Click",
    text: "Our Payroll feature helps you know how much you have to pay your employees and the taxman, making sure you have no run-ins with the good people of the Tax Department. Cedur automatically calculates your payroll leaving you with usable action data you can rely on.",
    image: "/images/detail-4.png",
  },
  {
    title: "Generated Payslips for When Documents Matter",
    text: "Cedur generates monthly Payslips and action data that help both you and your employees keep record and proof of prior transactions, so you don't have to scramble for excel sheets when the tax season arrives.",
    image: "/images/detail-5.png",
  },
];

const Features = () => {
  return (
    <section className="bg-[#ede7f6] py-16">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">Features That Make Cedur Stand Out</h2>
        <div className="space-y-20">
          {featuresData.map((feature, idx) => (
            <div
              key={feature.title}
              className={`flex flex-col-reverse md:flex-row items-center md:justify-between gap-10 md:gap-20 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="md:w-1/2 w-full">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full max-w-md mx-auto rounded-2xl shadow-xl border border-[#e6dbf7] bg-white"
                  style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)' }}
                />
              </div>
              <div className="md:w-1/2 w-full text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-[#6c47c7] mb-4">{feature.title}</h3>
                <p className="text-lg text-gray-800 mb-4">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
