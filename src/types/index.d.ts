export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  keywords: string[];
  creator: {
    name: string;
    url: string;
  };
  siteUrl: string;
  ogImage: string;
  links: {
    x: string;
    github: string;
  }
}
