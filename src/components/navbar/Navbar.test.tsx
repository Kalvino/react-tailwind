import { render, screen } from '@testing-library/react';
import Navbar from "./Navbar";


describe('Navbar', () => {
  it('renders without crashing', () => {
    render(<Navbar />);
    // const headline = screen.getByText(/Contact/i);
    // expect(headline).toBeInTheDocument();
  });
});