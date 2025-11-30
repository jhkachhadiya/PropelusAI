import BreadCumb from '@/app/Components/Common/BreadCumb';
import Solutions from '@/app/Components/Solutions/Solutions';
import React from 'react';

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title="Solutions"
      />
      <Solutions />
    </div>
  );
};

export default page;

