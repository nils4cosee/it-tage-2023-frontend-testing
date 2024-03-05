import { myFetch } from "./myFetch";
import { useHandler } from "@/test-utils/mock-api.test-helper";
import { http, HttpResponse } from "msw";
import { baseApiUrl } from "@/backend/config";

describe("apiGet", () => {
  it("fetches with base url", async () => {
    useHandler(
      http.get(`${baseApiUrl}/echo/:string`, ({ params }) => {
        return HttpResponse.json({
          echo: params.string,
        });
      }),
    );
    const response = await myFetch("/echo/abc");

    expect(await response.json()).toEqual({ echo: "abc" });
  });
});
