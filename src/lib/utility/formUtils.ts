//Form input validation
export const validateForm = (
  name: string,
  email: string,
  message: string
): string | null => {
  if (!name.trim()) return "Name cannot be empty.";
  if (!email.trim()) return "Email cannot be empty.";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Invalid email format.";
  if (!message.trim()) return "Message cannot be empty.";
  return null;
};

//Input sanitizasiton checking for code injection.
export const sanitizeInput = (input: string): string => {
  return input.replace(/<[^>]*>?/gm, "").trim();
};
