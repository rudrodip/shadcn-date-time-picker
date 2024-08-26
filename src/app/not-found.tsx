import { Button } from "@/components/ui/button";
import Link from "next/link"

export default function NotFoundPage() {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center gap-1">
      <div className="w-full max-w-5xl mx-auto aspect-video flex justify-center items-center font-bold text-9xl md:text-[12rem] lg:text-[20rem]">
        <div className="flex items-center justify-center gap-2">
          404
        </div>
      </div>
      <p>Sorry we can&apos;t find this page</p>
      <Button size="sm" asChild>
        <Link href="/">
          Go to homepage
        </Link>
      </Button>
    </section>
  )
}