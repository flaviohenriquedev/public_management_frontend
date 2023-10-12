'use client'

import logo from '../../../public/logo-w.png'
import clientlogo from '../../../public/logomarca_inhumas.png'
import Image from "next/image";
import LabelContainer from "@/components/data_input/label/LabelContainer";
import {Input} from "@/components/data_input/input";
import {LineContent} from "@/components/layout/line_content";
import {Button} from "@/components/actions/button";
import {BsPhoneVibrate} from 'react-icons/bs'
import {AiOutlineLogin} from 'react-icons/ai'
import Link from "next/link";
import {Checkbox} from "@/components/data_input/checkbox";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function LoginPage() {
    const [beginLogged, setBeginLogged] = useState<boolean>(false)
    const route = useRouter()

    function handleLogin() {
        route.push("/manager")
    }

    return (
        <div className="flex w-screen h-screen bg-bg-login bg-cover bg-no-repeat" data-theme="emerald">
            <div className="flex flex-col items-center pt-10 w-[60%]">
                <div className="flex items-center justify-center">
                    <Image src={clientlogo} alt="clientlogo" width={400} height={400}/>
                </div>
            </div>
            <form onSubmit={(e) => e.preventDefault()}
                  className="flex items-center p-10 flex-col w-[40%] h-full bg-secondary shadow-blue-800 shadow-lg rounded-tl-2xl rounded-bl-2xl">
                <Image src={logo} alt="logo" width={110} height={110}/>

                <div className="flex flex-col justify-center gap-2 w-96 h-96 mt-10">
                    <h1 className="font-bold mb-4 text-[25pt]">Login</h1>

                    <LineContent>
                        <LabelContainer title="Usuário">
                            <Input placeholder="Digite seu CPF ou email" className="rounded h-10"/>
                        </LabelContainer>
                    </LineContent>

                    <LineContent>
                        <LabelContainer title="Senha">
                            <Input type="password" placeholder="Digite sua senha" className="rounded h-10"/>
                        </LabelContainer>
                    </LineContent>

                    <LineContent>
                        <LabelContainer title="Código SMS">
                            <Input type="phone" placeholder="(XX) 0 0000-0000" className="rounded h-10"/>
                        </LabelContainer>
                        <Button.Root classbutton="success" heigth="h-10">
                            <Button.Icon icon={<BsPhoneVibrate size={20}/>}/>
                            <Button.Title title="Enviar SMS"/>
                        </Button.Root>
                    </LineContent>

                    <div className="mt-2">
                        <LineContent>
                            <Checkbox title="Continuar logado" value={beginLogged} setValue={setBeginLogged}/>
                            <Link href="#" className="text-[9pt]">Esqueci minha senha</Link>
                        </LineContent>
                    </div>

                    <div className="flex flex-col justify-center w-full mt-5">
                        <Button.Root classbutton="primary" id="sigin" onClick={handleLogin} heigth="h-10">
                            <Button.Icon icon={<AiOutlineLogin size={20}/>}/>
                            <Button.Title title="Logar"/>
                        </Button.Root>
                    </div>
                </div>
            </form>
        </div>
    )
}