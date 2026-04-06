import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "PortaFind New England – Porta Potty Rentals in CT, RI & MA",
  description:
    "Find and compare portable restroom vendors across Connecticut, Rhode Island, and Massachusetts. Filter by state, price range, and customer ratings.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 antialiased">
        {/* Nav */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-emerald-700">
              <span className="text-2xl">🚽</span>
              <span>PortaFind</span>
              <span className="text-slate-400 font-normal text-sm hidden sm:inline">New England</span>
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link
                href="/vendors"
                className="text-slate-600 hover:text-emerald-700 transition-colors"
              >
                Browse Vendors
              </Link>
              <Link
                href="/vendors?state=CT"
                className="text-slate-600 hover:text-emerald-700 transition-colors hidden sm:block"
              >
                Connecticut
              </Link>
              <Link
                href="/vendors?state=RI"
                className="text-slate-600 hover:text-emerald-700 transition-colors hidden sm:block"
              >
                Rhode Island
              </Link>
              <Link
                href="/vendors?state=MA"
                className="text-slate-600 hover:text-emerald-700 transition-colors hidden sm:block"
              >
                Massachusetts
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-slate-800 text-slate-300 mt-16">
          <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <p className="font-semibold text-white text-base mb-2">🚽 PortaFind New England</p>
              <p className="text-slate-400">
                The easiest way to find and compare portable restroom vendors across CT, RI, and MA.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Browse by State</p>
              <ul className="space-y-1">
                <li>
                  <Link href="/vendors?state=CT" className="hover:text-white transition-colors">
                    Connecticut
                  </Link>
                </li>
                <li>
                  <Link href="/vendors?state=RI" className="hover:text-white transition-colors">
                    Rhode Island
                  </Link>
                </li>
                <li>
                  <Link href="/vendors?state=MA" className="hover:text-white transition-colors">
                    Massachusetts
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Browse by Price</p>
              <ul className="space-y-1">
                {["$", "$$", "$$$", "$$$$"].map((p) => (
                  <li key={p}>
                    <Link
                      href={`/vendors?priceRange=${encodeURIComponent(p)}`}
                      className="hover:text-white transition-colors"
                    >
                      {p} {p === "$" ? "– Budget" : p === "$$" ? "– Moderate" : p === "$$$" ? "– Premium" : "– Luxury"}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 text-center py-4 text-xs text-slate-500">
            © {new Date().getFullYear()} PortaFind New England. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
