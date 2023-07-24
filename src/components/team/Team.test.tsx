import { render, screen } from '@testing-library/react';
import Team from "./Team";


describe('Team', () => {
  it('renders without crashing', () => {
    render(<Team />);
    // const headline = screen.getByText(/Contact/i);
    // expect(headline).toBeInTheDocument();
  });
});