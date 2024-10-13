import React, { useState } from 'react';

const SignUp = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!email) newErrors.email = 'Please enter your email';
    if (!password) newErrors.password = 'Please enter your password';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!agreeTerms) newErrors.agreeTerms = 'Please agree to the Leafit terms';

    if (Object.keys(newErrors).length === 0) {
      // Handle successful signup here
      console.log('Signup successful');
      onClose();
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Join Leafit</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-white">&times;</button>
      </div>
      <p className="text-gray-400 mb-6">Sign up and enter a world of amazing books</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full bg-gray-700 text-white rounded px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-300 mb-2">Password</label>
          <input
            type="password"
            id="password"
            className="w-full bg-gray-700 text-white rounded px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-300 mb-2">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full bg-gray-700 text-white rounded px-3 py-2"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
        </div>
        <div className="mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox text-indigo-600"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
            />
            <span className="ml-2 text-gray-300">I agree to abide by the code of conduct & all Leafit policies.</span>
          </label>
          {errors.agreeTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeTerms}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white rounded-md py-2 font-semibold hover:bg-indigo-700 transition duration-300"
        >
          Join Leafit
        </button>
      </form>
    </div>
  );
};

export default SignUp;