/**
 * Determines whether a navigation link is active for the current pathname.
 */
export function isNavLinkActive(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
