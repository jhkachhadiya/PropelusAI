"use client"
import serviceDetailsData from "../../Data/serviceDetails.json";

const KeyFeatures = () => {
    // Get features from the first service (or we can create a general features list)
    // Using website-development as default, but we can customize this
    const defaultServiceData = serviceDetailsData["website-development"];
    
    return (
        <section className="key-features-section-main section-padding fix">
            <div className="container">
                <h2 className="key-features-title wow fadeInUp" data-wow-delay=".3s">KEY FEATURES</h2>
                <p className="key-features-intro wow fadeInUp" data-wow-delay=".4s">
                    PropelusAI has a number of key features that make it a valuable partner for businesses of all sizes. These features include:
                </p>
                <div className="key-features-grid">
                    {defaultServiceData.features.map((feature, index) => (
                        <div key={index} className="key-feature-card wow fadeInUp" data-wow-delay={`${0.5 + index * 0.1}s`}>
                            <div className="feature-decorative-shape" style={{ backgroundColor: feature.color }}></div>
                            <h3 className="feature-card-title">{feature.title}</h3>
                            <p className="feature-card-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyFeatures;

