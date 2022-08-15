export const generareId = () => {
  const random = Math.random().toString(36).substring(2);
  const date = Date.now().toString(36);
  return random + date;
}

export const formatMoney = amount => {
  return amount.toLocaleString('es-PE', {
      style: 'currency',
      currency: 'PEN'
    });
}

export const generateDate = date => {
  const newDate = new Date(date);
  const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }

  return newDate.toLocaleDateString('es-ES', options);
}