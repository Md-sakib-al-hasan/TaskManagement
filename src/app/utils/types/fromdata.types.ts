import { z } from "zod";
import { LoginFormSchema } from "../Schema/FormSchema";

export type FormData = z.infer<typeof LoginFormSchema>;