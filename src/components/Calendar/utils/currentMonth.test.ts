import { describe } from "vitest";
import {
  currentMonth,
  WeekOfMonth,
} from "@/components/Calendar/utils/currentMonth.ts";

describe("current-month", () => {
  it("january 2024 first week", () => {
    const result = currentMonth("2024-01-15");
    expect(result.weeks[0]).toEqual({
      mon: { dayNumber: 1, isoDate: "2024-01-01" },
      tue: { dayNumber: 2, isoDate: "2024-01-02" },
      wed: { dayNumber: 3, isoDate: "2024-01-03" },
      thu: { dayNumber: 4, isoDate: "2024-01-04" },
      fri: { dayNumber: 5, isoDate: "2024-01-05" },
      sat: { dayNumber: 6, isoDate: "2024-01-06" },
      sun: { dayNumber: 7, isoDate: "2024-01-07" },
    } satisfies WeekOfMonth);
  });

  it("february 2024 first week", () => {
    const result = currentMonth("2024-02-15");
    expect(result.weeks[0]).toEqual({
      mon: { dayNumber: 29, isoDate: "2024-01-29", adjacent: true },
      tue: { dayNumber: 30, isoDate: "2024-01-30", adjacent: true },
      wed: { dayNumber: 31, isoDate: "2024-01-31", adjacent: true },
      thu: { dayNumber: 1, isoDate: "2024-02-01" },
      fri: { dayNumber: 2, isoDate: "2024-02-02" },
      sat: { dayNumber: 3, isoDate: "2024-02-03" },
      sun: { dayNumber: 4, isoDate: "2024-02-04" },
    } satisfies WeekOfMonth);
  });
});
