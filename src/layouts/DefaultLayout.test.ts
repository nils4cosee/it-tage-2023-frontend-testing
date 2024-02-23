import DefaultLayout from "@/layouts/DefaultLayout.vue";

import { dom } from "@/test-utils/dom.test-helper.ts";

import { renderComponent } from "@/test-utils/renderComponent.test-helper.ts";

import { testRouter } from "@/test-utils/testRouter.test-helper.ts";

describe("DefaultLayout", () => {
  it("displays the body", () => {
    renderComponent(
      DefaultLayout,
      {},
      {
        default: "The Body",
      },
    );
    expect(dom.getByText("The Body")).not.toBeNull();
  });

  it("displays navigation", () => {
    renderComponent(
      DefaultLayout,
      {
        navigation: [
          { label: "Link1", to: "/" },
          { label: "Link2", to: "/test/clipboard" },
        ],
      },
      {
        default: "",
      },
    );
    expect(dom.getByText("Link1")).not.toBeNull();
    expect(dom.getByText("Link2")).not.toBeNull();
  });

  it("highlights active navigation only", async () => {
    await testRouter.push("/");
    renderComponent(
      DefaultLayout,
      {
        navigation: [
          { label: "Link1", to: "/" },
          { label: "Link2", to: "/test/clipboard" },
        ],
      },
      {
        default: "",
      },
    );
    expect(dom.getByText("Link1")).toHaveClass("active");
    expect(dom.getByText("Link2")).not.toHaveClass("active");

    await testRouter.push("/test/clipboard");
    expect(dom.getByText("Link1")).not.toHaveClass("active");
    expect(dom.getByText("Link2")).toHaveClass("active");
  });
});
