import { AppLayout } from "@/components/layout/app_layout";
import { Providers } from "@/providers/Providers";

export default function ManagerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <AppLayout>{children}</AppLayout>
    </Providers>
  );
}
