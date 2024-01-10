import { update } from "@/auth";
import * as z from "zod";

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum of 6 characters required",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

export const PromptSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required",
  }),
});

export const MessageSchema = z.object({
  id: z.string(),
  isUser: z.boolean(),
  data: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  conversationId: z.string(),
});
