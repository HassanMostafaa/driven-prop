"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function HeroSection() {
  const [propertyType, setPropertyType] = useState("all");
  const [location, setLocation] = useState("");

  return (
    <section className="relative">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80"
          alt="Dubai Skyline"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>
      <div className="relative container mx-auto px-4 py-32 sm:px-6 lg:px-8 lg:py-48">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Find Your Dream Property in Dubai
          </h1>
          <p className="mt-6 text-xl text-gray-300">
            Discover luxury properties in prime locations across Dubai. Your journey
            to the perfect home starts here.
          </p>
        </div>
        <div className="mt-10 max-w-2xl rounded-lg bg-white/95 backdrop-blur p-4 shadow-lg">
          <div className="flex flex-col gap-4 sm:flex-row">
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Properties</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="penthouse">Penthouse</SelectItem>
                <SelectItem value="townhouse">Townhouse</SelectItem>
              </SelectContent>
            </Select>
            <Input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="flex-1"
            />
            <Button size="lg" className="gap-2">
              <Search className="h-5 w-5" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}