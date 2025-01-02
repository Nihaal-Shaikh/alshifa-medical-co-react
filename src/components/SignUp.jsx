import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [criteria, setCriteria] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  });

  const validateForm = () => {
    const newErrors = {};

    // Validate Email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address.';
    }

    // Validate Password
    if (
      !criteria.length ||
      !criteria.uppercase ||
      !criteria.lowercase ||
      !criteria.number ||
      !criteria.special
    ) {
      newErrors.password =
        'Password must meet all the strength requirements.';
    }

    // Validate Password Match
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'password') {
      setCriteria({
        length: value.length >= 8,
        uppercase: /[A-Z]/.test(value),
        lowercase: /[a-z]/.test(value),
        number: /\d/.test(value),
        special: /[@$!%*?&]/.test(value),
      });
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/sign-up', {
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.confirmPassword,
      });
      console.log('Signup successful:', response.data);
      // TODO: Add navigation or success UI feedback
    } catch (error) {
      console.error('Signup failed:', error.response?.data || error.message);
      // TODO: Show error feedback to user
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Create your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSignUp} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-900">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder-gray-400 focus:outline-indigo-600"
            />
            {errors.fullName && <p className="text-red-600 text-sm">{errors.fullName}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder-gray-400 focus:outline-indigo-600"
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder-gray-400 focus:outline-indigo-600"
            />
            <ul className="mt-2 text-sm">
              <li className={`${criteria.length ? 'text-green-600' : 'text-red-600'}`}>
                At least 8 characters
              </li>
              <li className={`${criteria.uppercase ? 'text-green-600' : 'text-red-600'}`}>
                At least one uppercase letter
              </li>
              <li className={`${criteria.lowercase ? 'text-green-600' : 'text-red-600'}`}>
                At least one lowercase letter
              </li>
              <li className={`${criteria.number ? 'text-green-600' : 'text-red-600'}`}>
                At least one number
              </li>
              <li className={`${criteria.special ? 'text-green-600' : 'text-red-600'}`}>
                At least one special character (@$!%*?&)
              </li>
            </ul>
            {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-900">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder-gray-400 focus:outline-indigo-600"
            />
            {errors.confirmPassword && <p className="text-red-600 text-sm">{errors.confirmPassword}</p>}
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <Link to="/sign-in" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
