import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTrigger } from "@/components/ui/sheet"
import { LayoutDashboard, Menu, Users } from "lucide-react"
import { Link, useMatches } from "react-router-dom"
import { auth } from "../../../../FirebaseConfig"
import { signOut } from "firebase/auth"
import { Button } from "@/components/ui/button"




export const SideBar = () => {
    const matches = useMatches()

    const currentPage = matches[matches.length - 1] as { handle?: { title?: String } };
    const title = currentPage?.handle?.title;

    const ExitAccount = () => {
        signOut(auth)
    }
    return (
        <div className="flex w-full flex-col">
            <aside className="fixed w-90 gap-2.5 flex-col bg-phantom-night border-r-2 justify-start items-center border-graphite-shadow h-full max-h-screen hidden sm:flex">
                <div className="w-full h-fit p-5.5 flex justify-start items-center border-b-2 border-graphite-shadow">
                    <img src="/geesh-website/AdminLogo.svg" alt="Geesh Logo" className='w-44' />
                </div>

                <nav className="text-ghost-mist w-full flex px-2.5">
                    <ul className="flex gap-2.5 flex-col w-full">
                        <li><Link to="." className="flex hover:bg-abyssal-black text-White-80 hover:text-White-80/70 transition-colors border-b-2 text-lg justify-start p-2.5 items-center gap-1.5 " > <LayoutDashboard /> Dashboard</Link></li>
                        <li><Link to="Users" className="flex hover:bg-abyssal-black text-White-80 hover:text-White-80/70 transition-colors border-b-2 text-lg justify-start p-2.5 items-center gap-1.5 " > <Users /> Usuários</Link></li>
                    </ul>
                </nav>
                <Button onClick={() => ExitAccount()} className="bg-White-80 absolute bottom-5 rounded hover:cursor-pointer hover:bg-graphite-shadow hover:text-White-80 text-graphite-shadow w-[90%]" > Sair</Button>
            </aside>
            {/* Mobile Menu */}
            <div className="fixed flex sm:hidden">
                <header className="bg-phantom-night border-b-2 border-graphite-shadow w-screen h-16 items-center justify-center flex py-2.5">
                    <div className="w-[90%] flex justify-between items-center">
                        <h1 className="text-white text-4xl font-Poppins">{title}</h1>
                        <Sheet>
                            <SheetTrigger asChild>
                                <div className="text-white">
                                    <span className="sr-only">Menu</span>
                                    <Menu size={32} />
                                </div>
                            </SheetTrigger>
                            <SheetContent className="bg-phantom-night">
                                <SheetHeader className="w-full h-fit p-5.5 flex justify-start items-center border-b-2 border-graphite-shadow">
                                    <img src="/geesh-website/AdminLogo.svg" alt="Geesh Logo" className='w-44' />
                                </SheetHeader>
                                <nav className="text-ghost-mist w-full flex px-2.5">
                                    <ul className="flex gap-2.5 flex-col w-full">
                                        <li><Link to="." className="flex hover:bg-abyssal-black text-White-80 hover:text-White-80/70 transition-colors border-b-2 text-lg justify-start p-2.5 items-center gap-1.5 " > <LayoutDashboard /> Dashboard</Link></li>
                                        <li><Link to="Users" className="flex hover:bg-abyssal-black text-White-80 hover:text-White-80/70 transition-colors border-b-2 text-lg justify-start p-2.5 items-center gap-1.5 " > <Users /> Usuários</Link></li>
                                    </ul>
                                </nav>
                                <SheetFooter>
                                    <Button onClick={() => ExitAccount()} className="bg-White-80 text-graphite-shadow" > Sair</Button>
                                </SheetFooter>
                            </SheetContent>
                        </Sheet>
                    </div>
                </header>
            </div>
        </div>
    )
}
