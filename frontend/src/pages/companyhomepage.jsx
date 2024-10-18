import React from 'react'
import Navbar from '../Components/NavbarHome'
import Footer from '../Components/Footer'
import backgroundImage from '../images/homebgimg.png'
import jobPoster from '../images/jobposter.png'
import { Link } from 'react-route   r-dom'
import './companyhomepage.css'
import jobStatusimg from '../images/jobstatusview.png'
const companyhomepage = () => {
    return (
        import React from 'react';
import './companyhomepage.css'; // Create a separate CSS file for styling or use inline styles

const JobPortal = () => {
  return (
    <div className="job-portal">
      {/* Header Section */}
      <header className="header">
        <nav className="navbar">
          <div className="nav-logo">
            {/* You can add your logo here */}
            <img src="logo.png" alt="Right Resource Fit Logo" />
          </div>
          <div className="nav-links">
            <button className="btn">Post a Jobs</button>
            <button className="btn">About</button>
            <button className="btn">Account</button>
          </div>
        </nav>
        <div className="header-content">
          <h1>FIND YOUR DREAM JOB NOW</h1>
          <p>
            Right Resource Fit connects talented job seekers with top employers. Explore 5000+ job opportunities and find your perfect match. Whether you're hiring or seeking, we help you achieve success!
          </p>
          <button className="btn-primary">Start Posting Jobs</button>
        </div>
      </header>

      {/* Job Posting Section */}
      <section className="job-posting">
        <div className="posting-info">
          <h2>Start posting jobs today</h2>
          <button className="btn-primary">Start for Free</button>
        </div>
        <div className="stats">
          <img src="dashboard-screenshot.png" alt="Dashboard" />
        </div>
      </section>

      {/* Search Job Section */}
      <section className="search-jobs">
        <h2>The most effective way to land a job.</h2>
        <div className="search-info">
          <div className="left-column">
            <p>Show rejected applications or show relevant applications.</p>
            <ul>
              <li>Jobs</li>
              <li>Assessments</li>
              <li>Applicants</li>
              <li>Date</li>
              <li>Status</li>
            </ul>
          </div>
          <div className="right-column">
            <ul>
              <li>Search for jobs based on location, skills, etc.</li>
              <li>View the status of the job applications.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-columns">
          <div className="footer-about">
            <p>
              An excellent platform for job seekers passionate about startups. Discover your ideal job with ease.
            </p>
            <div className="social-media">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-linkedin"></i></a>
            </div>
          </div>
          <div className="footer-links">
            <h4>About</h4>
            <ul>
              <li>Companies</li>
              <li>Pricing</li>
              <li>Terms</li>
              <li>Advice</li>
            </ul>
          </div>
          <div className="footer-resources">
            <h4>Resources</h4>
            <ul>
              <li>Help Docs</li>
              <li>Guide</li>
              <li>Updates</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-subscribe">
            <h4>Get Job Notifications</h4>
            <form>
              <input type="email" placeholder="Email Address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};
    )}
export default companyhomepage;
