export function validate(email, password) {
  const isValidEmail = /\S+@\S+\.\S+/.test(email);
  const isValidPassword =
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/.test(
      password
    );
  if (!isValidEmail) return "Email is not Valid";
  if (!isValidPassword) return "Password is not valid";

  return null;
}
