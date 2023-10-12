import { PageContent } from "@/components/containers/page_content";
import { PageDashboard } from "@/components/containers/page_dashboard";

const PatrimonyPage = () => {
    return (
        <PageContent.Root>
            <PageContent.Children>
                <PageDashboard.Root />
            </PageContent.Children>
        </PageContent.Root>
    );
};

export default PatrimonyPage;
