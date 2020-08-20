import { NextPage } from 'next';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import { Section, PageDescription } from '../components';
import { getMovies } from '../services/movieService';
import { MovieStateType } from '../types/state';

type HomeType = {
  movies: MovieStateType;
};

const HomePage: NextPage<HomeType> = ({ movies }) => {
  const dispatch = useDispatch();
  const { keyword } = movies;
  useEffect(() => {
    dispatch(getMovies(keyword, 1));
  }, [dispatch, keyword]);
  return (
    <PageDescription title="Home">
      <Section>
        {(movies?.items || []).map((item) => {
          return (
            <Link href="/[id]" as={`/${item.imdbID}`} key={item.imdbID}>
              {item.Title}
            </Link>
          );
        })}
      </Section>
    </PageDescription>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

export default connect(mapStateToProps)(HomePage);
