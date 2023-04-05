import { render } from '@testing-library/react';

import WeatherResult from './weather-result';

describe('WeatherResult', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WeatherResult />);
    expect(baseElement).toBeTruthy();
  });
});
