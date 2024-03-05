import Calendar from "./Calendar.vue";
import { renderComponent } from "@/test-utils/renderComponent.test-helper.ts";
import { dom } from "@/test-utils/dom.test-helper.ts";

describe("Calender", () => {
  it("shows the current date", () => {
    vi.useFakeTimers();
    vi.setSystemTime("2022-10-10");
    renderComponent(Calendar);

    expect(dom.getByText("2022-10-10")).toBeInTheDocument();
  });
});
