import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Target, Heart } from "lucide-react"

const values = [
  {
    title: "Excellence",
    description: "We strive for excellence in every aspect of our service.",
    icon: Award,
  },
  {
    title: "Client-Focused",
    description: "Our clients' success and satisfaction are our top priorities.",
    icon: Users,
  },
  {
    title: "Integrity",
    description: "We conduct business with the highest level of integrity and transparency.",
    icon: Target,
  },
  {
    title: "Community",
    description: "We're committed to giving back to the communities we serve.",
    icon: Heart,
  },
]

export function AboutContent() {
  return (
    <div className="space-y-12">
      {/* Company Story */}
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div className="relative aspect-[4/3]">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="Driven Prop Office"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-muted-foreground">
            Founded with a vision to revolutionize the real estate industry, Driven Prop has grown
            to become a leading force in the market. Our journey began with a simple belief: that
            buying, selling, or investing in real estate should be an exceptional experience.
          </p>
          <p className="text-muted-foreground">
            Today, we are proud to have helped thousands of clients achieve their real estate goals.
            Our team of experienced professionals continues to uphold our founding principles while
            embracing innovation and technology to better serve our clients.
          </p>
        </div>
      </div>

      {/* Company Values */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Our Values</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="rounded-lg bg-primary/10 p-2 w-fit mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Statistics */}
      <div className="grid gap-6 md:grid-cols-4 py-8 bg-primary/5 rounded-lg">
        {[
          { label: "Years of Experience", value: "15+" },
          { label: "Properties Sold", value: "1000+" },
          { label: "Happy Clients", value: "5000+" },
          { label: "Team Members", value: "50+" },
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
