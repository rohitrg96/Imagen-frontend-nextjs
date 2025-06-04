import { render, screen } from '@testing-library/react';
import InfoCard from '@/components/ui/InfoCard';

describe('InfoCard component', () => {
  const props = {
    title: 'Sample Title',
    description: 'This is a sample description.',
  };

  it('renders title and description correctly', () => {
    render(<InfoCard {...props} />);

    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();
  });

  it('applies correct styles (class names)', () => {
    const { container } = render(<InfoCard {...props} />);
    const div = container.firstChild;

    expect(div).toHaveClass(
      'bg-black',
      'p-6',
      'rounded-2xl',
      'shadow-md',
      'text-left'
    );
    expect(screen.getByText(props.title)).toHaveClass(
      'text-white',
      'font-semibold',
      'mb-2'
    );
    expect(screen.getByText(props.description)).toHaveClass('text-neutral-400');
  });
});
