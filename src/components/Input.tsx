import styled from '../themes';

const Input = styled.input`
  outline: 0;
  border: 0;
  padding: 16px 30px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
  font-family: inherit;
  box-shadow: ${(props) => props.theme.boxShadow};
  &:focus {
    box-shadow: ${(props) => props.theme.boxShadowHover};
  }
`;

export default Input;
