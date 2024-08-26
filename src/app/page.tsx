import Socials from "@/components/socials";
import { Examples } from "@/components/examples/date-time-picker-examples";
import { FormExamples } from "@/components/examples/date-time-picker-form-examples";
import { ExternalLink } from "@/components/external-link";
import { siteConfig } from "@/config/site.config";

export default function Home() {
  return (
    <main className="w-full flex flex-col space-y-12 my-10 p-2 md:p-1 lg:p-0">
      <Header />
      <Examples />
      <FormExamples />
      <p className="text-sm text-center">
        made by{" "}
        <ExternalLink href={siteConfig.creator.url}>rds_agi</ExternalLink>
      </p>
    </main>
  );
}

const Header = () => {
  return (
    <div className="w-full flex justify-between">
      <h1 className="head-text-md">Date & Time picker</h1>
      <Socials />
    </div>
  );
};
