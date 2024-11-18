(function () {
  const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
  emailjs.init({
    publicKey: publicKey,
  });
})();
