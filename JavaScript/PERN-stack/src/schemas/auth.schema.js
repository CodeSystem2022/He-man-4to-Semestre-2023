import{z} from 'zod';

export const signupSchema= z.object({
    name: z.string({
        required_error: "El nombre es requerido",
        invalid_type_error: "El nombre debe ser una string",
    }).min(i,{
        message: "El nombre debe tener al menos 1 caracter",
    }).max(255,{
        message: "El nombre debe tener como maximo 255 caracteres",
    }),
    email: z.string().email(),
    password: z.string().min(8).max(255)
   
});

export const signinSchema= z.object({
    name: z.string({
        required_error: "El nombre es requerido",
        invalid_type_error: "El nombre debe ser una string",
    }).min(i,{
        message: "El nombre debe tener al menos 1 caracter",
    }).max(255,{
        message: "El nombre debe tener como maximo 255 caracteres",
    }),
    email: z.string().email(),
    password: z.string().min(8).max(255)
   
});