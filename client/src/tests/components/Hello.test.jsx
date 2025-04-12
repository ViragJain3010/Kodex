// import React from 'react';
import { render, screen } from '@testing-library/react';
// eslint-disable-next-line no-unused-vars
import Hello from '@/components/Hello';

describe('Hello component', () => {
  it('renders the correct name', () => {
    // eslint-disable-next-line no-unused-vars
    render(<Hello name="Virag" />);
    expect(screen.getByText('Hello, Virag!')).toBeInTheDocument();
  });
});
