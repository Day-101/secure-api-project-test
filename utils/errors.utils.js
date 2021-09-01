module.exports.signUpErrors = (err) => {
  let errors = { email: "", password: "" };
  
  if (err.message.includes("Validator failed for path `email`"))
  errors.email = "Email incorrect.";
  
  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
  errors.email = "Email déjà pris.";
  
  if (err.message.includes("password"))
  errors.password = "Le mot de passe doit faire 6 caractères minimum.";
  
  return errors;
};

module.exports.signInErrors = (err) => {
  let errors = { email: "", password: "" };

  if (`${err}`.includes("email"))
    errors.email = "Email incorrect.";

    if (`${err}`.includes("password"))
    errors.email = "Mot de passe incorrect.";

  return errors;
};
