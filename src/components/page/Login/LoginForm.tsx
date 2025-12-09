import { useTranslation } from "react-i18next";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormSchema } from "./type";
import TextField from "@/components/common/TextField/TextField";
import Button from "@/components/common/Button/Button";
import LanguageSelect from "@/components/common/Select/LanguageSelect";
import FormError from "@/components/common/FormError/FormError";

interface LoginFormProps {
  onSubmit: (data: LoginFormSchema) => void;
  isLoading: boolean;
  showLanguageSelect?: boolean;
}

const LoginForm = ({
  onSubmit,
  isLoading,
  showLanguageSelect = true,
}: LoginFormProps) => {
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema(t)),
    defaultValues: {
      account: "",
      password: "",
    },
  });

  const handleLanguageChange = () => {
    reset();
  };

  return (
    <form
      className="flex flex-col gap-6 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        control={control}
        name="account"
        render={({ field: { ...field }, fieldState: { error } }) => (
          <div className="flex flex-col gap-2 group">
            <TextField
              containerClassName="gap-2 transition-all duration-200"
              label={t("LOGIN.ACCOUNT")}
              id="account"
              placeholder={t("LOGIN.ACCOUNT_PLACEHOLDER")}
              disabled={isLoading}
              isError={!!error}
              {...field}
            />
            <FormError
              name="account"
              errors={errors}
              className="ml-1 text-xs"
            />
          </div>
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { ...field }, fieldState: { error } }) => (
          <div className="flex flex-col gap-2 group">
            <TextField
              containerClassName="gap-2 transition-all duration-200"
              label={t("LOGIN.PASSWORD")}
              id="password"
              type="password"
              placeholder={t("LOGIN.PASSWORD_PLACEHOLDER")}
              disabled={isLoading}
              isError={!!error}
              {...field}
            />
            <FormError
              name="password"
              errors={errors}
              className="ml-1 text-xs"
            />
          </div>
        )}
      />

      {showLanguageSelect && (
        <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100 transition-all duration-200 hover:bg-gray-100">
          <label className="text-sm font-medium text-gray-700 min-w-fit whitespace-nowrap">
            {t("LANGUAGE.SELECT")}
          </label>
          <div className="flex-1">
            <LanguageSelect
              containerClassName="w-full"
              onValueChange={handleLanguageChange}
            />
          </div>
        </div>
      )}

      <Button
        type="submit"
        className="mt-4 h-12 text-base font-semibold gradient-brand-button hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform transition-all duration-200 hover:-translate-y-0.5"
        isLoading={isLoading}
      >
        {t("LOGIN.LOGIN")}
      </Button>
    </form>
  );
};

export default LoginForm;
