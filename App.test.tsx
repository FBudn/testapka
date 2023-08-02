import React from 'react';
import {render, screen} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import TestRenderer from 'react-test-renderer';
import App from './App';

test(`Shoul App render`, () => {
  render(<App />);
  const AppTest = screen.getByTestId(`test-app-id`);
  expect(AppTest).toBeOnTheScreen();
});

test(`Should match snapshot`, () => {
  const AppTest = TestRenderer.create(<App />).toJSON();
  expect(AppTest).toMatchSnapshot();
});
