import { mount } from 'enzyme';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

import {
  Button,
  Box,
  Input,
  InputSearch,
  Pill,
  Section,
  Text,
  MovieCard,
} from '../src/components';
import { theme } from '../src/themes';

const mountWithTheme = (component: React.ReactNode) => {
  return mount(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('Test - Component', () => {
  it('Theme Provider should works with checking color', () => {
    const wrapper = mountWithTheme(<Button>test</Button>);
    expect(wrapper.debug()).toMatchSnapshot();
    expect(wrapper).toHaveStyleRule('background', '#1b998b');
  });
  it('Box Should has width and height', () => {
    const wrapper = mountWithTheme(
      <Box width="10px" height="10px" backgroundColor="red" />
    );

    expect(wrapper.children().debug()).toMatchSnapshot();
    expect(wrapper).toHaveStyleRule('background-color', 'red');
    expect(wrapper).toHaveStyleRule('width', '10px');
    expect(wrapper).toHaveStyleRule('height', '10px');
  });
  it('Pill Should has color and background value', () => {
    const wrapper = mountWithTheme(
      <Pill color="#ffffff" background="red">
        Batman
      </Pill>
    );

    expect(wrapper.children().debug()).toMatchSnapshot();
    expect(wrapper).toHaveStyleRule('background', 'red');
    expect(wrapper).toHaveStyleRule('color', '#ffffff');
  });
  it('Text Should has color, size and weight value', () => {
    const wrapper = mountWithTheme(
      <Text color="#000000" size="20px" weight="bold">
        Hello, World!
      </Text>
    );

    expect(wrapper.children().debug()).toMatchSnapshot();
    expect(wrapper).toHaveStyleRule('color', '#000000');
    expect(wrapper).toHaveStyleRule('font-size', '20px');
    expect(wrapper).toHaveStyleRule('font-weight', 'bold');
  });
  it('Input should has value', () => {
    const wrapper = mountWithTheme(<Input defaultValue="Batman" />);

    expect(wrapper.find('input').debug()).toMatchSnapshot();
    expect(wrapper.find('input').props().defaultValue).toEqual('Batman');
  });
  it('InputSearch calls onSubmit prop function when form is submitted', () => {
    const onSubmitFn = jest.fn();
    const wrapper = mountWithTheme(
      <InputSearch onSubmit={onSubmitFn} defaultValue="Batman" />
    );
    const form = wrapper.find('form');
    form.simulate('submit');
    expect(onSubmitFn).toHaveBeenCalledTimes(1);
    expect(form.debug()).toMatchSnapshot();
  });
  it('Section should has children', () => {
    const wrapper = mountWithTheme(
      <Section>
        <Box />
        <Box />
      </Section>
    );
    expect(wrapper.find('section').debug()).toMatchSnapshot();
    expect(wrapper.find('section').children()).toHaveLength(2);
  });
  it('MovieCard should has props', () => {
    const props = {
      poster:
        'https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
      imdbID: '123',
      year: `2016`,
      type: 'test',
      title: 'Batman vs Superman',
    };
    const wrapper = mountWithTheme(
      <MovieCard
        imdbID={props.imdbID}
        poster={props.poster}
        title={props.title}
        year={props.year}
        type={props.type}
      />
    );
    expect(wrapper.children().debug()).toMatchSnapshot();
    expect(wrapper.find('.title').first().text()).toEqual(props.title);
    expect(wrapper.find('.poster').first()).toHaveStyleRule(
      'background-image',
      `url(${props.poster})`
    );
    expect(wrapper.find('label').text()).toEqual(props.year);
    expect(wrapper.find('a').at(0).props().href).toEqual(`/${props.imdbID}`);
  });
});
