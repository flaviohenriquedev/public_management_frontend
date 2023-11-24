import {PageSection} from "@/components/layout/page_section";
import Select from "@/components/data_input/select/Select";
import {LineContent} from "@/components/layout/line_content";
import LabelContainer from "@/components/data_input/label/LabelContainer";

export function BiddingFiles() {
    return (
        <PageSection title="Arquivos">
            <LineContent>
                <LabelContainer title="Tipo de Arquivo:" notNull>
                    <Select options={[{value: "TESTE", description: "TESTE"}]}/>
                </LabelContainer>
            </LineContent>
        </PageSection>
    )
}