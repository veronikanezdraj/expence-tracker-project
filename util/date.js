//to do use moment lib

export function getFormattedDate(date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  //   return moment(date).format("MM/DD/YYYY");
}
