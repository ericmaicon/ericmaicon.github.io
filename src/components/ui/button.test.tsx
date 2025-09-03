import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button, buttonVariants } from './button';

describe('Button Component', () => {
  it('renders default button correctly', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: 'Click me' });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(buttonVariants({ variant: 'default', size: 'default' }));
    expect(button).toHaveTextContent('Click me');
  });

  it.each([
    ['default', 'text-gray-400 shadow-xs hover:text-white'],
    ['destructive', 'bg-destructive text-white'],
    ['outline', 'border bg-primary shadow-xs hover:bg-primary/20 text-white'],
    ['secondary', 'bg-secondary-400 text-white shadow-xs hover:bg-secondary-500'],
    ['ghost', 'hover:bg-accent hover:text-accent-foreground'],
    ['link', 'text-primary underline-offset-4'],
  ])('applies correct variant classes for %s', (variant, expectedClasses) => {
    render(
      <Button variant={variant as React.ComponentProps<typeof Button>['variant']}>
        {variant} Button
      </Button>,
    );
    const button = screen.getByRole('button', { name: `${variant} Button` });

    expect(button).toHaveClass(expectedClasses);
  });

  it.each([
    ['default', 'h-9 px-4 py-2'],
    ['sm', 'h-8 px-3'],
    ['lg', 'h-10 px-6'],
    ['icon', 'size-9'],
  ])('applies correct size classes for %s', (size, expectedClasses) => {
    render(
      <Button size={size as React.ComponentProps<typeof Button>['size']}>{size} Button</Button>,
    );
    const button = screen.getByRole('button', { name: `${size} Button` });

    expect(button).toHaveClass(expectedClasses);
  });

  it('triggers onClick handler', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable</Button>);

    const button = screen.getByRole('button', { name: 'Clickable' });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies disabled styles and prevents click', () => {
    const handleClick = jest.fn();
    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>,
    );

    const button = screen.getByRole('button', { name: 'Disabled' });
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:opacity-50');

    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('renders as child element when asChild is true', () => {
    render(
      <Button asChild>
        <a href="#test">Test Link</a>
      </Button>,
    );
    const link = screen.getByRole('link', { name: 'Test Link' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass(buttonVariants());
    expect(link).toHaveAttribute('href', '#test');
  });

  it('merges button classes with child element when asChild is true', () => {
    render(
      <Button className="custom-button" variant="secondary" asChild>
        <a href="#">Custom Link</a>
      </Button>,
    );
    const link = screen.getByRole('link');
    expect(link).toHaveClass('custom-button');
    expect(link).toHaveClass(buttonVariants({ variant: 'secondary' }));
  });
});
