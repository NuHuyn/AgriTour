import React, { useState } from "react";
import "./Contact.css";
import Chatbot from "../../components/Chatbot/Chatbot";
import { sendContactEmail } from "../../components/Services/email";

const Contact = () => {
  const [form, setForm] = useState({
    type: "Travel",
    name: "",
    email: "",
    phone: "",
    company: "",
    guests: 1,
    address: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    let err = {};

    if (!form.name.trim()) err.name = "Name is required.";
    if (!form.email.includes("@")) err.email = "Invalid email.";
    if (!form.phone.trim()) err.phone = "Phone is required.";
    if (!form.subject.trim()) err.subject = "Subject is required.";
    if (!form.message.trim()) err.message = "Message cannot be empty.";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    await sendContactEmail(form);
    setSuccess("Your message has been sent successfully!");
  };

  const update = (key, val) => {
    setForm({ ...form, [key]: val });
  };

  return (
    <div className="contact-wrapper">
      <h2 className="contact-title">CONTACT US</h2>
      <p className="contact-desc">
        To help us respond quickly, please fill out the form below or chat directly with our assistant.
      </p>

      <div className="contact-grid">

        {/* LEFT FORM */}
        <div className="contact-left">
          <form className="contact-form" onSubmit={handleSubmit}>

            {/* Type · Name · Email */}
            <div className="form-row">
              <div className="form-group">
                <label>Inquiry Type *</label>
                <select
                  value={form.type}
                  onChange={(e) => update("type", e.target.value)}
                >
                  <option>Travel</option>
                  <option>Partnership</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Enter your full name"
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="Enter your email"
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
            </div>

            {/* Phone · Company · Guests */}
            <div className="form-row">
              <div className="form-group">
                <label>Phone *</label>
                <input
                  type="text"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="Enter phone number"
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label>Company</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  placeholder="Enter company name"
                />
              </div>

              <div className="form-group">
                <label>Guests</label>
                <input
                  type="number"
                  min="1"
                  value={form.guests}
                  onChange={(e) => update("guests", e.target.value)}
                />
              </div>
            </div>

            {/* Address */}
            <div className="form-group full">
              <label>Address</label>
              <input
                type="text"
                value={form.address}
                onChange={(e) => update("address", e.target.value)}
                placeholder="Enter your address"
              />
            </div>

            {/* Subject */}
            <div className="form-group full">
              <label>Subject *</label>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => update("subject", e.target.value)}
                placeholder="Enter subject"
              />
              {errors.subject && <span className="error">{errors.subject}</span>}
            </div>

            {/* Message */}
            <div className="form-group full">
              <label>Message *</label>
              <textarea
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Enter message"
              ></textarea>
              {errors.message && <span className="error">{errors.message}</span>}
            </div>

            <button className="contact-btn">Submit</button>

            {success && <p className="success-msg">{success}</p>}
          </form>
        </div>

        {/* RIGHT CHATBOT */}
        <div className="contact-right">
          <h3>Live Support</h3>

          <div className="chatbot-box">
            <Chatbot />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
