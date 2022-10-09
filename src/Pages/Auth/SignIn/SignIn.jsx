import React from "react";
import {Button, Link} from "Components";
import Form from "Blocks/Form";
import styles from '../Auth.module.css';
import validationSchema from "Validators";
import {AuthService} from "Services";
import {Notify} from "Services";
import {useSelector} from "react-redux";

const { Item } = Form;

const SignIn = () => {

    const users = useSelector(({users}) => users);

    const signIn = data => AuthService.signIn({users})
            .then(res => console.log(res));

    const createNotification = () => Notify.info('priokol');

    return (
        <div onClick={() => createNotification()} className='margin-top-xl-500'>
            <div className="container d-flex align-items-center direction-column">
                <h2 className='text-center text-color-400 margin-bottom-xl-300'><b
                    className='text-color-900 text-weight-400'>Rival</b>CMS</h2>
                <Form
                    className={styles.form}
                    initialValues={{ email: '', password: ''}}
                    validationSchema={validationSchema.signInForm}
                    onSubmit={signIn}
                >
                    <Item
                        inputType='text'
                        label='Email address'
                        name='email'
                        icon='mail'
                        autocomplete='email'
                    />
                    <Item
                        inputType='password'
                        label='Password'
                        name='password'
                        icon='lock'
                        autocomplete='new-password'
                    />
                    <div className='d-flex align-items-center jc-between'>
                        <Link color='blue'>Forgot password?</Link>
                        <Button type='submit' color='accent' size='middle'>Sign in</Button>
                    </div>
                    <Link to='/auth/register'>
                        <Button color='accent' buttonType='primary' size='middle' className='w-100'>
                            Don’t have & account?
                        </Button>
                    </Link>
                </Form>
            </div>
        </div>
    )
};

export default SignIn;
