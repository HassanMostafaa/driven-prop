import { Metadata } from "next"
import { Container } from "@/components/ui/container"
import { PageHeader } from "@/components/page-header"
import { AboutContent } from "@/components/about-content"

export const metadata: Metadata = {
  title: "About Us | Driven Prop",
  description: "Learn about our mission, values, and commitment to excellence in real estate.",
}

export default function AboutPage() {
  return (
    <>
      <Container>
        <PageHeader
          heading="About Driven Prop"
          subheading="Your Trusted Real Estate Partner"
          text="Since our founding, we've been committed to providing exceptional real estate services and building lasting relationships with our clients."
        />
        <AboutContent />
      </Container>
    </>
  )
}
