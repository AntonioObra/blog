import Link from "next/link";

import { Icons } from "@/components/Icons";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="container py-16 md:py-24 lg:py-32 min-h-screen flex items-center justify-center">
      <hgroup className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-7xl">Whoops</h1>
        <Link
          href="/"
          className={buttonVariants({ variant: "default", size: "lg" })}
        >
          <Icons.arrowLeft className="w-4 h-4 mr-4" /> Take me back
        </Link>
      </hgroup>
    </main>
  );
}
