import React from 'react';

// Component
import Loading from '../Loading';

//Style
import IframeStyled from './IframeStyled';

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
    <IframeStyled>
      <div className='iframe' dangerouslySetInnerHTML={createMarkup()} />
    </IframeStyled>
    
  );

};

export default Iframe;
