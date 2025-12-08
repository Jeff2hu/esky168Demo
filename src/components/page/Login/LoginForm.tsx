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
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema(t)),
    defaultValues: {
      account: "",
      password: "",
    },
  });

  return (
    <form
      className="flex flex-col gap-4 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        control={control}
        name="account"
        render={({ field: { ...field }, fieldState: { error } }) => (
          <div className="flex flex-col">
            <TextField
              containerClassName="gap-2"
              label={t("LOGIN.ACCOUNT")}
              id="account"
              placeholder={t("LOGIN.ACCOUNT_PLACEHOLDER")}
              disabled={isLoading}
              isError={!!error}
              {...field}
            />
            <FormError name="account" errors={errors} className="mx-auto" />
          </div>
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { ...field }, fieldState: { error } }) => (
          <div className="flex flex-col gap-2">
            <TextField
              containerClassName="gap-2"
              label={t("LOGIN.PASSWORD")}
              id="password"
              placeholder={t("LOGIN.PASSWORD_PLACEHOLDER")}
              disabled={isLoading}
              isError={!!error}
              {...field}
            />
            <FormError name="password" errors={errors} className="mx-auto" />
          </div>
        )}
      />

      {showLanguageSelect && (
        <div className="flex items-center gap-2">
          <label className="text-lg font-medium min-w-16">
            {t("LANGUAGE.SELECT")}
          </label>
          <div className="flex-1">
            <LanguageSelect containerClassName="w-full" />
          </div>
        </div>
      )}

      <Button type="submit" className="mt-6" isLoading={isLoading}>
        {t("LOGIN.LOGIN")}
      </Button>
    </form>
  );
};

export default LoginForm;
