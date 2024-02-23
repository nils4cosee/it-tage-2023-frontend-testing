import { createMyRouter } from "@/router/router.ts";

export let testRouter = createMyRouter();
beforeEach(() => {
  testRouter = createMyRouter();
});
