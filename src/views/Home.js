import React, { useState } from 'react';
import './Views.scss';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import debounce from 'lodash.debounce';

import { Card, Spacer, CircularLoading } from '../components';

const Home = (props) => {
  const [first, setFirst] = useState(10);
  const [list, setList] = useState([]);

  const pokemons = gql`
  query {
    pokemons (first: 10) {
      id
      name
      classification
      image
    }
  }`

  const loadMore = gql`
  query {
    pokemons (first: ${first}) {
      id
      name
      classification
      image
    }
  }`

  window.onscroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop
      === document.documentElement.offsetHeight
    ) {
      setFirst(first + 10);
    }
  }, 100);

  return (
    <Query
      query={pokemons}
    >
      {
        ({ loading, error, data }) => {
          if (data.pokemons) {
            setList(data.pokemons);
          }
          return (
            loading ?
              <div className="container center">
                <CircularLoading width="30px" height="30px" />
              </div>
            :
            !error ?
              <div className="container">
                <Spacer />
                {
                  list.map(item => (
                    <>
                      <Card {...props} item={item} />
                      <Spacer />
                    </>
                  ))
                }
                <Query
                  query={loadMore}
                >
                  {
                    ({ loading, error, data }) => {
                      if (data.pokemons) {
                        setList(data.pokemons);
                      }
                      return (
                        loading ?
                          <div className="center">
                            <CircularLoading width="30px" height="30px" />
                          </div>
                        :
                        !error ?
                          null
                        :
                          alert('error in fetching data')
                      )
                    }
                  }
                </Query>
              </div>
            :
              alert('error in fetching data')
          )
        }
      }
    </Query>
  );
}

export default Home;
