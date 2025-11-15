import { assets } from "@/assets/assets";

export default function CardImage(){
    return(
        <div>
            <img 
            src={assets.logo}
            alt="Logotipo da empresa"
            className="w-24 h24 mx-auto mb-4 rounded-full shadow-lg" >
            </img>
        </div>
    )
}