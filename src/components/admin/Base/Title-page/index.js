import React from 'react'

const Title = ({ title, subTitle }) => {
  return (
    <div>
      <div className="box-header with-border mb-3 ml-3">
        <h1 className="h3 mb-2 text-gray-800">
          {title} {subTitle}
        </h1>
      </div>
    </div>
  );
};

export default Title