export default (title, plural, short) => {
  const flatMap = new Map([
    ['1к', '1'],
    ['2к', '2'],
    ['3к', '3'],
    ['4к', '4'],
    ['S', 'Евро 2'],
    ['M', 'Евро 3'],
    ['L', 'Евро 4'],
    ['XL', 'Евро 5'],
    ['XXL', 'Евро 6'],
    ['7к', 'Евро 7'],
    ['8к', 'Евро 8'],
  ]);

  if (title === 'XS') {
    return plural ? 'Студии' : 'Студия';
  }

  if (flatMap.has(title)) {
    const result = plural ? `${flatMap.get(title)} - комнатные` : `${flatMap.get(title)} - комнатная`;

    if (short) {
      return result;
    }

    return plural ? `${result} квартиры` : `${result} квартира`;
  }

  return '';
};
