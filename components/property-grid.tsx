import { PropertyCard } from "@/components/property-card"
import { PropertyFilters } from "@/components/property-filters"

const properties = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    location: "123 City Center, Downtown",
    price: "$450,000",
    beds: 2,
    baths: 2,
    sqft: 1200,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Luxury Villa with Pool",
    location: "456 Sunset Boulevard",
    price: "$1,200,000",
    beds: 4,
    baths: 3,
    sqft: 3500,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Penthouse Suite",
    location: "789 Ocean View Drive",
    price: "$850,000",
    beds: 3,
    baths: 2,
    sqft: 2200,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Contemporary Beach House",
    location: "321 Coastal Road",
    price: "$975,000",
    beds: 3,
    baths: 2,
    sqft: 2800,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Urban Loft Space",
    location: "567 Downtown Street",
    price: "$525,000",
    beds: 1,
    baths: 1,
    sqft: 1100,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    title: "Garden Townhouse",
    location: "890 Park Avenue",
    price: "$695,000",
    beds: 3,
    baths: 2,
    sqft: 1800,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
  }
  // Add more properties as needed
]

export default function PropertyGrid() {
  return (
    <div className="space-y-12 mb-16">
      <PropertyFilters />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  )
}
