import React from 'react';
import './Components.scss';
import LazyLoad from 'react-lazyload';

import { CircularLoading } from './index';

const Card = ({ history, item }) => {
  return (
    <LazyLoad
      placeholder={
        <div className="container center">
          <CircularLoading width="20px" height="20px" />
        </div>
      }
    >
      <div className="card">
        <div className="image-box-card">
          <img className="image-card" src={item.image} alt={item.name} />
        </div>
        <div className="content-card">
          <a onClick={() => history.push(`/${item.id}`)} className="title-content-card">{item.name}</a>
          <span>{item.classification}</span>
        </div>
      </div>
    </LazyLoad>
  );
}

export default Card;
