import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../Styles/Goldrate.css";
import { FaInfoCircle } from "react-icons/fa";

const Goldrate = () => {
  // State for gold rates
  const [goldRates, setGoldRates] = useState([
    {
      date: "2023-06-01",
      type24K1g: 5830,
      type24K8g: 46640,
      type22K1g: 5340,
      type22K8g: 42720
    },
    {
      date: "2023-06-02",
      type24K1g: 5845,
      type24K8g: 46760,
      type22K1g: 5355,
      type22K8g: 42840
    },
    {
      date: "2023-06-03",
      type24K1g: 5820,
      type24K8g: 46560,
      type22K1g: 5330,
      type22K8g: 42640
    },
    {
      date: "2023-06-04",
      type24K1g: 5850,
      type24K8g: 46800,
      type22K1g: 5360,
      type22K8g: 42880
    },
    {
      date: "2023-06-05",
      type24K1g: 5875,
      type24K8g: 47000,
      type22K1g: 5385,
      type22K8g: 43080
    },
    {
      date: "2023-06-06",
      type24K1g: 5860,
      type24K8g: 46880,
      type22K1g: 5370,
      type22K8g: 42960
    },
    {
      date: "2023-06-07",
      type24K1g: 5890,
      type24K8g: 47120,
      type22K1g: 5400,
      type22K8g: 43200
    }
  ]);

  const [todayRate, setTodayRate] = useState({
    type24K1g: 5890,
    type24K8g: 47120,
    type22K1g: 5400,
    type22K8g: 43200
  });

  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  // Sample jewelry images (replace with your actual image paths)
  const jewelryImages = {
    "Bridal Sets": "/images/bridalset.jpg",
    Necklaces: "/images/necklace.jpg",
    Earrings: "/images/earings.jpg",
    Bangles: "/images/bangles.jpg",
    Rings: "/images/ring.jpg",
    Chains: "/images/chains.jpg",
    Pendants: "/images/pendant.jpg",
    "Gold Coins": "/images/gold-coins.jpg"
  };

  const [selectedType, setSelectedType] = useState("Bridal Sets");

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Fetch real data from API (example)
  useEffect(() => {
    // In a real app, you would fetch this from your API
    // fetchGoldRates().then(data => setGoldRates(data));
  }, []);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
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
        duration: 0.8,
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const tableRowVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <motion.div
      className="gold-rate-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Jewelry Information */}
      <motion.div
        className="jewelry-info-section"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h2 className="jewelry-info-sectionh2" variants={itemVariants}>
          Our Premium Gold Jewelry Collection
        </motion.h2>
        <motion.div className="info-card" variants={zoomIn}>
          <motion.div className="info-content" variants={slideInLeft}>
            <h3>Why Choose R M Rishi Gold Jewelry?</h3>
            <ul className="jewelry-features">
              {[
                "BIS Hallmarked: All our gold jewelry comes with proper hallmark certification guaranteeing purity.",
                "Exquisite Craftsmanship: Handcrafted by master artisans with decades of experience.",
                "Modern & Traditional Designs: From contemporary to ethnic, we have designs for every occasion.",
                "Transparent Pricing: No hidden charges - you pay only for gold weight and making charges.",
                "Lifetime Maintenance: Free cleaning and polishing services for jewelry purchased from us."
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <FaInfoCircle className="info-icon" />
                  <strong>{feature.split(":")[0]}:</strong>{" "}
                  {feature.split(":")[1]}
                </motion.li>
              ))}
            </ul>
            <div className="jewelry-types">
              <h4>Our Collections:</h4>
              <motion.div className="types-grid">
                {Object.keys(jewelryImages).map((type, index) => (
                  <motion.div
                    key={index}
                    className={`type-item ${
                      selectedType === type ? "active" : ""
                    }`}
                    onClick={() => setSelectedType(type)}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#f8f8f8",
                      color: "#d4af37",
                      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {type}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
          <motion.div className="info-image">
            <AnimatePresence mode="wait">
              <motion.img
                className="info-imageimg"
                key={selectedType}
                src={jewelryImages[selectedType]}
                alt={selectedType}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={imageVariants}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </motion.div>
          {/* <motion.div
            className="info-image"
            variants={slideInRight}
            whileHover={{ scale: 1.02 }}
          >
            <div className="image-placeholder">Jewelry Image</div>
          </motion.div> */}
        </motion.div>
      </motion.div>

      {/* Gold Rates Section */}
      <motion.div
        className="gold-rate-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h1 variants={itemVariants}>Gold Rates</motion.h1>
        <motion.p className="last-updated" variants={itemVariants}>
          Last Updated: {new Date().toLocaleDateString()}
        </motion.p>
      </motion.div>

      <motion.div
        className="gold-rate-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Today's Gold Rate */}
        <motion.div className="today-rate-section" variants={fadeIn}>
          <motion.h2 variants={itemVariants}>Today's Gold Rate</motion.h2>
          <motion.div
            className="rate-card-container"
            variants={staggerContainer}
          >
            <motion.div
              className="rate-card"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            >
              <h3>24K Gold</h3>
              <div className="rate-row">
                <span>1 gram</span>
                <span>₹{todayRate.type24K1g.toLocaleString()}</span>
              </div>
              <div className="rate-row">
                <span>8 grams</span>
                <span>₹{todayRate.type24K8g.toLocaleString()}</span>
              </div>
            </motion.div>
            <motion.div
              className="rate-card"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            >
              <h3>22K Gold</h3>
              <div className="rate-row">
                <span>1 gram</span>
                <span>₹{todayRate.type22K1g.toLocaleString()}</span>
              </div>
              <div className="rate-row">
                <span>8 grams</span>
                <span>₹{todayRate.type22K8g.toLocaleString()}</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Weekly Gold Rates */}
        <motion.div className="weekly-rates-section" variants={fadeIn}>
          <motion.h2 variants={itemVariants}>
            Weekly Gold Rates (Past 7 Days)
          </motion.h2>
          <motion.div className="table-container" variants={zoomIn}>
            <table className="gold-rate-table">
              <thead>
                <motion.tr variants={itemVariants}>
                  <th>Date</th>
                  <th colSpan="2">24K Gold</th>
                  <th colSpan="2">22K Gold</th>
                </motion.tr>
                <motion.tr variants={itemVariants}>
                  <th></th>
                  <th>1g (₹)</th>
                  <th>8g (₹)</th>
                  <th>1g (₹)</th>
                  <th>8g (₹)</th>
                </motion.tr>
              </thead>
              <tbody>
                {goldRates.map((rate, index) => (
                  <motion.tr
                    key={index}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={tableRowVariants}
                    whileHover={{ backgroundColor: "rgba(250, 230, 176, 0.2)" }}
                  >
                    <td>{new Date(rate.date).toLocaleDateString()}</td>
                    <td>{rate.type24K1g.toLocaleString()}</td>
                    <td>{rate.type24K8g.toLocaleString()}</td>
                    <td>{rate.type22K1g.toLocaleString()}</td>
                    <td>{rate.type22K8g.toLocaleString()}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Goldrate;
