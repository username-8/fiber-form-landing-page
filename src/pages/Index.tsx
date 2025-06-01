
const Index = () => {
  return (
    <>
      {/* Custom CSS Styles - All styling contained here for simplicity */}
      <style>{`
        /* ===== GLOBAL STYLES ===== */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
          scroll-behavior: smooth;
        }

        /* ===== GRADIENT VARIABLES ===== */
        :root {
          --primary-gradient: linear-gradient(135deg, #1e3a8a 0%, #0891b2 50%, #0e7490 100%);
          --secondary-gradient: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          --accent-gradient: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
          --light-gradient: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }

        /* ===== HEADER & NAVIGATION ===== */
        .header {
          background: var(--primary-gradient);
          padding: 1rem 0;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 20px rgba(0,0,0,0.1);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          color: white;
          text-decoration: none;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          gap: 2rem;
        }

        .nav-link {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #06b6d4;
        }

        /* ===== HERO SECTION ===== */
        .hero {
          background: var(--primary-gradient);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          opacity: 0.3;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        .hero h1 {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          animation: fadeInUp 1s ease-out;
        }

        .hero p {
          font-size: 1.3rem;
          margin-bottom: 2rem;
          opacity: 0.9;
          animation: fadeInUp 1s ease-out 0.2s both;
        }

        .cta-button {
          background: var(--accent-gradient);
          color: white;
          padding: 1rem 2.5rem;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;
          animation: fadeInUp 1s ease-out 0.4s both;
          box-shadow: 0 4px 15px rgba(6, 182, 212, 0.3);
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(6, 182, 212, 0.4);
        }

        /* ===== SECTIONS COMMON STYLES ===== */
        .section {
          padding: 5rem 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: var(--primary-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          text-align: center;
          font-size: 1.2rem;
          color: #64748b;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* ===== SERVICES SECTION ===== */
        .services {
          background: var(--light-gradient);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .service-card {
          background: white;
          padding: 2.5rem;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 5px 25px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          border: 1px solid rgba(6, 182, 212, 0.1);
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.12);
        }

        .service-icon {
          width: 60px;
          height: 60px;
          background: var(--accent-gradient);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-size: 1.5rem;
          color: white;
        }

        .service-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1e293b;
        }

        .service-card p {
          color: #64748b;
          line-height: 1.6;
        }

        /* ===== ABOUT SECTION ===== */
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about-text h2 {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          background: var(--primary-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .about-text p {
          color: #64748b;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
          line-height: 1.7;
        }

        .about-features {
          list-style: none;
        }

        .about-features li {
          color: #64748b;
          margin-bottom: 0.8rem;
          position: relative;
          padding-left: 2rem;
        }

        .about-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #06b6d4;
          font-weight: bold;
        }

        .about-image {
          background: var(--primary-gradient);
          border-radius: 15px;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
          position: relative;
          overflow: hidden;
        }

        /* ===== CONTACT SECTION ===== */
        .contact {
          background: var(--secondary-gradient);
          color: white;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        .contact-info h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: #06b6d4;
        }

        .contact-item {
          margin-bottom: 1.5rem;
        }

        .contact-item h4 {
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .contact-item p {
          opacity: 0.9;
        }

        .contact-form {
          background: rgba(255,255,255,0.1);
          padding: 2rem;
          border-radius: 15px;
          backdrop-filter: blur(10px);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.8rem;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 8px;
          background: rgba(255,255,255,0.1);
          color: white;
          font-size: 1rem;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(255,255,255,0.7);
        }

        .submit-btn {
          background: var(--accent-gradient);
          color: white;
          padding: 1rem 2rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(6, 182, 212, 0.3);
        }

        /* ===== FOOTER ===== */
        .footer {
          background: #0f172a;
          color: white;
          text-align: center;
          padding: 2rem 0;
        }

        /* ===== ANIMATIONS ===== */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ===== RESPONSIVE DESIGN ===== */
        @media (max-width: 768px) {
          .nav-menu {
            display: none;
          }

          .hero h1 {
            font-size: 2.5rem;
          }

          .hero p {
            font-size: 1.1rem;
          }

          .about-content,
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* ===== HEADER NAVIGATION ===== */}
      <header className="header">
        <nav className="nav-container">
          {/* Company Logo */}
          <a href="#home" className="logo">FRP Solutions</a>
          
          {/* Navigation Menu */}
          <ul className="nav-menu">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Advanced Fiber Reinforced Polymer Solutions</h1>
          <p>
            Leading manufacturer and engineering company specializing in high-performance 
            FRP composites for industrial, marine, and construction applications.
          </p>
          <a href="#contact" className="cta-button">Get a Quote Today</a>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section id="services" className="section services">
        <div className="container">
          <h2 className="section-title">Our FRP Services</h2>
          <p className="section-subtitle">
            Comprehensive fiber reinforced polymer solutions from design to manufacturing
          </p>
          
          <div className="services-grid">
            {/* Service 1: Manufacturing */}
            <div className="service-card">
              <div className="service-icon">🏭</div>
              <h3>FRP Manufacturing</h3>
              <p>
                State-of-the-art manufacturing facilities producing high-quality fiber 
                reinforced polymer products using advanced pultrusion, filament winding, 
                and hand lay-up techniques.
              </p>
            </div>

            {/* Service 2: Engineering */}
            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3>Structural Engineering</h3>
              <p>
                Expert engineering design and analysis for FRP structures, ensuring 
                optimal performance, durability, and compliance with industry standards 
                and building codes.
              </p>
            </div>

            {/* Service 3: Custom Solutions */}
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Custom Solutions</h3>
              <p>
                Tailored FRP solutions for unique applications including marine 
                components, chemical processing equipment, architectural elements, 
                and specialized industrial parts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="section about">
        <div className="container">
          <div className="about-content">
            {/* About Text Content */}
            <div className="about-text">
              <h2>Why Choose Our FRP Solutions?</h2>
              <p>
                With over two decades of experience in fiber reinforced polymer 
                technology, we deliver innovative solutions that exceed industry 
                standards. Our team combines advanced engineering expertise with 
                cutting-edge manufacturing capabilities.
              </p>
              
              {/* Key Features List */}
              <ul className="about-features">
                <li>ISO 9001:2015 certified quality management</li>
                <li>Advanced composite materials and resins</li>
                <li>Custom design and engineering services</li>
                <li>Rapid prototyping and testing capabilities</li>
                <li>Comprehensive project management</li>
                <li>Post-installation support and maintenance</li>
              </ul>
            </div>

            {/* About Image/Visual */}
            <div className="about-image">
              <div>
                <h3>25+ Years</h3>
                <p>Industry Experience</p>
                <br />
                <h3>500+ Projects</h3>
                <p>Successfully Completed</p>
                <br />
                <h3>100% Quality</h3>
                <p>Guaranteed Results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title" style={{color: 'white'}}>Get In Touch</h2>
          <p className="section-subtitle" style={{color: 'rgba(255,255,255,0.8)'}}>
            Ready to discuss your FRP project? Contact our expert team today
          </p>

          <div className="contact-content">
            {/* Contact Information */}
            <div className="contact-info">
              <h3>Contact Information</h3>
              
              <div className="contact-item">
                <h4>📍 Address</h4>
                <p>123 Industrial Drive<br />Manufacturing District<br />City, State 12345</p>
              </div>

              <div className="contact-item">
                <h4>📞 Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>

              <div className="contact-item">
                <h4>✉️ Email</h4>
                <p>info@frpsolutions.com</p>
              </div>

              <div className="contact-item">
                <h4>🕒 Business Hours</h4>
                <p>Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 3:00 PM</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <form onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for your inquiry! We will contact you within 24 hours.');
              }}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" placeholder="Enter your full name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" placeholder="Enter your email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" placeholder="Enter your company name" />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    placeholder="Tell us about your FRP project requirements..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">Send Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 FRP Solutions. All rights reserved. | Fiber Reinforced Polymer Manufacturing & Engineering</p>
        </div>
      </footer>

      {/* ===== JAVASCRIPT FUNCTIONALITY ===== */}
      <script dangerouslySetInnerHTML={{
        __html: `
          // ===== SMOOTH SCROLLING FOR NAVIGATION LINKS =====
          document.addEventListener('DOMContentLoaded', function() {
            // Get all navigation links
            const navLinks = document.querySelectorAll('.nav-link');
            
            // Add smooth scrolling to each navigation link
            navLinks.forEach(link => {
              link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Get the target section ID from the href
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                  // Calculate offset for fixed header
                  const headerHeight = document.querySelector('.header').offsetHeight;
                  const targetPosition = targetSection.offsetTop - headerHeight;
                  
                  // Smooth scroll to target position
                  window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                  });
                }
              });
            });

            // ===== HEADER BACKGROUND ON SCROLL =====
            window.addEventListener('scroll', function() {
              const header = document.querySelector('.header');
              
              if (window.scrollY > 100) {
                header.style.background = 'rgba(30, 58, 138, 0.95)';
                header.style.backdropFilter = 'blur(15px)';
              } else {
                header.style.background = 'var(--primary-gradient)';
                header.style.backdropFilter = 'blur(10px)';
              }
            });

            // ===== ANIMATE ELEMENTS ON SCROLL =====
            const observerOptions = {
              threshold: 0.1,
              rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.style.opacity = '1';
                  entry.target.style.transform = 'translateY(0)';
                }
              });
            }, observerOptions);

            // Observe service cards and other elements for animation
            const animateElements = document.querySelectorAll('.service-card, .about-text, .contact-info');
            animateElements.forEach(el => {
              el.style.opacity = '0';
              el.style.transform = 'translateY(30px)';
              el.style.transition = 'all 0.6s ease-out';
              observer.observe(el);
            });

            // ===== FORM VALIDATION AND ENHANCEMENT =====
            const contactForm = document.querySelector('form');
            const inputs = contactForm.querySelectorAll('input, textarea');
            
            // Add focus effects to form inputs
            inputs.forEach(input => {
              input.addEventListener('focus', function() {
                this.style.borderColor = '#06b6d4';
                this.style.boxShadow = '0 0 10px rgba(6, 182, 212, 0.3)';
              });
              
              input.addEventListener('blur', function() {
                this.style.borderColor = 'rgba(255,255,255,0.2)';
                this.style.boxShadow = 'none';
              });
            });

            console.log('FRP Solutions website loaded successfully!');
            console.log('All interactive features are working:');
            console.log('- Smooth scrolling navigation');
            console.log('- Dynamic header background');
            console.log('- Scroll animations');
            console.log('- Form enhancements');
          });
        `
      }} />
    </>
  );
};

export default Index;
