"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

type NavLink = { label: string; href: string; arrow?: boolean };

const HOME_LINKS: NavLink[] = [
  { label: "Features", href: "#features", arrow: true },
  { label: "How It Works", href: "#how-it-works", arrow: true },
  { label: "Tutorials", href: "/tutorials", arrow: true },
];

const DOC_LINKS: NavLink[] = [
  { label: "Tutorials", href: "/tutorials" },
  { label: "Help", href: "/help" },
  { label: "Support", href: "/support" },
  { label: "Home", href: "/" },
];

// Only shown inside the mobile menu, where there is room for every page.
const MOBILE_EXTRA: NavLink[] = [
  { label: "Help Center", href: "/help" },
  { label: "Contact Support", href: "/support" },
];

export default function SiteNav({ variant }: { variant: "home" | "doc" }) {
  const [open, setOpen] = useState(false);
  const links = variant === "home" ? HOME_LINKS : DOC_LINKS;
  const mobileLinks =
    variant === "home" ? [...HOME_LINKS, ...MOBILE_EXTRA] : [...DOC_LINKS];

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("resize", close);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", close);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-qf border-b ${
        variant === "home" ? "border-qsel-bright" : "border-qsel"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between gap-3">
            <Image src="/qf-logo-wordmark.png" alt="Quantum Follis" width={200} height={40} className="qf-logo-img" priority />
          {/*<span
            className={`font-light text-white truncate ${
              variant === "home" ? "text-xl md:text-2xl" : "text-xl"
            }`}
          >
            Quantum Follis
          </span>*/}

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <NavItem key={l.href} link={l} className="text-md text-white hover:text-white transition-colors" />
          ))}
        </div>

        {variant === "home" && (
          <div className="hidden md:flex items-center gap-3">
            <Link href="/test" className="btn-primary text-md py-2.5 px-6">Join the test</Link>
            <EcosystemButton className="btn-primary text-md py-2.5 px-6" />
            <span className="btn-primary text-md font-light py-2.5 px-6 cursor-not-allowed">Download (Coming Soon)</span>
          </div>
        )}

        <button
          type="button"
          className="inline-flex md:hidden flex-col justify-center gap-[5px] nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`nav-toggle-bar ${open ? "nav-toggle-bar-top-open" : ""}`} />
          <span className={`nav-toggle-bar ${open ? "opacity-0" : ""}`} />
          <span className={`nav-toggle-bar ${open ? "nav-toggle-bar-bottom-open" : ""}`} />
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="flex md:hidden flex-col mobile-menu">
          {mobileLinks.map((l) => (
            <NavItem
              key={l.href + l.label}
              link={l}
              className="mobile-menu-link"
              onClick={() => setOpen(false)}
            />
          ))}
          {variant === "home" && (
            <div className="flex flex-col gap-2 pt-3">
              <Link href="/test" className="btn-primary mobile-menu-button" onClick={() => setOpen(false)}>
                Join the test
              </Link>
              <EcosystemButton className="btn-primary mobile-menu-button" />
              <span className="btn-primary mobile-menu-button cursor-not-allowed">Download (Coming Soon)</span>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

function NavItem({
  link,
  className,
  onClick,
}: {
  link: NavLink;
  className: string;
  onClick?: () => void;
}) {
  const content = (
    <>
      {link.label}
      {link.arrow && <span className="text-qsel-highlight"> →</span>}
    </>
  );
  if (link.href.startsWith("#")) {
    return (
      <a href={link.href} className={className} onClick={onClick}>
        {content}
      </a>
    );
  }
  return (
    <Link href={link.href} className={className} onClick={onClick}>
      {content}
    </Link>
  );
}

function EcosystemButton({ className }: { className: string }) {
  return (
    <a href="https://qselenterprise.com" target="_blank" rel="noopener noreferrer" className={className}>
      QSEL Ecosystem
    </a>
  );
}
