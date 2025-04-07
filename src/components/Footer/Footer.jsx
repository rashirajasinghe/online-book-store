import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaEnvelope,
} from "react-icons/fa";
import footerLogo from "../../assets/website/logo.jpg";

const Footer = () => {
  const footerLinks = [
    {
      title: "Home",
      link: "/#",
    },
    {
      title: "About",
      link: "/#about",
    },
    {
      title: "Contact",
      link: "/#contact",
    },
    {
      title: "Blog",
      link: "/#blog",
    },
  ];

  const categories = [
    {
      title: "Fiction",
      link: "/#fiction",
    },
    {
      title: "Non-Fiction",
      link: "/#non-fiction",
    },
    {
      title: "Science",
      link: "/#science",
    },
    {
      title: "Biography",
      link: "/#biography",
    },
  ];

  const customerService = [
    {
      title: "Shipping Policy",
      link: "/#shipping",
    },
    {
      title: "Return Policy",
      link: "/#returns",
    },
    {
      title: "Privacy Policy",
      link: "/#privacy",
    },
    {
      title: "FAQ",
      link: "/#faq",
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-950 text-gray-700 dark:text-gray-300">
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 py-12">
          {}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={footerLogo} 
                alt="Books Store Logo" 
                className="w-12 h-12 rounded-full object-cover" 
              />
              <h1 className="text-2xl font-bold">Books Store</h1>
            </div>
            <p className="text-sm">
              Your premier destination for quality books and personalized recommendations. 
              We pride ourselves on our curated collection, competitive prices, 
              and exceptional customer service.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <FaLocationArrow className="text-primary" />
                <p>D.S.Senanayake Weediya, Kandy</p>
              </div>
              <div className="flex items-center gap-3">
                <FaMobileAlt className="text-primary" />
                <p>+94 1234567890</p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary" />
                <p>info@booksstore.com</p>
              </div>
            </div>

            {}
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="hover:text-primary transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {}
          <div className="space-y-4">
            <h2 className="text-lg font-bold border-b pb-2 border-gray-300/50">
              Quick Links
            </h2>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.link} 
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <span>&#11162;</span>
                    <span>{link.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {}
          <div className="space-y-4">
            <h2 className="text-lg font-bold border-b pb-2 border-gray-300/50">
              Categories
            </h2>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <a 
                    href={category.link} 
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <span>&#11162;</span>
                    <span>{category.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {}
          <div className="space-y-4">
            <h2 className="text-lg font-bold border-b pb-2 border-gray-300/50">
              Customer Service
            </h2>
            <ul className="space-y-2">
              {customerService.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.link} 
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <span>&#11162;</span>
                    <span>{service.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {}
        <div className="border-t border-gray-300/50 py-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} Books Store. All rights reserved. 
            <span className="text-primary"> Made with ❤️ by Rashini Rajasinghe</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;