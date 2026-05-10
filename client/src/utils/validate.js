const validation = (username, email, password, avatar, isSignin) => {
  const errors = {};

  // Signup only
  if (!isSignin) {
    if (!username.trim()) {
      errors.username = "Username is required";
    }

    if (username.length > 8) {
      errors.username = "Username must be under 8 characters";
    }

    if (!avatar) {
      errors.avatar = "Select an avatar";
    }
  }

  // Common validations
  const emailRegex = /^[^\s@]+@[^\s@]+\.com$/;

  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(email)) {
    errors.email = "Enter valid email";
  }

  if (!password.trim()) {
    errors.password = "Password is required";
  }

  return errors;
};

export { validation };
