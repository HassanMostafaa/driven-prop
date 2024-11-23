import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Office Location */}
        <div className="flex gap-4">
          <div className="rounded-lg bg-primary/10 p-2 h-fit">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Office Location</h3>
            <p className="text-sm text-muted-foreground">
              123 Business Avenue
              <br />
              Suite 100
              <br />
              City, State 12345
            </p>
          </div>
        </div>

        {/* Phone Numbers */}
        <div className="flex gap-4">
          <div className="rounded-lg bg-primary/10 p-2 h-fit">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Phone</h3>
            <p className="text-sm text-muted-foreground">
              Main: (555) 123-4567
              <br />
              Fax: (555) 123-4568
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex gap-4">
          <div className="rounded-lg bg-primary/10 p-2 h-fit">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-sm text-muted-foreground">
              General: info@drivenprop.com
              <br />
              Support: support@drivenprop.com
            </p>
          </div>
        </div>

        {/* Business Hours */}
        <div className="flex gap-4">
          <div className="rounded-lg bg-primary/10 p-2 h-fit">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Business Hours</h3>
            <p className="text-sm text-muted-foreground">
              Monday - Friday: 9:00 AM - 6:00 PM
              <br />
              Saturday: 10:00 AM - 4:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="mt-6 aspect-[4/3] relative rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3M8KwNTgnNDguMCJX!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </CardContent>
    </Card>
  )
}
