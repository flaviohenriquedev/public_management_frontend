'use client'

import {BsGear} from 'react-icons/bs'
import {openModal} from "@/functions/functions";
import {ModuleConfigContainer} from "@/components/layout/module_config/ModuleConfigContainer";

export function ModuleLayoutConfig() {
    return (
        <>
            <div className="flex justify-center items-center w-20 fixed bottom-0 z-40">
                <div className="flex justify-center items-center bg-base-100 rounded-full mb-2">
                    <div onClick={() => openModal("modal_module_config")}
                         className="flex justify-center items-center w-auto h-auto rounded-full bg-secondary  p-2 m-2 hover:cursor-pointer text-accent-content hover:bg-accent-focus">
                        <BsGear size={20}/>
                    </div>
                </div>
            </div>
            <ModuleConfigContainer/>
        </>
    )
}