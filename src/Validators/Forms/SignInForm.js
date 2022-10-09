import * as Yup from "yup";
import fields from '../Fields';

const {email,password} = fields;

const validationSchema = Yup.object().shape({
    email,
    password
});

export default validationSchema;