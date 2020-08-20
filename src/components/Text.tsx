import styled from '../themes';

type TextType = {
  color?: string;
  size?: string;
  weight?: string;
};

const Text = styled.p<TextType>`
  color: ${(props) => props.color || props.theme.color.black};
  font-size: ${(props) => props.size || '16px'};
  font-weight: ${(props) => props.weight || 'normal'};
  margin: 0;
`;

export default Text;
