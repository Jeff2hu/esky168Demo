import Background from "@/components/common/Background/Background";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div className="relative inset-0 w-full h-full">
      <Outlet />
      <Background />
    </div>
  );
};

export default HomeLayout;
