const DAY_IN_MS = 86400 * 1000;

export function getFirstDayOfMonth(isoDate: string) {
  const date = getLocalMidnight(isoDate);
  date.setDate(1);
  return toIsoDate(date);
}

function getLocalMidnight(isoDate: string) {
  const date = new Date(isoDate);
  date.setHours(date.getTimezoneOffset() / 60);
  return date;
}

export function getFirstDayOfWeek(isoDate: string) {
  const date = getLocalMidnight(isoDate);
  const firstOfWeek = new Date(
    date.getTime() - (date.getDay() - 1) * DAY_IN_MS,
  );
  return toIsoDate(firstOfWeek);
}

export function* iterate(
  startIsoDate: string,
  nDays: number,
): Iterable<string> {
  const startTime = getLocalMidnight(startIsoDate).getTime();
  console.log(new Date(startTime));
  for (let i = 0; i < nDays; i++) {
    yield toIsoDate(new Date(startTime + DAY_IN_MS * i));
  }
}

function toIsoDate(date: Date) {
  return date.toISOString().replace(/T.*$/, "");
}
