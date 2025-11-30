"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Solutions = () => {
    const [activeSolution, setActiveSolution] = useState(null);

    const solutions = [
        {
            id: 'startups',
            title: 'For Startups',
            subtitle: 'Launch faster with automation',
            description: 'Get your startup off the ground quickly with intelligent automation that scales with you. Perfect for early-stage companies looking to maximize efficiency without the overhead.',
            icon: 'bi-rocket-takeoff',
            color: '#FFDC64',
            features: [
                'Content generation for marketing',
                'Automated lead capture and nurturing',
                'Basic workflow automation',
                'Email marketing automation',
                'Social media content scheduling',
                'Analytics and reporting dashboard'
            ],
            benefits: [
                'Reduce manual work by 60%',
                'Launch marketing campaigns in days, not weeks',
                'Scale operations without hiring',
                'Focus on product development, not operations'
            ],
            cta: 'Start Free Trial',
            ctaUrl: '/demo',
            testimonial: {
                quote: 'PropelusAI helped us launch our marketing in just 2 days. Game changer!',
                author: 'Sarah Chen',
                role: 'Founder, TechStart Inc.',
                avatar: '/assets/images/team/team1.jpg'
            }
        },
        {
            id: 'agencies',
            title: 'For Agencies',
            subtitle: 'Deliver more value to your clients',
            description: 'Scale your agency operations and deliver exceptional results for multiple clients simultaneously. Manage campaigns, automate workflows, and provide white-label solutions.',
            icon: 'bi-bullseye',
            color: '#FFB4C8',
            features: [
                'Multi-client management dashboard',
                'White-label branding options',
                'Advanced automation workflows',
                'Client reporting and analytics',
                'Team collaboration tools',
                'API access for custom integrations'
            ],
            benefits: [
                'Manage 10x more clients with the same team',
                'Deliver consistent results across all clients',
                'Reduce client churn with better outcomes',
                'Increase profit margins through automation'
            ],
            cta: 'Schedule Demo',
            ctaUrl: '/demo',
            testimonial: {
                quote: 'We\'ve doubled our client capacity without adding staff. PropelusAI is our secret weapon.',
                author: 'Michael Rodriguez',
                role: 'CEO, Digital Growth Agency',
                avatar: '/assets/images/team/team2.jpg'
            }
        },
        {
            id: 'enterprise',
            title: 'For Enterprise',
            subtitle: 'Enterprise-grade automation at scale',
            description: 'Powerful automation solutions for large organizations. Custom integrations, dedicated support, and enterprise security to transform your entire operation.',
            icon: 'bi-building',
            color: '#C8B4FF',
            features: [
                'Custom automation workflows',
                'Unlimited automation workflows',
                'Dedicated account manager',
                '24/7 priority support',
                'Enterprise security & compliance',
                'Custom integrations and APIs',
                'SLA guarantees',
                'On-premise deployment options'
            ],
            benefits: [
                'Transform entire departments with automation',
                'Meet compliance and security requirements',
                'Scale to thousands of users',
                'Get dedicated support when you need it'
            ],
            cta: 'Contact Sales',
            ctaUrl: '/contact',
            testimonial: {
                quote: 'PropelusAI transformed our marketing operations. ROI was visible within the first quarter.',
                author: 'Jennifer Park',
                role: 'CMO, Fortune 500 Company',
                avatar: '/assets/images/team/team3.jpg'
            }
        },
        {
            id: 'founders',
            title: 'For Founders',
            subtitle: 'Build and scale your business',
            description: 'Everything you need to build, grow, and automate your business. From content creation to lead generation, automate the repetitive tasks so you can focus on what matters.',
            icon: 'bi-lightbulb',
            color: '#FFDC64',
            features: [
                'Complete business automation suite',
                'Automated content creation',
                'Lead generation and nurturing',
                'Email and SMS automation',
                'CRM integration',
                'Financial tracking and reporting'
            ],
            benefits: [
                'Build a self-running business',
                'Automate 80% of repetitive tasks',
                'Scale without proportional cost increase',
                'Focus on strategy, not execution'
            ],
            cta: 'Get Started Free',
            ctaUrl: '/demo',
            testimonial: {
                quote: 'As a solo founder, PropelusAI is like having a team of 10. Incredible value.',
                author: 'David Kim',
                role: 'Founder, Solo Ventures',
                avatar: '/assets/images/team/team4.jpg'
            }
        }
    ];

    return (
        <section className="solutions-section section-padding fix">
            <div className="container">
                {/* Hero Section */}
                <div className="solutions-hero text-center mb-5">
                    <div className="solutions-badge">
                        <span><i className="bi bi-stars"></i> Tailored Solutions</span>
                    </div>
                    <h1 className="solutions-title">
                        Solutions Built for Your Business
                    </h1>
                    <p className="solutions-subtitle">
                        Whether you're a startup, agency, enterprise, or founder, we have the perfect automation solution to help you grow faster and work smarter.
                    </p>
                </div>

                {/* Solutions Grid */}
                <div className="solutions-grid">
                    {solutions.map((solution, index) => (
                        <div
                            key={solution.id}
                            id={solution.id}
                            className={`solution-card ${activeSolution === solution.id ? 'active' : ''}`}
                            onMouseEnter={() => setActiveSolution(solution.id)}
                            onMouseLeave={() => setActiveSolution(null)}
                        >
                            <div className="solution-card-header">
                                <div className="solution-icon" style={{ background: `${solution.color}20`, color: solution.color }}>
                                    <i className={`bi ${solution.icon}`} style={{ fontSize: '32px' }}></i>
                                </div>
                                <h3 className="solution-card-title">{solution.title}</h3>
                                <p className="solution-card-subtitle">{solution.subtitle}</p>
                            </div>
                            
                            <div className="solution-card-body">
                                <p className="solution-description">{solution.description}</p>
                                
                                <div className="solution-features">
                                    <h4 className="features-title">Key Features:</h4>
                                    <ul className="features-list">
                                        {solution.features.map((feature, idx) => (
                                            <li key={idx} className="feature-item">
                                                <span className="feature-check" style={{ color: solution.color }}>
                                                    ✓
                                                </span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="solution-benefits">
                                    <h4 className="benefits-title">Benefits:</h4>
                                    <ul className="benefits-list">
                                        {solution.benefits.map((benefit, idx) => (
                                            <li key={idx} className="benefit-item">
                                                <span className="benefit-icon" style={{ color: solution.color }}>
                                                    →
                                                </span>
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="solution-card-footer">
                                <Link
                                    href={solution.ctaUrl}
                                    className="solution-cta-btn"
                                    style={{ 
                                        background: `linear-gradient(135deg, ${solution.color} 0%, ${solution.color}dd 100%)`,
                                        color: '#fff'
                                    }}
                                >
                                    {solution.cta}
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z" fill="currentColor"/>
                                    </svg>
                                </Link>
                            </div>

                            {/* Testimonial */}
                            <div className="solution-testimonial">
                                <div className="testimonial-content">
                                    <p className="testimonial-quote">"{solution.testimonial.quote}"</p>
                                    <div className="testimonial-author">
                                        <div className="author-avatar">
                                            <div className="avatar-placeholder" style={{ background: solution.color }}>
                                                {solution.testimonial.author.charAt(0)}
                                            </div>
                                        </div>
                                        <div className="author-info">
                                            <div className="author-name">{solution.testimonial.author}</div>
                                            <div className="author-role">{solution.testimonial.role}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Comparison Section */}
                <div className="solutions-comparison">
                    <div className="comparison-header text-center mb-5">
                        <h2 className="comparison-title">Compare Solutions</h2>
                        <p className="comparison-subtitle">Find the perfect fit for your needs</p>
                    </div>
                    
                    <div className="comparison-table-wrapper">
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    {solutions.map((solution) => (
                                        <th key={solution.id}>{solution.title}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Content Generation</td>
                                    {solutions.map((solution) => (
                                        <td key={solution.id}>
                                            {solution.id === 'enterprise' ? '✓ Advanced' : '✓'}
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td>Automation Workflows</td>
                                    {solutions.map((solution) => (
                                        <td key={solution.id}>
                                            {solution.id === 'enterprise' ? '✓ Unlimited' : solution.id === 'agencies' ? '✓ Advanced' : '✓ Basic'}
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td>Team Members</td>
                                    {solutions.map((solution) => (
                                        <td key={solution.id}>
                                            {solution.id === 'enterprise' ? 'Unlimited' : solution.id === 'agencies' ? 'Up to 50' : solution.id === 'startups' ? 'Up to 10' : 'Up to 5'}
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td>Support</td>
                                    {solutions.map((solution) => (
                                        <td key={solution.id}>
                                            {solution.id === 'enterprise' ? '24/7 Priority' : solution.id === 'agencies' ? 'Priority' : 'Email'}
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td>Custom Integrations</td>
                                    {solutions.map((solution) => (
                                        <td key={solution.id}>
                                            {solution.id === 'enterprise' ? '✓ Unlimited' : solution.id === 'agencies' ? '✓ API Access' : '✓ Limited'}
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="solutions-cta-section">
                    <div className="cta-content text-center">
                        <h2 className="cta-title">Not sure which solution is right for you?</h2>
                        <p className="cta-subtitle">Schedule a free consultation and we'll help you find the perfect fit.</p>
                        <div className="cta-buttons">
                            <Link href="/demo" className="theme-btn">
                                Schedule a Demo
                            </Link>
                            <Link href="/contact" className="theme-btn style2">
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solutions;

