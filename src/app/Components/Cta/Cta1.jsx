"use client"
import Image from "next/image";
import Link from "next/link";

const Cta1 = ({subtitle,title,content,btnurl1,btnurl2,img}) => {
    return (
        <section className="cta-section-new">
            <div className="container">
                <div className="cta-wrapper-new">
                    <div className="row g-5 align-items-center">
                        <div className="col-xl-7">
                            <div className="cta-content-new">
                                <div className="cta-badge-new">
                                    <span>{subtitle || "Get Started"}</span>
                                </div>
                                <h2 className="cta-title-new">{title || "Ready to Transform Your Business?"}</h2>
                                <p className="cta-description-new">
                                    {content || "Join thousands of businesses already using PropelusAI to automate their operations, generate leads, and scale faster. Start your free trial today—no credit card required."}
                                </p>
                                <div className="cta-buttons-new">
                                    <Link href={btnurl1 || "/demo"} className="theme-btn cta-btn-primary">
                                        Schedule a Demo
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z" fill="currentColor"/>
                                        </svg>
                                    </Link>
                                    <Link href={btnurl2 || "/pricing"} className="theme-btn style2 cta-btn-secondary">
                                        View Pricing
                                    </Link>
                                </div>
                                <div className="cta-trust-indicators">
                                    <div className="trust-item">
                                        <span className="trust-number">2,291+</span>
                                        <span className="trust-label">Happy Customers</span>
                                    </div>
                                    <div className="trust-item">
                                        <span className="trust-number">4.8/5</span>
                                        <span className="trust-label">Rating</span>
                                    </div>
                                    <div className="trust-item">
                                        <span className="trust-number">14-day</span>
                                        <span className="trust-label">Free Trial</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="cta-image-wrapper">
                                {img && (
                                    <Image 
                                        src={img} 
                                        alt="PropelusAI Platform" 
                                        width={643} 
                                        height={322}
                                        className="cta-image"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta1;