import parse from 'html-react-parser';
import Image from 'next/image';
import Link from 'next/link';

const Feature4 = ({img,subtitle,title,content,FeatureList,btnname,btnurl}) => {
    return (
        <section className="about-section-3 fix section-padding">
        <div className="about-shape">
        <Image src="/assets/images/about/shape.png" alt="img" width={293} height={642}   />
        </div>
        <div className="container">
            <div className="about-wrapper-3">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="about-image">
                        <Image src={img} alt="img" width={979} height={647}   />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-title">
                                <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                                    {subtitle} <i className="bi bi-fire"></i>
                                </div>
                                <h2 className="title wow fadeInUp" data-wow-delay=".4s">{title}</h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s">
                                   {content}
                                </p>
                            </div>
                            <ul className="wow fadeInUp" data-wow-delay=".3s">
                            {FeatureList?.map((item, index) => (
                                <li key={index}>
                                    <i className="bi bi-check-circle-fill" style={{color: '#7444FD', fontSize: '20px'}}></i>
                                    {parse(item)}
                                </li>
                                ))}

                            </ul>
                            <Link className="theme-btn style2 wow fadeInUp" data-wow-delay=".4s" href={btnurl}>{btnname} <i className="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    </section>
    );
};

export default Feature4;