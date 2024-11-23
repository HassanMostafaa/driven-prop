import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"

const agents = [
  {
    name: "Sarah Johnson",
    title: "Senior Real Estate Agent",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=800",
    email: "sarah.johnson@drivenprop.com",
    phone: "(555) 123-4567",
    specialties: ["Luxury Homes", "Residential", "Investment Properties"],
  },
  {
    name: "Michael Chen",
    title: "Property Investment Specialist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800&h=800",
    email: "michael.chen@drivenprop.com",
    phone: "(555) 234-5678",
    specialties: ["Commercial", "Investment Properties", "Development"],
  },
  {
    name: "Emily Rodriguez",
    title: "Residential Property Expert",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800&h=800",
    email: "emily.rodriguez@drivenprop.com",
    phone: "(555) 345-6789",
    specialties: ["First-time Buyers", "Residential", "Condos"],
  },
  {
    name: "David Thompson",
    title: "Luxury Property Specialist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&h=800",
    email: "david.thompson@drivenprop.com",
    phone: "(555) 456-7890",
    specialties: ["Luxury Properties", "Waterfront Homes", "Penthouses"],
  },
  {
    name: "Lisa Wang",
    title: "Commercial Real Estate Advisor",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=800&h=800",
    email: "lisa.wang@drivenprop.com",
    phone: "(555) 567-8901",
    specialties: ["Commercial", "Retail Spaces", "Office Buildings"],
  },
  {
    name: "James Wilson",
    title: "Property Development Manager",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800&h=800",
    email: "james.wilson@drivenprop.com",
    phone: "(555) 678-9012",
    specialties: ["Development Projects", "Land Acquisition", "Urban Planning"],
  }
]

export function AgentsList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {agents.map((agent, index) => (
        <Card key={index} className="overflow-hidden">
          <CardHeader className="p-0">
            <div className="aspect-square relative">
              <Image
                src={agent.image}
                alt={agent.name}
                fill
                className="object-cover"
              />
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold">{agent.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">{agent.title}</p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href={`mailto:${agent.email}`} className="text-sm hover:underline">
                  {agent.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href={`tel:${agent.phone}`} className="text-sm hover:underline">
                  {agent.phone}
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {agent.specialties.map((specialty, i) => (
                <span
                  key={i}
                  className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                >
                  {specialty}
                </span>
              ))}
            </div>

            <Button className="w-full mt-4">Contact Agent</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}