import React from 'react';
import './index.less';

const BasicLayout: React.FC = props => {
  return (
    <div className='normal'>
      <h1 className='title'>Yay! Welcome to umi!</h1>
      {props.children}
    </div>
  );
};

export default BasicLayout;
