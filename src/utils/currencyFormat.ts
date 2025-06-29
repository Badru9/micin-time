export const currencyFormat = (amount: number) => {
  return Intl.NumberFormat('id-ID', {
    maximumFractionDigits: 0,
    currency: 'IDR',
    style: 'currency',
  }).format(amount);
};
