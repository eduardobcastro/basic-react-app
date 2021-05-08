import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import React from 'react';
import ThemingLayout from './ThemingLayout';

test('renders Example body text', () => {
  render(<ThemingLayout />);
  const element = screen.getByText(/Example body text/i);
  expect(element).toBeInTheDocument();
});

test('renders correctly', () => {
  const tree = renderer
    .create(<ThemingLayout />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
