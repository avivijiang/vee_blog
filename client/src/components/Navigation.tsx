import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function Navigation() {
  const [location] = useLocation();
  const { t } = useTranslation();

  const links = [
    { href: "/", label: t("nav.home") },
    { href: "/resume", label: t("nav.resume") },
    { href: "/blog", label: t("nav.blog") },
    { href: "/travel", label: t("nav.travel") },
    { href: "/cat", label: t("nav.cat") },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 p-1 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-sm">
        {links.map((link) => {
          const isActive = location === link.href;
          return (
            <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full whitespace-nowrap",
                  isActive
                    ? "text-black dark:text-white"
                    : "text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
