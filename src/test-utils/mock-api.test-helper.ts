import { setupServer } from "msw/node";

import { http, HttpResponse, RequestHandler } from "msw";

// This is a short example of how the mock-service-worker can be used.

// Here, you can add default request handlers for all endpoints that are called
// from anywhere in tne API
const server = setupServer(
  http.get("/test-endpoint/:number", ({ params }) => {
    return HttpResponse.json({ number: Number(params["number"]) });
  }),
);

// Sadly, it does not support testing which requests have been captured,
// We do this by storing the required data in an array that can be verified.
// In order to check whether the correct requests are sent to the backend.
// Usually, you should not do this:
// Have a look at https://mswjs.io/docs/best-practices/avoid-request-assertions
// for reasoning and exceptions.
export let sentRequests: Request[] = [];
server.events.on("request:start", async ({ request }) => {
  sentRequests.push(request.clone());
});

server.listen();

beforeEach(() => {
  server.resetHandlers();
  sentRequests = [];
});

// If you need a specific response for an endpoint, you can override the default ones here
export function useHandler(...handlers: RequestHandler[]) {
  server.use(...handlers);
}
