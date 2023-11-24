import {PageSection} from "@/components/layout/page_section";
import {LineContent} from "@/components/layout/line_content";
import LabelContainer from "@/components/data_input/label/LabelContainer";
import Select from "@/components/data_input/select/Select";
import {TextArea} from "@/components/data_input/textarea/TextArea";

export function BiddingNatureObject() {
    return (
        <form>
            <PageSection title="Natureza Do Objeto">
                <LineContent>
                    <LabelContainer title="Natureza do objeto detalhada:" notNull>
                        <Select options={[{value: "TESTE", description: "TESTE"}]}/>
                    </LabelContainer>
                </LineContent>
                <LineContent>
                    <LabelContainer title="Descrição:">
                        <TextArea/>
                    </LabelContainer>
                </LineContent>
            </PageSection>
        </form>
    )
}