import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '.'
describe('Button Component', () => {
  it('should render the button with the correct label', () => {
    const label = 'Click me';
    render(<Button />);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveTextContent(label);
  });
});
