// Check the actual exports in "../ui/form" and adjust the import accordingly
import { Form } from "../ui/form"; // Ensure 'Form' is exported from this module
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl } from "../ui/form"; // Ensure 'FormControl' is exported from this module
import { Eye, Mail, User } from "lucide-react";
import { Input } from "../ui/input";
import { FormMessage } from "../ui/form";
import type { ClassAttributes, InputHTMLAttributes } from "react";
import type { JSX } from "react/jsx-runtime";
import ButtonCustom from "./button-custom";

const loginFormSchema = z.object({    
    nome: z
    .string()
    .nonempty("O nome é obrigatório")
    .min(3, "O nome deve ter pelo menos 3 caracteres")
    .max(50, "O nome deve ter no máximo 100 caracteres")
    .regex(
        /^[a-zA-ZÀ-ÿ\s]+$/,
        "O nome só pode conter letras e espaços"
    ),
    email: z
    .string()
    .email("E-mail inválido")
    .nonempty("E-mail é obrigatório"),
    
    senha: z
    .string()
    .nonempty("E-mail é obrigatório")
    .min(8, "O nome deve ter pelo menos 8 caracteres")
    .max(20, "O nome deve ter no máximo 20 caracteres"),

    confirmarSenha: z
    .string()
    .nonempty("Confirmação de senha é obrigatória"),
})
    .refine(
        (data) => data.senha === data.confirmarSenha,
        {
        message: "As senhas não coincidem",
        path: ["confirmarSenha"],
        }
    );

export default function RegisterForm() {
    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),    
        defaultValues: {
            nome: "",
            email: "",
            senha: "",
            confirmarSenha: "",
        },
        })

    function onSubmit(data: z.infer<typeof loginFormSchema>) {
        console.log(data);
    }
    return (
    <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4">
            {/* Nome */}
            <Form.Field
            control={form.control}
            name="nome"
            render={(field: JSX.IntrinsicAttributes & ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>, fieldstate: { error: { message: any; }; }) =>(
                <Form.Item className="mb-3">
                    <Form.Label>Nome</Form.Label>
                    import { FormControl } from "../ui/form"; // Ensure 'FormControl' is exported from this module
                    <FormControl>
                        <div className="relative">
                            <span className="absolute left-0 top-2 pl-3 pointer-events-none">
                                <User className="w-5 h-5 text-gray-400" />                                
                                </span>
                                <Input
                                type="text"
                                placeholder="Digite seu nome"
                                {...field}
                                className={`w-full border-green-600/40 placeholder:text-gray-400 mb-1 pl-10 
                                ${fieldstate.error ? "border-red-500" : ""}`}
                                />                         

                        </div>
                    </FormControl>
                    <FormMessage>
                        {fieldstate.error?.message}
                    </FormMessage>
                </Form.Item>
            ) }
            />

            {/* email */}
            <Form.Field
            control={form.control}
            name="email"
            render={(field: JSX.IntrinsicAttributes & ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>, fieldstate: { error: { message: any; }; }) =>(
                <Form.Item className="mb-3">
                    <Form.Label>E-mail</Form.Label>
                    import { FormControl } from "../ui/form"; // Ensure 'FormControl' is exported from this module
                    <FormControl>
                        <div className="relative">
                            <span className="absolute left-0 top-2 pl-3 pointer-events-none">
                                <Mail className="w-5 h-5 text-gray-400" />                                
                                </span>
                                <Input
                                type="text"
                                placeholder="Digite seu nome"
                                {...field}
                                className={`w-full border-green-600/40 placeholder:text-gray-400 mb-1 pl-10 
                                ${fieldstate.error ? "border-red-500" : ""}`}
                                />                          

                        </div>
                    </FormControl>
                    <FormMessage>
                        {fieldstate.error?.message}
                    </FormMessage>
                </Form.Item>
            ) }
            />

            {/* senha */}
            <Form.Field
            control={form.control}
            name="senha"
            render={(field: JSX.IntrinsicAttributes & ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>, fieldstate: { error: { message: any; }; }) =>(
                <Form.Item className="mb-3">
                    <Form.Label>Senha</Form.Label>
                    import { FormControl } from "../ui/form"; // Ensure 'FormControl' is exported from this module
                    <FormControl>
                        <div className="relative">
                            <span className="absolute left-0 top-2 pl-3 pointer-events-none">
                                <Eye className="w-5 h-5 text-gray-400" />                                
                                </span>
                                <Input
                                type="password"
                                placeholder="Digite sua senha"
                                {...field}
                                className={`w-full border-green-600/40 placeholder:text-gray-400 mb-1 pl-10 
                                ${fieldstate.error ? "border-red-500" : ""}`}
                                />                          

                        </div>
                    </FormControl>
                    <FormMessage>
                        {fieldstate.error?.message}
                    </FormMessage>                    
                </Form.Item>
            ) }
            />
            
            {/* confirmar senha */}
            <Form.Field
            control={form.control}
            name="confirmarSenha"
            render={(field: JSX.IntrinsicAttributes & ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>, fieldstate: { error: { message: any; }; }) =>(
                <Form.Item className="mb-3">
                    <Form.Label>Confirmar Senha</Form.Label>
                    import { FormControl } from "../ui/form"; // Ensure 'FormControl' is exported from this module
                    <FormControl>
                        <div className="relative">
                            <span className="absolute left-0 top-2 pl-3 pointer-events-none">
                                <Eye className="w-5 h-5 text-gray-400" />                                
                                </span>
                                <Input
                                type="password"
                                placeholder="Confirme sua senha"
                                {...field}
                                className={`w-full border-green-600/40 placeholder:text-gray-400 mb-1 pl-10 
                                ${fieldstate.error ? "border-red-500" : ""}`}
                                />                          

                        </div>
                    </FormControl>
                    <FormMessage>
                        {fieldstate.error?.message}
                    </FormMessage>                    
                </Form.Item>
            ) }
            />
            <div>
            <ButtonCustom
                title="Cadastrar"
                color="bg-gradient-to-r from-green-600 to-blue-800"
                width="w-full mt-6"            
                />    
            </div>
        </form>  
    </Form>
    );

    }

