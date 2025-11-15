import { Eye, Mail } from "lucide-react";
import ButtonCustom from "../commons/button-custom";
import { Link } from "react-router-dom";

export default function LoginForm(){
    return (
    <form>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">
                E-mail
            </label>
            <div>
                <Mail className="absolute mt-3 ml-3 text-gray-400" />
                <input 
                    type="email" 
                    placeholder="Digite seu email" 
                    className="w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                </input>
            </div>
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">
                Senha
            </label>
            <div>
                <Eye className="absolute mt-3 ml-3 text-gray-400" />
                <input 
                    type="password" 
                    placeholder="Digite sua senha" 
                    className="w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                </input>
            </div>
        </div>

        <div>
           <label>
            <input type="checkbox" className="mr-2 leading-tight" />
            <span className="text-sm text-gray-700">Lembrar de mim</span>
           </label>
           <Link to="/forgot-password"className="text-sm">
           </Link>
        </div>
        <div>
        <ButtonCustom
            title="Entrar"
            color="bg-gradient-to-r from-green-600 to-blue-800"
            width="w-full mt-6"            
            />    
        </div>
        <div>
        <ButtonCustom
            title="Volar para Home"
            color="bg-gradient-to-r from-green-600 to-blue-800"
            width="w-full mt-6"            
            />    
        </div>
    </form>
    );

}