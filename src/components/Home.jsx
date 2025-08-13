import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../Styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  // State for counter animation
  const [branches, setBranches] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [experience, setExperience] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Add this to your component
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sellingSteps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // State for gold rates
  const [goldRates, setGoldRates] = useState([
    { type: "24K", gram1: 5830, gram8: 46640 },
    { type: "22K", gram1: 5340, gram8: 42720 }
  ]);

  // State for testimonials
  const [testimonials] = useState([
    {
      id: 1,
      name: "Rajesh Kumar",
      review:
        "Excellent craftsmanship and pure gold. Been a customer for 10 years!",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Sharma",
      review:
        "Trustworthy jewellers with transparent pricing. Love their designs.",
      rating: 4
    },
    {
      id: 3,
      name: "Amit Patel",
      review:
        "Best place to sell old gold. They give fair prices compared to others.",
      rating: 5
    }
  ]);

  // State for FAQs
  const [faqs] = useState([
    {
      question: "How do I know the gold is pure?",
      answer:
        "We provide proper hallmark certification with every purchase as per government standards."
    },
    {
      question: "What is your buyback policy?",
      answer:
        "We offer 100% buyback value on our own jewellery with proper bills. For other jewellery, we assess purity first."
    },
    {
      question: "Do you provide custom designs?",
      answer:
        "Yes, our master craftsmen can create custom designs based on your requirements."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, credit/debit cards, UPI, and bank transfers."
    }
  ]);

  // State for active FAQ
  const [activeFaq, setActiveFaq] = useState(null);

  // State for news updates
  const [updates] = useState([
    "Diwali Special Offer: 15% off on making charges!",
    "New collection of bridal jewellery launched.",
    "Now available: 24K gold coins in various weights.",
    "Special discounts for Dhanteras bookings.",
    "Get free cleaning service for jewellery purchased from us."
  ]);

  // State for current carousel slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel images
  const carouselImages = [
    "/images/banner1.jpg",
    "/images/banner2.jpg",
    "/images/banner3.jpg"
  ];

  // Steps for selling gold
  const [sellingSteps] = useState([
    {
      id: 1,
      title: "Visit Our Store",
      description: "Bring your gold items to any of our branches."
    },
    {
      id: 2,
      title: "Purity Check",
      description: "Our experts will check the purity using advanced methods."
    },
    {
      id: 3,
      title: "Weight Measurement",
      description: "Accurate weight measurement using certified scales."
    },
    {
      id: 4,
      title: "Price Calculation",
      description: "We calculate based on current gold rates and purity."
    },
    {
      id: 5,
      title: "Instant Payment",
      description: "Receive payment immediately via your preferred method."
    }
  ]);

  // Why choose us points
  const [whyChooseUs] = useState([
    {
      id: 1,
      title: "Trusted Since 1985",
      description: "Generations of trust in gold business"
    },
    { id: 2, title: "BIS Hallmarked", description: "100% purity guaranteed" },
    { id: 3, title: "Transparent Pricing", description: "No hidden charges" },
    {
      id: 4,
      title: "Expert Craftsmanship",
      description: "Award-winning jewellery designs"
    },
    {
      id: 5,
      title: "Secure Transactions",
      description: "Safe and reliable buying/selling"
    }
  ]);

  // Counter animation effect
  useEffect(() => {
    const branchInterval = setInterval(() => {
      setBranches((prev) => (prev < 12 ? prev + 1 : prev));
    }, 100);

    const customerInterval = setInterval(() => {
      setCustomers((prev) => (prev < 15000 ? prev + 50 : prev));
    }, 1);

    const expInterval = setInterval(() => {
      setExperience((prev) => (prev < 35 ? prev + 1 : prev));
    }, 100);

    return () => {
      clearInterval(branchInterval);
      clearInterval(customerInterval);
      clearInterval(expInterval);
    };
  }, []);

  // Carousel auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // News ticker effect
  useEffect(() => {
    const ticker = document.querySelector(".news-ticker-content");
    if (ticker) {
      ticker.style.animationDuration = `${updates.length * 5}s`;
    }
  }, [updates.length]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="home-page">
      {/* Banner Carousel */}
      <section className="banner-carousel">
        <div className="carousel-container">
          {carouselImages.map((img, index) => (
            <div
              key={index}
              className={`carousel-slide ${
                index === currentSlide ? "active" : ""
              }`}
            >
              <div
                className="carousel-bg-image"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
              <div className="carousel-content">
                <motion.div
                  className="carousel-text"
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                >
                  <h1>R M Rishi Gold</h1>
                  <p className="tagline">
                    Trusted for Generations | Pure Gold | Transparent Pricing
                  </p>
                  <p className="description">
                    Since 1985, we've been providing the finest quality gold
                    jewelry with complete transparency and customer
                    satisfaction.
                  </p>
                  <motion.button
                    className="cta-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to="/gold-rate">
                      Explore Collections <i className="fas fa-arrow-right"></i>
                    </Link>
                  </motion.button>
                </motion.div>
                <motion.div
                  className="carousel-image"
                  initial="hidden"
                  animate="visible"
                  variants={zoomIn}
                >
                  <img src="/images/home.png" alt="Featured Jewelry" />
                </motion.div>
              </div>
            </div>
          ))}
          <div className="carousel-dots">
            {carouselImages.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About and Updates Section */}
      <motion.section
        className="about-updates-section"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <div className="container">
          <motion.div className="about-section" variants={slideInLeft}>
            <h2>About R M Rishi Gold</h2>
            <p>
              Established in 1985, R M Rishi Gold has been serving customers
              with pure, hallmarked gold jewellery for over three decades. Our
              commitment to quality, transparency, and customer satisfaction has
              made us one of the most trusted jewellers in the region.
            </p>
            <p>
              We specialize in traditional and contemporary gold jewellery
              designs, gold coins, and investment options. Our expert craftsmen
              create exquisite pieces that become family heirlooms.
            </p>
            {/* <motion.button
              className="read-more-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read More
            </motion.button> */}
          </motion.div>
          <motion.div className="updates-section" variants={slideInRight}>
            <h3>Latest Updates</h3>
            <div className="news-ticker">
              <div className="news-ticker-content">
                {updates.map((update, index) => (
                  <div key={index} className="update-item">
                    {update}
                  </div>
                ))}
                {/* Duplicate for seamless looping */}
                {updates.map((update, index) => (
                  <div key={`dup-${index}`} className="update-item">
                    {update}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="stats-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container">
          <motion.div className="stat-item" variants={itemVariants}>
            <div className="stat-number">{branches}+</div>
            <div className="stat-title">Branches</div>
          </motion.div>
          <motion.div className="stat-item" variants={itemVariants}>
            <div className="stat-number">{customers}+</div>
            <div className="stat-title">Happy Customers</div>
          </motion.div>
          <motion.div className="stat-item" variants={itemVariants}>
            <div className="stat-number">{experience}+</div>
            <div className="stat-title">Years of Experience</div>
          </motion.div>
        </div>
      </motion.section>

      {/* Selling Gold Steps */}
      <motion.section
        className="selling-steps-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="container">
          <motion.h2 className="section-title" variants={itemVariants}>
            How to Sell Your Gold with Us
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            Simple, Transparent, and Hassle-Free Process
          </motion.p>

          <div className="steps-split-layout">
            {/* Image Carousel on Left */}
            <motion.div className="steps-carousel" variants={slideInLeft}>
              <div className="carousel-inner">
                {sellingSteps.map((step, index) => (
                  <div
                    key={`img-${step.id}`}
                    className="carousel-item"
                    style={{ opacity: index === activeIndex ? 1 : 0 }}
                  >
                    <img
                      src={`/images/gold${index + 1}.jpg`}
                      alt={step.title}
                      className="carousel-image"
                    />
                  </div>
                ))}
              </div>
              <div className="carousel-indicators">
                {sellingSteps.map((step, index) => (
                  <button
                    key={`indicator-${step.id}`}
                    className={`indicator ${
                      index === activeIndex ? "active" : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to step ${index + 1}`}
                  ></button>
                ))}
              </div>
            </motion.div>

            {/* Steps List on Right */}
            <motion.div className="steps-list" variants={slideInRight}>
              <ul>
                {sellingSteps.map((step) => (
                  <motion.li
                    key={step.id}
                    className="step-item"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="step-number">{step.id}</div>
                    <div className="step-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="cta-box"
            variants={fadeIn}
            whileHover={{ scale: 1.02 }}
          >
            <p>Ready to sell your gold? Get an instant estimate now!</p>
            <Link to="/contact">
              <motion.button
                className="cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-comment-dollar"></i> Get Free Valuation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Gold Rates Section */}
      <motion.section
        className="gold-rates-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Today's Gold Rates
        </motion.h2>
        <motion.div className="rates-table-container" variants={zoomIn}>
          <table className="gold-rates-table">
            <thead>
              <tr>
                <th>Gold Type</th>
                <th>1 Gram (₹)</th>
                <th>8 Grams (₹)</th>
              </tr>
            </thead>
            <tbody>
              {goldRates.map((rate, index) => (
                <motion.tr key={index} variants={itemVariants}>
                  <td>{rate.type}</td>
                  <td>{rate.gram1.toLocaleString()}</td>
                  <td>{rate.gram8.toLocaleString()}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
          <p className="rate-disclaimer">
            * Rates updated as of {new Date().toLocaleDateString()}. Prices may
            vary based on purity and market fluctuations.
          </p>
        </motion.div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="testimonials-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          What Our Customers Say
        </motion.h2>
        <div className="testimonials-container">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="rating">
                {"★".repeat(testimonial.rating)}
                {"☆".repeat(5 - testimonial.rating)}
              </div>
              <p className="review-text">"{testimonial.review}"</p>
              <p className="customer-name">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        className="why-choose-us-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container">
          <div className="section-header">
            <motion.h2 className="section-title" variants={itemVariants}>
              Why Choose R M Rishi Gold
            </motion.h2>
            <motion.p className="section-subtitle" variants={itemVariants}>
              Trusted by generations for authentic gold jewelry and transparent
              transactions
            </motion.p>
          </div>

          <div className="features-grid">
            {whyChooseUs.map((feature) => (
              <motion.div
                key={feature.id}
                className="feature-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="feature-icon">
                  {feature.id === 1 && <i className="fas fa-medal"></i>}
                  {feature.id === 2 && <i className="fas fa-certificate"></i>}
                  {feature.id === 3 && <i className="fas fa-rupee-sign"></i>}
                  {feature.id === 4 && <i className="fas fa-hammer"></i>}
                  {feature.id === 5 && <i className="fas fa-shield-alt"></i>}
                </div>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
                <div className="feature-badge">{feature.id}</div>
              </motion.div>
            ))}
          </div>

          <motion.div className="trust-badges" variants={fadeIn}>
            {/* Gold Hallmark Badge with shimmer effect */}
            <motion.div
              className="trust-item gold-badge"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 15px rgba(212, 175, 55, 0.7)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                background: [
                  "linear-gradient(135deg, #f5e6c8, #e6c88c)",
                  "linear-gradient(135deg, #e6c88c, #d4af37)",
                  "linear-gradient(135deg, #d4af37, #f5e6c8)",
                  "linear-gradient(135deg, #f5e6c8, #e6c88c)"
                ],
                transition: { duration: 4, repeat: Infinity }
              }}
            >
              <img
                src="/images/BIS.png"
                alt="BIS Hallmark Certified"
                className="trust-icon"
              />
              <span className="trust-label">24K BIS Hallmark Certified</span>
              <div className="gold-sparkle"></div>
            </motion.div>

            {/* Legacy Badge */}
            <motion.div
              className="trust-item legacy-badge"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 15px rgba(255, 215, 0, 0.5)"
              }}
            >
              <img
                src="/images/trurst.png"
                alt="Trusted Since 1985"
                className="trust-icon"
              />
              <span className="trust-label">Trusted Since 1985</span>
              <div className="vintage-border"></div>
            </motion.div>

            {/* Additional Premium Badge - Secure Checkout */}
            <motion.div
              className="trust-item secure-badge"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 15px rgba(0, 128, 0, 0.3)"
              }}
            >
              <img
                src="/images/secure.png"
                alt="Secure Checkout"
                className="trust-icon"
              />
              <span className="trust-label">100% Secure Checkout</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="faq-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Frequently Asked Questions
        </motion.h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`faq-item ${activeFaq === index ? "active" : ""}`}
              onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
            >
              <div className="faq-question">
                {faq.question}
                <span className="toggle-icon">
                  {activeFaq === index ? "−" : "+"}
                </span>
              </div>
              {activeFaq === index && (
                <motion.div
                  className="faq-answer"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
