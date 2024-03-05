import {
  getFirstDayOfMonth,
  getFirstDayOfWeek,
  iterate,
} from "@/components/Calendar/utils/dates.ts";
import { describeInTimezones } from "@/test-utils/timezones.test-helper.ts";

describeInTimezones(() => {
  describe("firstDayOfMonth", () => {
    it("get first of February 2024", () => {
      expect(getFirstDayOfMonth("2024-02-15")).toEqual("2024-02-01");
    });
  });

  describe("firstDayOfWeek", () => {
    it("get first of 01 February 2024", () => {
      expect(getFirstDayOfWeek("2024-02-01")).toEqual("2024-01-29");
    });
  });

  describe("nDays", () => {
    it("iterates the next n days.", () => {
      const result = Array.from(iterate("2024-02-27", 5));
      expect(result).toEqual([
        "2024-02-27",
        "2024-02-28",
        "2024-02-29",
        "2024-03-01",
        "2024-03-02",
      ]);
    });
  });
});
