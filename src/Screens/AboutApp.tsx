export default function AboutApp() {
    return (
        <section id="aboutApp" className=" w-full flex flex-col gap-2.5 bg-White-80 items-start justify-start px-5 pt-14">
            <div className="flex flex-col sm:hidden">
                <header className="flex w-full text-start flex-col gap-2.5">
                    <h1 className="text-4xl font-Poppins text-abyssal-tide font-medium">O que é o Geesh?</h1>
                </header>
                <article className=" text-justify flex flex-col gap-2.5 text-lg font-Poppins text-graphite-shadow/70">
                    <p className="bg-white/40 p-2.5 rounded-md">O Geesh é um aplicativo desenvolvido por alunos do 3º ano de
                        Mecatrônica do <a target="_blank" href="https://www.google.com/search?q=Centro+Territorial+de+Educa%C3%A7%C3%A3o+Profissional+da+Regi%C3%A3o+Metropolitana&sxsrf=AE3TifO9CVX7sT9E815UxVXPG7UQl5xqpw%3A1756703815836" className="underline font-medium">CETEP RM</a>, com a missão de tornar o gerenciamento
                        de energia renovável simples, acessível e eficiente.</p>

                    <p className="bg-white/40 p-2.5 rounded-md">
                        Nosso sistema integra diferentes soluções, como energia solar e eólica,
                        conectadas a dispositivos inteligentes para oferecer monitoramento em tempo real,
                        uso otimizado e máxima confiabilidade.
                    </p>
                </article>
            </div>
            <div className="hidden sm:flex w-full justify-between items-center gap-10 px-5 py-10 bg-gradient-to-r from-white via-white/90 to-blue-50 rounded-2xl shadow-md">
                <div className="flex flex-col w-[45%] text-start">
                    <header className="flex w-full text-start flex-col gap-2.5">
                        <h1 className="text-4xl font-Poppins  font-semibold leading-tight">
                            O que é o Geesh?
                        </h1>
                        <h2 className="text-xl text-ocean-sky text-abyssal-tide font-medium">
                            Aplicativo para gestão de energia renovável
                        </h2>
                    </header>

                    <article className="flex flex-col gap-4 text-lg font-Poppins text-graphite-shadow/80 mt-4">
                        <p className="bg-white/60 p-4 rounded-lg shadow-sm leading-relaxed">
                            O Geesh é um aplicativo desenvolvido por alunos do 3º ano de
                            Mecatrônica do{" "}
                            <a
                                target="_blank"
                                href="https://www.google.com/search?q=Centro+Territorial+de+Educa%C3%A7%C3%A3o+Profissional+da+Regi%C3%A3o+Metropolitana&sxsrf=AE3TifO9CVX7sT9E815UxVXPG7UQl5xqpw%3A1756703815836"
                                className="underline font-semibold text-ocean-sky hover:text-abyssal-tide transition-colors"
                            >
                                CETEP RM
                            </a>
                            , com a missão de tornar o gerenciamento de energia renovável simples,
                            acessível e eficiente.
                        </p>
                        <p className="bg-white/60 p-4 rounded-lg shadow-sm leading-relaxed">
                            Nosso sistema integra diferentes soluções, como{" "}
                            <span className="font-semibold text-abyssal-tide">energia solar</span> e{" "}
                            <span className="font-semibold text-abyssal-tide">eólica</span>,
                            conectadas a dispositivos inteligentes para oferecer monitoramento em
                            tempo real, uso otimizado e máxima confiabilidade.
                        </p>
                    </article>
                </div>

                <div className="flex w-[25%] justify-center">
                    <img
                        src="/geesh-website/Energy.svg"
                        alt="Energia Renovável"
                        className="max-w-md w-full"
                    />
                </div>
            </div>

        </section >
    )
}
