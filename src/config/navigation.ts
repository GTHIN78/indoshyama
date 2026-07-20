export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "India",
    href: "/india",
  },
  {
    label: "World",
    href: "/world",
  },
  {
    label: "Business",
    href: "/business",
  },
  {
    label: "Technology",
    href: "/technology",
  },
  {
    label: "AI",
    href: "/ai",
  },
  {
    label: "Travel",
    href: "/travel",
  },
  {
    label: "Spirituality",
    href: "/spirituality",
  },
  {
    label: "Videos",
    href: "/videos",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
