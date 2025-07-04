
import { faq } from "../constants/data.js";

const Faq = () => {
  return (
    <section className="bg-[#ede7f6] min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-black mb-4 text-gray-900 text-center">FAQ</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8 text-center">
          You&apos;ve got questions, we&apos;ve got answers.
        </p>
        <ul className="space-y-6">
          {faq.map((item) => (
            <li key={item.id} className="bg-white rounded-2xl shadow-lg p-6">
              <div className="font-semibold text-gray-900 text-lg mb-2">{item.question}</div>
              <div className="text-gray-700">{item.answer}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
