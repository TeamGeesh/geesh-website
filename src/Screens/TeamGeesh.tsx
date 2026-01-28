import MemberBase from "../components/MemberBase";


export default function TeamGeesh() {
    return (
        <section id="aboutApp" className=" w-full flex flex-col gap-2.5 px-5 bg-White-80 items-start justify-start py-14">
            <header className="flex w-full text-start flex-col gap-2.5">
                <h1 className="sm:text-5xl text-4xl font-Poppins text-black font-medium">Quem são os desenvolvedores?</h1>
                <span className="sm:text-2xl text-base text-black/70 font-Poppins">A equipe Geesh conta com 5 membros, sendo eles:</span>
            </header>
            <div className=" sm:flex-row flex justify-center items-center w-full h-fit flex-col gap-4 font-Poppins text-graphite-shadow/70">
                <MemberBase name="Erick Oliveira" description="Responsável por liderar o desenvolvimento do projeto, definindo padrões técnicos, revisando código e programando. Também atua no design de interface e experiência do usuário." skills="Tech Lead & Design UI/UX" img="/geesh-website/Erick.png" />
                <MemberBase name="Gustavo Almeida" description="Contribui trazendo referências visuais para o aplicativo. Como Social Media, administra as redes oficiais da equipe, produzindo conteúdos para o YouTube e Instagram." skills="Social Media & Design Criativo" img="/geesh-website/Gustavo.jpg" />
                <MemberBase name="Matheus Gabriel" description="Responsável por implementar telas e funcionalidades do aplicativo, seguindo os padrões técnicos definidos pelo Tech Lead." skills="Desenvolvedor de Software" img='/geesh-website/Matheus.jpg'/>
                <MemberBase name="Micael Pereira" description="Responsável por analisar projetos similares e elaborar relatórios semanais, trazendo referências que auxiliam na evolução do aplicativo." skills="Pesquisador de Referências" img="/geesh-website/Micael.jpg" />
                <MemberBase name="Guilherme Araujo" description="Registra o progresso da equipe em relatórios semanais, organizando dados de entrevistas com os membros e garantindo a atualização do diário de bordo." skills="Analista de Relatórios" img="/geesh-website/Guilherme.jpg" />
            </div>
        </section>
    )
}
