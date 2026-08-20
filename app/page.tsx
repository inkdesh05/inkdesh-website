"use client";

import { siteConfig } from "@/lib/site";

const products = [
  { name: "Gothic Design", image: "/design1.jpg" },
  { name: "Streetwear Drop", image: "/design2.jpg" },
  { name: "Anime Print", image: "/design3.jpg" },
];

export default function Home() {

  const orderNow = (name: string) => {
  const message = `Hi ${siteConfig.name}, I want to order "${name}". I will send the design screenshot.`;

  window.open(
    `${siteConfig.whatsappBaseUrl}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};

  return (
    <main className="bg-white min-h-screen text-gray-900">

      {/* 🔝 PREMIUM NAVBAR */}
<nav className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f7f5]/90 backdrop-blur-md">

  <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

    {/* BRAND */}
    <a
      href="#"
      className="flex items-center gap-3 group"
    >
      <img
        src="/logo.png"
        alt="InkDesh Logo"
        className="w-9 h-9 object-contain"
      />

      <div>
        <div className="text-lg font-bold tracking-[0.25em]">
          {siteConfig.name}
        </div>

        <div className="text-[8px] tracking-[0.3em] text-black/50">
          {siteConfig.tagline}
        </div>
      </div>
    </a>


    {/* NAVIGATION */}
    <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-[0.15em] uppercase">

      <a
        href="#"
        className="hover:text-black/50"
      >
        Home
      </a>

      <a
        href="#products"
        className="hover:text-black/50"
      >
        Shop
      </a>

      <a
        href="#custom"
        className="hover:text-black/50"
      >
        Custom
      </a>

      <a
        href="#about"
        className="hover:text-black/50"
      >
        About
      </a>

      <a
        href="#contact"
        className="hover:text-black/50"
      >
        Contact
      </a>

    </div>


    {/* MOBILE CTA */}
    <a
      href="#products"
      className="md:hidden text-[10px] font-semibold tracking-[0.2em] uppercase border border-black px-4 py-2 hover:bg-black hover:text-white"
    >
      Shop →
    </a>

  </div>

</nav>


      {/* 🖤 PREMIUM HERO */}
<section className="relative min-h-[calc(100vh-73px)] flex items-center overflow-hidden">

  {/* Decorative background text */}
  <div
    className="absolute -right-20 top-20 text-[14rem] md:text-[20rem] font-black tracking-tighter text-black/[0.025] select-none pointer-events-none"
  >
    INK
  </div>


  <div className="max-w-7xl mx-auto w-full px-6 md:px-10 py-20">

    <div className="max-w-5xl">

      {/* EYEBROW */}
      <div className="flex items-center gap-3 mb-8 animate-slide-right">

        <span className="w-10 h-px bg-black"></span>

        <p className="text-xs font-semibold tracking-[0.3em] uppercase">
          Custom Streetwear • Gujarat
        </p>

      </div>


      {/* MAIN HEADING */}
      <h1 className="text-[clamp(3.2rem,12vw,10rem)] leading-[0.82] font-black tracking-[-0.07em] uppercase animate-fade-up delay-200">

        Wear What
        <br />

        <span className="text-black/40">
          You Imagine.
        </span>

      </h1>


      {/* DESCRIPTION */}
      <p className="mt-10 max-w-xl text-base md:text-lg leading-relaxed text-black/60 animate-fade-up delay-300">

        Your design. Your identity. Your T-shirt.
        <br className="hidden md:block" />

        Send us your idea and we'll turn it into something you can wear.

      </p>


      {/* CTA BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-up delay-400">

        <a
          href="#products"
          className="group inline-flex w-full sm:w-auto items-center justify-center gap-4 bg-black text-white px-7 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-black/80"
        >
          Explore Designs

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>

        </a>


        <a
          href="#custom"
          className="inline-flex w-full sm:w-auto items-center justify-center border border-black px-7 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-black hover:text-white"
        >
          Send Your Design
        </a>

      </div>


      {/* BOTTOM INFORMATION */}
      <div className="mt-20 flex flex-wrap gap-8 md:gap-14 text-[10px] font-medium tracking-[0.2em] uppercase text-black/50 animate-fade-up delay-500">

        <div>
          <span className="text-black">01</span>
          <br />
          Premium Prints
        </div>

        <div>
          <span className="text-black">02</span>
          <br />
          {siteConfig.paymentMethod}
        </div>

        <div>
          <span className="text-black">03</span>
          <br />
          Gujarat Delivery
        </div>

      </div>

    </div>

  </div>


  {/* Scroll indicator */}
  <div className="absolute bottom-8 right-8 hidden md:flex items-center gap-3 rotate-90 origin-right">

    <span className="text-[9px] tracking-[0.3em] uppercase">
      Scroll
    </span>

    <span className="w-12 h-px bg-black/30"></span>

  </div>

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

          <a
            href={`${siteConfig.whatsappBaseUrl}?text=${encodeURIComponent(
            `Hi ${siteConfig.name}, I want to order "New Gothic Styled Designs". I will send the design screenshot.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 bg-black text-white px-4 py-3 w-full inline-flex items-center justify-center hover:bg-gray-800 hover:scale-105 transition duration-300 text-sm"
          >
            Order via WhatsApp
          </a>

        </div>

      </section>


      {/* ================= PREMIUM PRODUCT GALLERY ================= */}
<section
  id="products"
  className="px-6 md:px-10 py-24 bg-[#f7f7f5]"
>

  {/* SECTION HEADER */}
  <div className="max-w-7xl mx-auto mb-14">

    <div className="flex items-center gap-3 mb-5">

      <span className="w-8 h-px bg-black"></span>

      <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-black/50">
        The Collection
      </p>

    </div>

    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

      <h2 className="text-5xl md:text-7xl font-black tracking-[-0.05em] uppercase leading-none">
        Featured
        <br />
        <span className="text-black/35">
          Designs.
        </span>
      </h2>

      <p className="max-w-sm text-sm leading-relaxed text-black/55">
        Explore our latest designs or send us a
        screenshot of any T-shirt you want us to
        create for you.
      </p>

    </div>

  </div>


  {/* PRODUCT GRID */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">

    {products.map((product, index) => (

      <article
        key={index}
        className="group hover-lift"
      >

        {/* IMAGE */}
        <div className="relative overflow-hidden bg-white">

          <img
            src={product.image}
            alt={product.name}
            className="w-full aspect-[4/5] object-cover image-zoom"
          />

          {/* PRODUCT NUMBER */}
          <div className="absolute top-4 left-4">

            <span className="bg-white/90 backdrop-blur-sm px-3 py-2 text-[9px] font-semibold tracking-[0.2em]">
              0{index + 1}
            </span>

          </div>


          {/* HOVER ACTION */}
          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">

            <a
              href={`${siteConfig.whatsappBaseUrl}?text=${encodeURIComponent(
              `Hi ${siteConfig.name}, I want to order "${product.name}". I will send the design screenshot.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-black text-white py-4 text-[10px] font-semibold tracking-[0.2em] uppercase inline-flex items-center justify-center"
            >
              Order via WhatsApp →
            </a>

          </div>

        </div>


        {/* PRODUCT INFORMATION */}
        <div className="pt-5 flex items-start justify-between gap-4">

          <div>

            <p className="text-[9px] font-medium tracking-[0.25em] uppercase text-black/40 mb-2">
              InkDesh Collection
            </p>

            <h3 className="text-lg font-semibold tracking-tight">
              {product.name}
            </h3>

          </div>


          {/* DESKTOP ORDER */}
          <a
            href={`${siteConfig.whatsappBaseUrl}?text=${encodeURIComponent(
            `Hi ${siteConfig.name}, I want to order "${product.name}". I will send the design screenshot.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block text-[9px] font-semibold tracking-[0.2em] uppercase border-b border-black pb-1 hover:opacity-50"
          >
            Order →
          </a>

        </div>

      </article>

    ))}

  </div>


  {/* COLLECTION FOOTER */}
  <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-black/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

    <p className="text-[10px] tracking-[0.2em] uppercase text-black/40">
      Custom Print-on-Demand
    </p>

    <a
      href="#custom"
      className="text-[10px] font-semibold tracking-[0.2em] uppercase hover:opacity-50"
    >
      Don't see your design? Send yours →
    </a>

  </div>

</section>

      {/* ================= CUSTOM DESIGN SECTION ================= */}
<section
  id="custom"
  className="relative overflow-hidden bg-black text-white px-6 md:px-10 py-28"
>

  {/* BACKGROUND TYPOGRAPHY */}
  <div className="absolute -right-10 top-10 text-[12rem] md:text-[20rem] font-black tracking-[-0.08em] text-white/[0.035] select-none pointer-events-none">
    YOU
  </div>


  <div className="relative max-w-7xl mx-auto animate-fade-up">

    {/* EYEBROW */}
    <div className="flex items-center gap-3 mb-8">

      <span className="w-8 h-px bg-white"></span>

      <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/50">
        Your Design
      </p>

    </div>


    {/* MAIN CONTENT */}
    <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 items-end">

      {/* LEFT */}
      <div>

        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-[-0.06em] uppercase leading-[0.88]">

          Don't See
          <br />

          Your
          <br />

          <span className="text-white/35">
            Design?
          </span>

        </h2>

      </div>


      {/* RIGHT */}
      <div className="max-w-md">

        <p className="text-lg md:text-xl leading-relaxed text-white/70">
          Send us a picture or screenshot of the
          T-shirt design you want. We'll turn your
          idea into something you can wear.
        </p>


        {/* ORDER BUTTON */}
        <a
          href={`${siteConfig.whatsappBaseUrl}?text=${encodeURIComponent(
          `Hi ${siteConfig.name}, I want a custom T-shirt. I will send the design screenshot.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-8 inline-flex items-center gap-5 bg-black text-black px-7 py-4 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white/90"
        >

          Send Your Design

          <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>

        </a>


        {/* SMALL INFORMATION */}
        <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-2 gap-6">

          <div>

            <p className="text-[9px] tracking-[0.2em] uppercase text-white/40">
              Ordering
            </p>

            <p className="mt-2 text-sm">
              WhatsApp
            </p>

          </div>


          <div>

            <p className="text-[9px] tracking-[0.2em] uppercase text-white/40">
              Payment
            </p>

            <p className="mt-2 text-sm">
              {siteConfig.paymentMethod}
            </p>

          </div>

        </div>

      </div>

    </div>


    {/* BOTTOM MESSAGE */}
    <div className="mt-24 pt-6 border-t border-white/10">

      <p className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/40">
        Any design • Any idea • Made for you
      </p>

    </div>

  </div>

</section>

      {/* ================= WHY INKDESH ================= */}
<section
  id="about"
  className="bg-[#f7f7f5] px-6 md:px-10 py-28"
>

  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24 mb-20">

      <div>

        <div className="flex items-center gap-3 mb-6">

          <span className="w-8 h-px bg-black"></span>

          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-black/50">
            The InkDesh Difference
          </p>

        </div>

        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-[-0.06em] uppercase leading-[0.88]">
          Made For
          <br />
          <span className="text-black/35">
            You.
          </span>
        </h2>

      </div>


      <div className="flex items-end">

        <p className="max-w-xl text-lg md:text-xl leading-relaxed text-black/60">
          InkDesh is built around one simple idea:
          <span className="text-black font-medium">
            {" "}you shouldn't have to settle for someone else's design.
          </span>
          {" "}Send us what you imagine and we'll help turn it into something you can wear.
        </p>

      </div>

    </div>


    {/* TRUST FEATURES */}
    <div className="grid md:grid-cols-3 border-t border-black/10">

      {/* FEATURE 01 */}
      <div className="py-10 md:pr-10 md:border-r border-black/10">

        <div className="flex items-start justify-between">

          <span className="text-[10px] font-semibold tracking-[0.2em] text-black/40">
            01
          </span>

          <span className="text-xl">
            ✦
          </span>

        </div>

        <h3 className="mt-10 text-xl font-semibold">
          Premium Prints
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-black/55">
          Your designs deserve to look their best.
          We focus on clean, detailed printing so
          your idea stands out on the T-shirt.
        </p>

      </div>


      {/* FEATURE 02 */}
      <div className="py-10 md:px-10 md:border-r border-black/10">

        <div className="flex items-start justify-between">

          <span className="text-[10px] font-semibold tracking-[0.2em] text-black/40">
            02
          </span>

          <span className="text-xl">
            ◇
          </span>

        </div>

        <h3 className="mt-10 text-xl font-semibold">
          {siteConfig.paymentMethod}
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-black/55">
          Keep it simple. Place your order through
          WhatsApp and pay when your T-shirt arrives.
        </p>

      </div>


      {/* FEATURE 03 */}
      <div className="py-10 md:pl-10">

        <div className="flex items-start justify-between">

          <span className="text-[10px] font-semibold tracking-[0.2em] text-black/40">
            03
          </span>

          <span className="text-xl">
            ◌
          </span>

        </div>

        <h3 className="mt-10 text-xl font-semibold">
          Gujarat Delivery
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-black/55">
          Currently serving customers across Gujarat
          with convenient delivery and a simple
          ordering experience.
        </p>

      </div>

    </div>


    {/* HOW IT WORKS */}
    <div className="mt-28">

      <div className="flex items-center gap-3 mb-10">

        <span className="w-8 h-px bg-black"></span>

        <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-black/50">
          How It Works
        </p>

      </div>


      <div className="grid md:grid-cols-3 gap-8">

        {/* STEP 1 */}
        <div className="border-t border-black pt-6">

          <span className="text-[10px] font-semibold tracking-[0.2em]">
            STEP 01
          </span>

          <h3 className="mt-6 text-2xl font-semibold tracking-tight">
            Find Your Design
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-black/55">
            Browse our collection or find a design
            you want to wear.
          </p>

        </div>


        {/* STEP 2 */}
        <div className="border-t border-black pt-6">

          <span className="text-[10px] font-semibold tracking-[0.2em]">
            STEP 02
          </span>

          <h3 className="mt-6 text-2xl font-semibold tracking-tight">
            Send It To Us
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-black/55">
            Send the picture or screenshot through
            WhatsApp and tell us what you want.
          </p>

        </div>


        {/* STEP 3 */}
        <div className="border-t border-black pt-6">

          <span className="text-[10px] font-semibold tracking-[0.2em]">
            STEP 03
          </span>

          <h3 className="mt-6 text-2xl font-semibold tracking-tight">
            Wear Your Idea
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-black/55">
            We create your T-shirt and deliver it
            to you with {siteConfig.paymentMethod}.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* ================= INSTAGRAM / LIFESTYLE ================= */}
<section
  className="bg-black text-white px-6 md:px-10 py-24"
>

  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">

      <div>

        <div className="flex items-center gap-3 mb-6">

          <span className="w-8 h-px bg-white"></span>

          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/50">
            Follow The Drop
          </p>

        </div>

        <h2 className="text-5xl md:text-7xl font-black tracking-[-0.06em] uppercase leading-[0.88]">

          InkDesh
          <br />

          <span className="text-white/35">
            On Instagram.
          </span>

        </h2>

      </div>


      <a
        href={siteConfig.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-4 border border-white/30 px-6 py-4 text-[10px] font-semibold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition"
      >

        @inkdesh05

        <span className="text-lg">
          ↗
        </span>

      </a>

    </div>


    {/* IMAGE GRID */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">

      {/* IMAGE 1 */}
      <a
        href={siteConfig.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative aspect-square overflow-hidden bg-white/5"
      >

        <img
          src="/design4.jpg"
          alt="InkDesh design"
          className="w-full h-full object-cover image-zoom"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500"></div>

      </a>


      {/* IMAGE 2 */}
      <a
        href={siteConfig.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative aspect-square overflow-hidden bg-white/5"
      >

        <img
          src="/design5.jpg"
          alt="InkDesh design"
          className="w-full h-full object-cover image-zoom"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500"></div>

      </a>


      {/* IMAGE 3 */}
      <a
        href={siteConfig.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative aspect-square overflow-hidden bg-white/5"
      >

        <img
          src="/design6.jpg"
          alt="InkDesh design"
          className="w-full h-full object-cover image-zoom"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500"></div>

      </a>


      {/* FEATURED IMAGE */}
      <a
        href={siteConfig.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative aspect-square overflow-hidden bg-white/5"
      >

        <img
          src="/New Gothic Styled Designs.jpg"
          alt="InkDesh featured design"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500"></div>

      </a>

    </div>


    {/* INSTAGRAM MESSAGE */}
    <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

      <p className="text-sm text-white/40">
        New designs. Custom drops. Behind the scenes.
      </p>

      <a
        href={siteConfig.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[10px] font-semibold tracking-[0.25em] uppercase hover:text-white/50 transition"
      >
        Visit Instagram →
      </a>

    </div>

  </div>

</section>

      {/* ================= FINAL CTA ================= */}
<section
  className="bg-[#f7f7f5] px-6 md:px-10 py-28"
>

  <div className="max-w-5xl mx-auto text-center">

    {/* EYEBROW */}
    <div className="flex items-center justify-center gap-3 mb-8">

      <span className="w-8 h-px bg-black"></span>

      <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-black/50">
        Your Next T-Shirt
      </p>

      <span className="w-8 h-px bg-black"></span>

    </div>


    {/* HEADING */}
    <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-[-0.07em] uppercase leading-[0.8]">

      Ready To
      <br />

      <span className="text-black/35">
        Wear It?
      </span>

    </h2>


    {/* DESCRIPTION */}
    <p className="max-w-xl mx-auto mt-10 text-base md:text-lg leading-relaxed text-black/55">

      Choose a design from our collection or send
      us a screenshot of the T-shirt you want.

      <br />

      We'll take it from there.

    </p>


    {/* CTA BUTTONS */}
    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

      <a
        href="#products"
        className="group inline-flex items-center justify-center gap-4 bg-black text-white px-8 py-4 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-black/80"
      >

        Explore Designs

        <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>

      </a>


      <a
        href={`${siteConfig.whatsappBaseUrl}?text=${encodeURIComponent(
        `Hi ${siteConfig.name}, I want a custom T-shirt. I will send the design screenshot.`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center border border-black px-8 py-4 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-black hover:text-white"
      >

        Start My Order

      </a>

    </div>


    {/* SMALL TRUST MESSAGE */}
    <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[9px] font-medium tracking-[0.2em] uppercase text-black/40">

      <span>{siteConfig.paymentMethod}</span>

      <span>•</span>

      <span>{siteConfig.deliveryRegion}</span>

      <span>•</span>

      <span>Custom Designs</span>

    </div>

  </div>

</section>

      {/* ================= CONTACT ================= */}
<section
  id="contact"
  className="bg-black text-white px-6 md:px-10 py-20"
>

  <div className="max-w-7xl mx-auto animate-fade-up">

    <div className="grid md:grid-cols-2 gap-12">

      {/* BRAND */}
      <div>

        <div className="flex items-center gap-3">

          <img
            src="/logo.png"
            alt="InkDesh Logo"
            className="w-10 h-10 object-contain"
          />

          <div>

            <h2 className="text-lg font-bold tracking-[0.25em]">
              INKDESH
            </h2>

            <p className="text-[8px] tracking-[0.3em] text-white/40">
              WEAR WHAT YOU IMAGINE
            </p>

          </div>

        </div>


        <p className="mt-8 max-w-sm text-sm leading-relaxed text-white/45">

          Custom print-on-demand T-shirts.
          Your design, your identity, your T-shirt.

        </p>

      </div>


      {/* LINKS */}
      <div className="grid grid-cols-2 gap-8">

        <div>

          <p className="text-[9px] font-semibold tracking-[0.25em] uppercase text-white/35 mb-5">
            Explore
          </p>

          <div className="space-y-3 text-sm">

            <a
              href="#"
              className="block hover:text-white/50"
            >
              Home
            </a>

            <a
              href="#products"
              className="block hover:text-white/50"
            >
              Designs
            </a>

            <a
              href="#custom"
              className="block hover:text-white/50"
            >
              Custom Order
            </a>

            <a
              href="#about"
              className="block hover:text-white/50"
            >
              About
            </a>

          </div>

        </div>


        <div>

          <p className="text-[9px] font-semibold tracking-[0.25em] uppercase text-white/35 mb-5">
            Connect
          </p>

          <div className="space-y-3 text-sm">

            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-white/50"
            >
              Instagram ↗
            </a>

            <a
              href={`${siteConfig.whatsappBaseUrl}?text=${encodeURIComponent(
              `Hi ${siteConfig.name}, I want a custom T-shirt. I will send the design screenshot.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-white/50"
            >
              WhatsApp ↗
            </a>

            <a
              href="#products"
              className="block hover:text-white/50"
            >
              Shop Designs
            </a>

          </div>

        </div>

      </div>

    </div>


    {/* BOTTOM */}
    <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

      <p className="text-[9px] tracking-[0.2em] uppercase text-white/30">
        © {new Date().getFullYear()} InkDesh. All rights reserved.
      </p>

      <p className="text-[9px] tracking-[0.2em] uppercase text-white/30">
        Gujarat, India
      </p>

    </div>

  </div>

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