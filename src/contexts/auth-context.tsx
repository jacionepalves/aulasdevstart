import { getData, storeData } from "@/services/storage";
import { Bell, XCircle } from "lucide-react";
import { 
    createContext, 
    useContext, type 
    ReactNode, 
    useState, 
    useEffect } from "react";
import { redirect } from "react-router-dom";
import { toast } from "sonner";


interface AuthProviderProps {
    children: ReactNode;
}

interface AuthContextData {
    user: User | null;
    signIn: (email: string, senha: string) => void;
    loading: boolean;
    signOut?: () => void;
}

type User = {    
    id: string;
    name?: string;
    email: string;
    profile: string;
};

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider : React.FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] =useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    useEffect  (() => {
        async function getStorageData() {
            const storeUser = await getData("user")
            if (storeUser) {
                setUser(storeUser);
            }else {
                setUser (null);
            }
        }
        
        getStorageData();

    }, []);

    function signIn(email: string, senha   : string) {

        setLoading(true);
        // Simulação de autenticação
        setTimeout(async () => {
            if(email === "user@user.com" && senha === "12345678") {
                setUser({
                    id:"1",
                    name: "Usuário Padrão",
                    email,
                    profile: "user"
                })

                await storeData("@user", JSON.stringify ({
                    email,
                    profile: "user" ,
                })        
                );    
                setLoading(false);

                redirect("/perfil");

                toast("Sucesso!!!",{
                    description: "Login realizado com sucesso!",
                    duration: 5000,                    
                    position: "top-right",
                    icon: <Bell />
                })          
            }else{
                setLoading(false);
                toast.error("Usuários e/ou senha inválidas.", {
                    duration: 5000,
                    position: "top-right",
                    style: { backgroundColor: "#f44336", color: "#fff" },
                    icon: <XCircle />
                });

            }
        }, 2000);
    }
    async function signOut() {
        await clearStorage();
        setUser(null);
        toast("Sucesso!!!", {
            description: "Logout realizado com sucesso",
            duration: 5000,
            position: "top-right",
            icon: <Bell />,
            style: { backgroundColor: "#4caf50", color: "#fff" },
        });
    }


    return (
        <AuthContext.Provider value={{ user, signIn, loading }}>{children}
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext (AuthContext);
    if (!context) {
        throw new Error ("useAuth dev ser usado dentro de um AuthProvider");
    }

    return context;
}

function clearStorage() {
    throw new Error("Function not implemented.");
}
