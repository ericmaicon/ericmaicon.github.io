import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './header';

window.HTMLElement.prototype.scrollIntoView = jest.fn();

describe('Header Component', () => {
  it('renders the header with logo and navigation', () => {
    render(<Header />);

    expect(screen.getByText('Eric Maicon')).toBeInTheDocument();

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Technologies')).toBeInTheDocument();
  });

  it('calls scrollToSection with correct section when a nav item is clicked', () => {
    render(
      <div>
        <Header />
        <div id="home"></div>
        <div id="about"></div>
        <div id="tech"></div>
        <div id="contact"></div>
      </div>,
    );

    const homeButton = screen.getByText('Home');
    fireEvent.click(homeButton);
    expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
    });

    jest.clearAllMocks();

    const aboutButton = screen.getByText('About');
    fireEvent.click(aboutButton);
    expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
    });

    jest.clearAllMocks();

    const techButton = screen.getByText('Technologies');
    fireEvent.click(techButton);
    expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
    });

    jest.clearAllMocks();

    const contactButton = screen.getByText('Contact');
    fireEvent.click(contactButton);
    expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
    });
  });

  it('has responsive design with mobile menu', () => {
    render(<Header />);

    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('hidden');
    expect(nav).toHaveClass('md:flex');
  });
});
