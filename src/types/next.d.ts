import React from "react";

declare module "next" {
  export type Metadata = {
    title?: string;
    description?: string;
    keywords?: string[];
    authors?: { name: string }[];
    openGraph?: Record<string, unknown>;
    robots?: Record<string, unknown>;
  };
}

declare module "next/link" {
  export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    prefetch?: boolean;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
  }
  const Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>;
  export default Link;
}

declare module "next/navigation" {
  export function usePathname(): string;
  export function useRouter(): {
    push(href: string): void;
    replace(href: string): void;
    back(): void;
    forward(): void;
    prefetch(href: string): void;
  };
  export function useSearchParams(): URLSearchParams;
}

declare module "next/font/google" {
  export function Geist(options: { variable?: string; subsets?: string[] }): {
    variable: string;
    className: string;
  };
  export function Geist_Mono(options: { variable?: string; subsets?: string[] }): {
    variable: string;
    className: string;
  };
}

declare module "next/types.js" {
  export interface PageProps {
    params?: Promise<Record<string, string | string[]>>;
    searchParams?: Promise<Record<string, string | string[] | undefined>>;
  }
}
