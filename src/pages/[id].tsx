import { NextPage, NextPageContext } from 'next';
import Router from 'next/router';
import React, { useCallback } from 'react';

import { Section, PageDescription, Pill, Text, Box } from '../components';
import {
  Back,
  CardContent,
  CardTitle,
  CardWrapper,
  ContentWrapper,
  IconStar,
  MovieHeader,
  MoviePoster,
  MovieTitle,
  PosterWrapper,
  Rating,
  RatingWrapper,
  RightContent,
  YearLabel,
} from '../components/DetailPageComponents';
import { getMovieDetail } from '../services/movieService';
import { theme } from '../themes';
import { MovieDetailType } from '../types/state';

type MovieDetailProps = {
  movie?: MovieDetailType;
};

const Card: React.FC<{ title?: string }> = ({ title, children }) => {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      {children}
    </CardWrapper>
  );
};

const MovieDetailPage: NextPage<MovieDetailProps> = (props) => {
  const { movie } = props;
  const handleBack = useCallback(() => {
    Router.back();
  }, []);

  if (!movie) {
    return <div>loading</div>;
  }

  const {
    Actors,
    Awards,
    Country,
    Director,
    Genre,
    Language,
    Metascore,
    Plot,
    Poster,
    Production,
    Ratings,
    Title,
    Writer,
    Year,
    imdbRating,
    imdbVotes,
  } = movie;
  return (
    <PageDescription title={Title}>
      <Section>
        <Back onClick={handleBack}>&lt;&lt; back</Back>
        <MovieHeader>
          <MovieTitle>{Title}</MovieTitle>
          <RatingWrapper>
            <IconStar src="/icons/icon-star.svg" alt="" />
            <Box width="5px" />
            <Rating>{imdbRating}</Rating>
            <Box width="5px" />
            <Text size="14px">({imdbVotes})</Text>
          </RatingWrapper>
        </MovieHeader>
        <ContentWrapper>
          <PosterWrapper>
            <MoviePoster url={Poster}>
              <YearLabel>{Year}</YearLabel>
            </MoviePoster>
          </PosterWrapper>
          <RightContent>
            <Card title="Plot">
              <Text>{Plot}</Text>
            </Card>
            <Card title="Director - Production">
              <Text size="20px">
                {Director} - {Production}
              </Text>
            </Card>
            <Card title="Actors">
              <CardContent>
                {Actors.split(',').map((actor) => {
                  return <Pill key={actor}>{actor}</Pill>;
                })}
              </CardContent>
            </Card>
            <Card title="Genre">
              <CardContent>
                {Genre.split(',').map((actor) => {
                  return (
                    <Pill key={actor} background={theme.color.blue}>
                      {actor}
                    </Pill>
                  );
                })}
              </CardContent>
            </Card>
            <Card title="Writer">
              <CardContent>
                {Writer.split(',').map((actor) => {
                  return (
                    <Pill key={actor} background={theme.color.red}>
                      {actor}
                    </Pill>
                  );
                })}
              </CardContent>
            </Card>
            <Card title="Awards">
              <Text>{Awards}</Text>
            </Card>
            <Card title="Ratings">
              {Ratings.map((rating) => {
                return (
                  <Pill
                    key={rating.Source}
                    background={theme.color.yellow}
                    textColor={theme.color.black}
                  >
                    {rating.Source} - {rating.Value}
                  </Pill>
                );
              })}
            </Card>
            <Card title="Language">
              <Text>{Language}</Text>
            </Card>
            <Card title="Country">
              <CardContent>
                {Country.split(',').map((country) => {
                  return (
                    <Pill key={country} background={theme.color.blue}>
                      {country}
                    </Pill>
                  );
                })}
              </CardContent>
            </Card>
            <Card title="Meta Score">
              <CardContent>
                <Pill>{Metascore}</Pill>
              </CardContent>
            </Card>
          </RightContent>
        </ContentWrapper>
      </Section>
    </PageDescription>
  );
};

MovieDetailPage.getInitialProps = async (ctx: NextPageContext) => {
  const { id } = ctx.query;
  const res = await getMovieDetail(id);
  const movie = res.data;

  return { movie };
};

export default MovieDetailPage;
