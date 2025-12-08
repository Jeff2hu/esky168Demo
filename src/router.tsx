import { createBrowserRouter, redirect } from "react-router";
import { useAuthStore } from "./store/useAuthStore";

async function requireAuthLoader() {
  const { accessToken, userId } = useAuthStore.getState();

  if (!accessToken || !userId) {
    return redirect("/login");
  }

  return null;
}

async function loginPageLoader() {
  const { accessToken, userId } = useAuthStore.getState();

  if (accessToken && userId) {
    return redirect("/");
  }

  return null;
}

const router = createBrowserRouter([
  {
    lazy: async () => ({
      Component: (await import("./layout/root-layout")).default,
    }),
    children: [
      {
        path: "/login",
        loader: loginPageLoader,
        lazy: async () => ({
          Component: (await import("./page/Login")).default,
        }),
      },
      {
        path: "/",
        loader: requireAuthLoader,
        lazy: async () => ({
          Component: (await import("./layout/home-layout")).default,
        }),
        children: [
          {
            index: true,
            lazy: async () => ({
              Component: (await import("./page/Home")).default,
            }),
          },
          {
            path: "sales-management",
            lazy: async () => ({
              Component: (await import("./page/SalesManagement")).default,
            }),
          },
        ],
      },
    ],
  },
]);

export default router;
