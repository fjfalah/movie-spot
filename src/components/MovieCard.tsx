import Link from 'next/link';
import React from 'react';

import styled from '../themes';

import Button from './Button';
import Text from './Text';

type MovieCardType = {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;
  onClickPoster?: () => void;
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 200px;
  height: 330px;
  overflow: hidden;
  background: ${(props) => props.theme.color.white};
  border-radius: 12px;
  margin: 10px;
`;

const Poster = styled.div<{ url?: string }>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.theme.color.grey};
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  cursor: zoom-in;
`;

const YearLabel = styled.label`
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px 10px;
  background: ${(props) => props.theme.color.red};
  color: ${(props) => props.theme.color.white};
  border-bottom-left-radius: 12px;
  font-size: 14px;
  font-weight: bold;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  padding: 10px;
`;

const Title = styled(Text)`
  text-align: center;
  max-height: 50px;
  overflow: hidden;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 15px;
`;

const MovieCard: React.FC<MovieCardType> = (props) => {
  const { imdbID, poster, title, year, onClickPoster } = props;
  return (
    <Root>
      <Poster url={poster} onClick={onClickPoster} />
      <YearLabel>{year}</YearLabel>
      <ContentWrapper>
        <TitleWrapper>
          <Title size="16px" weight="bold">
            {title}
          </Title>
        </TitleWrapper>
        <ButtonWrapper>
          <Link href="/[id]" as={`/${imdbID}`}>
            <Button>DETAIL</Button>
          </Link>
        </ButtonWrapper>
      </ContentWrapper>
    </Root>
  );
};

export default MovieCard;
