const START_FORMATTING_ON = 1000;
const MILLION_VALUE = 1_000_000;
const BILLION_VALUE = 1_000_000_000;

const suffixesMap = {
  [START_FORMATTING_ON]: 'k',
  [MILLION_VALUE]: 'm',
  [BILLION_VALUE]: 'b'
};

const getShortDecimalValue = (value: number, divider: number) => {
  const decimalValue = value  / divider;
  return decimalValue.toFixed(1);
};

const getSuffixedValue = (
  value: number,
  divider: keyof typeof suffixesMap,
) => {
  const decimalValue = getShortDecimalValue(value, divider);
  return `${decimalValue}${suffixesMap[divider]}`;
};

const formatStars = (starsCount: number) => {
  if(starsCount >= START_FORMATTING_ON) {
    if(starsCount >= MILLION_VALUE) {
      return getSuffixedValue(starsCount, MILLION_VALUE);
    }

    if(starsCount >= BILLION_VALUE) {
      return getSuffixedValue(starsCount, BILLION_VALUE);
    }

    return getSuffixedValue(starsCount, START_FORMATTING_ON);
  }

  return starsCount;
}

export { formatStars }