// utils/schemas.js
import { z } from 'zod'

// Personal Information Schema (Step 1)
export const personalSchema = z.object({
  fullName: z.string()
    .min(1, "Name is required"),
  email: z.string()
    .email("Invalid email address"),
  phone: z.string()
    .min(10, "Phone number must be 10 digits")
})

// Address Details Schema (Step 2)
export const addressSchema = z.object({
  street: z.string()
    .min(1, "Street address is required")
    .max(100, "Address too long"),
  city: z.string()
    .min(1, "City is required")
    .max(50, "City name too long"),
  zip: z.string()
    .min(5, "ZIP code must be 5 digits")
    .regex(/^\d+$/, "ZIP code must contain only numbers")
})

// Account Setup Base Schema (without password match validation)
export const accountBaseSchema = z.object({
  username: z.string().min(4, "Username required minimum 4 characters"),
  password: z.string().min(6, "Password required minimum 6 characters"),
  confirmPassword: z.string()
});

// Account Setup with Password Match Validation (Step 3)
export const accountSchema = accountBaseSchema.refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "Passwords don't match",
    path: ["confirmPassword"], // Error path for password mismatch
  }
);

// Combined Schema for Final Validation
export const combinedSchema = personalSchema
  .merge(addressSchema)
  .merge(accountBaseSchema)
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      message: "Passwords do not match",
      path: ["confirmPassword"]
    }
  )