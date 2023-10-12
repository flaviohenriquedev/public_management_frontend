import {useState} from "react";
import {useRouter} from "next/navigation";
import * as S from "./style";
import {MdOutlineSkipNext} from 'react-icons/md'
import {BsChevronDoubleDown} from 'react-icons/bs'
import {SideMenuSubItemTitle} from "./style";

interface SubMenuProps {
    description: string;
    pageName?: string;
    children: React.ReactNode;
    href?: string;
}

export const SubMenu = ({
                            description,
                            pageName,
                            children,
                            href,
                        }: SubMenuProps) => {
    const route = useRouter();
    const [subMenuListClosed, setSubMenuListClosed] = useState(true);

    function handleClick() {
        if (href) {
            let hrefWithPagename = `${href}?pn=${pageName}`;
            route.push(
                href.startsWith("/") ? hrefWithPagename : "/" + hrefWithPagename
            );
        } else {
            setSubMenuListClosed(!subMenuListClosed);
        }
    }

    return (
        <S.SideMenuSubItem onClick={() => handleClick()}>
            <S.SideMenuSubItemDescription>
                <S.SideMenuSubItemIcon>
                    {children ? <BsChevronDoubleDown color="base-100"/> : <MdOutlineSkipNext color="base-100"/>}
                </S.SideMenuSubItemIcon>
                <S.SideMenuSubItemTitle>
                    {children ? <strong>{description}</strong> : description}
                </S.SideMenuSubItemTitle>
            </S.SideMenuSubItemDescription>
            <S.SideSubMenuSubList closed={subMenuListClosed}>
                {children}
            </S.SideSubMenuSubList>
        </S.SideMenuSubItem>
    );
};
