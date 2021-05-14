import { render, screen } from '@testing-library/react';

import { Main } from '.';

describe('<Main />', () => {
  it('should render the heading correctly', () => {
    render(<Main />);

    expect(
      screen.getByRole('heading', { name: /react avançado/i }),
    ).toBeInTheDocument();
  });

  it('should render correctly', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
