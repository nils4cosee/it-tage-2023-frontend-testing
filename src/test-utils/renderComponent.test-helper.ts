import { mount, VueWrapper } from "@vue/test-utils";

import { ComponentConstructor } from "@/test-utils/types.ts";
import { testRouter } from "@/test-utils/testRouter.test-helper.ts";

export interface RenderComponentReturn {
  wrapper: VueWrapper;
}

type ComponentProps<T extends ComponentConstructor> = InstanceType<T>["$props"];
type ComponentSlots<T extends ComponentConstructor> = {
  [X in keyof InstanceType<T>["$slots"]]: string;
};

let wrappers: VueWrapper[] = [];
const appDiv = document.createElement("div");
appDiv.setAttribute("id", "app");
document.body.append(appDiv);

// Render a component and attach it to the dom, so that we can use @testing-library utils
// yes @testing-library/vue is doing exactly this.
// This is just to show that there is no magic, and you can do it even if there
// is no testing library support for your framework
//
// More setup to be expected here
export function renderComponent<T extends ComponentConstructor>(
  component: T,
  props?: ComponentProps<T>,
  slots?: ComponentSlots<T>,
): RenderComponentReturn {
  const wrapper = mount(component, {
    props,
    slots,
    attachTo: appDiv,
    global: {
      plugins: [testRouter],
    },
  });

  wrappers.push(wrapper);
  return { wrapper };
}

beforeEach(() => {
  appDiv.innerHTML = "";
});

afterEach(() => {
  for (const wrapper of wrappers) {
    // Unmount components after a test to invoke cleanup hooks in the components
    wrapper.unmount();
  }
  wrappers = [];
});
