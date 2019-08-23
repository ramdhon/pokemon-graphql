import React, { useState } from 'react';
import './Views.scss';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import { Card, Spacer } from '../components';

const Home = () => {
  const [first, setFirst] = useState(10)

  const pokemons = gql`
  query {
    pokemons (first: ${first}) {
      id
      name
      classification
      types
      image
    }
  }`

  return (
    <Query
      query={pokemons}
    >
      {
        ({ loading, error, data }) => (
          <div className="container">
            <Spacer />
            <Card />
            <Spacer />
          </div>
        )
      }
    </Query>
  );
}

export default Home;
