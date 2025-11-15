// Check the correct export from the module
import { Form } from "../ui/form"; // Ensure that Form is exported from this module
import { useForm } from "react-hook-form";
import { z } from "zod"; // Importing zod


const formSchema = z.object({
    nome: z.string().nonempty("O nome é obrigatório").min(3, "O nome deve ter no mínimo 3 caracteres"),
    email: z.string().email("Email inválido").nonempty("O email é obrigatório"),
    senha: z
    .string()
    .min(6, "senha deve ter no mínimo 6 caracteres")
    .max(20, "senha deve ter no máximo 20 caracteres")
    .nonempty("A senha é obrigatória"),
    
});

export default function FormCadastro(){
    const form = useForm<z.infer <typeof formSchema>>({
    });

    return (
        <Form {...form}>
        </Form>
    );
  
}

