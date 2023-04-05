import { render } from '@testing-library/react';

import HistoryItem from './history-item';

describe('HistoryItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HistoryItem />);
    expect(baseElement).toBeTruthy();
  });
});
