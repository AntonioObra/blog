import Link from "next/link";
import { Metadata } from "next";

import { Icons } from "@/components/Icons";
import { MotionDiv } from "@/components/MotionDiv";
import { PageHeader } from "@/components/PageHeader";
import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { variantsLeft, variantsRight } from "@/lib/motion";

// * Generate Metadata for the ContactPage
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact",
    description: "My contact information",
  };
}

export default function ContactPage() {
  return (
    <main className="container py-16 md:py-20">
      <PageHeader
        heading="Contact me"
        text="My contact information"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 flex-col md:flex-row flex-wrap">
        <MotionDiv
          variants={variantsLeft}
          initial="hidden"
          transition={{ delay: 0.2, ease: "easeInOut", duration: 0.5 }}
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="flex flex-col justify-between  border-2 border-muted bg-secondary  rounded-lg p-8 hover:border-foreground/50 hover:shadow-2xl h-full hover:shadow-foreground/20 transition-all duration-300">
            <div>
              <h2 className="text-2xl font-bold mb-4">Email</h2>
              <p className="text-lg text-muted-foreground">
                If you prefer direct communication, you can contact me through
                e-mail. I will do my best to respond to your inquiries promptly.
              </p>
            </div>

            <div className="mt-8 flex items-center justify-start gap-4 flex-wrap">
              <Link
                href="mailto:antonio@obradovic.dev"
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "flex items-center gap-2 text-md"
                )}
              >
                <Icons.contact className="h-5 w-5" />
                antonio@obradovic.dev
              </Link>
            </div>
          </div>
        </MotionDiv>

        <MotionDiv
          variants={variantsRight}
          initial="hidden"
          transition={{ delay: 0.2, ease: "easeInOut", duration: 0.5 }}
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="flex flex-col justify-between  border-2 border-muted bg-secondary  rounded-lg p-8 hover:border-foreground/50 hover:shadow-2xl h-full hover:shadow-foreground/20 transition-all duration-300">
            <div>
              <h2 className="text-2xl font-bold mb-4">Socials</h2>
              <p className="text-lg text-muted-foreground">
                You can also find me on various social media platforms and
                professional networks. Feel free to follow, connect, or message
                me through these channels:
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4">
              <Link
                href="https://github.com/AntonioObra"
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: "default", size: "lg" })}
                title="GitHub"
              >
                <Icons.github className="h-5 w-5" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/antonio-obradovi%C4%87-708362193/"
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: "default", size: "lg" })}
                title="LinkedIn"
              >
                <Icons.linkedin className="h-5 w-5" />
              </Link>

              <Link
                href="https://medium.com/@antonio_84382"
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: "default", size: "lg" })}
                title="Medium"
              >
                <Icons.medium className="h-5 w-5" />
              </Link>

              <Link
                href="https://dev.to/antonioobra"
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: "default", size: "lg" })}
                title="Dev.to"
              >
                <Icons.devTo className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </MotionDiv>
      </div>
    </main>
  );
}
