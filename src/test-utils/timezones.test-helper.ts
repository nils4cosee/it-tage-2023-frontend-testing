import timeZoneMock, { TimeZone } from "timezone-mock";

export function describeInTimezones(specs: () => {}) {
  describe.each(["UTC", "US/Pacific", "Etc/GMT+1"] satisfies TimeZone[])(
    "in timezone %s",
    (timezone) => {
      beforeEach(() => {
        timeZoneMock.register(timezone);
      });

      afterEach(() => {
        timeZoneMock.unregister();
      });

      specs();
    },
  );
}
