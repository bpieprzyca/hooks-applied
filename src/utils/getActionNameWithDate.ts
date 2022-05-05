export const getActionNameWithDate = (actionName: string) => {
  const currentDate = new Date();

  return `${currentDate.toLocaleString(
      'en-US',
      {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
      },
  )
  } ${actionName}`;
};
