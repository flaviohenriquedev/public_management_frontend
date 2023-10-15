'use client'

import {BsGear} from 'react-icons/bs'
import {openModal} from "@/functions/functions";
import {ModuleConfigContainer} from "@/components/layout/module_config/ModuleConfigContainer";

export function ModuleLayoutConfig() {
    return (
        <>
            <div className="flex justify-center items-center w-20">
                <div onClick={() => openModal("modal_module_config")}
                     className="flex justify-center items-center w-auto h-auto rounded-full bg-base-200 fixed bottom-0 p-2 m-2 hover:cursor-pointer">
                    <BsGear size={20}/>
                </div>
            </div>
            <ModuleConfigContainer/>
        </>

    )
}