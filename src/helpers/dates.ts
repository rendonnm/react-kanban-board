export function getActualDate() {
  const actualDate = new Date();

  const actualYear = actualDate.getFullYear();
  const actualDay = actualDate.getDate();
  const actualMonth = actualDate.getMonth() + 1;

  return `${actualYear}-${actualMonth}-${actualDay}`;
}
