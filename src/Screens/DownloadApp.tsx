import { BadgeAlert, Download, UserCog } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function DownloadApp() {
    return (
        <section id='Home' className='sm:py-37 sm:justify-center sm:items-center bg-gradient-to-br from-azure via-bluishWhite to-[#D9EEF5] flex w-full h-fit gap-25 items-start justify-center py-14 px-5 text-White-80'>
            <Link to='/geesh-website/AdminSignIn/' className='flex absolute right-2 top-1.5 sm:right-3.5 sm:top-2.5 hover:bg-White-80 hover:text-azure transition-colors justify-center gap-1.5 font-Inria items-center border border-White-80 text-White-80 rounded-full px-2.5 py-1'>
                <UserCog />
                <span className='select-none'>Admin</span>
            </Link>
            <div className='sm:w-[30%] flex flex-col gap-2.5 items-start text-start'>
                <img src="/geesh-website/GeeshName.svg" alt="Geesh Logo" className='w-35 sm:w-40' />
                <h1 className='sm:text-5xl text-4xl uppercase font-bold font-Inter'>Seu Gerenciador de Energias Renováveis</h1>
                <span className='sm:text-lg text-base text-White-80/90 font-Poppins'>Torne o consumo de energia sustentável simples, acessível e eficiente.</span>
                <div className='flex w-full gap-3.5'>
                    <a aria-label='aria-label="Download do Geesh.apk"' href="/geesh-website/Geesh.apk" download="Geesh.apk" className='sm:text-lg hover:bg-bluishWhite hover:text-White-80 shadow-md transition-colors font-Poppins flex w-full h-fit py-2.5 justify-center items-center bg-White-80 text-bluishWhite rounded-full gap-1'> <Download /> Fazer Download</a>
                    <a aria-label='aria-label="Saiba mais"' href="#aboutApp" className='sm:text-lg hover:bg-White-80 hover:text-bluishWhite transition-colors flex h-fit shadow-md font-Poppins py-2.5 w-[55%] justify-center items-center border-2 border-White-80 text-White-80 rounded-full gap-1'> Saiba mais</a>
                </div>
                <div className='flex p-2 border-flame-sigil border-2 rounded-sm gap-1 justify-center items-center bg-ember-soot'>
                    <BadgeAlert />
                    {/* <BadgeCheck/> */}
                    <span className='sm:text-lg flex font-Poppins text-White-80/90'> Versão Beta 1.0.3</span>
                    <span className='sr-only'> Versão Beta 1.0.3</span>
                </div>
            </div>
            <div className='hidden sm:flex'>
                <img src="/geesh-website/phone1.png" alt="Geesh Logo" className='w-100 ' />
            </div>
        </section>
    )
}
