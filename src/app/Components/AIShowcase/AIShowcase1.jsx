"use client"
import { useEffect, useRef, useState } from 'react';

const TRANSITION_DURATION = 500;

const useCases = [
  {
    id: 1,
    title: "Generate LinkedIn content from blog posts",
    tagline: "Repurpose long-form insights into scroll-stopping threads.",
    summary: "PropelusAI identifies quotable moments, rewrites them with on-brand voice, and schedules the post across every executive profile—no copy-paste required.",
    benefits: [
      "Extracts highlights, proof points, and CTA variations automatically.",
      "Suggests emojis and hashtags that mirror your tone guidelines.",
      "Publishes directly to company + leadership calendars."
    ],
    metrics: [
      { label: "Hours saved weekly", value: 18, suffix: " hrs" },
      { label: "Engagement lift", value: 38, suffix: "%" }
    ],
    mockup: {
      type: "linkedin",
      content: {
        headline: "From Blog to LinkedIn",
        text: "AI converts your latest blog drop into three ready-to-post LinkedIn updates with optimized hooks, carousels, and CTA buttons.",
        metrics: { views: "2.8K", likes: "214", comments: "31" }
      }
    }
  },
  {
    id: 2,
    title: "Build landing pages from simple descriptions",
    tagline: "Ship polished pages from bullet points and brand tokens.",
    summary: "Drop a short prompt, pick a goal, and PropelusAI assembles layout, copy, and assets that stay on-brand while highlighting proof in your product.",
    benefits: [
      "Auto-generates hero, proof, pricing, and CTA sections.",
      "Syncs fonts, gradients, and iconography with your design system.",
      "Exports responsive HTML or Webflow-ready components."
    ],
    metrics: [
      { label: "Faster launch time", value: 72, suffix: "%" },
      { label: "Conversion uplift", value: 24, suffix: "%" }
    ],
    mockup: {
      type: "landing",
      content: {
        headline: "Landing Page Generator",
        text: "Convert product blurbs into modular sections with auto A/B copy and variant-specific CTAs.",
        cta: "Publish draft"
      }
    }
  },
  {
    id: 3,
    title: "Automate lead follow-up sequences",
    tagline: "Always-on nurture tracks that feel handcrafted.",
    summary: "Feed in CRM stages and PropelusAI drafts intent-aware nudges, then listens for replies to keep the thread human.",
    benefits: [
      "Personalizes tone using CRM notes and recent activity.",
      "Bundles multi-channel nudges across email, SMS, and LinkedIn.",
      "Hands off to reps once prospects engage."
    ],
    metrics: [
      { label: "Meetings booked", value: 47, suffix: " new" },
      { label: "Response rate lift", value: 33, suffix: "%" }
    ],
    mockup: {
      type: "automation",
      content: {
        headline: "Smart Follow-ups",
        text: "Sequenced outreach pulls in last-touch intel and pauses automatically once the lead responds.",
        status: "Active: 47 leads"
      }
    }
  },
  {
    id: 4,
    title: "Create multi-platform marketing campaigns",
    tagline: "One command spins up assets for every channel.",
    summary: "Plan multi-touch journeys, launch them everywhere, and watch real-time performance roll into a single command center.",
    benefits: [
      "Defines audience, positioning, and creative guardrails together.",
      "Outputs assets for email, paid, social, and sales enablement.",
      "Streams live metrics to suggest budget reallocation."
    ],
    metrics: [
      { label: "Channels synced", value: 6 },
      { label: "Launch time saved", value: 12, suffix: " days" }
    ],
    mockup: {
      type: "campaign",
      content: {
        headline: "Campaign Builder",
        text: "Design coordinated launches with channel-specific creative, budgets, and status tracking.",
        channels: ["Email", "LinkedIn", "Twitter", "Ads"]
      }
    }
  },
  {
    id: 5,
    title: "Design mobile apps from wireframes",
    tagline: "Turn sketches into production-ready flows overnight.",
    summary: "Upload a screenshot or Figma wire, and PropelusAI delivers polished UI, component tokens, and annotated specs for engineers.",
    benefits: [
      "Understands layout, hierarchy, and UX patterns automatically.",
      "Outputs pixel-perfect designs plus component tokens.",
      "Packages redlines + copy decks for engineering handoff."
    ],
    metrics: [
      { label: "Design time saved", value: 65, suffix: "%" },
      { label: "Prototype fidelity", value: 92, suffix: "%" }
    ],
    mockup: {
      type: "design",
      content: {
        headline: "Wireframe to Design",
        text: "Upload sketches to generate high-fidelity screens with component specs and progress tracking.",
        progress: "85% Complete"
      }
    }
  }
];

const AIShowcase1 = () => {
  const [selectedUseCase, setSelectedUseCase] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animatedMetrics, setAnimatedMetrics] = useState(
    useCases[0].metrics.map((metric) => metric.value)
  );
  const animationTimeouts = useRef([]);

  const handleUseCaseChange = (index) => {
    if (index === selectedUseCase) return;

    animationTimeouts.current.forEach(clearTimeout);
    setIsAnimating(true);

    const midwayTimeout = setTimeout(() => {
      setSelectedUseCase(index);
    }, TRANSITION_DURATION / 2);

    const resetTimeout = setTimeout(() => {
      setIsAnimating(false);
    }, TRANSITION_DURATION);

    animationTimeouts.current = [midwayTimeout, resetTimeout];
  };

  useEffect(() => {
    return () => {
      animationTimeouts.current.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    const metrics = useCases[selectedUseCase].metrics;
    let frameId;
    const duration = 600;
    const start = performance.now();

    const animate = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const values = metrics.map((metric) =>
        Math.round(metric.value * progress)
      );
      setAnimatedMetrics(values);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    setAnimatedMetrics(metrics.map(() => 0));
    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [selectedUseCase]);

  const formatMetricValue = (value, metric) => {
    const baseValue =
      value >= 1000 ? `${(value / 1000).toFixed(value % 1000 === 0 ? 0 : 1)}k` : value.toLocaleString();
    return `${baseValue}${metric.suffix || ''}`;
  };

  const currentUseCase = useCases[selectedUseCase];

  return (
    <section className="ai-showcase-section section-padding fix">
      <div className="ai-showcase-container-wrapper style1">
        <div className="container">
          <div className="ai-showcase-wrapper style1">
            {/* Section Title */}
            <div className="row">
              <div className="col-12">
                <div className="section-title text-center" style={{ marginBottom: '80px' }}>
                  <span className="ai-showcase-eyebrow">Let PropelusAI handle the growth work.</span>
                  <h2 className="title">See AI-Powered Automation in Action</h2>
                  <p className="ai-showcase-description">
                    Pick a use case to see how our automation copilots combine the polish of Stripe demos
                    with the simplicity of Notion’s workflows.
                  </p>
                </div>
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="row g-5 align-items-center">
              {/* Left Column - Dropdown */}
              <div className="col-xl-6 col-lg-6">
                <div className="ai-showcase-dropdown-wrapper">
                  <div className="use-case-selector-head">
                    <div>
                      <p className="use-case-instruction">Pick a service to see AI in action</p>
                      <p className="use-case-helper">Tap a tile or use the dropdown to explore workflows.</p>
                    </div>
                    <span className="use-case-count">{useCases.length} options</span>
                  </div>

                  <div className="use-case-select-wrapper">
                    <select
                      className="use-case-select"
                      value={selectedUseCase}
                      onChange={(event) => handleUseCaseChange(Number(event.target.value))}
                      aria-label="Select an AI use case"
                    >
                      {useCases.map((useCase, index) => (
                        <option key={useCase.id} value={index}>
                          {useCase.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="use-case-list">
                    {useCases.map((useCase, index) => (
                      <button
                        key={useCase.id}
                        className={`use-case-item ${selectedUseCase === index ? 'active' : ''}`}
                        onClick={() => handleUseCaseChange(index)}
                      >
                        <div className="use-case-content">
                          <h4 className="use-case-title">{useCase.title}</h4>
                          {selectedUseCase === index && (
                            <p className="use-case-description">{useCase.summary}</p>
                          )}
                        </div>
                        <svg 
                          className="use-case-arrow" 
                          width="20" 
                          height="20" 
                          viewBox="0 0 20 20" 
                          fill="none"
                        >
                          <path 
                            d="M7.5 5L12.5 10L7.5 15" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    ))}
                  </div>

                  <div className="use-case-details">
                    <p className="use-case-tagline">{currentUseCase.tagline}</p>
                    <p className="use-case-summary">{currentUseCase.summary}</p>
                    <ul className="use-case-benefits">
                      {currentUseCase.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                    <div className="use-case-metrics">
                      {currentUseCase.metrics.map((metric, idx) => (
                        <div className="use-case-metric" key={metric.label}>
                          <span className="use-case-metric-value">
                            {formatMetricValue(animatedMetrics[idx] || 0, metric)}
                          </span>
                          <span className="use-case-metric-label">{metric.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Animated Mockup */}
              <div className="col-xl-6 col-lg-6">
                <div className="ai-showcase-mockup-wrapper">
                  <div className={`mockup-container ${isAnimating ? 'animating' : ''}`}>
                    <div className="mockup-frame">
                      <div className="mockup-header">
                        <div className="mockup-window-controls">
                          <span className="control-dot"></span>
                          <span className="control-dot"></span>
                          <span className="control-dot"></span>
                        </div>
                        <div className="mockup-url">propelus.ai/{currentUseCase.mockup.type}</div>
                      </div>
                      <div className="mockup-content">
                        <div className={`mockup-content-inner mockup-${currentUseCase.mockup.type}`}>
                          <h3 className="mockup-headline">{currentUseCase.mockup.content.headline}</h3>
                          <p className="mockup-text">{currentUseCase.mockup.content.text}</p>
                          
                          {currentUseCase.mockup.type === "linkedin" && (
                            <div className="mockup-metrics">
                              <div className="metric-item">
                                <span className="metric-value">{currentUseCase.mockup.content.metrics.views}</span>
                                <span className="metric-label">Views</span>
                              </div>
                              <div className="metric-item">
                                <span className="metric-value">{currentUseCase.mockup.content.metrics.likes}</span>
                                <span className="metric-label">Likes</span>
                              </div>
                              <div className="metric-item">
                                <span className="metric-value">{currentUseCase.mockup.content.metrics.comments}</span>
                                <span className="metric-label">Comments</span>
                              </div>
                            </div>
                          )}
                          
                          {currentUseCase.mockup.type === "landing" && (
                            <div className="mockup-cta">
                              <button className="theme-btn mockup-cta-button">{currentUseCase.mockup.content.cta}</button>
                            </div>
                          )}
                          
                          {currentUseCase.mockup.type === "automation"   && (
                            <div className="mockup-status">
                              <span className="status-badge">{currentUseCase.mockup.content.status}</span>
                            </div>
                          )}
                          
                          {currentUseCase.mockup.type === "campaign" && (
                            <div className="mockup-channels">
                              {currentUseCase.mockup.content.channels.map((channel, idx) => (
                                <span key={idx} className="channel-badge">{channel}</span>
                              ))}
                            </div>
                          )}
                          
                          {currentUseCase.mockup.type === "design" && (
                            <div className="mockup-progress">
                              <div className="progress-bar">
                                <div className="progress-fill" style={{ width: currentUseCase.mockup.content.progress.replace('% Complete', '%') }}></div>
                              </div>
                              <span className="progress-text">{currentUseCase.mockup.content.progress}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIShowcase1;
