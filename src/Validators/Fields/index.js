import emailValidationSchema from "./emailField";
import fullNameValidationSchema from "./nameField";
import passwordValidationSchema from "./password";

const fields = {
    email: emailValidationSchema,
    fullName: fullNameValidationSchema,
    password: passwordValidationSchema
};

export default fields;