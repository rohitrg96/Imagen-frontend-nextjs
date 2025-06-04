/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react';
import Hero from '@/components/section/Hero';
import { ComponentPropsWithRef, JSX } from 'react';
import { MotionProps } from 'framer-motion'; // ✅ Import framer-motion props

jest.mock('framer-motion', () => {
  const React = require('react') as typeof import('react');

  // Combine HTML element props + motion props
  const createMockMotionElement = <T extends keyof JSX.IntrinsicElements>(
    tag: T
  ) =>
    React.forwardRef<HTMLElement, ComponentPropsWithRef<T> & MotionProps>(
      (props, ref) => {
        const {
          initial,
          animate,
          exit,
          variants,
          whileInView,
          transition,
          viewport,
          ...rest
        } = props;

        return React.createElement(tag, { ...rest, ref }, props.children);
      }
    );

  return {
    motion: {
      div: createMockMotionElement('div'),
      h1: createMockMotionElement('h1'),
      p: createMockMotionElement('p'),
    },
  };
});

jest.mock('@/hooks/useVideoPlayback', () => ({
  useVideoPlayback: () => ({
    videoRef: { current: { play: jest.fn(), pause: jest.fn() } },
    isPlaying: true,
    togglePlayback: jest.fn(),
  }),
}));

describe('Hero Component', () => {
  it('renders title and description', () => {
    render(<Hero />);
    expect(
      screen.getByRole('heading', { name: /Imagen/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/image generation model/i)).toBeInTheDocument();
  });

  it('renders the video element', () => {
    render(<Hero />);
    const video = screen.getByTestId('hero-video');
    expect(video).toBeInTheDocument();
  });

  it('renders both action buttons', () => {
    render(<Hero />);
    expect(screen.getByText(/Try In Gemini/i)).toBeInTheDocument();
    expect(screen.getByText(/Try in Whisk/i)).toBeInTheDocument();
  });
});
