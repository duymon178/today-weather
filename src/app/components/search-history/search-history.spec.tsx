import { render } from '@testing-library/react';

import SearchHistory from './search-history';

describe('SearchHistory', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchHistory />);
    expect(baseElement).toBeTruthy();
  });
});
