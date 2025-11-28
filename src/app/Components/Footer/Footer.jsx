"use client"
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer-section position-relative">
            <div className="footer-widgets-wrapper style1 fix">
                <div className="container">
                    {/* Newsletter Section */}
                    <div className="row mb-5">
                        <div className="col-12">
                            <div className="footer-newsletter">
                                <div className="newsletter-content">
                                    <h3>Stay updated</h3>
                                    <p>Subscribe to our newsletter for the latest updates and insights.</p>
                                </div>
                                <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                                    <div className="newsletter-input-wrapper">
                                        <input 
                                            type="email" 
                                            placeholder="Enter your email"
                                            className="newsletter-input"
                                            required
                                        />
                                        <button type="submit" className="theme-btn newsletter-btn">
                                            Subscribe
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Footer Columns */}
                    <div className="row">
                        {/* Services Column */}
                        <div className="col-xl-2 col-lg-2 col-md-4 col-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Services</h3>
                                </div>
                                <ul className="list-area">
                                    <li>
                                        <Link href="/service/website-development">
                                            Website Development
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service/mobile-apps">
                                            Mobile Apps
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service/linkedin-marketing">
                                            LinkedIn Marketing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service/lead-generation">
                                            Lead Generation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service/marketing-automation">
                                            Marketing Automation
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Solutions Column */}
                        <div className="col-xl-2 col-lg-2 col-md-4 col-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Solutions</h3>
                                </div>
                                <ul className="list-area">
                                    <li>
                                        <Link href="/solutions">
                                            For Business
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/solutions">
                                            For Enterprise
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/solutions">
                                            For Startups
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/solutions">
                                            Integrations
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Resources Column */}
                        <div className="col-xl-2 col-lg-2 col-md-4 col-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Resources</h3>
                                </div>
                                <ul className="list-area">
                                    <li>
                                        <Link href="/blog">
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/resources">
                                            Documentation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/resources">
                                            Case Studies
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/resources">
                                            Guides
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faq">
                                            FAQ
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Company Column */}
                        <div className="col-xl-2 col-lg-2 col-md-4 col-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Company</h3>
                                </div>
                                <ul className="list-area">
                                    <li>
                                        <Link href="/about">
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/team">
                                            Our Team
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            Contact
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pricing">
                                            Pricing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/project">
                                            Projects
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Connect Column */}
                        <div className="col-xl-4 col-lg-4 col-md-8 col-12 wow fadeInUp" data-wow-delay=".6s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <Link href="/">
                                        <span className="footer-logo-text">PropelusAI</span>
                                    </Link>
                                </div>
                                <div className="footer-content">
                                    <p>
                                        Everything your business needs, all in one platform. We help companies grow through innovative technology solutions.
                                    </p>
                                    <div className="widget-head">
                                        <h3>Connect</h3>
                                    </div>
                                    <div className="footer-social-links">
                                        <a href="#" aria-label="Facebook">
                                            <i className="bi bi-facebook"></i>
                                        </a>
                                        <a href="#" aria-label="Twitter">
                                            <i className="bi bi-twitter"></i>
                                        </a>
                                        <a href="#" aria-label="LinkedIn">
                                            <i className="bi bi-linkedin"></i>
                                        </a>
                                        <a href="#" aria-label="Instagram">
                                            <i className="bi bi-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Footer Bottom - Copyright */}
            <div className="footer-bottom style1">
                <div className="container">
                    <div className="footer-wrapper d-flex align-items-center justify-content-between">
                        <p className="wow fadeInLeft" data-wow-delay=".3s">
                            Copyright © {new Date().getFullYear()} PropelusAI. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
