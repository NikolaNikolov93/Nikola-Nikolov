import styled from "styled-components";

export const ContactsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 1em;
  margin: 0 auto;
  h1 {
    margin-bottom: 1em;
  }
  h2 {
    color: ${({ theme }) => theme.accentPrimary};
  }
  h3 {
    color: ${({ theme }) => theme.accentSecondary};
    margin-bottom: 2em;
  }
  @media (max-width: 600px) {
    text-align: center;
    h1,
    h2,
    h4 {
      font-size: 0.9em;
    }
  }
  @media (max-width: 800px) {
    text-align: center;
    h1,
    h2,
    h4 {
      font-size: 1em;
    }
  }
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
  flex-shrink: 1;
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
  @media (max-width: 600px) {
    flex-basis: 100%; /* Full width on smaller screens */
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
export const FormMessage = styled.p`
  color: ${({ theme }) => theme.accentSecondary};
`;
