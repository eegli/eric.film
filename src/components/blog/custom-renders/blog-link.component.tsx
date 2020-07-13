import React from 'react';

const Link: React.FC<HTMLLinkElement> = props => {
  return (
    <a href={props.href} target='_blank' rel='noreferrer'>
      {props.children}
    </a>
  );
};

export default Link;
