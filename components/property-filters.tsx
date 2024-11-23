import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function PropertyFilters() {
  return (
    <div className="grid gap-4 p-4 md:grid-cols-4">
      <div className="space-y-2">
        <Label htmlFor="price">Price Range</Label>
        <Select>
          <SelectTrigger id="price">
            <SelectValue placeholder="Any Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-250000">$0 - $250,000</SelectItem>
            <SelectItem value="250000-500000">$250,000 - $500,000</SelectItem>
            <SelectItem value="500000-750000">$500,000 - $750,000</SelectItem>
            <SelectItem value="750000-1000000">$750,000 - $1,000,000</SelectItem>
            <SelectItem value="1000000+">$1,000,000+</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="beds">Bedrooms</Label>
        <Select>
          <SelectTrigger id="beds">
            <SelectValue placeholder="Any" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1+</SelectItem>
            <SelectItem value="2">2+</SelectItem>
            <SelectItem value="3">3+</SelectItem>
            <SelectItem value="4">4+</SelectItem>
            <SelectItem value="5">5+</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="property-type">Property Type</Label>
        <Select>
          <SelectTrigger id="property-type">
            <SelectValue placeholder="Any Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="house">House</SelectItem>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="condo">Condo</SelectItem>
            <SelectItem value="townhouse">Townhouse</SelectItem>
            <SelectItem value="land">Land</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input id="location" placeholder="Enter location" />
      </div>
      <div className="flex items-end md:col-span-4">
        <Button className="w-full md:w-auto">Search Properties</Button>
      </div>
    </div>
  )
}
