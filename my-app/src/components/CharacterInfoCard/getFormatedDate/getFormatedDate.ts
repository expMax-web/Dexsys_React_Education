export const getFormatedDate = (
  date: string | null | undefined
): string | undefined => {
  if (date) {
    const formattedDate = new Date(date);
    if (formattedDate.getDate()) {
      return `${formattedDate.getDate()}.${formattedDate.getMonth()}.${formattedDate.getFullYear()}`;
    }
    return;
  }
  return;
};
