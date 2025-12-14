import { ReactNode } from "react";
import "../../globals.css";
import NextAuthSessionProvider from "@/Providers/NextAuthSessionProvider";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <NextAuthSessionProvider>
        <body>
          {/* No Navbar / No Footer */}
          <div>{children}</div>
        </body>
      </NextAuthSessionProvider>
    </html>
  );
}
