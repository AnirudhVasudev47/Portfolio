import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }
    
    setErrors(newErrors);
    
    if (valid) {
      // Redirect to email client
      window.location.href = `mailto:anirudh040799@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }
  };

  return (
    <section id="contact" className="py-20 section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-primary text-xl mt-1 mr-4">
                  <i className="ri-mail-line"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <a href="mailto:anirudh040799@gmail.com" className="text-gray-600 hover:text-primary transition-colors">anirudh040799@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-primary text-xl mt-1 mr-4">
                  <i className="ri-linkedin-box-line"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">LinkedIn</h4>
                  <a href="https://linkedin.com/in/anirudh-vasudev" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">linkedin.com/in/anirudh-vasudev</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-primary text-xl mt-1 mr-4">
                  <i className="ri-global-line"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Website</h4>
                  <a href="https://anirudhvasudev.online" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">anirudhvasudev.online</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-primary text-xl mt-1 mr-4">
                  <i className="ri-map-pin-line"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Location</h4>
                  <p className="text-gray-600">Bangalore, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Your name" 
                  className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors`}
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Your email" 
                  className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors`}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  placeholder="Your message" 
                  className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors`}
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
              </div>
              
              <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
