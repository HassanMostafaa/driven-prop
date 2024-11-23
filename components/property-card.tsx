import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Bed, Bath, Square } from "lucide-react"

interface PropertyCardProps {
  property: {
    id: number
    title: string
    location: string
    price: string
    beds: number
    baths: number
    sqft: number
    image: string
  }
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="aspect-[16/9] relative">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{property.title}</h3>
        <p className="text-sm text-muted-foreground">{property.location}</p>
        <p className="text-xl font-bold mt-2">{property.price}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Bed className="h-4 w-4" />
          <span>{property.beds} beds</span>
        </div>
        <div className="flex items-center gap-1">
          <Bath className="h-4 w-4" />
          <span>{property.baths} baths</span>
        </div>
        <div className="flex items-center gap-1">
          <Square className="h-4 w-4" />
          <span>{property.sqft} sqft</span>
        </div>
      </CardFooter>
    </Card>
  )
}
