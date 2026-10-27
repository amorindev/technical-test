import Header from "@/components/shadcn-space/blocks/hero-01/header"
import type { NavigationSection } from "@/components/shadcn-space/blocks/hero-01/header"
import Footer from "@/components/shadcn-space/blocks/footer-01/footer"
import { CartProvider } from "@/components/cart-context"
import { AnnouncementBar } from "@/components/announcement-bar"
import BackToTop from "@/components/back-to-top"
import MouseFollower from "@/components/mouse-follower"

const navigationData: NavigationSection[] = [
  {
    title: "Home",
    href: "/",
    isActive: true,
  },
  {
    title: "Shop",
    href: "/shop",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <AnnouncementBar />
      <Header navigationData={navigationData} />
      <main>{children}</main>
      <BackToTop />
      <Footer />
      <MouseFollower/>
    </>
  )
}
