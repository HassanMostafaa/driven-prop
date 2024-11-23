import { Building2, MapPin, Bath, BedDouble, Square } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const properties = [
  {
    id: 1,
    title: "Luxury Penthouse",
    location: "Downtown Dubai",
    price: "$2,500,000",
    type: "Sale",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
    beds: 4,
    baths: 5,
    area: 3200,
  },
  {
    id: 2,
    title: "Modern Villa",
    location: "Palm Jumeirah",
    price: "$15,000/month",
    type: "Rent",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    beds: 5,
    baths: 6,
    area: 4500,
  },
  {
    id: 3,
    title: "Waterfront Apartment",
    location: "Dubai Marina",
    price: "$1,800,000",
    type: "Sale",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
    beds: 3,
    baths: 3,
    area: 2100,
  },
];

export function FeaturedProperties() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Featured Properties
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Discover our hand-picked selection of premium properties in Dubai
        </p>
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <Card key={property.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative aspect-[4/3]">
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-full w-full object-cover"
                />
                <span className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
                  {property.type}
                </span>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{property.title}</h3>
                  <p className="mt-1 flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {property.location}
                  </p>
                </div>
                <p className="text-lg font-bold text-primary">{property.price}</p>
              </div>
            </CardContent>
            <CardFooter className="grid grid-cols-3 gap-4 border-t p-6">
              <div className="flex items-center gap-2">
                <BedDouble className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{property.beds} Beds</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{property.baths} Baths</span>
              </div>
              <div className="flex items-center gap-2">
                <Square className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{property.area} sqft</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}