import React from 'react';

const Contact = () => {
  return (
    <div className="page">
      <div className="container">
        <div className="card p-8">
          <h1 className="title">Contact Us</h1>
          <form className="form">
            <label>Name</label>
            <input type="text" className="input" placeholder="Your name" />
            <label>Email</label>
            <input type="email" className="input" placeholder="Your email" />
            <label>Message</label>
            <textarea className="input" rows={4} placeholder="Your message"></textarea>
            <button className="btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
