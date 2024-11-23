import { Metadata } from "next"
import { Container } from "@/components/ui/container"
import { PageHeader } from "@/components/page-header"
import { ServicesList } from "@/components/services-list"

export const metadata: Metadata = {
  title: "Services | Driven Prop",
  description: "Comprehensive real estate services for buyers, sellers, and investors.",
}

export default function ServicesPage() {
  return (
    <>
      <Container>
        <PageHeader
          heading="Our Services"
          subheading="Professional Real Estate Solutions"
          text="We offer a comprehensive range of real estate services tailored to meet your specific needs. Whether you're buying, selling, or investing, our team of experts is here to help."
        />
        <ServicesList />
      </Container>
    </>
  )
}
