import {AppLayout} from "@/components/layout/app_layout";
import {Providers} from "@/providers/Providers";
import {ReactNode} from "react";

export default function ManagerLayout({
                                          children,
                                      }: {
    children: ReactNode;
}) {
    return (
        <Providers>
            <AppLayout>{children}</AppLayout>
        </Providers>
    );
}
