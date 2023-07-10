import { render, screen } from '@testing-library/react';
import BlogListItem from "./BlogListItem";


describe('BlogListItem', () => {
  it('renders without crashing', () => {
    render(<BlogListItem />);
    // const headline = screen.getByText(/Contact/i);
    // expect(headline).toBeInTheDocument();
  });
});