import { render } from '@testing-library/react';

import Schema from './schema';

describe('Schema', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Schema />);
    expect(baseElement).toBeTruthy();
  });
});
