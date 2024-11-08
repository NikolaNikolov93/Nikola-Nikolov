import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  background: "#F4F4F9", // Soft white-gray background
  textPrimary: "#333333", // Dark gray for primary text
  textSecondary: "#555555", // Medium gray for secondary text
  accentPrimary: "#005FCC", // Bright blue, optimized for readability
  accentSecondary: "#FF8C42", // Warm orange for contrast and emphasis
  divider: "#E0E0E0", // Light gray divider for structure
};
export const darkTheme: DefaultTheme = {
  background: "#1E1E2E", // Dark blue-gray background
  textPrimary: "#EAEAEA", // Soft off-white for primary text
  textSecondary: "#B0B0B0", // Light gray for secondary text
  accentPrimary: "#4A90E2", // Soft, calming blue for accents
  accentSecondary: "#FF6347", // Coral red for warnings or highlights
  divider: "#33354D", // Dark gray-blue divider for subtle structure
};
