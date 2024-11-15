//Import Styled components
import {
  Button,
  ContactForm,
  ContactsContainer,
  Input,
  Textarea,
} from "./Contacts.styles";

/**
 *
 * @returns React functional component
 */
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
