import validationSchema from './SignUpForm';
import signInValidationSchema from './SignInForm';

const formSchemas = {
    signUpForm: validationSchema,
    signInForm: signInValidationSchema
}

export default formSchemas;