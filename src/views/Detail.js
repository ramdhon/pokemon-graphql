import React from 'react';

const Detail = ({ history, match }) => {
  return (
    <div>
      This is Detail
      {
        JSON.stringify(match)
      }
    </div>
  );
}

export default Detail;
