import {
  getFirstDayOfMonth,
  getFirstDayOfWeek,
} from "@/components/Calendar/utils/dates.ts";

export interface MonthReturn {
  weeks: WeekOfMonth[];
}

export interface WeekOfMonth {
  mon: Day;
  tue: Day;
  wed: Day;
  thu: Day;
  fri: Day;
  sat: Day;
  sun: Day;
}

export interface Day {
  isoDate: string;
  dayNumber: number;
  adjacent?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function currentMonth(isoDate: string): MonthReturn {
  const firstDayOfMonth = getFirstDayOfMonth(isoDate);
  console.log(firstDayOfMonth);
  const start = getFirstDayOfWeek(firstDayOfMonth);
  const days: Day[] = [0, 1, 2, 3, 4, 5, 6].map((daysAfter) => {
    const isoDate =
    return {};
  });
  console.log(start);
  return {
    weeks: [
      {
        mon: { isoDate: start, dayNumber: Number(start.split("-")[2]) },
        tue: { isoDate: "2024-01-02", dayNumber: 2 },
        wed: { isoDate: "2024-01-03", dayNumber: 3 },
        thu: { isoDate: "2024-01-04", dayNumber: 4 },
        fri: { isoDate: "2024-01-05", dayNumber: 5 },
        sat: { isoDate: "2024-01-06", dayNumber: 6 },
        sun: { isoDate: "2024-01-07", dayNumber: 7 },
      },
    ],
  } satisfies MonthReturn;
}
