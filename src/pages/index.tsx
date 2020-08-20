import { NextPage } from 'next';
import React, { useEffect, useCallback } from 'react';
import { connect, useDispatch } from 'react-redux';

import {
  Section,
  PageDescription,
  MovieCard,
  InfiniteScroll,
  Loading,
  InputSearch,
  Text,
  Box,
} from '../components';
import { getMovies } from '../services/movieService';
import { searchMoviesAction } from '../store/actions/movieAction';
import styled, { theme } from '../themes';
import { MovieStateType } from '../types/state';

type HomeType = {
  movies: MovieStateType;
};

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 720px) {
    flex-direction: column;
  }
`;

const MovieWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const MovieNotFound = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

const HomePage: NextPage<HomeType> = ({ movies }) => {
  const dispatch = useDispatch();
  const { keyword, items, page, hasMore } = movies;

  const handleLoadMore = useCallback(() => {
    dispatch(getMovies(keyword, page + 1));
  }, [dispatch, keyword, page]);

  const handleSubmitSearch = useCallback(
    (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      const search = data.get('search').toString();
      dispatch(searchMoviesAction(search));
    },
    [dispatch]
  );
  useEffect(() => {
    if (items.length === 0) {
      dispatch(getMovies(keyword, 1));
    }
  }, [dispatch, keyword, items]);
  return (
    <PageDescription title="Home">
      <Section>
        <HeaderWrapper>
          <Text size="30px" color={theme.color.white} weight="bold">
            MovieSpot
          </Text>
          <Box height="30px" />
          <InputSearch
            onSubmit={handleSubmitSearch}
            placeholder="Search by Title"
            defaultValue={keyword}
          />
        </HeaderWrapper>
        <Box height="30px" />
        {items.length === 0 && (
          <MovieNotFound>
            <Text size="20px" color={theme.color.white} weight="bold">
              No Movie Found
            </Text>
          </MovieNotFound>
        )}
        <InfiniteScroll
          onLoadMore={handleLoadMore}
          hasMore={hasMore}
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
