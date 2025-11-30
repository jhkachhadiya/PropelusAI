import Image from "next/image";
import serviceDetailsData from "../../Data/serviceDetails.json";

// Map service slugs to their corresponding images
const serviceImageMap = {
    "website-development": "/assets/images/website-development.webp",
    "mobile-app": "/assets/images/mobile-app.webp",
    "linkedin-marketing": "/assets/images/linkedin-marketing.webp",
    "lead-generation": "/assets/images/lead-generation.webp",
    "marketing-automation": "/assets/images/marketing-automation.webp",
    "custom-email-domains": "/assets/images/custom-email-domains.webp",
    "cybersecurity": "/assets/images/cybersecurity.webp"
};

const ServiceDetails = ({ slug = "website-development" }) => {
    const serviceData = serviceDetailsData[slug] || serviceDetailsData["website-development"];
    const serviceImage = serviceImageMap[slug] || serviceImageMap["website-development"];
    
    return (
        <div className="service-details-section">
        <div className="service-details-container-wrapper section-padding fix">
            <div className="container">
                <div className="service-details-wrapper">
                    <div className="main-thumb img-custom-anim-right wow fadeInLeft" data-wow-delay=".3s">
                    <Image src={serviceImage} alt={serviceData.title} width={1410} height={646}   />
                    </div>
                    <h2 className="title wow fadeInUp" data-wow-delay=".3s">{serviceData.title}</h2>
                    <div className="tagcloud">
                        {serviceData.tags.map((tag, index) => (
                            <div key={index} className="tag">
                                <a href="#">{tag}</a>
                            </div>
                        ))}
                    </div>
                    <div className="details-box1">
                        <h3 className="subtitle wow fadeInUp" data-wow-delay=".3s">
                            Service Overview
                        </h3>
                        <div className="row gy-3">
                            <div className="col-xl-7">
                                <p className="text wow fadeInUp" data-wow-delay=".3s">{serviceData.overview}</p>
                            </div>
                            <div className="col-xl-5">
                                <p className="text wow fadeInUp" data-wow-delay=".5s">{serviceData.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="details-box2">
                        <h3 className="subtitle wow fadeInUp" data-wow-delay=".3s">
                            Benefits With Our Service
                        </h3>
                        <div className="row gy-3">
                            <div className="col-xl-12">
                                <div className="feature-wrapper wow fadeInUp" data-wow-delay=".3s">
                                    <ul className="feature">
                                        {serviceData.benefits.map((benefit, index) => (
                                            <li key={index}>{benefit}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
};

export default ServiceDetails;