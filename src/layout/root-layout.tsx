import useAuthHandler from "@/hooks/useAuthHandler";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

const RootLayout = () => {
  const navigate = useNavigate();
  const { onUserIdChange } = useAuthHandler();

  useEffect(() => {
    onUserIdChange((userId) => {
      if (!userId) {
        navigate("/login");
      }
    });
  }, []);

  return (
    <div className="relative h-dvh w-full">
      <Outlet />
    </div>
  );
};

export default RootLayout;
