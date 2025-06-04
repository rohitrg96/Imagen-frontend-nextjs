import { render, screen, fireEvent } from '@testing-library/react';
import ExpandableCard from '@/components/ui/ExpandableCard';

const mockItems = [
  {
    image: '/test1.jpg',
    text: 'This is the full text of the first item that should be expandable.',
  },
  {
    image: '/test2.jpg',
    text: 'This is the full text of the second item that should also expand.',
  },
];

jest.mock('next/image', () => (props: any) => {
  // Mock Next.js Image component
  const { fill, ...rest } = props;
  return <img {...rest} alt={props.alt || 'mocked image'} />;
});

describe('ExpandableCard', () => {
  test('renders all items with truncated text by default', () => {
    render(<ExpandableCard items={mockItems} />);

    // Check that all items render with truncated text initially
    mockItems.forEach((item) => {
      const text = screen.getByText(item.text);
      expect(text).toBeInTheDocument();
    });

    // Only "+" (expand) buttons should be visible initially
    const plusButtons = screen.getAllByLabelText(/Expand text/i);
    expect(plusButtons.length).toBe(mockItems.length);
  });

  test('expands and collapses the text when button is clicked', () => {
    render(<ExpandableCard items={mockItems} />);

    const expandButtons = screen.getAllByLabelText(/Expand text/i);
    fireEvent.click(expandButtons[0]);

    // Collapse button should appear
    const collapseButton = screen.getByLabelText(/Collapse text/i);
    expect(collapseButton).toBeInTheDocument();

    // Collapse again
    fireEvent.click(collapseButton);

    // Expect all expand buttons to be visible again
    const expandButtonsAfterCollapse = screen.getAllByLabelText(/Expand text/i);
    expect(expandButtonsAfterCollapse.length).toBe(mockItems.length);
  });
});
