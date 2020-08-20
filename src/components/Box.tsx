import styled from '../themes';

type BoxType = {
  width?: string;
  height?: string;
  backgroundColor?: string;
};

const Box = styled.div<BoxType>`
  width: ${(props) => props.width || '0'};
  height: ${(props) => props.height || '0'};
  background-color: ${(props) => props.backgroundColor || 'unset'};
`;

export default Box;
