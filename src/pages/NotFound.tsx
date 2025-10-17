export default function NotFoundPage(){
    return(
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800">
                404 - Not Found
            </h1>
            <p className="mt-6 text-gray-600 hover:underline">
                 A página que você está procurando não existe.
            </p>
            <p><a href="/" className="mt-6 text-blue-500 hover:underline">
                 Voltar para página inicial    
                </a>
            </p>
        </div>
    );
}