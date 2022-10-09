import React from "react";
import {Button, Link} from "Components";
import Form from "Blocks/Form";
import styles from '../Auth.module.css';
import validationSchema from "Validators";
import {AuthService} from "Services";
import {Notify} from "Services";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const { Item } = Form;

const SignIn = () => {

    const users = useSelector(({users}) => users);
    const navigate = useNavigate();

    const signIn = data => AuthService
            .signIn({users,data})
            .then(res => {
                Notify.success(res);
                navigate('/admin/view-site');
            })
            .catch(err => Notify.error(err))


    return (
        <div className='margin-top-xl-500'>
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
                        <Button
                            color='accent'
                            buttonType='primary'
                            size='middle'
                            className='w-100 jc-items-center'
                        >
                            Don’t have & account?
                        </Button>
                    </Link>
                </Form>
            </div>
        </div>
    )
};

export default SignIn;
