import {Modal} from "@/components/modal";
import {shConfigData} from "@/data/tests";
import {Checkbox} from "@/components/data_input/checkbox";

export function ModuleConfigContainer() {
    function getBooleanValue(value: string) {
        if (value === "TRUE") {
            return true
        } else if (value === "FALSE") {
            return false;
        }
    }

    function isBoolean (value: string) {
        if (value === "TRUE" || value === "FALSE")
            return true
    }


    return (
        <div>
            <Modal.Root id="modal_module_config" title="Configuração do Módulo">
                <Modal.Results>
                    <div className="overflow-y-scroll max-h-full">
                        {shConfigData && shConfigData.map(s => (
                                <div className="flex flex-col border-b-2 border-b-secondary p-4"
                                     key={s.id_configuracao}>
                                    <h1 className="text-[10pt]">{s.chave}</h1>

                                    {isBoolean(s.valor) ? (
                                        <>
                                            <Checkbox title={s.descricao} value={getBooleanValue(s.valor)}/>
                                        </>
                                    ) : (
                                        <>
                                            <label className="text-[7pt]">{s.descricao}</label>
                                            <input type="TEXT" value={s.valor}/>
                                        </>
                                    )}
                                </div>
                            )
                        )}
                    </div>
                </Modal.Results>
            </Modal.Root>
        </div>
    )
}