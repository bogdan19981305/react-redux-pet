import * as Yup from "yup";
import messages from 'Messages';

const fullNameValidationSchema = Yup.string()
    .max(200,messages.fullName.max_length)
    .required(messages.fullName.required)
    .matches(new RegExp("^([a-zA-Z-']+\\s)*[a-zA-Z-']+$"),messages.fullName.latin)
    .matches(new RegExp("^([A-za-z]+[\\s]{1}[A-za-z]+)$"),messages.fullName.two_words)

export default fullNameValidationSchema;