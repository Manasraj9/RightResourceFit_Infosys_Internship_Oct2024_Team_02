import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#112d4e] text-[#d6ddeb] pt-10 pb-1">
      <div className="container mx-auto px-6">
        <div className="flex justify-between mb-5">
          <div className="w-[370px] h-[80px] text-[#d6ddeb] text-lg font-normal font-['Epilogue'] leading-relaxed">An excellent platform for job seekers passionate about startups. Discover your ideal job with easier.</div>
          {/* About Section */}
          <div>
            <h3 className="flex-col text-lg font-semibold hover:text-white">About</h3>
            <ul className="mt-4 space-y-2 hover:text-white flex flex-col">
              <li>Companies</li>
              <li>Pricing</li>
              <li>Terms</li>
              <li>Advice</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold hover:text-white">Resources</h3>
            <ul className="mt-4 space-y-2 hover:text-white flex flex-col">
              <li>Help Docs</li>
              <li>Guide</li>
              <li>Updates</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Get Job Notifications Section */}
          <div>
            <h3 className="text-lg font-semibold">Get job notifications</h3>
            <p className="mt-4 text-gray-400">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-2 rounded-l-md border-none text-gray-900"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:text-[#112d4e]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-1">
          <p className="text-center text-gray-400">
            2024 © Right Resource Fit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
