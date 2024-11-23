import { Metadata } from "next"
import PropertyGrid from "@/components/property-grid"
import { Container } from "@/components/ui/container"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Properties | Driven Prop",
  description: "Browse our extensive collection of premium properties.",
}

export default function PropertiesPage() {
  return (
    <>
      <Container>
        <PageHeader
          heading="Our Properties"
          subheading="Discover Your Dream Property"
          text="Browse through our carefully curated selection of premium properties. Each listing has been handpicked to meet our high standards of quality and value."
        />
        <PropertyGrid />
      </Container>
    </>
  )
}
