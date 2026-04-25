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
      `https://wa.me/9173761796?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <main className="bg-white min-h-screen">

      {/* 🔝 NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-4 border-b">

        <div className="flex items-center gap-2">
          <img src="/logo.png" className="w-10" />
          <h1 className="font-bold text-lg">INKDESH</h1>
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#">Home</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>

      {/* 🧢 HERO SECTION */}
      <section className="text-center py-12 px-6">

        <img src="/logo.png" className="mx-auto w-32 mb-4" />

        <h1 className="text-4xl font-bold tracking-widest">
          INKDESH
        </h1>

        <p className="text-gray-500 mt-2">
          Custom Print-on-Demand T-Shirts (Gujarat Only)
        </p>

        <p className="mt-4 text-lg italic text-gray-700">
          Wear What You Imagine.
        </p>

        <p className="mt-6">
          📸 Send the picture or screenshot of the T-shirt you want and your order will be on the way
        </p>

      </section>

      {/* TRUST SECTION */}
<div className="text-center mt-6 text-gray-600">
  <p>✔ Premium Quality Prints</p>
  <p>✔ Cash on Delivery Available</p>
  <p>✔ Fast Delivery in Gujarat</p>
</div>

      {/* ⭐ FEATURED DESIGN */}
<section className="px-6 py-10 text-center">

  <h2 className="text-2xl font-semibold mb-6">
    Featured Design
  </h2>

  <div className="max-w-sm mx-auto border p-4 hover:shadow-xl transition">

    <img 
  src="/New Gothic Styled Designs.jpg" 
  className="w-full transition duration-300 hover:scale-105"
/>

    <h3 className="mt-3 font-semibold">
      New Gothic Styled Designs
    </h3>

    <button
      onClick={() => orderNow("New Gothic Styled Designs")}
      className="mt-3 bg-black text-white px-4 py-2 w-full hover:bg-gray-800 transition"
    >
      Order via WhatsApp
    </button>

  </div>

</section>  

      {/* 🛍️ PRODUCTS */}
      <section id="products" className="px-6 pb-12">

        <h2 className="text-2xl font-semibold text-center mb-8">
          Featured Designs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {products.map((product, index) => (
            <div
              key={index}
              className="border p-4 hover:shadow-xl transition duration-300"
            >

              <img 
  src={product.image} 
  className="w-full transition duration-300 hover:scale-105"
/>

              <h3 className="mt-3 font-semibold">{product.name}</h3>

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

      {/* WHY INKDESH */}
<section className="text-center py-10 px-6 bg-gray-50">

  <h2 className="text-2xl font-semibold mb-4">
    Why InkDesh?
  </h2>

  <p className="max-w-xl mx-auto text-gray-600">
    InkDesh lets you wear what you imagine. Just send us your design and we print it on premium quality t-shirts with cash on delivery across Gujarat.
  </p>

</section>

      {/* 📞 CONTACT */}
      <section id="contact" className="text-center py-10 border-t">

        <h2 className="text-2xl font-semibold">Connect With Us</h2>

        <a
          href="https://instagram.com/manansinh32"
          target="_blank"
          className="block mt-4 font-semibold"
        >
          Follow us on Instagram for latest designs →
        </a>

        <a
          href="https://wa.me/9173761796"
          target="_blank"
          className="block mt-2"
        >
          WhatsApp Us
        </a>

        <p className="mt-4">Cash on Delivery Available 🚚</p>
        <p className="text-gray-400">Online payment coming soon</p>

      </section>

    </main>
  );
}