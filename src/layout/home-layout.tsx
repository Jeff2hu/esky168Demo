import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div className="relative inset-0 w-full h-full">
      <Outlet />
    </div>
  );
};

export default HomeLayout;
