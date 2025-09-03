import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from './footer';

describe('Footer Component', () => {
  it('renders the footer component', () => {
    render(<Footer />);
    const date = new Date();

    expect(
      screen.getByText(`© ${date.getFullYear()} Eric Maicon. All rights reserved.`),
    ).toBeInTheDocument();
  });
});
