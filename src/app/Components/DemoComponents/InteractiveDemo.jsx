"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

const InteractiveDemo = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [hoveredElement, setHoveredElement] = useState(null);
    const [tappedElement, setTappedElement] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const tabs = [
        {
            id: 'overview',
            label: 'Overview',
            icon: 'bi-graph-up-arrow',
            content: {
                type: 'video',
                thumbnail: '/assets/images/hero/maxresdefault.jpg',
                videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                description: 'See how PropelusAI automates your entire workflow in minutes'
            }
        },
        {
            id: 'features',
            label: 'Features',
            icon: 'bi-lightning-charge',
            content: {
                type: 'screenshot',
                image: '/assets/images/intro/AI-Automation.jpg',
                floatingElements: [
                    { id: 1, label: 'Content Generator', position: { top: '15%', left: '10%' } },
                    { id: 2, label: 'Automated Workflows', position: { top: '45%', right: '15%' } },
                    { id: 3, label: 'Analytics Dashboard', position: { bottom: '20%', left: '20%' } }
                ],
                description: 'Explore our powerful features with interactive highlights'
            }
        },
        {
            id: 'integration',
            label: 'Integration',
            icon: 'bi-plug',
            content: {
                type: 'code',
                code: `// PropelusAI API Integration Example
import { PropelusAI } from '@propelusai/sdk';

const client = new PropelusAI({
  apiKey: process.env.PROPELUS_API_KEY,
  environment: 'production'
});

// Generate content
const content = await client.content.generate({
  type: 'linkedin_post',
  topic: 'automated marketing',
  tone: 'professional'
});

// Automate workflow
await client.workflows.trigger('lead_generation', {
  source: 'website',
  priority: 'high'
});

console.log('Content generated:', content);
console.log('Workflow triggered successfully!');`,
                language: 'javascript',
                description: 'Integrate PropelusAI into your application in minutes'
            }
        }
    ];

    const steps = [
        {
            number: 1,
            title: 'Connect Your Tools',
            description: 'Link your existing marketing and business tools',
            icon: 'bi-link-45deg'
        },
        {
            number: 2,
            title: 'Configure Automation Workflows',
            description: 'Set up automated workflows tailored to your needs',
            icon: 'bi-gear'
        },
        {
            number: 3,
            title: 'Launch & Scale',
            description: 'Go live and watch your business grow automatically',
            icon: 'bi-rocket-takeoff'
        }
    ];

    const handleVideoPlay = () => {
        setIsVideoPlaying(true);
    };

    const handleVideoClose = () => {
        setIsVideoPlaying(false);
    };

    return (
        <section className="interactive-demo-section section-padding fix">
            <div className="container">
                <div className="demo-section-header text-center mb-5">
                    <div className="demo-badge">
                        <span><i className="bi bi-play-circle"></i> Product Demo Components</span>
                    </div>
                    <h2 className="demo-section-title">
                        See PropelusAI in Action
                    </h2>
                    <p className="demo-section-subtitle">
                        Explore our platform through interactive demos, code examples, and step-by-step guides
                    </p>
                </div>

                {/* Tabbed Interface (Notion-style) */}
                <div className="demo-tabs-container">
                    <div className="demo-tabs-wrapper">
                        <div className="demo-tabs-nav">
                            {tabs.map((tab, index) => (
                                <button
                                    key={tab.id}
                                    className={`demo-tab ${activeTab === index ? 'active' : ''}`}
                                    onClick={() => setActiveTab(index)}
                                >
                                    <span className="tab-icon"><i className={`bi ${tab.icon}`}></i></span>
                                    <span className="tab-label">{tab.label}</span>
                                </button>
                            ))}
                        </div>

                        <div className="demo-tabs-content">
                            {tabs[activeTab].content.type === 'video' && (
                                <div className="demo-video-frame">
                                    <div className="video-container">
                                        {!isVideoPlaying ? (
                                            <div className="video-thumbnail" onClick={handleVideoPlay}>
                                                <Image
                                                    src={tabs[activeTab].content.thumbnail || '/assets/images/hero/hero-bg.jpg'}
                                                    alt="Video thumbnail"
                                                    fill
                                                    className="thumbnail-image"
                                                />
                                                <div className="video-play-button">
                                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                                                        <circle cx="40" cy="40" r="40" fill="white" fillOpacity="0.9"/>
                                                        <path d="M32 24L56 40L32 56V24Z" fill="#635BFF"/>
                                                    </svg>
                                                </div>
                                                <div className="video-overlay">
                                                    <p className="video-description">{tabs[activeTab].content.description}</p>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="video-embed-wrapper">
                                                <button className="video-close-btn" onClick={handleVideoClose}>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                    </svg>
                                                </button>
                                                <iframe
                                                    src={tabs[activeTab].content.videoUrl}
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    className="video-iframe"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {tabs[activeTab].content.type === 'screenshot' && (
                                <div className="demo-screenshot-frame">
                                    <div className="screenshot-container">
                                        <div className="screenshot-wrapper">
                                            <Image
                                                src={tabs[activeTab].content.image || '/assets/images/intro/introThumb1_1.png'}
                                                alt="Product screenshot"
                                                fill
                                                className="screenshot-image"
                                            />
                                            {tabs[activeTab].content.floatingElements?.map((element) => {
                                                const isActive = isMobile 
                                                    ? tappedElement === element.id 
                                                    : hoveredElement === element.id;
                                                
                                                return (
                                                    <div
                                                        key={element.id}
                                                        className={`floating-element ${isActive ? 'active' : ''}`}
                                                        style={element.position}
                                                        onMouseEnter={() => !isMobile && setHoveredElement(element.id)}
                                                        onMouseLeave={() => !isMobile && setHoveredElement(null)}
                                                        onClick={() => isMobile && setTappedElement(tappedElement === element.id ? null : element.id)}
                                                    >
                                                        <div className="floating-dot"></div>
                                                        <div className="floating-tooltip">
                                                            <span>{element.label}</span>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <p className="screenshot-description">{tabs[activeTab].content.description}</p>
                                    </div>
                                </div>
                            )}

                            {tabs[activeTab].content.type === 'code' && (
                                <div className="demo-code-frame">
                                    <div className="code-container">
                                        <div className="code-header">
                                            <div className="code-header-dots">
                                                <span className="dot red"></span>
                                                <span className="dot yellow"></span>
                                                <span className="dot green"></span>
                                            </div>
                                            <span className="code-filename">integration.js</span>
                                        </div>
                                        <div className="code-content">
                                            <pre><code className={`language-${tabs[activeTab].content.language}`}>{tabs[activeTab].content.code}</code></pre>
                                        </div>
                                        <div className="code-footer">
                                            <button className="code-copy-btn">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M5.5 3.5H3.5C2.67157 3.5 2 4.17157 2 5V12.5C2 13.3284 2.67157 14 3.5 14H11C11.8284 14 12.5 13.3284 12.5 12.5V10.5M5.5 3.5C5.5 2.67157 6.17157 2 7 2H9.5C10.3284 2 11 2.67157 11 3.5V6C11 6.82843 10.3284 7.5 9.5 7.5H7C6.17157 7.5 5.5 6.82843 5.5 6V3.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                                Copy code
                                            </button>
                                        </div>
                                    </div>
                                    <p className="code-description">{tabs[activeTab].content.description}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Interactive Stepper (1-2-3 flow) */}
                <div className="demo-stepper-container">
                    <div className="stepper-header">
                        <h3 className="stepper-title">Get Started in 3 Simple Steps</h3>
                        <p className="stepper-subtitle">Follow our guided setup process</p>
                    </div>
                    
                    <div className="stepper-wrapper">
                        {steps.map((step, index) => (
                            <div
                                key={step.number}
                                className={`stepper-step ${currentStep === index ? 'active' : ''} ${currentStep > index ? 'completed' : ''}`}
                                onClick={() => setCurrentStep(index)}
                            >
                                <div className="step-connector-line"></div>
                                <div className="step-content">
                                    <div className="step-number-wrapper">
                                        <div className="step-number">
                                            {currentStep > index ? (
                                                <i className="bi bi-check"></i>
                                            ) : (
                                                <span>{step.number}</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="step-icon-wrapper">
                                        <i className={`bi ${step.icon}`}></i>
                                    </div>
                                    <h4 className="step-title">{step.title}</h4>
                                    <p className="step-description">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="stepper-navigation">
                        <button
                            className="stepper-btn stepper-prev"
                            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                            disabled={currentStep === 0}
                        >
                            <i className="bi bi-arrow-left"></i>
                            <span>Previous</span>
                        </button>
                        <div className="stepper-indicators">
                            {steps.map((_, index) => (
                                <button
                                    key={index}
                                    className={`stepper-indicator ${currentStep === index ? 'active' : ''} ${currentStep > index ? 'completed' : ''}`}
                                    onClick={() => setCurrentStep(index)}
                                    aria-label={`Go to step ${index + 1}`}
                                />
                            ))}
                        </div>
                        <button
                            className="stepper-btn stepper-next"
                            onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                            disabled={currentStep === steps.length - 1}
                        >
                            <span>{currentStep === steps.length - 1 ? 'Complete' : 'Next Step'}</span>
                            <i className="bi bi-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveDemo;

