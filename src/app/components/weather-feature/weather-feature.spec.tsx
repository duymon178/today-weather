import { render } from '@testing-library/react';

import WeatherFeature from './weather-feature';

describe('WeatherFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WeatherFeature />);
    expect(baseElement).toBeTruthy();
  });
});
