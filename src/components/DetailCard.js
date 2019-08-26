import React from 'react';
import './Components.scss';

const DetailCard = ({ history, item }) => {
  return (
    <div className="detail-card">
      <div className="image-box-detail-card">
        <img className="image-detail-card" src={item.image} alt={item.name} />
      </div>
      <div className="content-detail-card">
        <span className="title-content-detail-card">{item.name}</span>
        <span>{item.classification}</span>
        <p className="column">
          <span>Types: {item.types.join(', ')}</span>
          <span>Weight: {item.weight.minimum} - {item.weight.maximum}</span>
          <span>Height: {item.height.minimum} - {item.height.maximum}</span>
          <span>Resistant: {item.resistant.join(', ')}</span>
          <span>Weaknesses: {item.weaknesses.join(', ')}</span>
        </p>
        <span>Evolutions:</span>
        {
          item.evolutions ?
            item.evolutions.map(single => (
              <a className="evo-content-detail-card" onClick={() => history.push(`/${single.id}`)}>{single.name}</a>
            ))
          :
            <span>None</span>
        }
      </div>
    </div>
  );
}

export default DetailCard;
