const validation = (username, email, password, avatar) => {
  const errors = {};

  // Username validation
  if (!username.trim()) {
    errors.username = "Username is required";
  } else if (username.length > 8) {
    errors.username = "Username must be under 8 characters";
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.com$/;

  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(email)) {
    errors.email = "Enter a valid email";
  }

  // Password validation
  if (!password.trim()) {
    errors.password = "Password is required";
  }

  // Avatar validation
  if (!avatar) {
    errors.avatar = "Avatar is required";
  }

  return errors;
};

export { validation };
