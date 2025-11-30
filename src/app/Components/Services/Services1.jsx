import Link from 'next/link';
import Image from 'next/image';
import data from '../../Data/services1.json';

const Services1 = () => {
    return (
        <section className="service-section section-padding fix">
            <div className="service-container-wrapper style1">
                <div className="container">
                    <div className="service-wrapper style1">
                        {/* Section Title */}
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title text-center" style={{ marginBottom: '60px' }}>
                                    <h2 className="title">Everything Your Business Needs, One Platform</h2>
                                    <p className="section-subtitle service-subtitle">
                                        Automated solutions that work together seamlessly
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Services Grid */}
                        <div className="row gy-4">
                            {data.map((item, index) => (
                                <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-12">
                                    <Link href={item.href || "/service"} className="service-card-link">
                                        <div className={`service-box style3 service-card-enhanced wow fadeInUp`} data-wow-delay={`${(index * 0.1)}s`}>
                                            <div className={`icon-box style3 icon-box-${item.iconColor}`}>
                                                <i className={`bi ${item.icon}`} style={{fontSize: '48px'}}></i>
                                            </div>
                                            <div className="content">
                                                <h3>
                                                    {item.title}
                                                </h3>
                                                <p className="text">{item.desc}</p>
                                                <span className="service-learn-more">
                                                    Learn more →
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services1;
