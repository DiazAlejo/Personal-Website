import { Container } from "@/components/layout/container";
import { Divider } from "@/components/ui/divider";
import { Typography } from "@/components/ui/typography";
import { navigation } from "@/content/navigation";
import { site } from "@/content/site";
import { socials } from "@/content/socials";
import Link from "next/link";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <Container className="py-section-y">
        <div className="flex flex-col gap-element-xl lg:flex-row lg:justify-between">
          <div className="max-w-md">
            <Typography variant="h3">{site.name}</Typography>
            <Typography
              variant="body"
              className="mt-element-sm text-text-secondary"
            >
              {site.description}
            </Typography>
          </div>

          <div className="flex flex-col gap-element-lg sm:flex-row sm:gap-element-2xl">
            <nav aria-label="Footer navigation">
              <Typography variant="small" className="mb-element-sm font-medium">
                Navigation
              </Typography>
              <ul className="flex flex-col gap-element-sm">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-small text-text-secondary transition-colors duration-normal ease-default hover:text-text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Social links">
              <Typography variant="small" className="mb-element-sm font-medium">
                Connect
              </Typography>
              <ul className="flex flex-col gap-element-sm">
                {socials.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="text-small text-text-secondary transition-colors duration-normal ease-default hover:text-text-primary"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <Divider className="my-element-xl" />

        <Typography variant="small">
          &copy; {currentYear} {site.name}. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
}

export { Footer };
