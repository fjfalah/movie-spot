import { NextPage } from 'next';
import React, { useEffect, useState, useCallback } from 'react';
import { connect, useDispatch } from 'react-redux';

import {
  Section,
  PageDescription,
  MovieCard,
  InfiniteScroll,
  Loading,
} from '../components';
import { getMovies } from '../services/movieService';
import styled from '../themes';
import { MovieStateType } from '../types/state';

type HomeType = {
  movies: MovieStateType;
};

const MovieWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const HomePage: NextPage<HomeType> = ({ movies }) => {
  const [hasMoreDataLoad, setHasMoreDataLoad] = useState(true);
  const dispatch = useDispatch();
  const { keyword, items, page } = movies;

  const handleLoadMore = useCallback(() => {
    dispatch(getMovies(keyword, page + 1));
  }, [dispatch, keyword, page]);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(getMovies(keyword, 1));
    }
  }, [dispatch, keyword, items]);
  return (
    <PageDescription title="Home">
      <Section>
        <InfiniteScroll
          onLoadMore={handleLoadMore}
          hasMore={hasMoreDataLoad}
          loader={<Loading />}
        >
          <MovieWrapper>
            {(movies?.items || []).map((item) => {
              const { Poster, Title, Type, Year, imdbID } = item;
              return (
                <MovieCard
                  title={Title}
                  imdbID={imdbID}
                  poster={Poster}
                  year={Year}
                  type={Type}
                  key={imdbID}
                />
              );
            })}
          </MovieWrapper>
        </InfiniteScroll>
      </Section>
    </PageDescription>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

export default connect(mapStateToProps)(HomePage);
