import React, { useState } from 'react';
import './Views.scss';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import { Card, Spacer, CircularLoading } from '../components';

const Home = (props) => {
  const [first, setFirst] = useState(1000)

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
          loading ?
            <div className="container center">
              <CircularLoading width="30px" height="30px" />
            </div>
          :
            <div className="container">
              <Spacer />
              {
                data.pokemons.map(item => (
                  <>
                    <Card {...props} item={item} />
                    <Spacer />
                  </>
                ))
              }
            </div>
        )
      }
    </Query>
  );
}

export default Home;
