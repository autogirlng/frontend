import { SignupFormValues } from "@/utils/types";

export const fullNameRegEx = /^[A-Za-z'-]+\s[A-Za-z'-]+(?:\s[A-Za-z'-]+)*\s*$/;

export const phoneNumberRegEx = /^(\d{11})$/;

export const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const uppercaseRegex = /[A-Z]/;

export const lowercaseRegex = /[a-z]/;

export const numberRegex = /[0-9]/;

export const specialCharRegex = /[@$!#%*?_&]/;

export const spacesRegex = /^\S*$/;

type PasswordCheckKey = keyof SignupFormValues["password_checks"];
export const passwordChecks: { label: string; check: PasswordCheckKey }[] = [
  { label: "8 characters long", check: "length" },
  { label: "One digit", check: "digit" },
  { label: "One uppercase character", check: "uppercase_letters" },
  { label: "One special character", check: "special_character" },
  { label: "One lowercase character", check: "lowercase_letters" },
  { label: "Must not include spaces", check: "no_space" },
];
