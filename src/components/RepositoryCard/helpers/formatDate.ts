const formatDate = (
  dateStr: string,
  options?: Intl.DateTimeFormatOptions
) => {
  const date = new Date(dateStr);
  const formatedDate = date.toLocaleString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    ...options
  });

  return formatedDate;
}

export { formatDate }