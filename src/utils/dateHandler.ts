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

export const weekHandler = (startDate: Date) => {
  console.log(new Date(startDate));
  let a = 0;
  let dateArr: number[] = [];
  while (a < 9) {
    if (a === 0) dateArr.push(Number(startDate));
    a++;
    dateArr.push(Number(new Date(startDate.setDate(startDate.getDate() + 7))));
  }
  return dateArr;
};

export const dateToStringArr = (dates: number[]) => {
  let result: { startWeek: string; endWeek: string }[] = [];
  dates.forEach((elem, ind, arr) => {
    const date = Number(elem);

    console.log(date);
    console.log(arr[ind + 1]);
    if (isNaN(arr[ind + 1])) return;
    result.push({
      startWeek: `${new Date(elem).getDate()} ${new Date(elem).toLocaleString(
        "en",
        {
          month: "short",
        }
      )}`,
      endWeek: `${new Date(arr[ind + 1]).getDate() - 1} ${new Date(
        arr[ind + 1]
      ).toLocaleString("en", { month: "short" })}`,
    });
  });
  return result;
};
