import React from 'react';

const SvgWithMessage = ({ Component, headMessage, message }) => {
  return (
    <div className='d-flex flex-column align-items-center py-5'>
      <Component />
      <h3 className='text-secondary font-weight-bold mt-3'>{headMessage}</h3>
      <h4 className='text-secondary'>{message}</h4>
    </div>
  );
};

export default SvgWithMessage;
