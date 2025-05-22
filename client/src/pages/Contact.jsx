import React, { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Simulate API call delay
      await new Promise((res) => setTimeout(res, 1500));
      // Here you would actually send the form data via fetch/axios
      setFormSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-green-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-green-100">
        <h1 className="text-4xl font-bold text-green-600 mb-6 text-center">Contact Us</h1>

        <div className="mb-8 text-gray-700 text-center space-y-1">
          <p>
            📞 Phone:{" "}
            <a href="tel:+91123456789" className="text-green-600 hover:underline">
              +91 (123) 456-789
            </a>
          </p>
          <p>
            📧 Email:{" "}
            <a href="mailto:contact@gocart.com" className="text-green-600 hover:underline">
              contact@gocart.com
            </a>
          </p>
        </div>

        {formSubmitted ? (
          <div className="flex flex-col items-center text-green-800 bg-green-100 border border-green-300 rounded-lg p-6 animate-fade-in">
            <CheckCircle className="w-10 h-10 mb-2 text-green-600" />
            <p className="text-lg font-semibold text-center">Thank you for contacting us! We'll get back to you soon. ✅</p>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit} aria-live="polite">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              ></textarea>
            </div>

            {error && (
              <p className="text-red-600 text-sm">{error}</p>
            )}

            <div>
              <button
                type="submit"
                className="inline-flex justify-center items-center px-6 py-2 cursor-pointer border border-transparent text-sm font-semibold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-150"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin h-5 w-5 mr-2" /> Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
