import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=joyslifefoundation";

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically make an API call to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
  
      <section className="page-banner">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with us for any queries or support</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              {/* <h2>Get in Touch</h2>
              <p>We're here to help and answer any questions you might have. We look forward to hearing from you.</p> */}
              
              <div className="info-cards">
                <div className="info-card">
                  <div className="icon">📍</div>
                  <div className="content">
                    <h3>Our Location</h3>
                    <p>ECIL near Kapar</p>
                    <p>Hyderabad, City - 500062</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="icon">📞</div>
                  <div className="content">
                    <h3>Phone Number</h3>
                    <p>+91 6300334632</p>
                    <p>+91 9948020408</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="icon">✉️</div>
                  <div className="content">
                    <h3>Email Address</h3>
                    <p>joyslifefoundation9@gmail.com</p>
                    <p>support@joyslife.org</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="icon">⏰</div>
                  <div className="content">
                    <h3>Working Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h2>Send us a Message</h2>
              {submitStatus === 'success' && (
                <div className="alert alert-success">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="alert alert-error">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'error' : ''}
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? 'error' : ''}
                  />
                  {errors.subject && <span className="error-message">{errors.subject}</span>}
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                    rows="5"
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>
                <button 
                  type="submit" 
                  className="btn btn-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="donation-section">
        <div className="container">
          <h2>Support Our Cause</h2>
          <div className="donation-grid">
            <div className="donation-info">
              <h3>Make a Difference</h3>
              <p>Your contribution can help us provide better care and support to cancer patients. Every donation, no matter how small, makes a significant impact.</p>
              
              <div className="donation-details">
                <div className="detail-card">
                  <h4>Bank Details</h4>
                  <p>Account Name: Joy's Life Foundation</p>
                  <p>Account Number: XXXX XXXX XXXX</p>
                  <p>Bank: [Bank Name]</p>
                  <p>IFSC Code: XXXX0000000</p>
                </div>

                <div className="detail-card">
                  <h4>UPI Payment</h4>
                  <p>Scan the QR code to donate instantly</p>
                  <div className="qr-code">
                    <img src={qrCodeUrl} alt="Donation QR Code" />
                  </div>
                </div>
              </div>
            </div>

            <div className="donation-impact">
              <h3>Your Impact</h3>
              <div className="impact-cards">
                <div className="impact-card">
                  <div className="icon">💊</div>
                  <h4>Medical Support</h4>
                  <p>Help provide essential medicines and treatments</p>
                </div>
                <div className="impact-card">
                  <div className="icon">🏥</div>
                  <h4>Healthcare Access</h4>
                  <p>Support hospital visits and medical procedures</p>
                </div>
                <div className="impact-card">
                  <div className="icon">👨‍👩‍👧‍👦</div>
                  <h4>Family Support</h4>
                  <p>Assist families with counseling and resources</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2>Find Us</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.4498849642664!2d78.56079317419497!3d17.48602489995797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b7dcb7cd3d9%3A0x806963d06ef9db5c!2s1-80-27%2F1%2C%20Sri%20Ram%20Nagar%2C%20Kapra%2C%20Secunderabad%2C%20Telangana%20500062!5e0!3m2!1sen!2sin!4v1747756985710!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;