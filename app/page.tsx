/**
 * v0 by Vercel.
 * @see https://v0.dev/t/p5PGEun2BZr
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">NAVA Architecture</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Dịch Vụ
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Dự Án
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Về Chúng Tôi
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Liên Hệ
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    NAVA Architecture
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Transforming your vision into reality with exceptional
                    construction services.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Services
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Commpay Construction offers a wide range of construction
                  services to meet your needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Commercial Construction</h3>
                <p className="text-sm text-muted-foreground">
                  From office buildings to retail spaces, we handle all your
                  commercial construction needs.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Residential Construction</h3>
                <p className="text-sm text-muted-foreground">
                  Whether it's a new home or a renovation, we bring your
                  residential vision to life.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Infrastructure Projects</h3>
                <p className="text-sm text-muted-foreground">
                  From roads to bridges, we have the expertise to deliver
                  large-scale infrastructure projects.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Recent Projects
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take a look at some of our recent construction projects.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-4">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Project 1"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Acme Office Building</h3>
                  <p className="text-sm text-muted-foreground">
                    A modern, energy-efficient office building for Acme Inc.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Project 2"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Riverfront Apartments</h3>
                  <p className="text-sm text-muted-foreground">
                    Luxury riverside apartments with stunning views.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Project 3"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Highway Overpass</h3>
                  <p className="text-sm text-muted-foreground">
                    A critical infrastructure project to improve traffic flow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What Our Clients Say
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied clients about their experience with
                  Commpay Construction.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-4">
                <Card>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-lg font-bold">
                        "Exceptional work and attention to detail."
                      </p>
                      <p className="text-muted-foreground">
                        "Commpay Construction delivered our project on time
                        and\n within budget. Their team was professional and\n
                        responsive throughout the entire process."
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium leading-none">
                          John Doe
                        </p>
                        <p className="text-sm text-muted-foreground">
                          CEO, Acme Inc.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4">
                <Card>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-lg font-bold">
                        "Highly recommended construction company."
                      </p>
                      <p className="text-muted-foreground">
                        "Commpay Construction completed our project on
                        schedule\n and within budget. Their team was
                        knowledgeable,\n professional, and a pleasure to work
                        with."
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium leading-none">
                          Jane Smith
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Project Manager, Cityscape Developers
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Image Gallery
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take a look at some of our recent construction projects.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-4">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Project 1"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </div>
              <div className="grid gap-4">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Project 2"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </div>
              <div className="grid gap-4">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Project 3"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Contact Us
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch with us for your construction needs.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <div className="grid gap-4">
                  <div className="grid gap-1">
                    <h3 className="text-lg font-bold">Commpay Construction</h3>
                    <p className="text-muted-foreground">
                      123 Main St, Anytown USA 12345
                    </p>
                    <p className="text-muted-foreground">
                      Phone: (123) 456-7890
                    </p>
                    <p className="text-muted-foreground">
                      Email: info@commpay.com
                    </p>
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="grid gap-1">
                    <h3 className="text-lg font-bold">About Us</h3>
                    <p className="text-muted-foreground">
                      Commpay Construction is a leading construction company
                      with over 20 years of experience in the industry. We
                      specialize in commercial, residential, and infrastructure
                      projects, delivering exceptional results for our clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            <FacebookIcon className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            <TwitterIcon className="h-5 w-5" />
          </Link>
        </div>
      </footer>
    </div>
  );
}

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
