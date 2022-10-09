import * as Yup from "yup";
import messages from 'Messages';

const passwordValidationSchema = Yup.string()
    .max(30,messages.password.max_length)
    .min(10,messages.password.min_length)
    .matches(new RegExp("(?=.*[0-9])"),messages.password.regex_not_match_number)
    .matches(new RegExp("(?=.*[A-Z])"),messages.password.regex_not_match_uppercase)
    .matches(new RegExp("(?=.*[a-z])"),messages.password.regex_not_match_lowercase)
    .matches(new RegExp("(?=.*[!@#$%^&*])"),messages.password.regex_not_match_special_character)
    .required(messages.password.required)

export default passwordValidationSchema;