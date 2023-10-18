import {PageSection} from "@/components/layout/page_section";

export function BiddingInitialPage() {
    return (
        <div>
            <div className="border-l border-b border-base-200 text-sm breadcrumbs w-full sticky top-[6rem] bg-base-100 shadow-lg shadow-base-200 py-1 px-3 rounded-bl-md mb-4">
                <ul className="text-[8.5pt]">
                    <li><a href="#basic_data">Dados Básicos</a></li>
                    <li><a href="#object_nature">Natureza Objeto</a></li>
                    <li>Add Document</li>
                </ul>
            </div>
            <PageSection id="basic_data" title="Dados Básicos" className="h-screen">
                <h1>Dados Básicos</h1>
            </PageSection>

            <PageSection id="object_nature" title="Natureza do Objeto" className="h-screen" >
                <h1>Natureza do Objeto</h1>
            </PageSection>
        </div>
    )
}