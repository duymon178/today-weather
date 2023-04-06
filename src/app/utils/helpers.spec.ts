import { getCurrentTimeStr, getTimeStrFromTimestamp } from './helpers';

describe('Helpers', () => {
  it('#getTimeStrFromTimestamp should call Int.DateTimeFormat to format date', () => {
    const { DateTimeFormat } = Intl;
    vi.spyOn(Intl, 'DateTimeFormat').mockImplementation(
      (locale, options) => new DateTimeFormat(locale, options)
    );

    getTimeStrFromTimestamp(1647491400);
    expect(Intl.DateTimeFormat).toHaveBeenCalledWith('en-SG', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  });

  it('#getCurrentTimeStr should call Int.DateTimeFormat to format date', () => {
    const { DateTimeFormat } = Intl;
    vi.spyOn(Intl, 'DateTimeFormat').mockClear();
    vi.spyOn(Intl, 'DateTimeFormat').mockImplementation(
      (locale, options) => new DateTimeFormat(locale, options)
    );

    getCurrentTimeStr();
    expect(Intl.DateTimeFormat).toHaveBeenCalledWith('en-SG', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  });
});
