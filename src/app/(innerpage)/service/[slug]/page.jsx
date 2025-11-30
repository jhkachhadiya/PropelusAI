import BreadCumb from '@/app/Components/Common/BreadCumb';
import ServiceDetails from '@/app/Components/ServiceDetails/ServiceDetails';
import React from 'react';

export async function generateStaticParams() {
  const services = [
    'website-development',
    'mobile-app',
    'linkedin-marketing',
    'lead-generation',
    'marketing-automation',
    'custom-email-domains',
    'cybersecurity'
  ];
  
  return services.map((slug) => ({
    slug: slug,
  }));
}

const serviceMap = {
  'website-development': 'Website Development',
  'mobile-app': 'Mobile Apps',
  'linkedin-marketing': 'LinkedIn Marketing',
  'lead-generation': 'Lead Generation',
  'marketing-automation': 'Marketing Automation',
  'custom-email-domains': 'Custom Email Domains',
  'cybersecurity': 'Cybersecurity'
};

const ServiceSlugPage = async ({ params }) => {
  const { slug } = await params;
  const serviceTitle = serviceMap[slug] || 'Service Details';
  
  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title={serviceTitle}
      />
      <ServiceDetails slug={slug} />
    </div>
  );
};

export default ServiceSlugPage;

