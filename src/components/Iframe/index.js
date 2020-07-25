import React from 'react';

// Component
import Loading from '../Loading';

const Iframe = ({ HightLightDatas }) => {
  

  if (!HightLightDatas) {
    return <Loading />
  }

  
  // console.log(hightLight);

  function createMarkup() {
    const hightLight = HightLightDatas.map((video) => (video.embed));

    return {__html: hightLight};

  };

  return (
    <div dangerouslySetInnerHTML={createMarkup()} />
  );

};

export default Iframe;
