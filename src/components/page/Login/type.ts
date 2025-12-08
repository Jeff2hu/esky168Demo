import type { TFunction } from "i18next";
import { z } from "zod";

export type LoginFormValues = {
  account: string;
  password: string;
};

export const loginSchema = (t: TFunction) =>
  z.object({
    account: z.string().min(4, { message: t("LOGIN.ACCOUNT_MIN_LENGTH") }),
    password: z.string().min(8, { message: t("LOGIN.PASSWORD_MIN_LENGTH") }),
  });

export type LoginFormSchema = z.infer<ReturnType<typeof loginSchema>>;
