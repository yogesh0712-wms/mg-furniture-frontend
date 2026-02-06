import { useState } from "react";

const FAQSection = ({ title, faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-3/4 mx-auto py-20">
      {title && (
        <h2 className="text-4xl font-serif mb-12 text-center">{title}</h2>
      )}

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-6 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <p className="text-xl font-medium">{faq.question}</p>
              <span className="text-3xl font-light">
                {openIndex === index ? "–" : "+"}
              </span>
            </div>

            {openIndex === index && (
              <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
