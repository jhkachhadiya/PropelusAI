import BreadCumb from '@/app/Components/Common/BreadCumb';
import Resources from '@/app/Components/Resources/Resources';
import React from 'react';

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title="Resources"
      />
      <Resources />
    </div>
  );
};

export default page;

