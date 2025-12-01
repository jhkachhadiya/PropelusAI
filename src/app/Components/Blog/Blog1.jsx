import Image from "next/image";
import Link from "next/link";

const Blog1 = () => {
    return (
        
        <section className="blog-section section-padding fix">
            <div className="container">
                <div className="blog-wrapper style1">
                    <div className="section-title text-center mxw-685 mx-auto">
                        <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                            Our Blog <Image src="/assets/images/icon/fireIcon.svg" alt="img" width={16} height={17}   />
                        </div>
                        <h2 className="title wow fadeInUp" data-wow-delay=".4s">Recent Articles And Latest Blog</h2>
                    </div>
                    <div className="row gy-5">
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-card style1 wow fadeInUp" data-wow-delay=".2s">
                                <div className="thumb" style={{overflow: 'hidden', borderRadius: '12px', marginBottom: '20px'}}>
                                <Image src="/assets/images/blog/blog-email-domains.webp" alt="img" width={326} height={219} style={{width: '100%', height: 'auto', display: 'block'}} />
                                </div>
                                <div className="body">
                                    <div className="tag-meta">
                                    <Image src="/assets/images/icon/FolderIcon.svg" alt="img" width={16} height={12}   />
                                        Workplace
                                    </div>
                                    <h3><Link href="/resources#blog">Services that printing at you is important</Link></h3>
                                    <div className="blog-meta">
                                        <div className="item child1">
                                            <span className="icon">
                                            <Image src="/assets/images/icon/userIcon.svg" alt="img" width={14} height={16}   />
                                            </span>
                                            <span className="text">By Admin</span>
                                        </div>
                                        <div className="item">
                                            <span className="icon">
                                            <Image src="/assets/images/icon/calendar.svg" alt="img" width={15} height={16}   />
                                            </span>
                                            <span className="text">Sep 30, 2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-card style1 wow fadeInUp" data-wow-delay=".4s">
                                <div className="thumb" style={{overflow: 'hidden', borderRadius: '12px', marginBottom: '20px'}}>
                                <Image src="/assets/images/blog/blog-checklist.webp" alt="img" width={326} height={219} style={{width: '100%', height: 'auto', display: 'block'}} />
                                </div>
                                <div className="body">
                                    <div className="tag-meta">
                                    <Image src="/assets/images/icon/FolderIcon.svg" alt="img" width={16} height={12}   />
                                        Coding
                                    </div>
                                    <h3><Link href="/resources#blog">A checklist to improve your daily routine</Link></h3>
                                    <div className="blog-meta">
                                        <div className="item child1">
                                            <span className="icon">
                                            <Image src="/assets/images/icon/userIcon.svg" alt="img" width={14} height={16}   />
                                            </span>
                                            <span className="text">By Admin</span>
                                        </div>
                                        <div className="item">
                                            <span className="icon">
                                            <Image src="/assets/images/icon/calendar.svg" alt="img" width={15} height={16}   />
                                            </span>
                                            <span className="text">Sep 30, 2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-card style1 wow fadeInUp" data-wow-delay=".6s">
                                <div className="thumb" style={{overflow: 'hidden', borderRadius: '12px', marginBottom: '20px'}}>
                                <Image src="/assets/images/blog/blog-cybersecurity.webp" alt="img" width={326} height={219} style={{width: '100%', height: 'auto', display: 'block'}} />
                                </div>
                                <div className="body">
                                    <div className="tag-meta">
                                    <Image src="/assets/images/icon/FolderIcon.svg" alt="img" width={16} height={12}   />
                                        Technology
                                    </div>
                                    <h3><Link href="/resources#blog">That will help you get 1% better every day</Link></h3>
                                    <div className="blog-meta">
                                        <div className="item child1">
                                            <span className="icon">
                                            <Image src="/assets/images/icon/userIcon.svg" alt="img" width={14} height={16}   />
                                            </span>
                                            <span className="text">By Admin</span>
                                        </div>
                                        <div className="item">
                                            <span className="icon">
                                            <Image src="/assets/images/icon/calendar.svg" alt="img" width={15} height={16}   />
                                            </span>
                                            <span className="text">Sep 30, 2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-xl-4 col-md-6">
                            <div className="blog-card style1 wow fadeInUp" data-wow-delay=".8s">
                                <div className="thumb" style={{overflow: 'hidden', borderRadius: '12px', marginBottom: '20px'}}>
                                <Image src="/assets/images/blog/blog-lead-generation.webp" alt="img" width={326} height={219} style={{width: '100%', height: 'auto', display: 'block'}} />
                                </div>
                                <div className="body">
                                    <div className="tag-meta">
                                    <Image src="/assets/images/icon/FolderIcon.svg" alt="img" width={16} height={12}   />
                                        Business
                                    </div>
                                    <h3><Link href="/resources#blog">Effective strategies for lead generation</Link></h3>
                                    <div className="blog-meta">
                                        <div className="item child1">
                                            <span className="icon">
                                            <Image src="/assets/images/icon/userIcon.svg" alt="img" width={14} height={16}   />
                                            </span>
                                            <span className="text">By Admin</span>
                                        </div>
                                        <div className="item">
                                            <span className="icon">
                                            <Image src="/assets/images/icon/calendar.svg" alt="img" width={15} height={16}   />
                                            </span>
                                            <span className="text">Sep 30, 2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog1;