"use client"
import { useState } from 'react';
import Link from 'next/link';

const Resources = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');
    const [openFaq, setOpenFaq] = useState(null);

    const categories = [
        { id: 'all', label: 'All Resources', icon: 'bi-collection' },
        { id: 'blog', label: 'Blog', icon: 'bi-pencil-square' },
        { id: 'guides', label: 'Guides', icon: 'bi-book' },
        { id: 'case-studies', label: 'Case Studies', icon: 'bi-graph-up' },
        { id: 'docs', label: 'Documentation', icon: 'bi-file-text' },
        { id: 'academy', label: 'Learning Academy', icon: 'bi-mortarboard' },
        { id: 'support', label: 'Support', icon: 'bi-chat-dots' }
    ];

    const resources = [
        {
            id: 1,
            category: 'blog',
            title: '10 Ways Automation Transforms Small Businesses',
            description: 'Discover how small businesses are leveraging automation to compete with larger enterprises and scale faster.',
            author: 'Sarah Chen',
            date: 'March 15, 2024',
            readTime: '5 min read',
            tags: ['Automation', 'Small Business', 'Growth'],
            featured: true
        },
        {
            id: 2,
            category: 'guides',
            title: 'Complete Guide to LinkedIn Marketing Automation',
            description: 'Step-by-step guide to automating your LinkedIn marketing campaigns and generating qualified leads.',
            author: 'Michael Rodriguez',
            date: 'March 12, 2024',
            readTime: '12 min read',
            tags: ['LinkedIn', 'Marketing', 'Automation'],
            featured: false
        },
        {
            id: 3,
            category: 'case-studies',
            title: 'How TechStart Inc. Increased Leads by 300% with PropelusAI',
            description: 'Real-world case study showing how a startup used automation to scale their lead generation.',
            author: 'Jennifer Park',
            date: 'March 10, 2024',
            readTime: '8 min read',
            tags: ['Case Study', 'Startups', 'Lead Generation'],
            featured: true
        },
        {
            id: 4,
            category: 'docs',
            title: 'API Integration Guide',
            description: 'Complete documentation for integrating PropelusAI API into your application.',
            author: 'Dev Team',
            date: 'March 8, 2024',
            readTime: '15 min read',
            tags: ['API', 'Developer', 'Integration'],
            featured: false
        },
        {
            id: 5,
            category: 'academy',
            title: 'Content Generation Fundamentals',
            description: 'Learn the basics of automated content generation and best practices for your business.',
            author: 'Learning Academy',
            date: 'March 5, 2024',
            readTime: '20 min read',
            tags: ['Content', 'Tutorial', 'Automation'],
            featured: false
        },
        {
            id: 6,
            category: 'guides',
            title: 'Email Marketing Automation Setup Guide',
            description: 'Complete guide to setting up automated email campaigns that convert.',
            author: 'Marketing Team',
            date: 'March 3, 2024',
            readTime: '10 min read',
            tags: ['Email', 'Marketing', 'Automation'],
            featured: false
        },
        {
            id: 7,
            category: 'blog',
            title: 'The Future of Automation in Business Operations',
            description: 'Exploring how automation is reshaping business operations and what to expect in the coming years.',
            author: 'David Kim',
            date: 'March 1, 2024',
            readTime: '7 min read',
            tags: ['Automation', 'Future', 'Business'],
            featured: false
        },
        {
            id: 8,
            category: 'case-studies',
            title: 'Enterprise Success: Fortune 500 Company Case Study',
            description: 'How a Fortune 500 company transformed their marketing operations with PropelusAI.',
            author: 'Enterprise Team',
            date: 'February 28, 2024',
            readTime: '12 min read',
            tags: ['Enterprise', 'Case Study', 'ROI'],
            featured: true
        },
        {
            id: 9,
            category: 'docs',
            title: 'Webhook Configuration Guide',
            description: 'Learn how to configure webhooks for real-time event notifications.',
            author: 'Dev Team',
            date: 'February 25, 2024',
            readTime: '8 min read',
            tags: ['Webhooks', 'Developer', 'API'],
            featured: false
        },
        {
            id: 10,
            category: 'academy',
            title: 'Advanced Workflow Automation Techniques',
            description: 'Master advanced techniques for building complex automation workflows.',
            author: 'Learning Academy',
            date: 'February 22, 2024',
            readTime: '25 min read',
            tags: ['Workflows', 'Advanced', 'Tutorial'],
            featured: false
        },
        {
            id: 11,
            category: 'support',
            title: 'Getting Started with PropelusAI',
            description: 'Quick start guide to help you get up and running with PropelusAI in minutes.',
            author: 'Support Team',
            date: 'February 20, 2024',
            readTime: '5 min read',
            tags: ['Getting Started', 'Support', 'Tutorial'],
            featured: false
        },
        {
            id: 12,
            category: 'support',
            title: 'Troubleshooting Common Issues',
            description: 'Solutions to the most common issues users encounter and how to resolve them.',
            author: 'Support Team',
            date: 'February 18, 2024',
            readTime: '10 min read',
            tags: ['Troubleshooting', 'Support', 'Help'],
            featured: false
        }
    ];

    const filteredResources = resources.filter(resource => {
        const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
        const matchesSearch = searchQuery === '' || 
            resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    const featuredResources = filteredResources.filter(r => r.featured);
    const regularResources = filteredResources.filter(r => !r.featured);

    return (
        <section className="resources-section section-padding fix">
            <div className="container">
                {/* Hero Section */}
                <div className="resources-hero text-center mb-5">
                    <div className="resources-badge">
                        <span><i className="bi bi-collection"></i> Resource Hub</span>
                    </div>
                    <h1 className="resources-title">
                        Everything You Need to Succeed
                    </h1>
                    <p className="resources-subtitle">
                        Explore our comprehensive library of guides, tutorials, case studies, and documentation to help you get the most out of PropelusAI.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="resources-search-wrapper mb-5">
                    <div className="resources-search-container">
                        <i className="bi bi-search search-icon"></i>
                        <input
                            type="text"
                            className="resources-search-input"
                            placeholder="Search resources, guides, docs..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {searchQuery && (
                            <button
                                className="search-clear-btn"
                                onClick={() => setSearchQuery('')}
                                aria-label="Clear search"
                            >
                                <i className="bi bi-x-lg"></i>
                            </button>
                        )}
                    </div>
                    {searchQuery && (
                        <div className="search-results-count">
                            Found {filteredResources.length} {filteredResources.length === 1 ? 'result' : 'results'}
                        </div>
                    )}
                </div>

                {/* Category Filter */}
                <div className="resources-categories mb-5">
                    <div className="categories-scroll">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                <span className="category-icon"><i className={`bi ${category.icon}`}></i></span>
                                <span className="category-label">{category.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Featured Resources */}
                {featuredResources.length > 0 && (
                    <div className="featured-resources mb-5">
                        <h2 className="section-heading">Featured Resources</h2>
                        <div className="featured-grid">
                            {featuredResources.map((resource) => (
                                <div
                                    key={resource.id}
                                    className="resource-card featured"
                                    onClick={() => { setActiveCategory(resource.category); setSearchQuery(''); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="resource-badge">Featured</div>
                                    <div className="resource-category-tag">{categories.find(c => c.id === resource.category)?.label}</div>
                                    <h3 className="resource-title">{resource.title}</h3>
                                    <p className="resource-description">{resource.description}</p>
                                    <div className="resource-meta">
                                        <span className="resource-author">{resource.author}</span>
                                        <span className="resource-separator">•</span>
                                        <span className="resource-date">{resource.date}</span>
                                        <span className="resource-separator">•</span>
                                        <span className="resource-time">{resource.readTime}</span>
                                    </div>
                                    <div className="resource-tags">
                                        {resource.tags.map((tag, idx) => (
                                            <span key={idx} className="resource-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* All Resources Grid */}
                <div className="resources-grid-section">
                    <h2 className="section-heading">
                        {activeCategory === 'all' ? 'All Resources' : categories.find(c => c.id === activeCategory)?.label}
                    </h2>
                    <div className="resources-grid">
                        {regularResources.length > 0 ? (
                            regularResources.map((resource) => (
                                <div
                                    key={resource.id}
                                    className="resource-card"
                                    onClick={() => { setActiveCategory(resource.category); setSearchQuery(''); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="resource-category-tag">{categories.find(c => c.id === resource.category)?.label}</div>
                                    <h3 className="resource-title">{resource.title}</h3>
                                    <p className="resource-description">{resource.description}</p>
                                    <div className="resource-meta">
                                        <span className="resource-author">{resource.author}</span>
                                        <span className="resource-separator">•</span>
                                        <span className="resource-date">{resource.date}</span>
                                        <span className="resource-separator">•</span>
                                        <span className="resource-time">{resource.readTime}</span>
                                    </div>
                                    <div className="resource-tags">
                                        {resource.tags.map((tag, idx) => (
                                            <span key={idx} className="resource-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no-results">
                                <p>No resources found. Try adjusting your search or filter.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Quick Links Section */}
                <div className="resources-quick-links">
                    <div className="quick-links-grid">
                        <Link href="/resources#blog" className="quick-link-card" onClick={(e) => { e.preventDefault(); setActiveCategory('blog'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                            <div className="quick-link-icon"><i className="bi bi-pencil-square"></i></div>
                            <h3 className="quick-link-title">Blog</h3>
                            <p className="quick-link-desc">Latest insights and updates</p>
                        </Link>
                        <Link href="/resources#case-studies" className="quick-link-card" onClick={(e) => { e.preventDefault(); setActiveCategory('case-studies'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                            <div className="quick-link-icon"><i className="bi bi-graph-up"></i></div>
                            <h3 className="quick-link-title">Case Studies</h3>
                            <p className="quick-link-desc">Real success stories</p>
                        </Link>
                        <Link href="/resources#guides" className="quick-link-card" onClick={(e) => { e.preventDefault(); setActiveCategory('guides'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                            <div className="quick-link-icon"><i className="bi bi-book"></i></div>
                            <h3 className="quick-link-title">Guides</h3>
                            <p className="quick-link-desc">Step-by-step tutorials</p>
                        </Link>
                        <Link href="/resources#academy" className="quick-link-card" onClick={(e) => { e.preventDefault(); setActiveCategory('academy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                            <div className="quick-link-icon"><i className="bi bi-mortarboard"></i></div>
                            <h3 className="quick-link-title">Learning Academy</h3>
                            <p className="quick-link-desc">Learn automation</p>
                        </Link>
                        <Link href="/resources#docs" className="quick-link-card" onClick={(e) => { e.preventDefault(); setActiveCategory('docs'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                            <div className="quick-link-icon"><i className="bi bi-file-text"></i></div>
                            <h3 className="quick-link-title">Documentation</h3>
                            <p className="quick-link-desc">Developer resources</p>
                        </Link>
                        <Link href="/resources#support" className="quick-link-card" onClick={(e) => { e.preventDefault(); setActiveCategory('support'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                            <div className="quick-link-icon"><i className="bi bi-chat-dots"></i></div>
                            <h3 className="quick-link-title">Support</h3>
                            <p className="quick-link-desc">Get help & answers</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resources;

