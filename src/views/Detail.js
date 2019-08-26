import React, { useState, useEffect } from 'react';
import './Views.scss';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import { Spacer, DetailCard, CircularLoading } from '../components';

const Detail = ({ history, match, ...props }) => {
  const [pokemon, setPokemon] = useState(gql`
    query {
      pokemon (id: "${match.params.id}") {
        id
        name
        classification
        types
        image
        weight {
          minimum
          maximum
        }
        height {
          minimum
          maximum
        }
        resistant
        weaknesses
        evolutions {
          id
          name
        }
      }
  }`)

  useEffect(() => {
    setPokemon(gql`
      query {
        pokemon (id: "${match.params.id}") {
          id
          name
          classification
          types
          image
          weight {
            minimum
            maximum
          }
          height {
            minimum
            maximum
          }
          resistant
          weaknesses
          evolutions {
            id
            name
          }
        }
    }`)
  }, [match.params.id])

  return (
    <Query
      query={pokemon}
    >
      {
        ({ loading, error, data }) => (
          loading ?
            <div className="container center">
              <CircularLoading width="30px" height="30px" />
            </div>
          :
          !error ?
            <div className="container">
              <Spacer />
              <DetailCard {...props} {...{ history, match }}item={data.pokemon} />
              <Spacer />
            </div>
          :
            alert('error in fetching data')
        )
      }
    </Query>
  );
}

export default Detail;
