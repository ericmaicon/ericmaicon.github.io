import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Contact from './contact';

describe('Contact Component', () => {
  it('renders the contact section with all elements', () => {
    render(<Contact />);

    expect(screen.getByText("Let's work together")).toBeInTheDocument();

    const paragraphs = [
      /eric@ericmaicon.com.br/i,
      /linkedin.com\/in\/ericmaicon/i,
      /github.com\/ericmaicon/i,
    ];

    paragraphs.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });
});
