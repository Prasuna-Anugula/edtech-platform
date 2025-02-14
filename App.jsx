import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-4">Study MBBS Abroad</h1>
        <p className="text-lg">Apply now and take the first step toward your medical career.</p>
        <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-gray-200">
          Apply Now
        </button>
      </section>

      {/* Why Study MBBS Abroad */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Why Study MBBS Abroad?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="font-bold">Affordable Tuition</h3>
            <p>Lower fees compared to private medical colleges in India.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="font-bold">Global Recognition</h3>
            <p>Degrees accredited by WHO, MCI, and other medical councils.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="font-bold">High-Quality Education</h3>
            <p>Top universities with world-class facilities.</p>
          </div>
        </div>
      </section>

      {/* Top Countries */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Top MBBS Destinations</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Russia", "Uzbekistan", "Kazakhstan", "Philippines", "Georgia", "Kyrgyzstan", "Egypt"].map((country, index) => (
            <div key={index} className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md">
              {country}
            </div>
          ))}
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Admission Process</h2>
        <ol className="list-decimal text-left max-w-lg mx-auto space-y-2">
          <li>Choose a country and university.</li>
          <li>Check eligibility and required documents.</li>
          <li>Submit your application.</li>
          <li>Receive your admission letter.</li>
          <li>Apply for a student visa.</li>
          <li>Book your flight and start your journey!</li>
        </ol>
      </section>

      {/* Lead Form */}
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Get More Information</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mb-3 border rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mb-3 border rounded-md"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mb-3 border rounded-md"
          />
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mb-3 border rounded-md"
          >
            <option value="">Select Preferred Country</option>
            <option value="Russia">Russia</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Philippines">Philippines</option>
            <option value="Georgia">Georgia</option>
            <option value="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Egypt">Egypt</option>
          </select>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Submit
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-6">
        <p>&copy; 2025 Study MBBS Abroad. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;