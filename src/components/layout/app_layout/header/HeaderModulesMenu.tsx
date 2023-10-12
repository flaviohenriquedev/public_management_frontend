import Link from "next/link";

type HeaderModulesMenuProps = {
    icon: JSX.Element;
};

export const HeaderModulesMenu = ({ icon }: HeaderModulesMenuProps) => {
    return (
        <Link href={"/manager"} prefetch id="modules_menu">
            {icon}
        </Link>
    );
};
