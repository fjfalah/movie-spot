import React from 'react';

import styled from '../../themes';

import ModalLayout from './ModalLayout';

type ModalType = {
  onClose?: () => void;
  poster: string;
};

const Root = styled.div``;
const Poster = styled.div<{ url: string }>`
  width: 500px;
  height: 500px;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: center;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
`;
const ModalPreviewPoster: React.FC<ModalType> = ({ poster, onClose }) => {
  return (
    <ModalLayout onClose={onClose} transparent>
      <Root>
        <Poster url={poster} />
      </Root>
    </ModalLayout>
  );
};

export default ModalPreviewPoster;
