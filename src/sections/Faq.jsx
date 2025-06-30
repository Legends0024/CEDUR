
import { useState } from "react";
import { faq } from "../constants/data.js";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="bg-[#ede7f6] min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-black mb-4 text-gray-900 text-center">FAQ</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8 text-center">
          You've got questions, we've got answers.
        </p>
        <ul className="space-y-6">
          {faq.map((item, idx) => (
            <li key={item.id} className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900 text-lg">{item.question}</span>
                <button
                  className="ml-4 px-4 py-2 bg-purple-700 text-white rounded-md font-bold hover:bg-purple-900 transition-colors"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  {openIndex === idx ? "Hide Answer" : "Show Answer"}
                </button>
              </div>
              {openIndex === idx && (
                <p className="mt-4 text-gray-700 border-t pt-4">{item.answer}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
