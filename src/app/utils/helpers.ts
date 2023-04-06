/* Return date time string from UNIX timestamp: */
export function getTimeStrFromTimestamp(timestamp: number): string {
  const date = new Date(timestamp * 1000);

  const dateFormat = new Intl.DateTimeFormat('en-SG', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

  return dateFormat.format(date);
}
