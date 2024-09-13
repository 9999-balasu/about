
import React from "react";
import './AboutUs.css'; // Import a CSS file for styling if needed

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-banner">
        <h1>About Us</h1>
        <p>Your source for fresh, sustainable, and organic farm products.</p>
      </div>

      <div className="about-us-content">
        <section className="about-us-mission">
          <h2>Our Mission</h2>
          <p>
            At Natural Farm E-Commerce, our mission is to provide the highest
            quality organic farm products directly to your doorstep. We believe
            in sustainable farming practices, supporting local farmers, and
            ensuring the freshest ingredients for our customers.
          </p>
        </section>

        <section className="about-us-story">
          <h2>Our Story</h2>
          <p>
            Started by a group of passionate farmers, we wanted to create a
            platform that connects consumers with real, fresh, and organic
            produce. Over the years, we've grown from a small farm to a trusted
            provider of natural farm products across the country.
          </p>
        </section>

        <section className="about-us-values">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Sustainability:</strong> We are committed to environmentally friendly farming practices.</li>
            <li><strong>Quality:</strong> Our products are carefully selected to ensure the best for our customers.</li>
            <li><strong>Community:</strong> We believe in supporting local farmers and building a better food system.</li>
            <li><strong>Transparency:</strong> From farm to table, we’re transparent about our processes and products.</li>
          </ul>
        </section>

        <section className="about-us-team">
          <h2>Meet the Team</h2>
          <p>
            Our team consists of dedicated farmers, sustainability experts, and customer service professionals who are all
            passionate about bringing you the freshest products and the best service possible.
          </p>
        </section>

        <section className="about-us-contact">
          <h2>Contact Us</h2>
          <p>If you have any questions, feel free to reach out to us at:</p>
          <p>Email: support@naturalfarm.com</p>
          <p>Phone: +123-456-7890</p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
