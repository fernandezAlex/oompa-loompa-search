import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Loading } from '../Loading';


describe('Loading component', () => {
  it('renders the loading text', () => {
    const { getByText } = render(<Loading />);
    const loadingText = getByText('Loading...');
    expect(loadingText).toBeInTheDocument();

  });

  it('renders the loading spinner', () => {
    const { getByTestId } = render(<Loading />);
    const loadingSpinner = getByTestId('loading-spinner');
    expect(loadingSpinner).toBeInTheDocument();
  });
});