import { KeyRound, ShieldUser } from "lucide-react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../FirebaseConfig.tsx"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast, { type toastProps } from "./Toast.tsx";

export default function SignInForm() {
    let [email, SetEmail] = useState('')
    let [password, SetPassword] = useState('')
    const [toast, setToast] = useState<toastProps | null>(null);
    const navigate = useNavigate()

    const SignIn = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!email || !password) {
            setToast({
                title: "Alerta: Informações incompletas",
                desc: "Preencha todos os campos obrigatórios antes de prosseguir.",
                duration: 4000,
                onClose: () => setToast(null),
                type: 'alert'
            })
            return;
        }
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            if (user) {
                setToast({
                    title: "Login bem-sucedido",
                    desc: "Você será redirecionado para o painel administrativo.",
                    duration: 4000,
                    onClose: () => { setToast(null); navigate("/geesh-website/Admin/") },
                    type: 'sucess'
                })
            }
        } catch (err: unknown) {
            const error = err as { code: string }
            console.log(error)
            if (error.code === "auth/invalid-credential") {
                SetEmail("")
                SetPassword("")
                setToast({
                    title: "Erro: conta não existe",
                    desc: "A conta fornecida não foi encontrada. Verifique seus dados e tente novamente.",
                    duration: 4000,
                    onClose: () => setToast(null),
                    type: 'error'
                })
                navigate("/geesh-website/AdminSignIn/")
                return;
            }
            if (error.code === "auth/too-many-requests") {
                setToast({
                    title: "Erro: Muitas tentativas",
                    desc: "Tente novamente mais tarde.",
                    duration: 4000,
                    onClose: () => setToast(null),
                    type: 'error'
                })
                navigate("/geesh-website/AdminSignIn/")
                return;
            }
            if (error.code === "auth/invalid-email") {
                setToast({
                    title: "Erro: Admin Inválido",
                    desc: "Verifique seus dados e tente novamente.",
                    duration: 4000,
                    onClose: () => setToast(null),
                    type: 'error'
                })
                navigate("/geesh-website/AdminSignIn/")
                return;
            }
        }
    }
    return (
        <div className="flex flex-col items-center w-fit">
            <div className="bg-phantom-night rounded-lg border border-graphite-shadow shadow-2xl gap-4 flex flex-col w-80 h-fit justify-center items-center p-4">
                <div className="flex flex-col gap-2.5 items-center justify-center  w-full h-fit ">
                    <img src="/geesh-website/GeeshName.svg" alt="Geesh Logo" className='w-24 sm:w-34 ' />
                    <p className="text-ghost-mist uppercase text-xs">Gerenciamento de Energia</p>
                </div>
                <form className="flex flex-col w-full h-full gap-2.5  py-3.5" id="AdminSignInForm">
                    <label htmlFor="" className="flex text-silver-dusk items-center text-sm font-Inter font-light gap-1 justify-start "><ShieldUser className="text-ghost-mist" /> Admin</label>
                    <input type="email" value={email} onChange={(e) => SetEmail(e.target.value)} name="email" className="w-full rounded-lg h-9 bg-abyssal-black border border-midnight-smoke text-White-80 text-sm px-3.5 focus:outline-none" />
                    <label htmlFor="" className="flex text-silver-dusk items-center text-sm font-Inter font-light gap-1 justify-start "><KeyRound className="text-ghost-mist" /> Senha</label>
                    <input type="password" value={password} onChange={(e) => SetPassword(e.target.value)} name="password" className="w-full rounded-lg h-9 bg-abyssal-black border border-midnight-smoke text-White-80 text-sm px-3.5 focus:outline-none" />
                </form>
                <button form="AdminSignInForm" onClick={SignIn} className="text-White-80 hover:cursor-pointer hover:bg-amethyst-myst transition-colors w-full bg-purple-enigma rounded-lg flex justify-center items-center font-bold h-10 " >Administrar</button>
            </div>
            {toast && (
                <div className=" absolute w-fit flex flex-col gap-2.5 h-fit px-2.5 py-1.5 bottom-3">
                    <Toast title={toast.title} desc={toast.desc} duration={toast.duration} type={toast.type} onClose={toast.onClose} />
                </div>
            )}
        </div>
    )
}
