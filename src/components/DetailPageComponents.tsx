import styled from '../themes';

export const MovieHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media only screen and (max-width: 720px) {
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
  }
`;

export const MovieTitle = styled.h2`
  font-size: 30px;
  text-align: center;
  margin: 0;
`;

export const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Rating = styled(MovieTitle)`
  color: ${(props) => props.theme.color.yellow};
`;

export const IconStar = styled.img`
  width: 20px;
  height: 20px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 720px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const PosterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
  margin-right: 20px;

  @media only screen and (max-width: 720px) {
    margin-right: 0px;
  }
`;

export const MoviePoster = styled.div<{ url?: string }>`
  width: 330px;
  height: 500px;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: center;
  box-shadow: ${(props) => props.theme.boxShadow};
  background-color: ${(props) => props.theme.color.grey};
  border-radius: 12px;
  position: relative;
  overflow: hidden;
`;

export const YearLabel = styled.label`
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px 10px;
  background: ${(props) => props.theme.color.red};
  color: ${(props) => props.theme.color.white};
  border-bottom-left-radius: 12px;
  font-size: 20px;
  font-weight: bold;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  padding: 20px;
  background: ${(props) => props.theme.color.white};
  box-shadow: ${(props) => props.theme.boxShadow};
  margin-bottom: 20px;
`;

export const CardTitle = styled.h4`
  font-size: 14px;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-bottom: 12px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Back = styled.label`
  font-size: 20px;
  font-weight: bold;
  width: fit-content;
  cursor: pointer;
  transition: 0.2s all ease;

  &:hover {
    color: ${(props) => props.theme.color.yellow};
  }
`;
