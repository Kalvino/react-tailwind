import { render, screen } from '@testing-library/react';
import Promotion from "./Promotion";


describe('Promotion', () => {
  it('renders without crashing', () => {
    render(<Promotion />);
    // const headline = screen.getByText(/Contact/i);
    // expect(headline).toBeInTheDocument();
  });
});