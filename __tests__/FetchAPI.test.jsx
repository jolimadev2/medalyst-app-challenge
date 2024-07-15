import React from 'react';
import { render } from '@testing-library/react-native';
import FetchAPI from '../src/components/FetchAPI';

describe('FetchAPI component', () => {
  test('renders no results found initially', async () => {
    const { findByText } = render(<FetchAPI searchQuery="" />);
    const noResultsText = await findByText(/No results found/);
    expect(noResultsText).toBeTruthy();
  });
});
