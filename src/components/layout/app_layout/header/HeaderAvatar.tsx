import * as S from "./style";

import Image from "next/image";
import Profile from '../../../../../public/profile.jpg'
import Link from "next/link";

export const HeaderAvatar = () => {
    return (
        <>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar placeholder online">

                            <S.AvatarContent id="avatar_content">
                                <Image src={Profile} alt="profile_picture" id="avatar_image"/>
                            </S.AvatarContent>

                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <Link href="/">Sair</Link>
                    </ul>
                </div>
            </div>

        </>

    );
};
