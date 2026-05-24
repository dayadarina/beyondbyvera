import { Link, NavLink } from "react-router-dom";
import type { ReactNode } from "react";

const SHOP_URL = "https://beyondbyvera.com";

function navClass({ isActive }: { isActive: boolean }) {
  return `text-sm tracking-wide transition-colors ${
    isActive ? "text-charcoal" : "text-charcoal/70 hover:text-charcoal"
  }`;
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <header className="border-b border-line/70">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl tracking-wide">
            BEYOND BY VERA
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/reviews" className={navClass}>Reviews</NavLink>
            <NavLink to="/journal" className={navClass}>The Journal</NavLink>
            <NavLink to="/about" className={navClass}>About</NavLink>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener"
              className="text-sm tracking-wide text-terracotta hover:opacity-80"
            >
              Shop ↗
            </a>
          </nav>
        </div>
        <nav className="md:hidden border-t border-line/70 px-6 py-3 flex items-center gap-5 overflow-x-auto">
          <NavLink to="/reviews" className={navClass}>Reviews</NavLink>
          <NavLink to="/journal" className={navClass}>Journal</NavLink>
          <NavLink to="/about" className={navClass}>About</NavLink>
          <a href={SHOP_URL} target="_blank" rel="noopener" className="text-sm text-terracotta">
            Shop ↗
          </a>
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-24 border-t border-line/70 bg-ivory">
        <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
          <div>
            <div className="font-serif text-xl mb-3">Beyond by Vera</div>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Wearable art, drawn by hand and printed with care. A journal of the
              women who wear Vera, and the moments these pieces were made for.
            </p>
          </div>
          <div>
            <div className="small-caps text-charcoal/60 mb-3">Explore</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/reviews" className="hover:text-terracotta">Reviews</Link></li>
              <li><Link to="/journal" className="hover:text-terracotta">The Journal</Link></li>
              <li><Link to="/about" className="hover:text-terracotta">About</Link></li>
              <li>
                <a href={SHOP_URL} target="_blank" rel="noopener" className="hover:text-terracotta">
                  Shop the Collection at beyondbyvera.com ↗
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="small-caps text-charcoal/60 mb-3">Elsewhere</div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.instagram.com/beyondbyvera/" target="_blank" rel="noopener" className="hover:text-terracotta">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/beyondbyvera/" target="_blank" rel="noopener" className="hover:text-terracotta">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.pinterest.com/beyondbyvera/" target="_blank" rel="noopener" className="hover:text-terracotta">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-line/70">
          <div className="max-w-6xl mx-auto px-6 py-5 text-xs text-muted flex flex-wrap items-center justify-between gap-2">
            <span>© {new Date().getFullYear()} Beyond by Vera. All rights reserved.</span>
            <span className="small-caps text-charcoal/50">A reviews & editorial companion</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
