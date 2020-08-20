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
  &:focus {
    outline: none;
  }
`;

export default Button;
