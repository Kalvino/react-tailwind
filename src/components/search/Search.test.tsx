import { render, screen } from '@testing-library/react';
import Search from "./Search";


describe('Search', () => {
  it('renders without crashing', () => {
    render(<Search />);
    // const headline = screen.getByText(/Contact/i);
    // expect(headline).toBeInTheDocument();
  });
});