import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthStore {
  userId: string;
  accessToken: string;
  refreshToken: string;
}

interface AuthActions {
  setUser: (user: Partial<AuthStore>) => void;
  logout: () => void;
}

const initialState: AuthStore = {
  userId: "",
  accessToken: "",
  refreshToken: "",
};

export const useAuthStore = create<AuthStore & AuthActions>()(
  persist(
    (set) => ({
      ...initialState,
      setUser: (user: Partial<AuthStore>) => set(user),
      logout: () => set({ userId: "", accessToken: "", refreshToken: "" }),
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        userId: state.userId,
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
      }),
    }
  )
);
