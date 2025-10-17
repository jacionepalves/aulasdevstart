import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CardTitleForm } from "@/components/ui/card";
import LoginForm from "@/components/forms/login-form";
import CardImage from "@/components/ui/card-image";
import NavigationLinkScreen from "@/components/links/navigation-link-screen";
import FooterCard from "@/components/ui/footer-card";
export default function SignupPage(){
    return(
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <Card className="py-8 px-4">

        <CardImage />

        <CardTitleForm title="Login" description="Por favor entre com suas credenciais para fazer login."/>        

        <CardContent> 
          <LoginForm />

          <NavigationLinkScreen/>

        </CardContent>
            <FooterCard/>                
        <CardFooter>

        </CardFooter>
    </Card>
 </main>              
);
}