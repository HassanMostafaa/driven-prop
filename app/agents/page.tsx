import { Metadata } from "next"
import { Container } from "@/components/ui/container"
import { PageHeader } from "@/components/page-header"
import { AgentsList } from "@/components/agents-list"

export const metadata: Metadata = {
  title: "Our Agents | Driven Prop",
  description: "Meet our experienced team of real estate professionals.",
}

export default function AgentsPage() {
  return (
    <>
      <Container>
        <PageHeader
          heading="Our Agents"
          subheading="Meet Our Expert Team"
          text="Our team of experienced real estate professionals is dedicated to providing exceptional service and expertise to help you achieve your real estate goals."
        />
        <AgentsList />
      </Container>
    </>
  )
}
