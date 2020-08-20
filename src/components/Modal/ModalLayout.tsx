import React, { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import styled from '../../themes';
import Text from '../Text';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 11;
`;

const Content = styled.div<{ transparent?: boolean }>`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  padding: 20px;
  background: ${(props) =>
    props.transparent ? 'unset' : props.theme.color.white};
  z-index: 12;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
const Close = styled(Text)`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 12;
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.color.white};
`;
const ModalPortal: React.FC = ({ children }) => {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (children) {
      ref.current = document.querySelector('#modal-root');
      setMounted(true);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [children]);

  return mounted ? createPortal(children, ref.current) : null;
};

const ModalLayout: React.FC<{
  onClose?: () => void;
  transparent?: boolean;
}> = ({ children, onClose, transparent }) => {
  return (
    <ModalPortal>
      <ModalWrapper>
        <Backdrop onClick={onClose} />
        <Close onClick={onClose}>X</Close>
        <Content transparent={transparent}>{children}</Content>
      </ModalWrapper>
    </ModalPortal>
  );
};

export default ModalLayout;
