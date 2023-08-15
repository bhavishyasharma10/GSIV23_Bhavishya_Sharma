import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

test('shoud render', () => {
  render(<SearchBar />);
});
