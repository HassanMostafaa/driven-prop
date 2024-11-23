import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Find Your Dream Property?
            </h2>
            <p className="mt-4 text-lg opacity-90">
              Connect with our expert agents today and let us help you discover
              the perfect property in Dubai.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:mt-0 lg:flex-shrink-0">
            <Button
              variant="secondary"
              size="lg"
              className="gap-2"
            >
              <Building2 className="h-5 w-5" />
              Browse Properties
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Contact an Agent
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}