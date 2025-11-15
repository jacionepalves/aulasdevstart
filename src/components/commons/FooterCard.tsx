
import { Button } from "../ui/button";
import { FaFacebook, FaGoogle, FaMicrosoft } from "react-icons/fa";

export default function FooterCard(){
    return (
        <div className="flex flex-row items-center justify-center w-full mt-4 gap-5">
            <Button variant="outline" className="rounded-lg" >
                <FaGoogle className="w-7 h-7 text-gray-700"/>
            </Button >

            <Button variant="outline" className="rounded-lg" >
                <FaFacebook className="w-7 h-7 text-gray-700"/>
            </Button>

            <Button variant="outline" className="rounded-lg" >
                <FaMicrosoft className="w-7 h-7 text-gray-700"/>
            </Button>
        </div>
    );
}