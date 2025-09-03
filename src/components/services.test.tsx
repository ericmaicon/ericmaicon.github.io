import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Services from './services';

describe('Services Component', () => {
  it('renders the services section with all service cards', () => {
    render(<Services />);

    expect(screen.getByRole('heading', { name: /technical expertise/i })).toBeInTheDocument();
    expect(
      screen.getByText(/specialized knowledge across the full technology stack/i),
    ).toBeInTheDocument();

    const serviceTitles = [
      'Backend Development',
      'DevOps & Infrastructure',
      'Frontend Development',
      'Mobile Development',
    ];

    serviceTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });
});
