import styled from "styled-components";
import { FormMessageProps } from "../../lib/types/types";
import { motion } from "motion/react";

export const ContactsContainer = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 1em;
  padding: 1em;
  margin: 0 auto;
  max-width: 100%;

  h1 {
    margin-bottom: 1em;
  }
  h2 {
    color: ${({ theme }) => theme.accentPrimary};
  }
  h3 {
    color: ${({ theme }) => theme.accentSecondary};
    margin-bottom: 1.5em;
  }
  @media (max-width: 800px) {
    text-align: center;
    h1 {
      font-size: 1.75em;
    }
    h2 {
      font-size: 1.5em;
    }
    h3 {
      font-size: 1.25em;
    }
  }
  @media (max-width: 600px) {
    text-align: center;
    h1 {
      font-size: 1.5em;
    }
    h2 {
      font-size: 1.25em;
    }
    h3 {
      font-size: 1.1em;
    }
  }
  @media (max-width: 450px) {
    padding: 0.5em; /* Reduce padding for small screens */
    text-align: center;
    h1 {
      font-size: 1.3em;
    }
    h2 {
      font-size: 1.1em;
    }
    h3 {
      font-size: 0.9;
    }
  }
`;
export const HeadingSection = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContactForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1em;
  max-width: 600px;
  margin: 0 auto;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.divider};
`;

export const Input = styled.input`
  padding: 1em;
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: 5px;
  color: ${({ theme }) => theme.textPrimary};
  background-color: ${({ theme }) => theme.divider};
  border-color: ${({ theme }) => theme.textPrimary};
  &:focus {
    outline-color: ${({ theme }) => theme.accentSecondary};
  }
  @media (max-width: 600px) {
    flex-basis: 100%;
  }
`;

export const Textarea = styled.textarea`
  padding: 1em;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #ccc;
  border-color: ${({ theme }) => theme.textPrimary};
  color: ${({ theme }) => theme.textPrimary};
  background-color: ${({ theme }) => theme.divider};
  height: 150px;
  resize: vertical;
  flex: 1 1 100%;
  &:focus {
    outline-color: ${({ theme }) => theme.accentSecondary};
  }
`;
export const ButtonWrapper = styled.div`
  flex-basis: 100%;
  text-align: center;
`;
export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.accentSecondary};
  color: ${({ theme }) => theme.textPrimary};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const FormMessage = styled(motion.p)<FormMessageProps>`
  color: ${
    ({ status, theme }) =>
      status === "success"
        ? "#28a745" /* A vibrant but softer green */
        : status === "error"
        ? theme.accentSecondary
        : "#dc3545" /* Refined red for error */
  };
  font-weight: bold;
  text-shadow: 2px 2px 5px black;
`;
