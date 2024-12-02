import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
//Import Styled components
import {
  Button,
  ButtonWrapper,
  ContactForm,
  ContactsContainer,
  FormMessage,
  HeadingSection,
  Input,
  Textarea,
} from "./Contacts.styles";
import {
  handleInputChange,
  sanitizeInput,
  validateForm,
} from "../../lib/utility/formUtils";
import { AnimatePresence } from "motion/react";

/**
 *
 * @returns React functional component
 */
const Contacts: React.FC = () => {
  //Form reference
  const form = useRef<HTMLFormElement>(null);

  //EmailJs public key
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  //Initial Form message and form message status to handle inputs validation and provide live response for the user
  const [formMessage, setFormMessage] = useState<string | null>(null);

  //Form message status is used to change the color of the message based on the status
  const [formMessageStatus, setFormMessageStatus] = useState<
    "success" | "error" | undefined
  >(undefined);

  const messageTimeout = useRef<NodeJS.Timeout | null>(null);

  /**
   *
   * @param type strings that represents the input type to get the correct messages for the input filed
   * @param value value of the inputfield
   */
  const handleChange = (type: string, value: string) => {
    let msg = handleInputChange(type, value);
    setFormMessageStatus(msg === "Valid input" ? "success" : "error");
    setFormMessage(msg);

    if (messageTimeout.current) {
      clearTimeout(messageTimeout.current);
    }
    messageTimeout.current = setTimeout(() => {
      setFormMessage(null);
      setFormMessageStatus(undefined);
    }, 5000);
  };

  /**
   *
   * @param e Form Data
   * @returns Returns form message to give the user feedback of the request that was sent.
   */
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
        setFormMessageStatus("error");

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
        setFormMessageStatus("success");
        form.current.reset();

        //Email sending error handling
      } catch (error) {
        // Narrow the type of `error` to properly access its properties
        if (error instanceof Error) {
          setFormMessage(`Failed to send: ${error.message}`);
          setFormMessageStatus("error");
        } else {
          setFormMessage("An unexpected error occurred.");
          setFormMessageStatus("error");
        }
      } finally {
        // Clear the message after 5 seconds
        setTimeout(() => {
          setFormMessage(null);
          setFormMessageStatus(undefined);
        }, 5000);
      }
    } else {
      console.error("Form reference is null.");
    }
  };
  return (
    <ContactsContainer>
      <HeadingSection>
        <h1>Contact me</h1>
        <h2>n.nikolov.business@outlook.com</h2>
        <h3>Feel free to contact me with any inquiries or questions!</h3>
      </HeadingSection>
      <ContactForm ref={form} onSubmit={sendEmail}>
        <Input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          maxLength={50}
          onChange={(e) => handleChange("username", e.target.value)}
        />
        <Input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          maxLength={254}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <Textarea
          name="message"
          placeholder="message"
          required
          maxLength={1500}
          onChange={(e) => handleChange("message", e.target.value)}
        />
        <ButtonWrapper>
          <Button type="submit">Send Message</Button>
        </ButtonWrapper>
        <AnimatePresence>
          {formMessage && (
            <FormMessage
              status={formMessageStatus}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              {formMessage}
            </FormMessage>
          )}
        </AnimatePresence>
      </ContactForm>
    </ContactsContainer>
  );
};

export default Contacts;
