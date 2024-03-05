import { sentRequests, useHandler } from "@/test-utils/mock-api.test-helper.ts";
import { http, HttpResponse } from "msw";
import { baseApiUrl } from "@/backend/config.ts";

describe("mock-api", () => {
  it("mocks response correctly", async () => {
    useHandler(
      http.get("http://localhost:3000/some/request", () =>
        HttpResponse.json({ success: true }),
      ),
    );
    const response = await window.fetch("http://localhost:3000/some/request");
    expect(await response.json()).toEqual({
      success: true,
    });
  });

  it("collects sent requests", async () => {
    useHandler(
      http.post("http://localhost:3000/echo", async () =>
        HttpResponse.json({ success: true }),
      ),
    );
    await window.fetch("http://localhost:3000/echo", {
      method: "POST",
      body: JSON.stringify({ key: "value" }),
    });
    expect(sentRequests).toHaveLength(1);
    expect(await sentRequests[0].json()).toEqual({ key: "value" });
  });

  it("uses default mocks if non are present", async () => {
    const todo = await window.fetch(`${baseApiUrl}/test-endpoint/1`);
    expect(await todo.json()).toEqual({
      number: 1,
    });
  });

  it("overrides default mocks if present", async () => {
    useHandler(
      http.get("/test-endpoint/:number", ({ params }) => {
        return HttpResponse.json({ number: Number(params["number"]) + 1 });
      }),
    );
    const todo = await window.fetch(`${baseApiUrl}/test-endpoint/1`);
    expect(await todo.json()).toEqual({
      number: 2,
    });
  });
});
