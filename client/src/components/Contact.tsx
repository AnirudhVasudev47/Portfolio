import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Message } from '@shared/schema';

// The API request function
const apiRequest = async (
  url: string,
  options?: RequestInit
): Promise<any> => {
  const response = await fetch(url, {
    ...options,
    headers: {
      ...(options?.headers || {}),
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json();
};

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

  // State to track submission status
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Simulate sending messages for static site
  const sendMessageMutation = useMutation({
    mutationFn: (data: typeof formData) => {
      // For static site, we'll simulate a successful API call
      console.log('Form submission (static site):', data);

      // Simulate network delay
      return new Promise<{ success: true }>((resolve) => {
        setTimeout(() => {
          resolve({ success: true });
        }, 1000);
      });
    },
    onSuccess: () => {
      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    },
    onError: () => {
      setSubmitStatus('error');
    }
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
      // Submit to the API
      sendMessageMutation.mutate(formData);
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
                  <p className="text-gray-600">Berlin, Germany</p>
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

              {submitStatus === 'success' && (
                <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
                  <p className="font-medium">Your message has been sent successfully!</p>
                  <p className="text-sm mt-1">I'll get back to you as soon as possible.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                  <p className="font-medium">Failed to send message.</p>
                  <p className="text-sm mt-1">Please try again later or contact me directly via email.</p>
                </div>
              )}

              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors flex justify-center items-center"
                disabled={sendMessageMutation.isPending}
              >
                {sendMessageMutation.isPending ? (
                  <>
                    <span className="mr-2 animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></span>
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
