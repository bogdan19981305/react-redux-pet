import * as Yup from "yup";
import messages from 'Messages';

const emailValidationSchema = Yup.string()
    .email(messages.email.not_valid)
    .required(messages.email.required)
    .max(250,messages.email.max_length);

export default emailValidationSchema;