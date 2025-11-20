import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Star, Zap, Shield } from "lucide-react"
import Link from "next/link"

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium border border-white/20">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span>Hampstead Plus</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Save 15% on every job.
            <br />
            Forever.
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-light">
            Join Hampstead Plus today and unlock exclusive member pricing, priority booking slots, and dedicated support.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Benefits List */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Why become a member?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Instant 15% Discount</h3>
                    <p className="text-muted-foreground">Get the Member Price on all services, from plumbing to electrical work. The savings on a single boiler service cover your annual fee.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Priority Booking</h3>
                    <p className="text-muted-foreground">Skip the queue. Members get first access to morning slots and emergency call-outs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Extended Guarantee</h3>
                    <p className="text-muted-foreground">We double our workmanship guarantee from 12 months to 24 months for all active members.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl -z-10" />
              <Card className="border-primary/20 shadow-2xl">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl">Annual Membership</CardTitle>
                  <CardDescription>Simple, transparent pricing</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold">£89</span>
                    <span className="text-muted-foreground">/year</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Less than £7.50 per month</p>
                  
                  <div className="bg-muted/50 rounded-lg p-4 text-left space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>Unlimited 15% discounts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>Priority emergency response</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>Cancel anytime</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/signup?plan=annual" className="w-full">
                    <Button size="lg" className="w-full text-lg h-12">
                      Join Hampstead Plus
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
