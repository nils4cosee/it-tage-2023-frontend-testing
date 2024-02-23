import { UserEvent, userEvent } from "@testing-library/user-event";

export let user: UserEvent = null!;

beforeEach(() => {
  user = userEvent.setup();
});
