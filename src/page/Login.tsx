import BasicCard from "@/components/common/Card/BasicCard";
import LoginForm from "@/components/page/Login/LoginForm";
import { useAuthStore } from "@/store/useAuthStore";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { Lock } from "lucide-react";

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
    <div className="relative flex-center h-full px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative z-10 w-full max-w-[90%] sm:max-w-md md:max-w-lg animate-in fade-in zoom-in duration-500">
        <BasicCard className="flex-center flex-col gap-8 backdrop-blur-sm bg-white/95 shadow-2xl border-0 p-6 sm:p-10">
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="size-16 sm:w-20 sm:h-20 rounded-2xl gradient-brand flex items-center justify-center shadow-lg transform transition-transform hover:scale-105">
              <Lock className="text-white size-10 sm:size-14 animate-pulse" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl font-bold gradient-brand-text bg-clip-text text-transparent">
                {t("LOGIN.TITLE")}
              </h1>
              <p className="text-sm text-gray-500 mt-2">
                {t("LOGIN.WELCOME_BACK")}
              </p>
            </div>
          </div>

          <LoginForm onSubmit={onSubmit} isLoading={isLoading} />
        </BasicCard>
      </div>
    </div>
  );
};

export default Login;
