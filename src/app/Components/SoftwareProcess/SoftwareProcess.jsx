"use client"
import React from 'react';

const SoftwareProcess = () => {
    const processes = [
        {
            id: 1,
            title: "Requirements gathering",
            description: "This phase involves gathering the requirements from the client. This includes understanding the client's needs and requirements and documenting them in a way that can be used by the programming development team.",
            icon: "bi-clipboard-data",
            color: "#00D4FF"
        },
        {
            id: 2,
            title: "Design",
            description: "This phase involves designing the software IT solution. This includes creating the software architecture, designing the user interface, and designing the database.",
            icon: "bi-palette",
            color: "#FF6B9D"
        },
        {
            id: 3,
            title: "Development",
            description: "This phase involves developing the software solution. This includes coding, testing, and debugging the software.",
            icon: "bi-code-square",
            color: "#FF4444"
        },
        {
            id: 4,
            title: "Testing",
            description: "This phase involves testing the software to ensure that it meets the requirements. This includes unit testing, integration testing, and system testing.",
            icon: "bi-check-circle",
            color: "#635BFF"
        },
        {
            id: 5,
            title: "Deployment",
            description: "The software application will be uploaded to the production environment at this phase. This involves installing, configuring, and informing users on the software's features.",
            icon: "bi-cloud-upload",
            color: "#00C2A8"
        },
        {
            id: 6,
            title: "Maintenance",
            description: "This phase involves maintaining the software. This includes fixing bugs, adding new features, and improving the performance of the software.",
            icon: "bi-tools",
            color: "#D2691E"
        }
    ];

    return (
        <section className="software-process-section section-padding fix">
            <div className="container">
                <div className="software-process-wrapper">
                    {/* Section Title */}
                    <div className="section-title text-center" style={{ marginBottom: '80px' }}>
                        <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                            LET'S DISCUSS
                        </div>
                        <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                            SOFTWARE DEVELOPMENT PROCESS
                        </h2>
                    </div>

                    {/* Process Cards Grid */}
                    <div className="row">
                        {processes.map((process, index) => (
                            <div key={process.id} className="col-lg-4 col-md-6 col-12" style={{ marginBottom: '32px' }}>
                                <div className="process-card wow fadeInUp" data-wow-delay={`${0.2 + index * 0.1}s`}>
                                    <div className="process-icon-wrapper" style={{ backgroundColor: `${process.color}15` }}>
                                        <div className="process-icon" style={{ color: process.color }}>
                                            <i className={`bi ${process.icon}`}></i>
                                        </div>
                                    </div>
                                    <h3 className="process-title">{process.title}</h3>
                                    <p className="process-description">{process.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SoftwareProcess;

