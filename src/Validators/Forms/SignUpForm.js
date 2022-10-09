import * as Yup from "yup";
import fields from '../Fields';

const {email,fullName,password} = fields;

const validationSchema = Yup.object().shape({
    email,
    fullName,
    password
});

export default validationSchema;