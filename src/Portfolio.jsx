import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import {useRef} from 'react'
import emailjs from "@emailjs/browser"

import ReactLogo from "./assets/portlogos/react.svg"
import FigmaLogo from "./assets/portlogos/figma.svg"
import GitLogo from "./assets/portlogos/git.svg"
import GithubLogo from "./assets/portlogos/github.svg"
import HtmlLogo from "./assets/portlogos/html5.svg"
import JavascriptLogo from "./assets/portlogos/javascript.svg"
import CSSLogo from "./assets/portlogos/css.svg"
import TailwindLogo from "./assets/portlogos/tailwindcss.svg"

import visual from "./assets/visual.svg"

import blogcard from "./assets/blogcard.png"
import prismpass from "./assets/prismpass.png"
import socialscard from "./assets/socialscard.png"

import me from "./assets/me.jpg"
export default function Portfolio() {
  const [isOpen,setIsOpen] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_hs24xo5","template_61t1krc",form.current,"CMkJc_3DwqJU-597Z").then(() => {
      alert("Message sent!");
    },(error) =>{
      alert("Failed to send message." + error.text);
    }
    );
  };

  useEffect(() => {
    document.title = "Alex Creed | Frontend Developer";
  }, []);

  const skills = [
    {src:ReactLogo,alt:"React"},
    {src:FigmaLogo,alt:"Fimga"},
    {src:GitLogo,alt:"Git"},
    {src:GithubLogo,alt:"Github"},
    {src:HtmlLogo,alt:"Html"},
    {src:JavascriptLogo,alt:"Javascript"},
    {src:CSSLogo,alt:"CSS"},
    {src:TailwindLogo,alt:"Tailwind"},
  ];

  const projects = [
  {
    title: "PrismPass",
    image: prismpass,
    live: "https://prismpass.vercel.app/",
    github: "https://github.com/alexcreed-sudo/prismpass",
  },
  {
    title: "BlogCard",
    image: blogcard,
    live: "https://blog-preview-card-six-phi.vercel.app/",
    github: "https://github.com/alexcreed-sudo/blog-preview-card",
  },
  {
    title: "SocialsCard",
    image: socialscard,
    live: "https://social-links-azure-six.vercel.app/",
    github: "https://github.com/alexcreed-sudo/social-links",
  },
  
];

  return (
    <main className="font-sans text-gray-900 bg-white dark:bg-black dark:text-white scroll-smooth">
      {/* Top Navbar */}
      <div className="fixed top-0 w-full bg-white dark:bg-black shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo  */}
          <a href="#home" className="text-xl font-bold">
            Alex Creed
          </a>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-gray-800 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-sm font-medium">
            <li><a href="#home" className="hover:text-blue-500">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-4 space-y-2">
            <a href="#home" onClick={() => setIsOpen(false)} className="block hover:text-blue-600">Home</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="block hover:text-blue-600">About</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="block hover:text-blue-600">Projects</a>
            <a href="#skills" onClick={() => setIsOpen(false)} className="block hover:text-blue-600">Skills</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block hover:text-blue-600">Contact</a>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="https://www.w3.org/2000/svg" className="animate-draw">
          <line x1="10" y1="10" x2="190" y2="10" stroke="#0f172A" strokeWidth="2"/>
          <line x1="190" y1="10" x2="190" y2="190" stroke="#0f172A" strokeWidth="2"/>
        </svg>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">Hi, I’m Alex Creed</h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-6">
            Frontend Developer | React | Tailwind CSS
          </p>
          <a href="#contact" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
            Contact Me
          </a>
        </motion.div>
      </section>

      {/* About Section */}
<section id="about" className="min-h-[60vh] px-6 py-20 bg-gray-100 dark:bg-zinc-900">
  <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-10">
    {/* Photo Card */}
    <div className="w-48 h-48 md:w-60 md:h-60 rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-zinc-800 bg-white dark:bg-zinc-800">
      <img
        src={me}
        alt="Alex"
        className="w-full h-full object-cover"
      />
    </div>

    {/* About Text */}
    <div className="flex-1">
      <h2 className="text-3xl font-semibold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
        Hi, I’m Alex, a Frontend Developer passionate about building clean, responsive, and accessible websites. I specialize in HTML, CSS, JavaScript, and React, and love crafting intuitive user interfaces that not only look great but work seamlessly.
        <br /><br />
        I sharpen my skills through real-world challenges on Frontend Mentor, where I turn professional designs into functional, pixel-perfect web projects. I'm always learning, refining my code, and staying up to date with the latest tools and best practices in modern frontend development.
        <br /><br />
        Check out some of my work below — and feel free to reach out!
      </p>
    </div>
  </div>
</section>




      {/* Projects Section */}
<section id="projects" className="py-16 bg-gray-100 dark:bg-gray-900 w-full">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
    <h3 className='text-3xl font-bold text-center mb-12'>Some stuff i made</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="flex flex-col justify-between p-6 flex-grow">
            <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
            <div className="flex gap-4 mt-auto">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Live
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 text-center bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Skills Section */}
      <section id="skills" className="px-6 py-20 bg-gray-50 dark:bg-zinc-800 text-center">
        <h2 className="text-3xl font-semibold mb-10">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map((tech, i) => (
            <div key={i} className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow flex justify-center items-center">
              <img src={tech.src} alt={tech.alt} className="h-16 w-16 object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 bg-gray-100 dark:bg-zinc-900 text-center">
        <div className='max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center'>
          <img src={visual} className='w-full h-auto' />
          <form ref={form} onSubmit={sendEmail} className='bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 space-y-4 w-full'>
            <input type="text" name='user_name' placeholder='Your Name' required className='w-full p-3 rounded bg-gray-100 dark:bg-gray-700' />
            <input type="email" name='user_email' placeholder='Your Email' required className='w-full p-3 rounded bg-gray-100 dark:bg-gray-700' />
            <textarea name="message" placeholder='Your message' rows="5" required className='w-full p-3 rounded bg-gray-100 dark:bg-gray-700'></textarea>
            <button type='submit' className='bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition'>Send</button>
          </form>
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Feel free to reach out via email or X.com.
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="mailto:alexcreed916@gmail.com" className="text-blue-500 hover:underline">
              Email
            </a>
            <a href="https://x.com/alex66496" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
              Twitter
            </a>
          </div>
          <a href="mailto:youremail@example.com" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
            Let’s Work Together
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex justify-center items-center space-x-4 mb-2">
          <a href="https://github.com/alexcreed-sudo" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
            <FaGithub size={24} />
          </a>
        </div>
        © {new Date().getFullYear()} Alex Creed. All rights reserved.
      </footer>
    </main>
  );
}