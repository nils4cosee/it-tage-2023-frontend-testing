import { apiGet } from "./fetchFromApi.ts";
import { useHandler } from "@/test-utils/mock-api.test-helper.ts";
import { http, HttpResponse } from "msw";
import { baseApiUrl } from "@/backend/config.ts";

describe("apiGet", () => {
  it("fetches with base url", async () => {
    useHandler(
      http.get(`${baseApiUrl}/echo/:string`, ({ params }) => {
        return HttpResponse.json({
          echo: params.string,
        });
      }),
    );
    const response = await apiGet("/echo/abc");

    expect(await response.json()).toEqual({ echo: "abc" });
  });
});
