import { assets } from "@/assets/assets";
import { ShoppingCart, User } from "lucide-react";
import ButtonCustom from "./button-custom";

type HeaderProps = {
    bgcolor?: string;
};

export default function Header({bgcolor}: HeaderProps) {
    // Function implementation here

    return (
        <header className="flex flex-row justify-between items-center w-full container py-6 absolute top-0" style={
            {backgroundColor: bgcolor}}>
            <div className="flex flex-row items-center space-x-2">
              <img 
              src={assets.logo} 
              alt="imagem do logotipo" 
              className="w-14 h-14 rounded-full"/>
              <h1 
              className="text-white text-2x1 font-semibold">
                Nextbite Food
              </h1>
            </div>
            <nav>
                <ul className="flex flex-row items-center space-x-6 text-xl tracking-[1px]">
                    <li className="text-white">
                        <a href="#">Home</a>
                    </li>
                    <li className="text-white">
                        <a href="#">Sobre nós</a>
                    </li>
                    <li className="text-white">
                        <a href="#">Menu</a>
                    </li>
                    <li className="text-white">
                        <a href="#">Contato</a>
                    </li>
                </ul>
            </nav>
            <div className="flex flex-row items-center space-x-8">
                <button className="text-white flex flex-col items-center text-xs tracking-[1px] gap-1">
                    < User className="w-8 h-8 text-white"/>
                    <a href="/Signin"className="text-gray-300">
                        Minha Conta</a>              
                </button>
                <button className="text-white flex flex-col items-center text-xs tracking-[1px] gap-1">
                    <ShoppingCart className="w-8 h-8 text-white"/>
                    <a href="/mycart" className="text-gray-300">Meu carrinho</a>          
                </button>

                <ButtonCustom 
                title="Signup" 
                color="bg-transparent" 
                border="border border-2 border-green-600 rounded-full"/>
            </div>  
     </header>
    )
}