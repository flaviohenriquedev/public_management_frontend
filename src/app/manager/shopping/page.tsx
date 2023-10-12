import { PageContent } from "@/components/containers/page_content";
import { PageDashboard } from "@/components/containers/page_dashboard";

const ShoppingPage = () => {
    return (
        <PageContent.Root>
            <PageContent.Children>
                <PageDashboard.Root />
            </PageContent.Children>
        </PageContent.Root>
    );
};

export default ShoppingPage;
