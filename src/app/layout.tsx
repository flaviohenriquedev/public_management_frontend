import "./globals.css";

export const metadata = {
    title: "SIGEP",
    description: "Sistema Integrado de Gestão Pública",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <body id="body" className="h-screen">
                {children}
            </body>
        </html>
    );
}
