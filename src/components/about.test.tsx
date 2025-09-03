import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import About from './about';

describe('About Component', () => {
  it('renders the about section with all content', () => {
    render(<About />);

    expect(screen.getByText('About me')).toBeInTheDocument();

    const paragraphs = [
      /over 15 years of experience in software development/i,
      /9 years in team leadership/i,
      /outside of work, I'm fiercely loyal/i,
    ];

    paragraphs.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });
});
