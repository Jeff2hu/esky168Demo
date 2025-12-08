import { useAuthStore } from "@/store/useAuthStore";
import { useEffect, useRef } from "react";

type Callback = ((token: string) => void) | ((token: string) => Promise<void>);

const useAuthHandler = () => {
  const { userId } = useAuthStore();
  const callback = useRef(new Set<Callback>());
  const currentUserId = useRef(userId);

  const onUserIdChange = (c: Callback) => {
    callback.current.add(c);

    return () => {
      callback.current.delete(c);
    };
  };

  useEffect(() => {
    if (currentUserId.current !== userId) {
      for (const c of callback.current) {
        c(userId || "");
      }
    }

    currentUserId.current = userId;
  }, [userId]);

  return {
    onUserIdChange,
  };
};

export default useAuthHandler;
