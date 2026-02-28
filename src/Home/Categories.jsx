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
            <h1 className="font-serif text-3xl lg:text-4xl font-extralight">
              #1 Choice for High Quality Furniture
            </h1>

            <div className="mt-5 relative">
              <img
                src="https://web.sociolib.com/cabinet/wp-content/uploads/sites/6/2023/01/c8.png"
                className="hidden lg:block h-56 absolute -ml-24 mt-36"
                alt=""
              />

              <div className="flex flex-wrap lg:flex-nowrap">
                <img
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
              We create furniture only after understanding your space, usage,
              and requirements.
            </p>

            <p className="leading-7 text-base lg:text-lg pt-5 font-poppins">
              Each project starts with detailed planning and measurements.
            </p>

            <p className="leading-7 text-base lg:text-lg pt-5 font-poppins">
              Furniture that fits properly and lasts longer.
            </p>

            <div className="pt-6 lg:pt-10">
              <a
                href="/about-us"
                className="font-serif text-lg lg:text-xl mr-5"
              >
                ABOUT US
              </a>
              <a href="/shop" className="font-serif text-lg lg:text-xl">
                SHOP NOW
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
            <h1 className="font-serif text-3xl lg:text-4xl font-extralight">
              #1 Complete Home Repair & Installation Services
            </h1>

            <div className="mt-5 relative">
              <img
                src="https://web.sociolib.com/cabinet/wp-content/uploads/sites/6/2023/01/c8.png"
                className="hidden lg:block h-56 absolute -ml-24 mt-36"
                alt=""
              />

              <div className="flex flex-wrap lg:flex-nowrap">
                <img
                  src={home_image2}
                  alt="Kitchen cabinet installation work in Jaipur home by MG Furniture"
                  className="w-full lg:w-auto h-96 lg:h-96 z-10"
                />
                <img
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
              Reliable on-demand home repair and installation services.
            </p>

            <p className="leading-7 text-base lg:text-lg pt-5 font-poppins">
              End-to-end execution with trained professionals.
            </p>

            <p className="leading-7 text-base lg:text-lg pt-5 font-poppins">
              Consistent and dependable outcomes.
            </p>

            <div className="pt-6 lg:pt-10">
              <a
                href="/contact-us"
                className="font-serif text-lg lg:text-xl mr-5"
              >
                CONTACT US
              </a>
              <a href="/services" className="font-serif text-lg lg:text-xl">
                SERVICES
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
            <h1 className="font-serif text-3xl lg:text-4xl font-extralight">
              #1 Contract-Based Furniture Projects
            </h1>

            <div className="mt-5 relative">
              <img
                src="https://web.sociolib.com/cabinet/wp-content/uploads/sites/6/2023/01/c8.png"
                className="hidden lg:block h-56 absolute -ml-24 mt-36"
                alt=""
              />

              <div className="flex flex-wrap lg:flex-nowrap">
                <img
                  src={home_image3}
                  className="w-full lg:w-auto h-96 lg:h-80 relative z-10"
                  alt="Custom LED backlit wall panel and floating shelves installation in Jaipur home"
                />
                <img
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
              Complete home, office, and large-scale furnishing projects.
            </p>

            <p className="leading-7 text-base lg:text-lg pt-5 font-poppins">
              Single-team execution from planning to installation.
            </p>

            <p className="leading-7 text-base lg:text-lg pt-5 font-poppins">
              Predictable timelines and reliable outcomes.
            </p>

            <div className="pt-6 lg:pt-10">
              <a href="/about" className="font-serif text-lg lg:text-xl mr-5">
                ABOUT US
              </a>
              <a href="/contracting" className="font-serif text-lg lg:text-xl">
                CONTRACTING
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

      <div className="pt-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {divItems.map((item, index) => (
          <div key={index} className="relative h-[360px] lg:h-[61vh] mb-6">
            <img
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
