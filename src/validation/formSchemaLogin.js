import * as yup from 'yup';

const formSchemaLogin = yup.object({
    username: yup
    .string()
    .trim()
    .required(),
    password: yup
    .string()
    .trim()
    .required()
});

export default formSchemaLogin;