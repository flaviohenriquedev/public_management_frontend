import {ModuleMenu} from "@/components/navigation/module_menu";
import * as S from "./style";

import {BiPurchaseTag} from "react-icons/bi";
import {MdOutlineRealEstateAgent} from "react-icons/md";

const sizeIcon = 70;

const data = [
    {
        title: "Compras",
        icon: <BiPurchaseTag size={sizeIcon}/>,
        href: "manager/shopping",
    },
    {
        title: "Patrimônio",
        icon: <MdOutlineRealEstateAgent size={sizeIcon}/>,
        href: "manager/patrimony",
    },
];

export default function ManagerPage() {
    return (
        <S.Container id="module_card_container">
            {data &&
                data.map((d) => (
                    <ModuleMenu.Card key={d.title}>
                        <ModuleMenu.Icon icon={d.icon}/>
                        <ModuleMenu.Description
                            href={d.href}
                            description={d.title}
                        />
                    </ModuleMenu.Card>
                ))}
        </S.Container>
    );
}
