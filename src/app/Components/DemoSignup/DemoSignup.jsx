"use client"
import { useState } from 'react';
import Link from 'next/link';

const DemoSignup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        useCase: '',
        countryCode: '+1',
        phone: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const [phoneError, setPhoneError] = useState('');

    const countryCodes = [
        { code: '+1', country: 'US/CA', flag: '🇺🇸', maxLength: 10, minLength: 10, pattern: /^\d{10}$/ },
        { code: '+91', country: 'IN', flag: '🇮🇳', maxLength: 10, minLength: 10, pattern: /^\d{10}$/ },
        { code: '+44', country: 'UK', flag: '🇬🇧', maxLength: 10, minLength: 10, pattern: /^\d{10}$/ },
        { code: '+61', country: 'AU', flag: '🇦🇺', maxLength: 9, minLength: 9, pattern: /^\d{9}$/ },
        { code: '+49', country: 'DE', flag: '🇩🇪', maxLength: 11, minLength: 10, pattern: /^\d{10,11}$/ },
        { code: '+33', country: 'FR', flag: '🇫🇷', maxLength: 9, minLength: 9, pattern: /^\d{9}$/ },
        { code: '+81', country: 'JP', flag: '🇯🇵', maxLength: 10, minLength: 10, pattern: /^\d{10}$/ },
        { code: '+86', country: 'CN', flag: '🇨🇳', maxLength: 11, minLength: 11, pattern: /^\d{11}$/ },
        { code: '+971', country: 'AE', flag: '🇦🇪', maxLength: 9, minLength: 9, pattern: /^\d{9}$/ },
        { code: '+65', country: 'SG', flag: '🇸🇬', maxLength: 8, minLength: 8, pattern: /^\d{8}$/ },
        { code: '+34', country: 'ES', flag: '🇪🇸', maxLength: 9, minLength: 9, pattern: /^\d{9}$/ },
        { code: '+39', country: 'IT', flag: '🇮🇹', maxLength: 10, minLength: 9, pattern: /^\d{9,10}$/ },
        { code: '+7', country: 'RU', flag: '🇷🇺', maxLength: 10, minLength: 10, pattern: /^\d{10}$/ },
        { code: '+55', country: 'BR', flag: '🇧🇷', maxLength: 11, minLength: 10, pattern: /^\d{10,11}$/ },
        { code: '+52', country: 'MX', flag: '🇲🇽', maxLength: 10, minLength: 10, pattern: /^\d{10}$/ },
        { code: '+27', country: 'ZA', flag: '🇿🇦', maxLength: 9, minLength: 9, pattern: /^\d{9}$/ },
        { code: '+82', country: 'KR', flag: '🇰🇷', maxLength: 10, minLength: 9, pattern: /^\d{9,10}$/ },
        { code: '+31', country: 'NL', flag: '🇳🇱', maxLength: 9, minLength: 9, pattern: /^\d{9}$/ },
        { code: '+46', country: 'SE', flag: '🇸🇪', maxLength: 9, minLength: 9, pattern: /^\d{9}$/ },
        { code: '+41', country: 'CH', flag: '🇨🇭', maxLength: 9, minLength: 9, pattern: /^\d{9}$/ }
    ];

    const getCurrentCountry = () => {
        return countryCodes.find(c => c.code === formData.countryCode) || countryCodes[0];
    };

    const validatePhone = (phone, countryCode) => {
        const country = countryCodes.find(c => c.code === countryCode);
        if (!country || !phone) return '';
        
        // Only show error if user has entered digits but format is wrong
        if (phone.length > 0 && phone.length < country.minLength) {
            return `Phone number must be ${country.minLength} digits`;
        }
        if (phone.length > country.maxLength) {
            return `Phone number must be ${country.maxLength} digits`;
        }
        // Only validate pattern if user has entered the minimum required digits
        if (phone.length >= country.minLength && !country.pattern.test(phone)) {
            return `Invalid phone number format for ${country.country}`;
        }
        return '';
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        if (name === 'phone') {
            // Only allow numbers
            const numbersOnly = value.replace(/\D/g, '');
            const currentCountry = getCurrentCountry();
            
            // Limit to max length for current country
            const limitedValue = numbersOnly.slice(0, currentCountry.maxLength);
            
            setFormData({
                ...formData,
                [name]: limitedValue
            });
            
            // Validate phone number - only show error if invalid format or exceeds max
            if (limitedValue.length > 0) {
                const error = validatePhone(limitedValue, formData.countryCode);
                setPhoneError(error);
            } else {
                setPhoneError('');
            }
        } else if (name === 'countryCode') {
            // Reset phone validation when country changes
            setFormData({
                ...formData,
                [name]: value,
                phone: '' // Clear phone when country changes
            });
            setPhoneError('');
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setIsSubmitting(false);
        setSubmitted(true);
    };

    const useCases = [
        { value: 'website', label: 'Website Development', icon: 'bi-globe' },
        { value: 'mobile', label: 'Mobile App Development', icon: 'bi-phone' },
        { value: 'marketing', label: 'LinkedIn Marketing & Content', icon: 'bi-bar-chart' },
        { value: 'leads', label: 'Lead Generation & Funnels', icon: 'bi-bullseye' },
        { value: 'automation', label: 'Marketing Automation', icon: 'bi-lightning-charge' },
        { value: 'email', label: 'Custom Email Domains', icon: 'bi-envelope' },
        { value: 'security', label: 'Cybersecurity Solutions', icon: 'bi-shield-lock' },
        { value: 'other', label: 'Other', icon: 'bi-briefcase' }
    ];

    if (submitted) {
        return (
            <section className="demo-signup-section section-padding fix">
                <div className="container">
                    <div className="demo-success-wrapper">
                        <div className="demo-success-content">
                            <div className="success-icon">
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="url(#successGradient)"/>
                                    <path d="M20 32L28 40L44 24" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                    <defs>
                                        <linearGradient id="successGradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#00E599"/>
                                            <stop offset="1" stopColor="#00C2A8"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <h2 className="success-title">We'll be in touch soon!</h2>
                            <p className="success-desc">
                                Thanks for your interest in PropelusAI. Our team will review your request and get back to you within 24 hours to schedule your personalized demo.
                            </p>
                            <div className="success-actions">
                                <Link href="/" className="theme-btn">
                                    Back to Home
                                </Link>
                                <Link href="/resources" className="theme-btn style2">
                                    Explore Resources
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="demo-signup-section section-padding fix">
            <div className="container">
                <div className="demo-signup-wrapper">
                    <div className="row g-5 align-items-center">
                        {/* Left: Content & Benefits */}
                        <div className="col-xl-5">
                            <div className="demo-content">
                                <div className="demo-badge">
                                    <span><i className="bi bi-star"></i> Free Demo</span>
                                </div>
                                <h1 className="demo-title">
                                    See how PropelusAI can transform your business
                                </h1>
                                <p className="demo-subtitle">
                                    Book a personalized 30-minute demo and discover how our automated solutions can help you grow faster, streamline workflows, and scale your operations.
                                </p>
                                
                                <div className="demo-benefits">
                                    <h3 className="benefits-title">What you'll learn:</h3>
                                    <ul className="benefits-list">
                                        <li>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#00E599" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <span>How automation streamlines your marketing and operations</span>
                                        </li>
                                        <li>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#00E599" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <span>Real examples from businesses like yours</span>
                                        </li>
                                        <li>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#00E599" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <span>Custom pricing and implementation timeline</span>
                                        </li>
                                        <li>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#00E599" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <span>Answers to your specific questions</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="demo-trust">
                                    <p className="trust-text">
                                        <strong>Trusted by 500+ businesses</strong> worldwide. No credit card required.
                                    </p>
                                </div>

                                {/* Trust Row with Logos and Metrics */}
                                <div className="demo-trust-row">
                                    <div className="trust-logos">
                                        <div className="trust-logo-item">
                                            <div className="trust-logo-placeholder">Logo 1</div>
                                        </div>
                                        <div className="trust-logo-item">
                                            <div className="trust-logo-placeholder">Logo 2</div>
                                        </div>
                                        <div className="trust-logo-item">
                                            <div className="trust-logo-placeholder">Logo 3</div>
                                        </div>
                                        <div className="trust-logo-item">
                                            <div className="trust-logo-placeholder">Logo 4</div>
                                        </div>
                                    </div>
                                    <div className="trust-metrics">
                                        <div className="trust-metric">
                                            <span className="metric-value">2,291+</span>
                                            <span className="metric-label">Happy Customers</span>
                                        </div>
                                        <div className="trust-metric">
                                            <span className="metric-value">4.8/5</span>
                                            <span className="metric-label">Rating</span>
                                        </div>
                                        <div className="trust-metric">
                                            <span className="metric-value">24hr</span>
                                            <span className="metric-label">Response Time</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Hero CTA Structure */}
                                <div className="demo-cta-group">
                                    <Link href="#demo-form" className="theme-btn demo-cta-primary">
                                        <span>Schedule a Demo</span>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z" fill="currentColor"/>
                                        </svg>
                                    </Link>
                                    <div className="demo-cta-secondary-group">
                                        <Link href="/service" className="demo-cta-secondary">
                                            Explore Features
                                        </Link>
                                        <span className="cta-separator">or</span>
                                        <Link href="/pricing" className="demo-cta-secondary">
                                            View Pricing
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Minimal Form */}
                        <div className="col-xl-7" id="demo-form">
                            <div className="demo-form-container">
                                <div className="demo-form-card">
                                    <div className="form-header">
                                        <h2 className="form-title">Book your free demo</h2>
                                        <p className="form-subtitle">
                                            We'd love to show you around! Just share a few details and we'll find the perfect time for your personalized walkthrough.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="demo-form">
                                        <div className="form-group">
                                            <label htmlFor="name">
                                                Full Name <span className="required">*</span>
                                            </label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        placeholder="Your full name"
                                                        required
                                                        className="form-input"
                                                    />
                                                    <p className="form-hint">We'll use this to personalize your demo experience</p>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email">
                                                Work Email <span className="required">*</span>
                                            </label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="you@company.com"
                                                        required
                                                        className="form-input"
                                                    />
                                                    <p className="form-hint">We'll send the meeting details here—nothing spammy, promise!</p>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="company">
                                                Company Name <span className="required">*</span>
                                            </label>
                                                    <input
                                                        type="text"
                                                        id="company"
                                                        name="company"
                                                        value={formData.company}
                                                        onChange={handleChange}
                                                        placeholder="Your company name"
                                                        required
                                                        className="form-input"
                                                    />
                                                    <p className="form-hint">Helps us tailor the demo to your industry</p>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="phone">
                                                Phone Number <span className="optional">(optional)</span>
                                            </label>
                                            <div className="phone-input-wrapper">
                                                <div className="country-code-container">
                                                    <select
                                                        name="countryCode"
                                                        value={formData.countryCode}
                                                        onChange={handleChange}
                                                        className="country-code-select"
                                                        aria-label="Country code"
                                                    >
                                                        {countryCodes.map((country) => (
                                                            <option key={country.code} value={country.code}>
                                                                {country.flag} {country.code}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder={getCurrentCountry().maxLength === 10 ? "1234567890" : "123456789"}
                                                    className={`form-input phone-input ${phoneError ? 'error' : ''}`}
                                                    pattern="[0-9]*"
                                                    inputMode="numeric"
                                                    maxLength={getCurrentCountry().maxLength}
                                                />
                                            </div>
                                            {phoneError && (
                                                <p className="form-error">{phoneError}</p>
                                            )}
                                            {!phoneError && (
                                                <p className="form-hint">Optional, but helpful if we need to reach you quickly</p>
                                            )}
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="useCase">
                                                What are you most interested in? <span className="required">*</span>
                                            </label>
                                            <div className="use-case-grid">
                                                {useCases.map((useCase) => (
                                                    <label key={useCase.value} className="use-case-option">
                                                        <input
                                                            type="radio"
                                                            name="useCase"
                                                            value={useCase.value}
                                                            checked={formData.useCase === useCase.value}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                        <div className="use-case-content">
                                                            <span className="use-case-icon"><i className={`bi ${useCase.icon}`}></i></span>
                                                            <span className="use-case-label">{useCase.label}</span>
                                                        </div>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="form-actions">
                                            <button 
                                                type="submit" 
                                                className="theme-btn demo-submit-btn"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <span className="spinner"></span>
                                                        Scheduling...
                                                    </>
                                                ) : (
                                                    <>
                                                        Schedule Demo
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                            <path d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z" fill="white"/>
                                                        </svg>
                                                    </>
                                                )}
                                            </button>
                                            <p className="form-footer-text">
                                                By submitting, you agree to our <Link href="/privacy">Privacy Policy</Link> and <Link href="/terms">Terms of Service</Link>.
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoSignup;

