import Socials from "@/components/socials";
import { Examples } from "@/components/examples/date-time-picker-examples";
import { FormExamples } from "@/components/examples/date-time-picker-form-examples";

export default function Home() {
  return (
    <main className="w-full flex flex-col space-y-12 p-2 md:p-1 lg:p-0">
      <Header />
      <Examples />
      <FormExamples />
    </main>
  );
}

const Header = () => {
  return (
    <div className="mt-10 w-full flex justify-between">
      <h1 className="head-text-md">Date & Time picker</h1>
      <Socials />
    </div>
  );
};
