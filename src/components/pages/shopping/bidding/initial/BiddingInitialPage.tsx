import {PageSection} from "@/components/layout/page_section";

export function BiddingInitialPage() {
    return (
        <div>
            <PageSection id="basic_data" title="Dados Básicos" className="h-screen">
                <h1>Dados Básicos</h1>

                <div className="h-32 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
                    <div className="h-64"></div>
                </div>
            </PageSection>

            <PageSection id="object_nature" title="Natureza do Objeto" className="h-screen" >
                <h1>Natureza do Objeto</h1>
            </PageSection>
        </div>
    )
}