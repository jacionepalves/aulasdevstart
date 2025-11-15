import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { useAuth } from "@/contexts/auth-context";
import { useState } from "react";

const formSchema = z.object({
    email: z.string().email("Email inválido").nonempty("O email é obrigatório"),
    senha: z
    .string()
    .min(8, "senha deve ter no mínimo 6 caracteres")
    .max(20, "senha deve ter no máximo 20 caracteres")
    .nonempty("A senha é obrigatória"),
});
export default function FormLogin(){
    const {signIn} = useAuth();
    const [viewPassword, setViewPassword] = useState(false);
    const form = useForm<z.infer <typeof loginformSchema>>({
        resolver: zodResolver(loginformSchema),
        defaultValues: {
            email: "",
            senha: "",
        },
    });

    function toggleViewPasswordVisibility(){
        setViewPassword(!viewPassword);
    }

    function onSubmit(data: z.infer<typeof formSchema>){
        const senha = data.senha.toString();
        const email = data.email.toString();
        signIn(email, senha);
        form.reset();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4">
                
            <FormField
                control={form.control}
                name="email"
                render={({ field, fieldState }) => (
                    <FormItem >
                        <FormLabel>Email:</FormLabel>
                        <FormControl>
                            <Input 
                            type="email" 
                            placeholder="Digite seu email"
                            {...field} 
                            className={`w-full mt-2 mb-1 ${
                                fieldState.error ? "border-red-500" : ""
                        }`}
                            />
                        </FormControl>

                        <FormMessage className="text-red-500">
                            {fieldState.error?.message}
                        </FormMessage>
                    </FormItem>
             )}
            />

            <FormField
                control={form.control}
                name="senha"
                render={({ field, fieldState }) => (
                    <FormItem >
                        <FormLabel>Senha:</FormLabel>
                        <FormControl>
                            <Input 
                            type="password" 
                            placeholder="Digite sua senha"
                            {...field} 
                            className={`w-full mt-2 mb-1 ${
                                fieldState.error ? "border-red-500" : ""
                        }`}
                            />
                        </FormControl>

                        <FormMessage className="text-red-500">
                            {fieldState.error?.message}
                        </FormMessage>
                    </FormItem>
             )}
            />

                <div className="mt-4 w-full">            
                <Button 
                    className="w-full font-bold uppercase"
                    type="submit"             
                    >
                        Entrar
                </Button>
                </div>
            </form>
        </Form>
    );
} 