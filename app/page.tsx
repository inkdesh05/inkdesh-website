"use client";

const products = [
  { name: "Gothic Design", image: "/design1.jpg" },
  { name: "Streetwear Drop", image: "/design2.jpg" },
  { name: "Anime Print", image: "/design3.jpg" },
];

export default function Home() {

  const orderNow = (name: string) => {
    const message = `Hi InkDesh, I want to order "${name}". I will send the design screenshot.`;

    window.open(
      `https://wa.me/918469705590?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <main className="bg-white min-h-screen text-gray-900">

      {/* ================= NAVBAR ================= */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-200">

        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            className="w-10 h-10 object-contain"
            alt="InkDesh Logo"
          />

          <h1 className="font-bold text-lg text-black">
            INKDESH
          </h1>
        </div>

        <div className="flex gap-6 text-sm font-medium">
          <a
            href="#"
            className="text-gray-800 hover:text-black transition"
          >
            Home
          </a>

          <a
            href="#products"
            className="text-gray-800 hover:text-black transition"
          >
            Products
          </a>

          <a
            href="#contact"
            className="text-gray-800 hover:text-black transition"
          >
            Contact
          </a>
        </div>

      </nav>


      {/* ================= HERO SECTION ================= */}
      <section className="text-center py-12 px-6">

        <img
          src="/logo.png"
          className="mx-auto w-32 mb-4"
          alt="InkDesh Logo"
        />

        <h1 className="text-4xl font-bold tracking-widest text-black">
          INKDESH
        </h1>

        <p className="text-gray-700 mt-2">
          Custom Print-on-Demand T-Shirts (Gujarat Only)
        </p>

        <p className="mt-4 text-lg italic text-gray-800">
          Wear What You Imagine.
        </p>

        <p className="mt-6 text-gray-800">
          📸 Send the picture or screenshot of the T-shirt you want
          and your order will be on the way
        </p>

      </section>


      {/* ================= TRUST SECTION ================= */}
      <section className="text-center mt-2 mb-6 px-6">

        <p className="text-gray-800">
          ✔ Premium Quality Prints
        </p>

        <p className="text-gray-800">
          ✔ Cash on Delivery Available
        </p>

        <p className="text-gray-800">
          ✔ Fast Delivery in Gujarat
        </p>

      </section>


      {/* ================= FEATURED DESIGN ================= */}
      <section className="px-6 py-10 text-center">

        <h2 className="text-2xl font-semibold mb-6 text-black">
          Featured Design
        </h2>

        <div className="max-w-sm mx-auto border border-gray-200 p-4 hover:shadow-xl transition">

          <img
            src="/New Gothic Styled Designs.jpg"
            className="w-full transition duration-300 hover:scale-105"
            alt="New Gothic Styled Designs"
          />

          <h3 className="mt-3 font-semibold text-gray-900">
            New Gothic Styled Designs
          </h3>

          <button
            onClick={() => orderNow("New Gothic Styled Designs")}
            className="mt-3 bg-black text-white px-4 py-2 w-full hover:bg-gray-800 hover:scale-105 transition duration-300"
          >
            Order via WhatsApp
          </button>

        </div>

      </section>


      {/* ================= PRODUCTS ================= */}
      <section
        id="products"
        className="px-6 pb-12"
      >

        <h2 className="text-2xl font-semibold text-center mb-8 text-black">
          Featured Designs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {products.map((product, index) => (

            <div
              key={index}
              className="border border-gray-200 p-4 hover:shadow-xl transition duration-300"
            >

              <img
                src={product.image}
                className="w-full transition duration-300 hover:scale-105"
                alt={product.name}
              />

              <h3 className="mt-3 font-semibold text-gray-900">
                {product.name}
              </h3>

              <button
                onClick={() => orderNow(product.name)}
                className="mt-3 bg-black text-white px-4 py-2 w-full hover:bg-gray-800 hover:scale-105 transition duration-300"
              >
                Order via WhatsApp
              </button>

            </div>

          ))}

        </div>

      </section>


      {/* ================= WHY INKDESH ================= */}
      <section className="text-center py-10 px-6 bg-gray-50 border-y border-gray-200">

        <h2 className="text-2xl font-semibold mb-4 text-black">
          Why InkDesh?
        </h2>

        <p className="max-w-xl mx-auto text-gray-700 leading-relaxed">
          InkDesh lets you wear what you imagine.
          Just send us your design and we print it on
          premium quality T-shirts with cash on delivery
          across Gujarat.
        </p>

      </section>


      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="text-center py-10 border-t border-gray-200"
      >

        <h2 className="text-2xl font-semibold text-black">
          Connect With Us
        </h2>

        <a
          href="https://instagram.com/inkdesh05"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 font-semibold text-gray-900 hover:text-black transition"
        >
          Follow us on Instagram for latest designs →
        </a>

        <a
          href="https://wa.me/918469705590"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-2 text-gray-900 hover:text-black transition"
        >
          WhatsApp Us
        </a>

        <p className="mt-4 text-gray-800">
          Cash on Delivery Available 🚚
        </p>

        <p className="text-gray-600 mt-1">
          Online payment coming soon
        </p>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="text-center py-6 border-t border-gray-200">

        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} InkDesh. All rights reserved.
        </p>

        <p className="text-sm text-gray-500 mt-1">
          Custom Print-on-Demand T-Shirts • Gujarat
        </p>

      </footer>

    </main>
  );
}