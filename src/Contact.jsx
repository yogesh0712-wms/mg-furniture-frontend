import React, { useState } from "react";
import Header, { Footer } from "./Header";
import ContractingHeroSection from "./Contracting/ContractingHeroSection";
import { LucideLocationEdit, Phone, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(
        "https://mg-furniture-backend.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSuccess("Your message has been sent successfully.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-x-hidden">
      <Header />

      <ContractingHeroSection
        hollowTitle="Contact Us"
        line1="Get In Touch For "
        line2="Your Furniture"
        description="We design and build custom furniture based on your space, needs, and ideas. Share your requirements and we’ll turn them into crafted, functional pieces."
        imageSrc="https://elementorkits.nathatype.com/phapan/wp-content/uploads/sites/32/2022/06/the-interior-has-a-armchair-on-empty-white-wall-ba-2021-09-04-06-48-51-utc_isolated.png"
      />

      {/* FORM SECTION */}
      <div className="mx-auto w-[95%] lg:w-[80%] mt-16 lg:mt-40 flex flex-col lg:flex-row gap-12 lg:gap-32">
        {/* LEFT SIDE IMAGE */}
        <div className="h-[70vh] lg:h-[90vh] w-full lg:w-96 rounded-t-full bg-gradient-to-b from-[#8F9286] via-[#9A9D91] to-[#12140e] relative">
          <img
            src="./image_collection/phone_swirrel_cable.png"
            alt=""
            className="absolute -top-24 lg:-top-40 left-1/2 -translate-x-1/2 lg:translate-x-0"
          />
        </div>

        {/* FORM SIDE */}
        <div className="w-full lg:w-[55%]">
          <p className="text-3xl lg:text-5xl font-bold font-poppins leading-tight">
            Any Question? Just Send Us a Message
          </p>

          <p className="pt-6 lg:pt-10 text-base lg:text-lg leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 mt-8 lg:mt-20">
              <label className="text-lg font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                className="p-4 border border-black rounded w-full"
                required
              />
            </div>

            <div className="flex flex-col gap-4 mt-6">
              <label className="text-lg font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email Address"
                className="p-4 border border-black rounded w-full"
              />
            </div>

            <div className="flex flex-col gap-4 mt-6">
              <label className="text-lg font-medium">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className="p-4 border border-black rounded w-full"
                required
              />
            </div>

            <div className="flex flex-col gap-4 mt-6">
              <label className="text-lg font-medium">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Your Full Address"
                className="p-4 border border-black rounded w-full"
                required
              />
            </div>

            <div className="flex flex-col gap-4 mt-6">
              <label className="text-lg font-medium">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you..."
                className="p-4 border border-black rounded w-full min-h-[120px]"
                required
              />
            </div>

            {success && <p className="text-green-600 mt-4">{success}</p>}
            {error && <p className="text-red-600 mt-4">{error}</p>}

            <div className="mt-8">
              <button
                type="submit"
                disabled={loading}
                className="bg-slate-700 text-white text-lg font-medium rounded-lg w-full lg:w-60 p-3"
              >
                {loading ? "Sending..." : "Send Your Message"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* CONTACT INFO SECTION */}
      <div className="mx-auto w-[95%] lg:w-[80%] mt-16">
        <p className="text-[#686967] text-xl font-bold">
          Our Contact Information
        </p>
        <p className="text-3xl lg:text-4xl font-bold pt-5 text-gray-700">
          Our Quick Support
        </p>
        <p className="w-full lg:w-[55%] pt-5 text-base lg:text-lg leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="mx-auto w-[95%] lg:w-[80%] mt-10 grid grid-cols-1 sm:grid-cols-2 lg:flex gap-6 mb-16">
        {[LucideLocationEdit, Phone, Mail].map((Icon, i) => (
          <div
            key={i}
            className="w-full lg:w-96 h-64 border-8 border-b-16 border-[#9fa296] bg-[#6f706a] p-6 rounded-t-xl"
          >
            <Icon size={40} strokeWidth={2} color="#D6D6B5" />
            <p className="text-xl font-bold text-white pt-5">
              {i === 0
                ? "Our Office Address"
                : i === 1
                  ? "Our Phone Number"
                  : "Our Email Address"}
            </p>
            <p className="pt-4 text-white">Sample content here</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
