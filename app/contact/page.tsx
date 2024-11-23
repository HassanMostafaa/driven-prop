import { Metadata } from "next"
import { Container } from "@/components/ui/container"
import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

export const metadata: Metadata = {
  title: "Contact Us | Driven Prop",
  description: "Get in touch with our team of real estate professionals.",
}

export default function ContactPage() {
  return (
    <>
      <Container>
        <PageHeader
          heading="Contact Us"
          subheading="Get in Touch"
          text="Have a question or need assistance? Our team is here to help. Reach out to us using the form below or contact us directly."
        />
        <div className="grid gap-8 md:grid-cols-2">
          <ContactForm />
          <ContactInfo />
        </div>
      </Container>
    </>
  )
}
