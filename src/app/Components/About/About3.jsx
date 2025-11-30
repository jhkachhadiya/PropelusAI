import Image from "next/image";

const About3 = ({img1,subtitle,title,content,boxtitle1,boxcontent1,boxtitle2,boxcontent2}) => {
    return (
        <section className="what-we-do-section fix section-padding">
        <div className="container mxw-1450">
            <div className="what-we-wrapper">
                <div className="row g-4">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="thumb">
                            <Image src={img1} alt="img" width={701} height={539}   />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="what-we-content">
                            <div className="section-title">
                                <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                                    {subtitle} <i className="bi bi-fire"></i> 
                                </div>
                                <h2 className="title wow fadeInUp" data-wow-delay=".4s">{title}</h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s">
                                    {content}
                                </p>
                            </div>
                            <div className="list-items-area">
                                <div className="list-items wow fadeInUp" data-wow-delay=".3s">
                                    <div className="icon">
                                        <i className="bi bi-check-circle-fill" style={{fontSize: '30px', color: '#7444FD'}}></i>
                                    </div>
                                    <div className="content">
                                        <h3>{boxtitle1}</h3>
                                        <p>
                                            {boxcontent1}
                                        </p>
                                    </div>
                                </div>
                                <div className="list-items wow fadeInUp" data-wow-delay=".5
                                s">
                                    <div className="icon">
                                        <i className="bi bi-check-circle-fill" style={{fontSize: '30px', color: '#7444FD'}}></i>
                                    </div>
                                    <div className="content">
                                        <h3>{boxtitle2}</h3>
                                        <p>
                                            {boxcontent2}
                                        </p>
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

export default About3;