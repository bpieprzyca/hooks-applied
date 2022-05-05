export const getActionNameWithDate = (actionName: string) => {
  const currentDate = new Date();

  return `${currentDate.toLocaleString('en-GB')} ${actionName}`;
};
