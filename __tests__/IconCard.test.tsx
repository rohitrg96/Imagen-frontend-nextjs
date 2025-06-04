import { render, screen } from '@testing-library/react';
import Card from '@/components/ui/IconCard';

// Mock next/image for Jest (to avoid errors)
jest.mock(
  'next/image',
  () => (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />;
  }
);

describe('Card component', () => {
  const defaultProps = {
    imageSrc: '/test-image.jpg',
    title: 'Test Title',
    description: 'Test description text.',
    isTwoCards: false,
  };

  it('renders image, title, and description', () => {
    render(<Card {...defaultProps} />);

    // Check image is rendered with correct src and alt
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', defaultProps.imageSrc);
    expect(image).toHaveAttribute('alt', defaultProps.title);

    // Check title and description texts
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
  });

  it('does NOT have border class when isTwoCards is false', () => {
    render(<Card {...defaultProps} isTwoCards={false} />);
    const container = screen.getByText(defaultProps.title).parentElement;
    expect(container).not.toHaveClass('border', 'border-gray-400');
  });

  it('has border class when isTwoCards is true', () => {
    render(<Card {...defaultProps} isTwoCards={true} />);
    const container = screen.getByText(defaultProps.title).parentElement;
    expect(container).toHaveClass('border', 'border-gray-400');
  });
});
