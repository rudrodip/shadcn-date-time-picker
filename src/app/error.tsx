"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center gap-1">
      <div className="w-full max-w-5xl mx-auto aspect-video flex justify-center items-center font-bold text-5xl">
        <div className="flex items-center justify-center gap-2">
          Oops! Something went wrong
        </div>
      </div>
      <p>Sorry for the inconvenience</p>
      <Button size="sm" asChild>
        <Link href="/">Go to homepage</Link>
      </Button>
    </section>
  );
}
