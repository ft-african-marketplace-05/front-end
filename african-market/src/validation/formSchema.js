import * as yup from 'yup';

const formSchema = yup.object({
    username: yup
    .string()
    .trim()
    .required('A username is required'),
    password: yup
    .string()
    .trim()
    .required('A password is required')
});

export default formSchema;