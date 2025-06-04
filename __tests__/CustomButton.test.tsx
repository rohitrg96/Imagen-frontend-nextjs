import { render, screen, fireEvent } from '@testing-library/react';
import CustomButton from '@/components/ui/CustomButton';

describe('CustomButton', () => {
  it('renders with default props and displays children', () => {
    render(<CustomButton>Click me</CustomButton>);

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();

    // Check for default width class
    expect(button).toHaveClass('w-60');

    // Check for default height class (py-4)
    expect(button).toHaveClass('py-4');

    // Check for default type
    expect(button).toHaveAttribute('type', 'button');
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<CustomButton onClick={handleClick}>Click me</CustomButton>);

    const button = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
