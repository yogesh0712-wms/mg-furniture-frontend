import React from "react";
import Header, { Footer } from "./Header";
import ContractingHeroSection from "./Contracting/ContractingHeroSection";
import { useState } from "react";
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
          headers: {
            "Content-Type": "application/json",
          },
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
    <div>
      <Header />
      <ContractingHeroSection
        hollowTitle="Contact Us"
        line1="Get In Touch For "
        line2="Your Furniture"
        description="We design and build custom furniture based on your space, needs, and ideas. Share your requirements and we’ll turn them into crafted, functional pieces."
        imageSrc="https://elementorkits.nathatype.com/phapan/wp-content/uploads/sites/32/2022/06/the-interior-has-a-armchair-on-empty-white-wall-ba-2021-09-04-06-48-51-utc_isolated.png"
      />
      <div className="mx-auto w-[90%] lg:w-[80%] mt-20 lg:mt-40 flex gap-20 lg:gap-32">
        <div className="h-[80vh] lg:h-[90vh] w-96 rounded-t-full bg-gradient-to-b from-[#8F9286] via-[#9A9D91] to-[#12140e] relative ">
          <img
            src="./image_collection/phone_swirrel_cable.png"
            alt=""
            className="absolute -top-[87px] lg:-top-40 pl-10 lg:pl-24"
          />
        </div>
        <div className="w-[55%]">
          <p className="text-4xl lg:text-5xl font-bold font-poppins leading-loose">
            Any Question? Just Send Us a Message
          </p>
          <p className="pt-10 text-lg leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco .
          </p>
          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="flex flex-col gap-5  mt-10 lg:mt-20">
              <label className="text-lg font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                className="p-5 border border-black rounded"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-5 mt-5 lg:mt-10">
              <label className="text-lg font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email Address"
                className="p-5 border border-black rounded"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-5 mt-5 lg:mt-10">
              <label className="text-lg font-medium">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className="p-5 border border-black rounded"
                required
              />
            </div>

            {/* Address */}
            <div className="flex flex-col gap-5 mt-5 lg:mt-10">
              <label className="text-lg font-medium">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Your Full Address"
                className="p-5 border border-black rounded"
                required
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-5 mt-5 lg:mt-10">
              <label className="text-lg font-medium">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you..."
                className="p-2 pb-10 lg:pb-20 border border-black rounded"
                required
              />
            </div>

            {/* Feedback */}
            {success && <p className="text-green-600 mt-4">{success}</p>}
            {error && <p className="text-red-600 mt-4">{error}</p>}

            {/* Submit */}
            <div className="mt-10">
              <button
                type="submit"
                disabled={loading}
                className="bg-slate-700 text-white text-lg font-medium rounded-lg w-60 p-3"
              >
                {loading ? "Sending..." : "Send Your Message"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mx-auto w-[95%] lg:w-[80%] mt-20">
        <p className="text-[#686967] text-xl font-bold">
          Our Contact Information
        </p>
        <p className="text-4xl font-bold pt-5 text-gray-700">
          Our Quick Support
        </p>
        <p className="w-[55%] pt-5 text-lg leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco .
        </p>
      </div>
      <div className="mx-auto w-[95%] lg:w-[80%] mt-14 flex gap-3 lg:gap-5 mb-10">
        <div className="w-96 h-64  border-12 border-b-16 border-[#9fa296] bg-[#6f706a] p-4 lg:p-6 rounded-t-xl ">
          <LucideLocationEdit size={50} strokeWidth={2} color="#D6D6B5" />
          <p className="text-xl font-bold text-white pt-5">
            Our Office Address
          </p>
          <p className="pt-3 lg:pt-5 text-white ">
            Shining Diamond Street 255, IDN The Sun Street 275, IDN
          </p>
        </div>

        <div className="w-96 h-64  border-12 border-b-16 border-[#9fa296] bg-[#6f706a] p-4 lg:p-6 rounded-t-xl ">
          <Phone size={50} strokeWidth={2} color="#D6D6B5" />
          <p className="text-xl font-bold text-white pt-5">Our Phone Number</p>
          <p className="pt-3 lg:pt-5 text-white ">
            62 123456-78-90 <br />
            +12 123456-78-90
          </p>
        </div>

        <div className="w-96 h-64  border-12 border-b-16 border-[#9fa296] bg-[#6f706a] p-4 lg:p-6 rounded-t-xl ">
          <Mail size={50} strokeWidth={2} color="#D6D6B5" />

          <p className="text-xl font-bold text-white pt-5">Our Email Address</p>
          <p className="pt-3 lg:pt-5 text-white ">
            phapanfurnitur @email.com phapan.marketing @email.com
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
