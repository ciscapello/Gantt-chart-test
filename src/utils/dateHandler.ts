export const dateHandler = (
  start: string,
  end: string,
  minDate: number | undefined
) => {
  const startDateDiff = Math.abs(
    new Date(start).getTime() - new Date(minDate!).getTime()
  );
  const startDiffDays = Math.ceil(startDateDiff / (1000 * 3600 * 24));

  const endDateDiff = Math.abs(
    new Date(end).getTime() - new Date(start).getTime()
  );
  const endDiffDays = Math.ceil(endDateDiff / (1000 * 3600 * 24)) + 1;

  return { startDiffDays, endDiffDays };
};
