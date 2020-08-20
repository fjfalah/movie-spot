import styled from '../themes';

const Button = styled.button`
  border: 0;
  padding: 10px 15px;
  background: ${(props) => props.theme.color.green};
  color: ${(props) => props.theme.color.white};
  font-size: 15px;
  font-family: inherit;
  font-weight: bold;
  outline: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s all ease;
  box-shadow: ${(props) => props.theme.boxShadow};

  &:focus {
    outline: none;
  }

  &:hover {
    box-shadow: ${(props) => props.theme.boxShadowHover};
  }
`;

export default Button;
