import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
//Import Styled components
import {
  Button,
  ButtonWrapper,
  ContactForm,
  ContactsContainer,
  FormMessage,
  Input,
  Textarea,
} from "./Contacts.styles";
import { sanitizeInput, validateForm } from "../../lib/utility/formUtils";

/**
 *
 * @returns React functional component
 */
const Contacts: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [formMessage, setFormMessage] = useState<string | null>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      //Validate and sanitzie form data
      const formData = new FormData(form.current);
      const name = sanitizeInput(formData.get("user_name") as string);
      const email = sanitizeInput(formData.get("user_email") as string);
      const message = sanitizeInput(formData.get("message") as string);
      const validationError = validateForm(name, email, message);

      //Throw error if validation fails
      if (validationError) {
        setFormMessage(validationError);
        return;
      }
      //Sent email with validated data
      try {
        await emailjs.sendForm(
          "contact_service",
          "contact_form",
          form.current,
          {
            publicKey: publicKey,
          }
        );
        setFormMessage("Message sent successfully");
        form.current.reset();

        //Email sending error handling
      } catch (error) {
        // Narrow the type of `error` to properly access its properties
        if (error instanceof Error) {
          setFormMessage(`Failed to send: ${error.message}`);
        } else {
          setFormMessage("An unexpected error occurred.");
        }
      } finally {
        // Clear the message after 5 seconds
        setTimeout(() => {
          setFormMessage(null);
        }, 5000);
      }
    } else {
      console.error("Form reference is null.");
    }
  };
  return (
    <ContactsContainer>
      <h1>Contact me</h1>
      <h2>n.nikolov.business@outlook.com</h2>
      <h3>Feel free to contact me with any inquiries or questions!</h3>
      <ContactForm ref={form} onSubmit={sendEmail}>
        <Input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          maxLength={50}
        />
        <Input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          maxLength={254}
        />
        <Textarea
          name="message"
          placeholder="message"
          required
          maxLength={1500}
        />
        <ButtonWrapper>
          <Button type="submit">Send Message</Button>
        </ButtonWrapper>
        {formMessage && <FormMessage>{formMessage}</FormMessage>}
      </ContactForm>
    </ContactsContainer>
  );
};

export default Contacts;
