import { useRouter } from "next/router"
import Link from "next/link"
export default function NavBar(){
    const router = useRouter();
    const currentRoute = router.pathname
    return(
        <>
            <div className="w-screen">
                <img width={3200} height={50} src="/HeaderImage2.png" />
            </div>
            <nav className="h-14 items-center justify-center flex flex-row space-x-14 bg-zinc-700 text-white text-2xl font-custom ">
                <Link className="hover:text-red-500 hover:shadow-xl hover:scale-105 transition-all duration-300" href="/">Home</Link>
                <Link className="hover:text-red-500 hover:shadow-xl hover:scale-105 transition-all duration-300" href="/roster">Roster</Link>
            </nav>
        </>    
    )
    

}
// if(currentRoute === "/"){
//     className = "border-b border-4 border-white"
// }else {
//     className = ""
// }

// className={currentRoute === "/" ? "border-b border-4" :""} 