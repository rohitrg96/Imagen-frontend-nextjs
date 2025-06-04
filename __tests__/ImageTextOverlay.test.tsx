import { render, screen } from '@testing-library/react';
import ImageTextOverlay from '@/components/ui/ImageTextOverlay';

// Mock next/link for testing
jest.mock('next/link', () => {
  return ({ children, href }: any) => <a href={href}>{children}</a>;
});

// Mock TitleDescription component to simplify tests
jest.mock('@/components/ui/TitleDescription', () => {
  return ({ title }: any) => (
    <div>{Array.isArray(title) ? title.join(' ') : title}</div>
  );
});

describe('ImageTextOverlay component', () => {
  const defaultProps = {
    imageSrc: '/test-image.jpg',
    line1: 'Test Overlay Title',
    buttonText: 'Custom Button',
    buttonLink: '/custom-link',
  };

  it('renders image with correct src and alt', () => {
    render(<ImageTextOverlay {...defaultProps} />);
    const img = screen.getByAltText('Overlay');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', defaultProps.imageSrc);
  });

  it('renders TitleDescription text (line1)', () => {
    render(<ImageTextOverlay {...defaultProps} />);
    expect(screen.getByText(defaultProps.line1)).toBeInTheDocument();
  });

  it('renders button with correct text and href', () => {
    render(<ImageTextOverlay {...defaultProps} />);
    const button = screen.getByRole('button', {
      name: defaultProps.buttonText,
    });
    expect(button).toBeInTheDocument();

    // The button is wrapped in <a> due to next/link mock
    const link = button.closest('a');
    expect(link).toHaveAttribute('href', defaultProps.buttonLink);
  });

  it('uses default buttonText and buttonLink if not provided', () => {
    render(<ImageTextOverlay imageSrc="/img.jpg" line1="Default Test" />);
    const button = screen.getByRole('button', { name: 'View Images' });
    expect(button).toBeInTheDocument();

    const link = button.closest('a');
    expect(link).toHaveAttribute('href', '#');
  });
});
