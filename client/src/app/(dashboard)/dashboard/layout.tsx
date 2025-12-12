import { ReactNode } from "react";
import "../../globals.css";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* No Navbar / No Footer */}
        <div>{children}</div>
      </body>
    </html>
  );
}
