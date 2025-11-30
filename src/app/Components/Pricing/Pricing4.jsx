"use client"
import { useState } from "react";
import Link from "next/link";

const Pricing4 = () => {
    const [billingCycle, setBillingCycle] = useState('monthly');
    const [openFaq, setOpenFaq] = useState(null);

    const pricingPlans = {
        monthly: [
            {
                name: "Starter",
                price: "$99",
                period: "per month",
                description: "Perfect for small teams getting started with automation",
                popular: false,
                features: [
                    { text: "Content Generation", icon: "✓", color: "#FFDC64" },
                    { text: "Up to 5 team members", icon: "✓", color: "#FFDC64" },
                    { text: "10,000 automation requests/month", icon: "✓", color: "#FFDC64" },
                    { text: "Basic automation workflows", icon: "✓", color: "#FFDC64" },
                    { text: "Email support", icon: "✓", color: "#FFDC64" },
                    { text: "1 custom integration", icon: "✓", color: "#FFDC64" }
                ],
                cta: "Start Free Trial",
                ctaUrl: "/demo",
                ctaStyle: "secondary"
            },
            {
                name: "Growth",
                price: "$299",
                period: "per month",
                description: "For growing businesses ready to scale",
                popular: true,
                savings: "Save 20% with annual billing",
                features: [
                    { text: "Everything in Starter", icon: "✓", color: "#FFB4C8" },
                    { text: "Up to 25 team members", icon: "✓", color: "#FFB4C8" },
                    { text: "100,000 automation requests/month", icon: "✓", color: "#FFB4C8" },
                    { text: "Advanced automation workflows", icon: "✓", color: "#FFB4C8" },
                    { text: "Priority support", icon: "✓", color: "#FFB4C8" },
                    { text: "5 custom integrations", icon: "✓", color: "#FFB4C8" },
                    { text: "Analytics dashboard", icon: "✓", color: "#FFB4C8" },
                    { text: "API access", icon: "✓", color: "#FFB4C8" }
                ],
                cta: "Start Free Trial",
                ctaUrl: "/demo",
                ctaStyle: "primary"
            },
            {
                name: "Enterprise",
                price: "Custom",
                period: "",
                description: "Tailored solutions for large organizations",
                popular: false,
                features: [
                    { text: "Everything in Growth", icon: "✓", color: "#C8B4FF" },
                    { text: "Unlimited team members", icon: "✓", color: "#C8B4FF" },
                    { text: "Unlimited automation requests", icon: "✓", color: "#C8B4FF" },
                    { text: "Custom automation workflows", icon: "✓", color: "#C8B4FF" },
                    { text: "Dedicated account manager", icon: "✓", color: "#C8B4FF" },
                    { text: "24/7 phone support", icon: "✓", color: "#C8B4FF" },
                    { text: "Unlimited integrations", icon: "✓", color: "#C8B4FF" },
                    { text: "SLA guarantee", icon: "✓", color: "#C8B4FF" },
                    { text: "Custom security & compliance", icon: "✓", color: "#C8B4FF" }
                ],
                cta: "Contact Sales",
                ctaUrl: "/contact",
                ctaStyle: "secondary"
            }
        ],
        yearly: [
            {
                name: "Starter",
                price: "$79",
                period: "per month",
                originalPrice: "$99",
                description: "Perfect for small teams getting started with automation",
                popular: false,
                features: [
                    { text: "Content Generation", icon: "✓", color: "#FFDC64" },
                    { text: "Up to 5 team members", icon: "✓", color: "#FFDC64" },
                    { text: "10,000 automation requests/month", icon: "✓", color: "#FFDC64" },
                    { text: "Basic automation workflows", icon: "✓", color: "#FFDC64" },
                    { text: "Email support", icon: "✓", color: "#FFDC64" },
                    { text: "1 custom integration", icon: "✓", color: "#FFDC64" }
                ],
                cta: "Start Free Trial",
                ctaUrl: "/demo",
                ctaStyle: "secondary"
            },
            {
                name: "Growth",
                price: "$239",
                period: "per month",
                originalPrice: "$299",
                description: "For growing businesses ready to scale",
                popular: true,
                savings: "Save 20% with annual billing",
                features: [
                    { text: "Everything in Starter", icon: "✓", color: "#FFB4C8" },
                    { text: "Up to 25 team members", icon: "✓", color: "#FFB4C8" },
                    { text: "100,000 automation requests/month", icon: "✓", color: "#FFB4C8" },
                    { text: "Advanced automation workflows", icon: "✓", color: "#FFB4C8" },
                    { text: "Priority support", icon: "✓", color: "#FFB4C8" },
                    { text: "5 custom integrations", icon: "✓", color: "#FFB4C8" },
                    { text: "Analytics dashboard", icon: "✓", color: "#FFB4C8" },
                    { text: "API access", icon: "✓", color: "#FFB4C8" }
                ],
                cta: "Start Free Trial",
                ctaUrl: "/demo",
                ctaStyle: "primary"
            },
            {
                name: "Enterprise",
                price: "Custom",
                period: "",
                description: "Tailored solutions for large organizations",
                popular: false,
                features: [
                    { text: "Everything in Growth", icon: "✓", color: "#C8B4FF" },
                    { text: "Unlimited team members", icon: "✓", color: "#C8B4FF" },
                    { text: "Unlimited automation requests", icon: "✓", color: "#C8B4FF" },
                    { text: "Custom automation workflows", icon: "✓", color: "#C8B4FF" },
                    { text: "Dedicated account manager", icon: "✓", color: "#C8B4FF" },
                    { text: "24/7 phone support", icon: "✓", color: "#C8B4FF" },
                    { text: "Unlimited integrations", icon: "✓", color: "#C8B4FF" },
                    { text: "SLA guarantee", icon: "✓", color: "#C8B4FF" },
                    { text: "Custom security & compliance", icon: "✓", color: "#C8B4FF" }
                ],
                cta: "Contact Sales",
                ctaUrl: "/contact",
                ctaStyle: "secondary"
            }
        ]
    };

    const faqs = [
        {
            question: "Can I try PropelusAI for free?",
            answer: "Yes! All plans include a 14-day free trial. No credit card required. You'll have full access to all features during the trial period."
        },
        {
            question: "What happens after my free trial ends?",
            answer: "After your 14-day trial, you can choose to upgrade to a paid plan or your account will be paused. You can resume anytime by selecting a plan."
        },
        {
            question: "Can I change plans later?",
            answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges."
        },
        {
            question: "Do you offer discounts for annual billing?",
            answer: "Yes! Annual billing saves you 20% compared to monthly billing. The savings are automatically applied when you select annual billing."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, debit cards, and ACH transfers. Enterprise customers can also pay via invoice."
        },
        {
            question: "Is there a setup fee?",
            answer: "No setup fees for Starter and Growth plans. Enterprise plans may include implementation services depending on your requirements."
        },
        {
            question: "What's included in the automation requests limit?",
            answer: "Automation requests include content generation, workflow automation triggers, data analysis, and any API calls. We'll show you usage in your dashboard."
        },
        {
            question: "Can I get a custom quote?",
            answer: "Yes! Contact our sales team for Enterprise plans or if you need custom features, higher limits, or special pricing for multiple teams."
        }
    ];

    const currentPlans = pricingPlans[billingCycle];
    const savings = billingCycle === 'yearly' ? '20%' : '0%';

    return (
        <section className="pricing-section-new section-padding fix">
            <div className="container">
                {/* Section Header */}
                <div className="pricing-header text-center mb-5">
                    <div className="pricing-badge">
                        <span><i className="bi bi-tag"></i> Transparent Pricing</span>
                    </div>
                    <h2 className="pricing-title">Transparent Pricing, Maximum Value</h2>
                    <p className="pricing-subtitle">
                        Choose the plan that fits your needs. All plans include a 14-day free trial—no credit card required.
                    </p>
                </div>

                {/* Pricing Toggle */}
                <div className="pricing-toggle-wrapper">
                    <div className="pricing-toggle-container">
                        <span className={`toggle-label ${billingCycle === 'monthly' ? 'active' : ''}`}>Monthly</span>
                        <button
                            className="pricing-toggle"
                            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                            aria-label={`Switch to ${billingCycle === 'monthly' ? 'yearly' : 'monthly'} billing`}
                            aria-pressed={billingCycle === 'yearly'}
                            role="switch"
                        >
                            <span className={`toggle-slider ${billingCycle === 'yearly' ? 'active' : ''}`}></span>
                        </button>
                        <span className={`toggle-label ${billingCycle === 'yearly' ? 'active' : ''}`}>
                            Yearly
                            {billingCycle === 'yearly' && <span className="savings-badge">Save 20%</span>}
                        </span>
                    </div>
                    <div className="aria-live-region" aria-live="polite" aria-atomic="true">
                        {billingCycle === 'yearly' ? 'Annual billing selected. Save 20% compared to monthly billing.' : 'Monthly billing selected.'}
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="pricing-cards-grid">
                    {currentPlans.map((plan, index) => (
                        <div
                            key={plan.name}
                            className={`pricing-card-new ${plan.popular ? 'popular' : ''}`}
                        >
                            {plan.popular && (
                                <div className="popular-badge">
                                    <span>Most Popular</span>
                                </div>
                            )}
                            
                            <div className="pricing-card-header">
                                <h3 className="plan-name">{plan.name}</h3>
                                <div className="price-wrapper">
                                    {plan.originalPrice && (
                                        <span className="original-price">{plan.originalPrice}</span>
                                    )}
                                    <span className="price">{plan.price}</span>
                                    {plan.period && <span className="period">/{plan.period}</span>}
                                </div>
                                {plan.originalPrice && (
                                    <div className="savings-text">
                                        Save ${parseInt(plan.originalPrice.replace('$', '')) - parseInt(plan.price.replace('$', ''))}/mo
                                    </div>
                                )}
                                <p className="plan-description">{plan.description}</p>
                            </div>

                            <div className="pricing-card-body">
                                <ul className="features-list">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="feature-item">
                                            <span 
                                                className="feature-icon" 
                                                style={{ color: feature.color }}
                                            >
                                                {feature.icon}
                                            </span>
                                            <span className="feature-text">{feature.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pricing-card-footer">
                                <Link
                                    href={plan.ctaUrl}
                                    className={`pricing-cta-btn ${plan.ctaStyle === 'primary' ? 'primary' : 'secondary'}`}
                                >
                                    {plan.cta}
                                </Link>
                                {plan.name !== 'Enterprise' && (
                                    <p className="trial-text">14-day free trial • No credit card required</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Calculator Link */}
                <div className="pricing-calculator-link text-center mt-5">
                    <Link href="#calculator" className="calculator-link">
                        Not sure? Calculate your needs →
                    </Link>
                </div>

                {/* FAQ Section */}
                <div className="pricing-faq-section">
                    <div className="faq-header text-center mb-5">
                        <h3 className="faq-title">Frequently Asked Questions</h3>
                        <p className="faq-subtitle">Everything you need to know about our pricing</p>
                    </div>
                    
                    <div className="faq-accordion">
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <button
                                    className={`faq-question ${openFaq === index ? 'open' : ''}`}
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    aria-expanded={openFaq === index}
                                >
                                    <span>{faq.question}</span>
                                    <svg
                                        className={`faq-chevron ${openFaq === index ? 'open' : ''}`}
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                    >
                                        <path
                                            d="M5 7.5L10 12.5L15 7.5"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                                <div className={`faq-answer ${openFaq === index ? 'open' : ''}`}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing4;
