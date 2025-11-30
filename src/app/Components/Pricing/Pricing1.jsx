"use client"
import { useState } from "react";
import Link from "next/link";

const Pricing1 = () => {
    const [billingCycle, setBillingCycle] = useState('monthly');

    const pricingPlans = {
        monthly: [
            {
                name: "Starter",
                price: "$99",
                period: "per month",
                description: "Perfect for small teams getting started",
                popular: false,
                features: [
                    "Content Generation",
                    "Up to 5 team members",
                    "10,000 automation requests/month",
                    "Basic automation workflows",
                    "Email support"
                ],
                cta: "Start Free Trial",
                ctaUrl: "/demo"
            },
            {
                name: "Growth",
                price: "$299",
                period: "per month",
                description: "For growing businesses ready to scale",
                popular: true,
                features: [
                    "Everything in Starter",
                    "Up to 25 team members",
                    "100,000 automation requests/month",
                    "Advanced automation workflows",
                    "Priority support",
                    "5 custom integrations",
                    "Analytics dashboard",
                    "API access"
                ],
                cta: "Start Free Trial",
                ctaUrl: "/demo"
            },
            {
                name: "Enterprise",
                price: "Custom",
                period: "",
                description: "Tailored solutions for large organizations",
                popular: false,
                features: [
                    "Everything in Growth",
                    "Unlimited team members",
                    "Unlimited automation requests",
                    "Custom automation workflows",
                    "Dedicated account manager",
                    "24/7 priority support",
                    "Unlimited integrations",
                    "SLA guarantees"
                ],
                cta: "Contact Sales",
                ctaUrl: "/contact"
            }
        ],
        yearly: [
            {
                name: "Starter",
                price: "$79",
                period: "per month",
                originalPrice: "$99",
                description: "Perfect for small teams getting started",
                popular: false,
                features: [
                    "Content Generation",
                    "Up to 5 team members",
                    "10,000 automation requests/month",
                    "Basic automation workflows",
                    "Email support"
                ],
                cta: "Start Free Trial",
                ctaUrl: "/demo"
            },
            {
                name: "Growth",
                price: "$239",
                period: "per month",
                originalPrice: "$299",
                description: "For growing businesses ready to scale",
                popular: true,
                features: [
                    "Everything in Starter",
                    "Up to 25 team members",
                    "100,000 automation requests/month",
                    "Advanced automation workflows",
                    "Priority support",
                    "5 custom integrations",
                    "Analytics dashboard",
                    "API access"
                ],
                cta: "Start Free Trial",
                ctaUrl: "/demo"
            },
            {
                name: "Enterprise",
                price: "Custom",
                period: "",
                description: "Tailored solutions for large organizations",
                popular: false,
                features: [
                    "Everything in Growth",
                    "Unlimited team members",
                    "Unlimited automation requests",
                    "Custom automation workflows",
                    "Dedicated account manager",
                    "24/7 priority support",
                    "Unlimited integrations",
                    "SLA guarantees"
                ],
                cta: "Contact Sales",
                ctaUrl: "/contact"
            }
        ]
    };

    const currentPlans = pricingPlans[billingCycle];

    return (
        <section className="pricing-section-home section-padding pt-0 fix">
        <div className="container">
            <div className="pricing-header-home text-center mb-5">
                <div className="pricing-badge-home">
                    <span><i className="bi bi-tag"></i> Transparent Pricing</span>
                </div>
                <h2 className="pricing-title-home">Transparent Pricing, Maximum Value</h2>
                <p className="pricing-subtitle-home">
                    Choose the plan that fits your needs. All plans include a 14-day free trial—no credit card required.
                </p>
            </div>
            {/* Pricing Toggle */}
            <div className="pricing-toggle-wrapper-home mb-5">
                <div className="pricing-toggle-container-home">
                    <span className={`toggle-label-home ${billingCycle === 'monthly' ? 'active' : ''}`}>Monthly</span>
                    <button
                        className="pricing-toggle-home"
                        onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                        aria-label={`Switch to ${billingCycle === 'monthly' ? 'yearly' : 'monthly'} billing`}
                        aria-pressed={billingCycle === 'yearly'}
                        role="switch"
                    >
                        <span className={`toggle-slider-home ${billingCycle === 'yearly' ? 'active' : ''}`}></span>
                    </button>
                    <span className={`toggle-label-home ${billingCycle === 'yearly' ? 'active' : ''}`}>
                        Yearly
                        {billingCycle === 'yearly' && <span className="savings-badge-home">Save 20%</span>}
                    </span>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="pricing-cards-grid-home">
                {currentPlans.map((plan, index) => (
                    <div
                        key={plan.name}
                        className={`pricing-card-home ${plan.popular ? 'popular' : ''}`}
                    >
                        {plan.popular && (
                            <div className="popular-badge-home">
                                <span>Most Popular</span>
                            </div>
                        )}
                        
                        <div className="pricing-card-header-home">
                            <h3 className="plan-name-home">{plan.name}</h3>
                            <div className="price-wrapper-home">
                                {plan.originalPrice && (
                                    <span className="original-price-home">{plan.originalPrice}</span>
                                )}
                                <span className="price-home">{plan.price}</span>
                                {plan.period && <span className="period-home">/{plan.period}</span>}
                            </div>
                            {plan.originalPrice && (
                                <div className="savings-text-home">
                                    Save ${parseInt(plan.originalPrice.replace('$', '')) - parseInt(plan.price.replace('$', ''))}/mo
                                </div>
                            )}
                            <p className="plan-description-home">{plan.description}</p>
                        </div>

                        <div className="pricing-card-body-home">
                            <ul className="features-list-home">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="feature-item-home">
                                        <span className="feature-check-home">✓</span>
                                        <span className="feature-text-home">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pricing-card-footer-home">
                            <Link
                                href={plan.ctaUrl}
                                className={`pricing-cta-btn-home ${plan.popular ? 'primary' : 'secondary'}`}
                            >
                                {plan.cta}
                            </Link>
                            {plan.name !== 'Enterprise' && (
                                <p className="trial-text-home">14-day free trial • No credit card required</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* View Full Pricing Link */}
            <div className="pricing-view-all text-center mt-5">
                <Link href="/pricing" className="view-all-link">
                    View Full Pricing Details →
                </Link>
            </div>
        </div>
    </section>
    );
};

export default Pricing1;