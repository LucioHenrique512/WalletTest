export const obfuscateCardNumber = (cardNumber: string) => {
  if (!cardNumber) {
    return '';
  }

  const widoutSpaces = cardNumber.replace(/\s/g, '');
  const obuscated = widoutSpaces.replace(/\d{4}(?=\d)/g, '••••');
  const obfuscatedWithSpaces = obuscated.replace(/(.{4})/g, '$1 ');

  return obfuscatedWithSpaces;
};
