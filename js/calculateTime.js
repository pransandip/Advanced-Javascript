function calculateTime(startDate, endDate) {
  const differenceInMilliseconds = endDate - startDate;
  const differenceInSeconds = differenceInMilliseconds / 1000;
  const differenceInMinutes = differenceInSeconds / 60;
  const differenceInHours = differenceInMinutes / 60;
  const differenceInDays = differenceInHours / 24;

  console.log(`Time difference: ${differenceInDays} days, ${differenceInHours % 24} hours, ${differenceInMinutes % 60} minutes, ${differenceInSeconds % 60} seconds`);
}

const start = new Date('2023-01-01');
const end = new Date('2023-02-01');
calculateTime(start, end);
