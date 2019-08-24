import React from 'react';
import './Views.scss';

const Detail = ({ history, match }) => {
  return (
    <div>
      This is Detail
      {
        JSON.stringify({ offsetHeight: document.body.offsetHeight, innerHeight: window.innerHeight, scrollY: window.scrollY })
      }
    </div>
  );
}

export default Detail;
