import React from 'react';

const MovingCategory: React.FC<{}> = () => {
  return (
    <>
      <iframe
        src='https://www.youtube.com/embed/HWhZJu5RT7Q'
        frameBorder='0'
        height='100%'
        width='100%'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        name='portfolio youtube video'
      />
    </>
  );
};

export default MovingCategory;
