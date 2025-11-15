import { getData, storeData } from "@/services/storage";
import { Bell, XCircle } from "lucide-react";
import { 
    createContext, 
    useContext, type 
    ReactNode, 
    useState, 
    useEffect } from "react";
import { toast } from "sonner";
import { set } from "zod";

interface AuthProviderProps {
    children: ReactNode;
}

interface AuthContextData {
    user: User | null;
    signIn: (email: string, senha: string) => void;
    loading: boolean;
}

type User = {    
    email: string;
    profile: string;
}

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
                    email,
                    profile: "user"
                })

                await storeData("@user", JSON.stringify ({
                    email,
                    profile: "user" ,
                })        
                );    
                setLoading(false);

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