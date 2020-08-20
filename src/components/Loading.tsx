import React from 'react';

import styled from '../themes';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Loader = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 3em;
  display: inline-block;
  position: relative;
  vertical-align: middle;

  &,
  &:before,
  &:after {
    animation: 1s infinite ease-in-out;
  }
  &:before,
  &:after {
    content: '';
    width: 80%;
    height: 80%;
    background-color: ${(props) => props.theme.color.white};
    top: 5%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
  }

  & {
    animation: loader-1 1s infinite linear;
  }

  &:before {
    left: -5%;
    animation: loader-2 1s infinite alternate ease-in-out;
    transform-origin: 10% 50%;
  }
  &:after {
    left: auto;
    right: -5%;
    animation: loader-2 1s 1s infinite alternate ease-in-out;
    transform: scale(0);
    transform-origin: 90% 50%;
  }

  @keyframes loader-1 {
    0% {
      transform: rotate(20deg);
    }
    100% {
      transform: rotate(380deg);
    }
  }

  @keyframes loader-2 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Loading: React.FC = () => {
  return (
    <Root>
      <Loader />
    </Root>
  );
};

export default Loading;
