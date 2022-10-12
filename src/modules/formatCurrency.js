export const formatCurrency = (n) => 
  new Intl.NumberFormat('ru-Ru', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0,
  }).format(n)
