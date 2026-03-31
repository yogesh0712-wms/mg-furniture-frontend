import home_image from "../assets/images/home/home_image.webp";
import home_image3 from "../assets/images/home/home_image3.webp";
import home_image2 from "../assets/images/home/home_image2.webp";
import project1 from "../assets/images/home/1111.webp";
import project2 from "../assets/images/home/1122.webp";
import project3 from "../assets/images/home/11222.webp";
import project4 from "../assets/images/home/112233.webp";

const Categories = () => {
  return (
    <div>
      {/* ================= SECTION 1 ================= */}
      <section className="bg-white w-full font-inter h-auto lg:h-[85vh]">
        <div className="w-[90%] mx-auto py-10 lg:w-[75%] lg:py-20 lg:flex lg:gap-28">
          {/* IMAGE */}
          <div className="lg:w-2/4">
            <h2 className="font-serif text-3xl lg:text-4xl font-extralight">
              #1 Custom Furniture in Jaipur, Made for Your Space
            </h2>

            <div className="mt-5 relative">
              <img
                loading="lazy"
                width="662"
                height="441"
                src="https://web.sociolib.com/cabinet/wp-content/uploads/sites/6/2023/01/c8.png"
                className="hidden lg:block h-56 absolute -ml-24 mt-36"
                alt=""
              />

              <div className="flex flex-wrap lg:flex-nowrap">
                <img
                  loading="lazy"
                  width="662"
                  height="441"
                  src={home_image}
                  className="w-full lg:w-auto h-64 lg:h-80 relative z-10"
                  alt="wooden furniture jaipur custom furniture jaipur best furniture jaipur mg furniture"
                />
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className="lg:w-2/4 mt-8 lg:mt-0">
            <p className="leading-7 text-base lg:text-lg font-poppins">
              We design and build custom furniture based on your space, your
              needs, and your budget. Every piece is planned after understanding
              how you use your home, so the final result fits perfectly—not just
              in size, but in purpose.
            </p>

            <p className="leading-7 text-base lg:text-lg pt-5 font-poppins">
              From handcrafted solid wood furniture to modern wood furniture
              designs, we focus on quality, durability, and clean finishing.
              Whether it’s a single piece or a complete setup, everything is
              made on order with attention to detail.
            </p>

            <p className="leading-7 text-base lg:text-lg pt-5 font-poppins">
              Our goal is simple—deliver the best quality wood furniture in
              Jaipur that looks right, feels right, and lasts for years.
            </p>

            <div className="pt-6 flex gap-6 items-center lg:pt-10">
              <a
                href="https://wa.me/919782545485"
                class="font-inter relative inline-flex items-center gap-2 px-4 py-4 bg-[#a7a8a3] text-black font-bold text-sm tracking-wider rounded-full overflow-hidden active:scale-95 transition-transform duration-150"
              >
                <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full active:translate-x-full transition-transform duration-500 pointer-events-none"></span>
                Get Custom Quote
              </a>
              <a href="/shop" className="font-serif text-lg lg:text-xl">
                <u>SHOP NOW</u>
              </a>
            </div>
          </div>
        </div>
        <hr />
      </section>

      {/* ================= SECTION 2 ================= */}
      <section className="bg-white w-full font-inter h-auto lg:h-[85vh]">
        <div className="w-[90%] mx-auto py-10 lg:w-[75%] lg:flex lg:gap-28">
          {/* IMAGE */}
          <div className="lg:w-2/4">
            <h2 className="font-serif text-3xl lg:text-4xl font-extralight">
              #1 Complete Furniture Services in Jaipur, When You Need Them
            </h2>

            <div className="mt-5 relative">
              <img
                loading="lazy"
                width="662"
                height="441"
                src="https://web.sociolib.com/cabinet/wp-content/uploads/sites/6/2023/01/c8.png"
                className="hidden lg:block h-56 absolute -ml-24 mt-36"
                alt=""
              />

              <div className="flex flex-wrap lg:flex-nowrap">
                <img
                  loading="lazy"
                  width="662"
                  height="441"
                  src={home_image2}
                  alt="Kitchen cabinet installation work in Jaipur home by MG Furniture"
                  className="w-full lg:w-auto h-96 lg:h-96 z-10"
                />
                <img
                  loading="lazy"
                  width="662"
                  height="441"
                  src="https://web.sociolib.com/cabinet/wp-content/uploads/sites/6/2023/01/25.jpg"
                  className="hidden lg:block h-48 lg:mt-32"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className="lg:w-2/4 mt-8 lg:mt-0">
            <p className="leading-7 text-base lg:text-lg font-poppins">
              We provide reliable, on-demand furniture services across Jaipur
              for homes and offices. Whether you need quick repairs,
              professional installation, or regular servicing, our team ensures
              the work is done properly and on time.
            </p>

            <p className="leading-7 text-base lg:text-lg pt-5 font-poppins">
              From fixing damaged furniture to installing new setups, we handle
              everything with care and precision. If you’re searching for
              furniture installation services near me, you can count on us for
              fast response and dependable results.
            </p>

            <p className="leading-7 text-base lg:text-lg pt-5 font-poppins">
              Consistent and dependable outcomes.
            </p>

            <div className="pt-6 flex gap-6 items-center lg:pt-10">
              <a
                href="https://wa.me/919782545485"
                class="font-inter relative inline-flex items-center gap-2 px-4 py-4 bg-[#a7a8a3] text-black font-bold text-sm tracking-wider rounded-full overflow-hidden active:scale-95 transition-transform duration-150"
              >
                <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full active:translate-x-full transition-transform duration-500 pointer-events-none"></span>
                Book Service Now
              </a>
              <a href="/services" className="font-serif text-xl lg:text-xl">
                <u>SERVICES</u>
              </a>
            </div>
          </div>
        </div>
        <hr className="lg:mt-10" />
      </section>

      {/* ================= SECTION 3 ================= */}
      <section className="bg-white w-full font-inter h-auto lg:h-[85vh] lg:-mt-14">
        <div className="w-[90%] mx-auto py-10 lg:w-[75%] lg:flex lg:gap-28">
          {/* IMAGE */}
          <div className="lg:w-2/4">
            <h2 className="font-serif text-3xl lg:text-4xl font-extralight">
              #1 Complete Home & Office Furnishing Services in Jaipur
            </h2>

            <div className="mt-5 relative">
              <img
                loading="lazy"
                width="662"
                height="441"
                src="https://web.sociolib.com/cabinet/wp-content/uploads/sites/6/2023/01/c8.png"
                className="hidden lg:block h-56 absolute -ml-24 mt-36"
                alt=""
              />

              <div className="flex flex-wrap lg:flex-nowrap">
                <img
                  loading="lazy"
                  width="662"
                  height="441"
                  src={home_image3}
                  className="w-full lg:w-auto h-96 lg:h-80 relative z-10"
                  alt="Custom LED backlit wall panel and floating shelves installation in Jaipur home"
                />
                <img
                  loading="lazy"
                  width="662"
                  height="441"
                  src="https://web.sociolib.com/cabinet/wp-content/uploads/sites/6/2023/01/25.jpg"
                  className="hidden lg:block h-48 lg:mt-32"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className="lg:w-2/4 mt-8 lg:mt-0">
            <p className="leading-7 text-base lg:text-lg font-poppins">
              We handle complete home furnishing and office furnishing projects
              across Jaipur, from planning and design to final installation.
              Whether you're setting up a new home, upgrading your workspace, or
              furnishing an entire property, we deliver quality home furnishing
              tailored to your space and budget.
            </p>

            <p className="leading-7 text-base lg:text-lg pt-5 font-poppins">
              Our team creates complete home furniture setups, including
              bedrooms, living areas, kitchens, and storage solutions. For
              businesses, we design and build office furniture custom to your
              layout and workflow.
            </p>

            <p className="leading-7 text-base lg:text-lg pt-5 font-poppins">
              We also provide furniture sets for marriage and banquet furniture,
              crafted with attention to detail and durability—perfect for
              gifting or large-scale use.
            </p>

            <div className="pt-6 flex gap-4  items-center lg:pt-10">
              <a
                href="https://wa.me/919782545485"
                class="font-inter relative inline-flex items-center gap-2 px-4 py-4 bg-[#a7a8a3] text-black font-bold text-sm tracking-wider rounded-full overflow-hidden active:scale-95 transition-transform duration-150"
              >
                <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full active:translate-x-full transition-transform duration-500 pointer-events-none"></span>
                Discuss Your Project
              </a>

              <a href="/contracting" className="font-serif text-xl lg:text-xl">
                <u> CONTRACTING</u>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const divItems = [
  {
    image: project1,
    itemType: "Modern TV Units",
    productNO: "120+ Projects",
    alt: "installation by MG Furniture Jaipur",
  },
  {
    image: project2,
    itemType: "Custom Bedrooms",
    productNO: "85+ Projects",
    alt: "installation by MG Furniture Jaipur",
  },
  {
    image: project3,
    itemType: "Pooja Units",
    productNO: "60+ Projects",
    alt: "installation by MG Furniture Jaipur",
  },
  {
    image: project4,
    itemType: "False Ceilings",
    productNO: "150+ Installations",
    alt: "installation by MG Furniture Jaipur",
  },
];

const Collections = () => {
  return (
    <section className="bg-[#EAEAC9] h-auto lg:h-[100vh]">
      <div className="text-center px-4">
        <p className="text-3xl lg:text-5xl font-serif font-extralight pt-20 lg:pt-28">
          Furniture for Real Spaces
        </p>
        <p className="text-base lg:text-lg pt-5">
          Furniture and service solutions crafted for homes, offices, and large
          projects.
        </p>
      </div>

      <div className="pt-10 px-4 mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {divItems.map((item, index) => (
          <div key={index} className="relative h-[360px] lg:h-[61vh] ">
            <img
              loading="lazy"
              width="662"
              height="441"
              src={item.image}
              alt={item.alt}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="relative z-10 p-6 text-white">
              <h1 className="font-serif text-xl lg:text-2xl">
                {item.itemType}
              </h1>
              <p className="text-base lg:text-lg">{item.productNO}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Collections };
export default Categories;
