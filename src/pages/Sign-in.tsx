import ButtonNavigateHome from "@/components/commons/ButtonNavigateHome";
import CardImage from "@/components/commons/card-image";
import CardTitleForm from "@/components/commons/card-title-form";
import LoginSocial from "@/components/commons/Login/login-social";
import NavigationLinkScreen from "@/components/commons/navigation-link-screen";
import LoginForm from "@/components/commons/login-form";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useAuth } from "@/contexts/auth-context";
import { Navigate } from "react-router-dom";

export default function SignIn() {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/perfil" replace />;
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <Card className="w-full max-w-md px-6 py-8 bg-white shadow-md rounded-lg">
        <CardImage />

        <CardTitleForm
          title="Login"
          description=" Por favor, entre com suas credenciais para fazer login."
        />

        <CardContent>
          <LoginForm />
          <NavigationLinkScreen
            to="Não tem uma conta?"
            text="Cadastre-se aqui"
            path="/signup"
          />
        </CardContent>

        <CardFooter className="flex flex-col items-center justify-center gap-8">
          <LoginSocial />
          <ButtonNavigateHome />
        </CardFooter>
      </Card>
    </main>
  );
}
