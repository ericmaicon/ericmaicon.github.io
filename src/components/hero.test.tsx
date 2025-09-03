import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Hero from './hero';

describe('Hero Component', () => {
  it('renders the hero section with all elements', () => {
    render(<Hero />);

    expect(screen.getByText(/hello/i)).toBeInTheDocument();
    expect(screen.getByText("I'm Eric")).toBeInTheDocument();
    expect(screen.getByText('Lead Fullstack Developer')).toBeInTheDocument();

    const button = screen.getByRole('link');
    expect(button).toBeInTheDocument();

    const skills = [
      'Node.js',
      'React',
      'TypeScript',
      'Golang',
      'React Native',
      'AWS',
      'Serverless',
    ];
    skills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });
});
