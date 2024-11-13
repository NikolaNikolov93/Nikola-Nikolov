import styled from "styled-components";

const Contacts: React.FC = () => {
  return (
    <ContactsContainer>
      <h1>Contact me</h1>
      <h2>n.nikolov.business@outlook.com</h2>
      <h4>Feel free to contact me with any inquiries or questions!</h4>
      <ContactForm
        action="mailto:n.nikolov.business@outlook.com"
        method="post"
        encType="text/plain"
      >
        <Input type="text" name="name" placeholder="Your Name" required />
        <Input type="email" name="email" placeholder="Your Email" required />
        <Textarea name="message" placeholder="Your Message" required />
        <Button type="submit">Send Message</Button>
      </ContactForm>
    </ContactsContainer>
  );
};

export default Contacts;

const ContactsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  margin: 0 auto;
  h1 {
    margin-bottom: 1em;
  }
  h2 {
    color: ${({ theme }) => theme.accentPrimary};
  }
  h4 {
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
const ContactForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  max-width: 600px;
  margin: 0 auto;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 10px;
  flex-shrink: 1;
`;

const Input = styled.input`
  padding: 1em;
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: 5px;
  flex-basis: calc((100% - 1em) / 2);
  color: ${({ theme }) => theme.textPrimary};

  background-color: ${({ theme }) => theme.background};
  @media (max-width: 600px) {
    flex-basis: 100%; /* Full width on smaller screens */
  }
`;

const Textarea = styled.textarea`
  padding: 1em;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #ccc;
  color: ${({ theme }) => theme.textPrimary};
  background-color: ${({ theme }) => theme.background};
  height: 150px;
  resize: vertical;
  flex: 1 1 100%;
`;

const Button = styled.button`
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
