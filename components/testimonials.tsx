import { Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    content: "Working with Driven Prop was an absolute pleasure. They found us our dream home in record time.",
    author: "Sarah Johnson",
    role: "Homeowner",
    rating: 5,
  },
  {
    id: 2,
    content: "The team's knowledge of Dubai's real estate market is unmatched. Highly professional service.",
    author: "Mohammed Al-Rashid",
    role: "Property Investor",
    rating: 5,
  },
  {
    id: 3,
    content: "Exceptional service from start to finish. They made the buying process smooth and stress-free.",
    author: "David Chen",
    role: "First-time Buyer",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="bg-muted/50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-background">
              <CardHeader className="pb-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="space-y-4">
                  <p className="text-muted-foreground">{testimonial.content}</p>
                  <footer>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </footer>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}