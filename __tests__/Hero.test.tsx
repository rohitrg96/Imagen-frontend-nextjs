/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen, fireEvent } from '@testing-library/react';
import Hero from '@/components/section/Hero';

jest.mock('framer-motion', () => {
  const React = require('react');
  const MotionDiv = React.forwardRef((props: any, ref) => (
    <div {...props} ref={ref}>
      {props.children}
    </div>
  ));
  MotionDiv.displayName = 'MotionDiv';
  return {
    motion: {
      div: MotionDiv,
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

  it('renders and responds to play/pause toggle', () => {
    const { getByRole } = render(<Hero />);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
  });
});
