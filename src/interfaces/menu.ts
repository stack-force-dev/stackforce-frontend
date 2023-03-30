export type Contact = {
  iconName: string;
  info: string;
  href: string;
};

export type SocialNetworkItem = {
  iconName: string;
  href: string;
};

export type MenuData = {
  contacts: Contact[];
  socialNetwork: SocialNetworkItem[];
};
