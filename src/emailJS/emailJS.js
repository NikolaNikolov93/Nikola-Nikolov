/**
 * Gives access to emailJs system. Used to automatically send emails to me from the Contact Form.
 */
(function () {
  const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
  emailjs.init({
    publicKey: publicKey,
  });
})();
