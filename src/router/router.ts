import { createRouter, createWebHashHistory } from "vue-router";

export function createMyRouter() {
  return createRouter({
    history: createWebHashHistory(),
    routes: [
      { path: "/", component: () => import("@/pages/DiaryList.vue") },
      {
        path: "/test/clipboard",
        component: () => import("@/pages/test/ClipboardPage.vue"),
      },
    ],
  });
}
