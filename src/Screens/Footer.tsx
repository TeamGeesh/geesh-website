export default function Footer() {
    return (
        <footer className="w-screen flex border-t border-black/30 bg-White-80 shadow-xl items-center justify-center">
            <div className="w-[90%] flex flex-col sm:flex-row py-5 gap-6 sm:justify-between sm:items-center">
                <img src="/geesh-website/GeeshIconFooter.svg" alt="Geesh Icon" width={25} />
                <nav className="flex flex-col gap-5 sm:flex-row " aria-label="Redes sociais e contato">
                    <div className="flex flex-col text-start gap-1">
                        <h2 className="text-base font-Poppins">Siga a Team Geesh</h2>
                        <ul className="flex gap-2.5 text-sm underline text-coal/90 font-Poppins font-light">
                            <li><a href="#" className="hover:text-black transition-colors">Instagram</a></li>
                            <li><a href="https://www.youtube.com/@TeamGeesh" target="_blank" className="hover:text-black transition-colors">Youtube</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col text-start gap-1">
                        <h2 className="text-base font-Poppins">Precisa falar conosco?</h2>
                        <p className="flex gap-2.5 text-sm text-coal/90 font-Poppins font-light">geeshservice@gmail.com</p>
                    </div>
                    <p className="flex gap-2.5 text-base font-Poppins">© Team Geesh </p>
                </nav>
            </div>
        </footer>
    )
}
