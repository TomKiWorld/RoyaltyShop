export const getOrderNumber = (currentUser, createdAt) => {
  const formatNumber = (number) => ('0' + number).slice(-2);
  const year = createdAt.getFullYear();
  const month = formatNumber(createdAt.getMonth());
  const day = formatNumber(createdAt.getDate());
  const hour = formatNumber(createdAt.getHours());
  const minute = formatNumber(createdAt.getMinutes());

  return `${year}${month}${day}${hour}${minute}-${currentUser.createdAt.seconds}`;
}

export const getOrdersArrayForPreview = orders => {
  if (orders.orders) {
    const ordersObjectArray = orders.orders;
    const ordersArray = ordersObjectArray.map(order => order['order'] ? order['order'] : [] );
    ordersArray.sort((a, b) => (a.id < b.id) ? 1 : -1);
    return ordersArray;
  }
  return [];
}
