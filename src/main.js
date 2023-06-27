import '../styles/styles.css';
import '../styles/index.css';

document.querySelector('#app').innerHTML = `
<!-- header section -->
<header
  class="container absolute inset-x-0 z-20 mx-auto w-full px-5 py-12 font-semibold capitalize text-whiteText md:px-16">
  <nav class="flex items-center">
    <img class="mr-14" src="/public/images/logo.svg" alt="logo" />

    <ul class="hidden flex-1 space-x-7 md:flex">
      <li>
        <a href="">product</a>
      </li>
      <li>
        <a href="">company</a>
      </li>
      <li>
        <a href="">connect</a>
      </li>
    </ul>

    <ul class="hidden space-x-7 md:flex">
      <li>
        <a href="">login</a>
      </li>
      <li>
        <a
          class="mr-2 rounded-3xl border-2 bg-whiteText px-6 py-3 font-extrabold text-lightRed transition-all duration-300 hover:border-veryLightRed hover:bg-veryLightRed hover:text-whiteText"
          href="">
          sign up
        </a>
      </li>
    </ul>
  </nav>

  <div
    class="flex h-[20px] w-[30px] flex-col items-center justify-center md:hidden">
    <span class="h-[2px] w-full bg-whiteText"></span>
    <span class="my-1 h-[2px] w-full bg-whiteText"></span>
    <span class="h-[2px] w-full bg-whiteText"></span>
  </div>
</header>

<!-- hero section -->
<section
  id="hero"
  class="relative isolate overflow-hidden rounded-bl-[6rem] bg-gradient-to-r from-veryLightRedGradient to-lightRedGradient">
  <div class="container mx-auto pb-36 pt-60 text-center text-whiteText">
    <h1 class="text-6xl font-bold animate">A modern publishing platform</h1>
    <p class="mb-14 mt-8 text-lg animate">
      Grow your audience and build your online brand
    </p>
    <a
      class="mr-2 rounded-3xl border-2 bg-whiteText px-6 py-3 font-extrabold text-lightRed transition-all duration-300 hover:border-veryLightRed hover:bg-veryLightRed hover:text-whiteText"
      href="">
      Start for Free
    </a>
    <a
      class="ml-2 rounded-3xl border-2 border-whiteText px-6 py-3 font-bold transition-all duration-300 hover:bg-whiteText hover:text-veryLightRed"
      href=""
      >Learn More</a
    >
  </div>
</section>

<!-- features section -->
<section
  class="relative overflow-hidden text-veryDarkDesaturatedBlue md:mb-[6rem] md:h-[1000px]">
  <div id="editor-desktop" class="hidden md:block"></div>
  <h3 id="heading" class="mt-40 text-center text-4xl font-bold animate">
    Designed for the future
  </h3>
  <div
    class="container mx-auto flex flex-col-reverse px-8 md:flex-row md:px-16">
    <div class="mt-10 flex flex-1 flex-col text-center md:text-left">
      <div>
        <h5 class="text-2xl font-bold animate">Introducing an extensible editor</h5>
        <p
          class="text-md mb-10 mt-6 font-semibold leading-7 text-slate-500 animate">
          Blogr features an exceedingly intuitive interface which lets you
          focus on one thing: creating content. The editor supports
          management of multiple blogs and allows easy manipulation of
          embeds such as images, videos, and Markdown. Extensibility with
          plugins and themes provide easy ways to add functionality or
          change the looks of a blog.
        </p>
      </div>
      <div>
        <h5 class="text-2xl font-bold animate">Robust content management</h5>
        <p
          class="text-md mb-10 mt-6 font-semibold leading-7 text-slate-500 animate">
          Flexible content management enables users to easily move through
          posts. Increase the usability of your blog by adding customized
          categories, sections, format, or flow. With this functionality,
          you&apos;re in full control.
        </p>
      </div>
    </div>

    <div class="hidden md:flex md:flex-1"></div>

    <div class="flex-1 self-center md:hidden">
      <img
        class=""
        src="/public/images/illustration-editor-mobile.svg"
        alt="" />
    </div>
  </div>
</section>

<!-- features second section  -->
<section
  class="isolate rounded-bl-[6rem] rounded-tr-[6rem] bg-gradient-to-r from-veryDarkBlackBlue to-veryDarkDesaturatedBlue text-whiteText">
  <div
    id="circles"
    class="container mx-auto flex flex-col px-8 md:flex-row md:px-16">
    <div id="phones" class="flex-1"></div>
    <div class="flex-1 text-center">
      <h5 id="heading" class="mt-48 text-4xl font-bold md:mt-28 animate">
        State of the Art Infrastructure
      </h5>
      <p class="text-md mb-24 mt-5 leading-7 md:mb-28 animate">
        With reliability and speed in mind, worldwide data centers provide
        the backbone for ultra-fast connectivity. This ensures your site
        will load instantly, no matter where your readers are, keeping your
        site competitive.
      </p>
    </div>
  </div>
</section>

<!-- features thrid section -->
<section
  class="container mx-auto my-20 flex flex-col px-8 md:mb-52 md:mt-40 lg:flex-row lg:px-16">
  <div id="laptop-desktop" class="flex-1 self-center lg:self-auto">
    <img
      class="mb-8 lg:hidden"
      src="/public/images/illustration-laptop-mobile.svg"
      alt="laptop-desktop" />
  </div>
  <div class="flex flex-1 flex-col self-center">
    <div>
      <h5 class="text-2xl font-bold animate">Free, open, simple</h5>
      <p class="text-md mb-10 mt-6 font-semibold text-slate-500 animate">
        Blogr is a free and open source application backed by a large
        community of helpful developers. It supports features such as code
        syntax highlighting, RSS feeds, social media integration,
        third-party commenting tools, and works seamlessly with Google
        Analytics. The architecture is clean and is relatively easy to
        learn.
      </p>
    </div>
    <div>
      <h5 class="text-2xl font-bold animate">Powerful tooling</h5>
      <p class="text-md mb-10 mt-6 font-semibold text-slate-500 animate">
        Batteries included. We built a simple and straightforward CLI tool
        that makes customization and deployment a breeze, but capable of
        producing even the most complicated sites.
      </p>
    </div>
  </div>
</section>

<!-- footer section -->
<footer class="rounded-tr-[6rem] bg-veryDarkBlackBlue text-whiteText">
  <div
    class="container mx-auto flex flex-col px-8 md:flex-row md:justify-around md:px-16 md:pb-[79px] md:pt-16">
    <div class="mt-8 self-center md:mt-0 md:self-start">
      <img src="/public/images/logo.svg" alt="logo" />
    </div>
    <div class="mt-12 flex flex-col items-center md:mt-0 md:items-start">
      <h6 class="mb-7 font-bold">Product</h6>
      <a class="hover:underline" href="#Overview">Overview</a>
      <a class="hover:underline" href="#Pricing">Pricing</a>
      <a class="hover:underline" href="#Marketplace">Marketplace</a>
      <a class="hover:underline" href="#Features">Features</a>
      <a class="hover:underline" href="#Integrations">Integrations</a>
    </div>
    <div class="mt-12 flex flex-col items-center md:mt-0 md:items-start">
      <h6 class="mb-7 font-bold">Company</h6>
      <a class="hover:underline" href="#About">About</a>
      <a class="hover:underline" href="#Team">Team</a>
      <a class="hover:underline" href="#Blog">Blog</a>
      <a class="hover:underline" href="#Careers">Careers</a>
    </div>
    <div
      class="mb-16 mt-12 flex flex-col items-center md:mb-0 md:mt-0 md:items-start">
      <h6 class="mb-7 font-bold">Connect</h6>
      <a class="hover:underline" href="#Contact">Contact</a>
      <a class="hover:underline" href="#Newsletter">Newsletter</a>
      <a class="hover:underline" href="#LinkedIn">LinkedIn</a>
    </div>
  </div>
</footer> `;

function animation() {
  const elements = [...document.querySelectorAll('.animate')];

  const observer = new IntersectionObserver((entries, observe) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  });

  elements.forEach((el, index) => {
    setTimeout(() => {
      observer.observe(el);
    }, (index + 1) * 400);
  });
}

window.addEventListener('DOMContentLoaded', animation);
