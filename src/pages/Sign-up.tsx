import  CardTitleForm from "@/components/commons/CardTitleForm";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import CardImage from "@/components/commons/CardImage";
import RegisterForm from "@/components/commons/RegisterForm"; // Adjusted the import path to match the correct casing
import ButtonNavigateHome from "@/components/commons/ButtonNavigateHome"

export default function SignUpPage(){
    return(                
         <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Card className="py-8 px-4">

                <CardImage />

                <CardTitleForm title="Cadastre-se"
                 description="Por favor entre com suas credenciais para se cadastrar."
                />        

                <CardContent> 
                  <RegisterForm />

                  {/* <NavigationLinkScreen
                    to="Ja tem uma conta?"
                    text="Faça login."
                    path="/signin?"
                  /> */}

                </CardContent>
                               
                <CardFooter className="flex-col items-center justify-center gap-8">      
                    <ButtonNavigateHome title={""} color={""}/>                             

                </CardFooter>
            </Card>
         </main>              
    );
}