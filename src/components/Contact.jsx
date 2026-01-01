import React, { useState } from 'react'
import Title from './ExperienceHeader.jsx'
import ContactExperience from './ContactExperience.jsx'
import Button from './Button.jsx'
// Replace with your Formspree or other endpoint if you plan to send form data
const FORM_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_YOUR_ID'
import emailjs from '@emailjs/browser';
import { useRef } from 'react'

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false) 

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 1. Basic Validation
    if (!form.name || !form.email || !form.message) {
      setStatus('Please fill out all fields.');
      return;
    }

    setLoading(true);

    try {
      // 2. Send via EmailJS
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // 3. Success Handling (Moved inside the try block)
      setStatus('Message sent — thanks!');
      setForm({ name: '', email: '', message: '' }); // Clear form

    } catch (error) {
      // 4. Error Handling
      console.error('EmailJS error:', error);
      setStatus('Sending failed. Please email sengkuansk123@gmail.com instead.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <Title title="Get In Touch" sub="📨 Feel free to reach out!" />
        <div className="grid-12-cols items-center">
          {/* LEFT: Form */}
          <div className="col-span-12 xl:col-span-5  ">
            <div className="flex-center card-border rounded-xl p-10">
                
            <form 
              onSubmit={handleSubmit} 
              className="w-full flex flex-col gap-4 mt-8 space-y-4 max-w-lg"
              ref={formRef}>
              <label className="input-label">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="input-field"
              />

              <label className="input-label">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="input-field"
              />

              <label className="input-label">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can I help?"
                rows="6"
                className="input-field"
              />

            
            <button type="submit" disabled={loading}>
                    <div className="cta-button group">
                        <div className="bg-circle"></div>
                        <p className='text'> {loading ? "Sending..." : "Send Message"}</p>
                        <div className="arrow-wrapper">
                            <img src="/portfoliosite/images/arrow-right.svg" alt="arrow" />
                        </div>
                    </div>
            </button>

              
              {status && <p className="text-white-50 mt-2">{status}</p>}
            </form>

            </div>
            
          </div>

          {/* RIGHT: 3D model */}
          <div className="col-span-12 lg:col-span-7">
            <div className="w-full h-full hover:cursor-grab rounded-2xl bg-violet-300">
             <ContactExperience />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact