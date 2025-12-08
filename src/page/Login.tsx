import BasicCard from "@/components/common/Card/BasicCard";
import LoginForm from "@/components/page/Login/LoginForm";
import { useAuthStore } from "@/store/useAuthStore";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setUser } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setUser({
        userId: "123",
        accessToken: "123",
        refreshToken: "123",
      });
      navigate("/");
    }, 1000);
  };

  return (
    <div className="flex-center h-full px-4 sm:px-6 lg:px-8">
      <BasicCard className="flex-center flex-col gap-6 w-full max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-xl">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
          {t("LOGIN.TITLE")}
        </h1>

        <LoginForm onSubmit={onSubmit} isLoading={isLoading} />
      </BasicCard>
    </div>
  );
};

export default Login;
