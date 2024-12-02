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
//Handles input change and updates the form message dynamically
export const handleInputChange = (type: string, value: string) => {
  if (value.trim() === "") {
    return "This input field can't be empty";
  }

  switch (type) {
    case "username":
      if (!/^[a-zA-Z]+([ '-][a-zA-Z]+)*$/.test(value)) {
        return "Username can only contain letters, spaces, hyphens, and apostrophes";
      }
      if (value.length < 2) {
        return "Username must contain more than 2 characters";
      }
      if (value.length > 50) {
        return "Username cannot exceed 50 characters";
      }
      break;

    case "email":
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return "Please enter a valid email address!";
      }
      if (value.length > 254) {
        return "Email address cannot exceed 254 characters";
      }
      break;

    case "message":
      if (value.length < 10) {
        return "Message should be at least 10 characters long!";
      }
      if (value.length > 1500) {
        return "Message cannot exceed 1500 characters";
      }
      if (/https?:\/\/[^\s]+/.test(value)) {
        return "Message cannot contain URLs";
      }
      if (/[\[\]\{\}]/.test(value)) {
        return "Message cannot contain square or curly brackets";
      }
      break;

    default:
      return "Invalid input type";
  }

  return "Valid input";
};
