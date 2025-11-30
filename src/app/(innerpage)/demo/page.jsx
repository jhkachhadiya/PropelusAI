import BreadCumb from '@/app/Components/Common/BreadCumb';
import DemoSignup from '@/app/Components/DemoSignup/DemoSignup';
import InteractiveDemo from '@/app/Components/DemoComponents/InteractiveDemo';
import React from 'react';

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title="Book a Demo"
      />
      <InteractiveDemo />
      <DemoSignup />
    </div>
  );
};

export default page;

