import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Home, Key, LineChart, Building2, ClipboardCheck, Users2 } from "lucide-react"

const services = [
  {
    title: "Property Sales",
    description: "Expert guidance through the entire home selling process, from pricing strategy to closing.",
    icon: Home,
    features: [
      "Comprehensive market analysis and pricing strategy",
      "Professional property photography and staging advice",
      "Marketing across multiple platforms",
      "Negotiation and offer management",
      "Transaction coordination through closing"
    ]
  },
  {
    title: "Property Purchase",
    description: "Find your dream home with our comprehensive property search and negotiation services.",
    icon: Key,
    features: [
      "Personalized property search based on your criteria",
      "Private property viewings and virtual tours",
      "Expert price analysis and offer strategy",
      "Due diligence assistance",
      "Closing support and coordination"
    ]
  },
  {
    title: "Investment Advisory",
    description: "Strategic advice on real estate investments to maximize your returns.",
    icon: LineChart,
    features: [
      "Investment property analysis",
      "ROI calculations and projections",
      "Market trend analysis",
      "Portfolio diversification strategy",
      "Risk assessment and management"
    ]
  },
  {
    title: "Property Management",
    description: "Complete property management services for landlords and property investors.",
    icon: Building2,
    features: [
      "Tenant screening and placement",
      "Rent collection and financial reporting",
      "Property maintenance and repairs",
      "Regular property inspections",
      "Legal compliance management"
    ]
  },
  {
    title: "Property Valuation",
    description: "Accurate property valuations based on market analysis and local expertise.",
    icon: ClipboardCheck,
    features: [
      "Comparative market analysis",
      "Property condition assessment",
      "Location and amenity evaluation",
      "Future value projections",
      "Investment potential analysis"
    ]
  },
  {
    title: "Consultation Services",
    description: "Professional consultation on all aspects of real estate transactions.",
    icon: Users2,
    features: [
      "First-time homebuyer guidance",
      "Investment strategy planning",
      "Property development consultation",
      "Market trend analysis",
      "Real estate portfolio review"
    ]
  },
]

export function ServicesList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <Card key={index} className="transition-all hover:shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-primary/10 p-2">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
