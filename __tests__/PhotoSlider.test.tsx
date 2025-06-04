import { render, screen, fireEvent } from '@testing-library/react';
import PhotoSlider from '@/components/ui/PhotoSlider';
import '@testing-library/jest-dom';
import { usePhotoSlider } from '@/hooks/usePhotoSlider';
import { JSX } from 'react';

// Mock framer-motion to avoid animation complexity in unit tests
jest.mock('framer-motion', () => {
  const React = require('react');
  const createMockMotion = (tag: keyof JSX.IntrinsicElements) =>
    React.forwardRef(
      (props: React.ImgHTMLAttributes<HTMLImageElement>, ref: any) =>
        React.createElement(tag, { ...props, ref }, props.children)
    );
  return {
    motion: {
      div: createMockMotion('div'),
      h1: createMockMotion('h1'),
      p: createMockMotion('p'),
    },
    AnimatePresence: ({ children }: any) => <>{children}</>,
  };
});

// Optional: Mock usePhotoSlider if you want deterministic state
jest.mock('@/hooks/usePhotoSlider', () => ({
  usePhotoSlider: jest.fn(),
}));

describe('PhotoSlider', () => {
  const images = ['/image1.jpg', '/image2.jpg', '/image3.jpg'];

  beforeEach(() => {
    (usePhotoSlider as jest.Mock).mockReturnValue({
      current: 0,
      prevIndex: -1,
      direction: 1,
      goPrev: jest.fn(),
      goNext: jest.fn(),
      setCurrent: jest.fn(),
    });
  });

  it('renders the first image', () => {
    render(<PhotoSlider images={images} />);
    const img = screen.getByAltText('Slide 1');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', expect.stringContaining('image1'));
  });

  it('shows the next button when not on last image', () => {
    render(<PhotoSlider images={images} />);
    const nextButton = screen.getByRole('button', { name: /next slide/i });
    expect(nextButton).toBeInTheDocument();
  });

  it('calls goNext when next button is clicked', () => {
    const goNext = jest.fn();
    (usePhotoSlider as jest.Mock).mockReturnValue({
      current: 0,
      prevIndex: -1,
      direction: 1,
      goPrev: jest.fn(),
      goNext,
      setCurrent: jest.fn(),
    });

    render(<PhotoSlider images={images} />);
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]); // Click the next button
    expect(goNext).toHaveBeenCalled();
  });

  it('renders the correct number of navigation dots', () => {
    render(<PhotoSlider images={images} />);
    const dots = screen.getAllByTestId('dot-button');
    expect(dots.length).toBe(images.length);
  });
});
