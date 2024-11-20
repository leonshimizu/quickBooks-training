"use client";

import { useState } from 'react'
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Leaf, Feather, Droplet, Moon } from 'lucide-react'
import Image from "next/image";

export default function ZenQuickBooksTraining() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", phone: "", message: "" });
  };  

  return (
    <div className="min-h-screen bg-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Leaf className="h-8 w-8 text-green-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">Mindful QuickBooks</span>
              </div>
            </div>
            <div className="flex items-center">
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">About</Button>
              <Button variant="ghost">Contact</Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="bg-green-600 bg-opacity-80">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Find Balance in Your Finances
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-green-100">
            Discover inner peace through mindful financial management. Our zen-inspired QuickBooks training helps you harmonize your business and personal finances.
          </p>
          <div className="mt-10">
            <a href="https://forms.gle/HuuF7VNv4nqAKQpU9" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="white" className="bg-white text-green-600 hover:bg-green-50">
                Begin Your Journey
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">The Path to Financial Harmony</h2>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Feather className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-lg font-medium text-gray-900">Mindful Bookkeeping</h3>
                <p className="mt-2 text-base text-gray-500">
                  Learn to approach your finances with awareness and intention, creating a sense of calm in your business.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Droplet className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-lg font-medium text-gray-900">Flow of Finances</h3>
                <p className="mt-2 text-base text-gray-500">
                  Understand the natural ebb and flow of your business finances, reducing stress and anxiety.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Moon className="h-12 w-12 text-indigo-500 mb-4" />
                <h3 className="text-lg font-medium text-gray-900">Tax Tranquility</h3>
                <p className="mt-2 text-base text-gray-500">
                  Achieve peace of mind knowing your taxes are in order, allowing you to focus on what truly matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">Begin Your Mindful QuickBooks Journey</h2>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  What brings you to this path?
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
              <div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Embark on Your Journey
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <figure className="max-w-screen-md mx-auto text-center">
            <svg className="w-10 h-10 mx-auto mb-3 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <blockquote>
              <p className="text-2xl italic font-medium text-gray-900">
                &quot;This mindful approach to QuickBooks has transformed not just my business finances, but my entire relationship with money. I feel more at peace and in control than ever before.&quot;
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <Image
                className="w-6 h-6 rounded-full"
                src="/placeholder.svg"
                alt="profile picture"
                width={24}
                height={24}
              />
              <div className="flex items-center divide-x-2 divide-gray-500">
                <cite className="pr-3 font-medium text-gray-900">Sarah Johnson</cite>
                <cite className="pl-3 text-sm text-gray-500">Yoga Studio Owner</cite>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-600 bg-opacity-80">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-base text-white">
            &copy; 2023 Mindful QuickBooks Training. Find your balance.
          </p>
        </div>
      </footer>
    </div>
  )
}
