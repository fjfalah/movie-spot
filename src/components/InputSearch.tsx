import React, { InputHTMLAttributes, FormEvent } from 'react';

import styled from '../themes';

import Button from './Button';
import Input from './Input';

type defaultType = InputHTMLAttributes<HTMLInputElement>;

type InputSearchType = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

const Root = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  width: fit-content;
`;

const ButtonSearch = styled(Button)`
  font-size: 20px;
  position: absolute;
  right: 5px;
`;

const InputSearchBase = styled(Input)`
  padding-right: 140px;
  flex: 1;
`;

const InputSearch: React.FC<defaultType & InputSearchType> = (props) => {
  const { onSubmit, ...mainProps } = props;
  return (
    <Root onSubmit={onSubmit}>
      <InputSearchBase type="text" name="search" {...mainProps} />
      <ButtonSearch type="submit">Search</ButtonSearch>
    </Root>
  );
};

export default InputSearch;
