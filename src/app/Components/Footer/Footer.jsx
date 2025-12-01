"use client"
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer-section-new">
            <div className="footer-container-new">
                <div className="footer-content-wrapper">
                    {/* Left Section - Company Info */}
                    <div className="footer-left-section">
                        <div className="footer-logo-section">
                            <Link href="/" className="footer-logo-link">
                                <svg className="footer-logo-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 21L12 3L21 21H3Z" fill="#635BFF" stroke="#635BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="footer-logo-text">PropelusAI</span>
                            </Link>
                        </div>
                        <div className="footer-version-items">

                            <div className="version-item">
                                <span>Everything your business needs, all in one platform. We help companies grow through innovative technology solutions.
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Middle Section - Navigation Links */}
                    <div className="footer-middle-section">
                        {/* Resources Column */}
                        <div className="footer-column">
                            <h3 className="footer-column-title">Resources</h3>
                            <ul className="footer-link-list">
                                <li><Link href="/resources#freebies">Freebies</Link></li>
                                <li><Link href="/resources#documentation">Documentation</Link></li>
                                <li><Link href="/blog">Blog</Link></li>
                                <li><Link href="/resources#refund">Refund Policy</Link></li>
                            </ul>
                        </div>

                        {/* Support Column */}
                        <div className="footer-column">
                            <h3 className="footer-column-title">Support</h3>
                            <ul className="footer-link-list">
                                <li><Link href="/pricing">Pricing</Link></li>
                                <li><Link href="/faq">FAQs</Link></li>
                                <li><Link href="/resources#support">Support</Link></li>
                                <li><Link href="/resources#license">License Terms</Link></li>
                                <li><Link href="/resources#discord">Discord</Link></li>
                            </ul>
                        </div>

                        {/* Company Column */}
                        <div className="footer-column">
                            <h3 className="footer-column-title">Company</h3>
                            <ul className="footer-link-list">
                                <li><Link href="/about#why">Why PropelusAI?</Link></li>
                                <li><Link href="/about">About</Link></li>
                                <li><Link href="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom - Copyright and Social */}
                <div className="footer-bottom-new">
                    <div className="footer-bottom-content">
                        <p className="footer-copyright">
                            Copyright © {new Date().getFullYear()} PropelusAI
                        </p>
                        <div className="footer-social-icons">
                            <a href="#" aria-label="LinkedIn">
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a href="#" aria-label="Facebook">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="#" aria-label="YouTube">
                                <i className="bi bi-youtube"></i>
                            </a>
                            <a href="#" aria-label="GitHub">
                                <i className="bi bi-github"></i>
                            </a>
                            <a href="#" aria-label="Dribbble">
                                <i className="bi bi-dribbble"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
