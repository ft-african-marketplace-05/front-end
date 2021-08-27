import * as yup from 'yup';

const formSchema = yup.object({
    username: yup
    .string()
    .trim()
    .required('A username is required')
    .min(3, 'Username must be at least 3 characters long')
    .max(30, 'Username cannot be longer than 30 characters'),
    password: yup
    .string()
    .trim()
    .required('A password is required')
    .min(6, 'Password must be at least 6 characters long')
    .max(30, 'Password cannot be longer than 30 characters')
});

export default formSchema;