"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Sparkles, Zap, Crown } from "lucide-react"
import { EditableText } from "@/components/cms/editable-text"

const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    price: "$99",
    period: "/month",
    description: "Perfect for small businesses and startups",
    features: [
      "Up to 5 projects",
      "Basic support",
      "Standard templates",
      "Email integration",
      "Basic analytics",
      "Community access",
    ],
    popular: false,
    color: "from-cyan-500 to-blue-500",
    icon: Sparkles,
  },
  {
    id: "professional",
    name: "Professional",
    price: "$299",
    period: "/month",
    description: "Ideal for growing businesses and teams",
    features: [
      "Unlimited projects",
      "Priority support",
      "Custom templates",
      "Advanced integrations",
      "Detailed analytics",
      "Team collaboration",
      "API access",
      "Custom branding",
    ],
    popular: true,
    color: "from-purple-500 to-pink-500",
    icon: Zap,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with specific needs",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom development",
      "On-premise deployment",
      "Advanced security",
      "SLA guarantee",
      "Training & onboarding",
      "24/7 phone support",
    ],
    popular: false,
    color: "from-orange-500 to-red-500",
    icon: Crown,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center glass-panel px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-cyan-400 mr-2" />
            <span className="text-sm font-medium text-cyan-400">Pricing Plans</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold font-sora mb-6">
            <EditableText
              id="pricing-title"
              defaultValue="Choose Your Plan"
              className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            />
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <EditableText
              id="pricing-description"
              defaultValue="Flexible pricing options designed to scale with your business. Start free and upgrade as you grow."
            />
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={plan.id}
              className={`glass-card relative group hover:scale-105 transition-all duration-500 fade-in-up glow-on-scroll ${
                plan.popular ? "ring-2 ring-purple-400/50 shadow-2xl shadow-purple-500/20" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 glow-button`}
                >
                  <plan.icon className="h-8 w-8 text-white" />
                </div>

                <CardTitle className="text-2xl font-sora text-white mb-2">
                  <EditableText id={`${plan.id}-name`} defaultValue={plan.name} />
                </CardTitle>

                <div className="flex items-baseline justify-center mb-4">
                  <span
                    className={`text-4xl font-bold font-sora bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}
                  >
                    <EditableText id={`${plan.id}-price`} defaultValue={plan.price} />
                  </span>
                  <span className="text-gray-400 ml-1">
                    <EditableText id={`${plan.id}-period`} defaultValue={plan.period} />
                  </span>
                </div>

                <p className="text-gray-300">
                  <EditableText id={`${plan.id}-description`} defaultValue={plan.description} />
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <EditableText id={`${plan.id}-feature-${idx}`} defaultValue={feature} />
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.color} hover:scale-105 text-white border-0 glow-button`
                      : "border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 glass-button"
                  } transition-all duration-300`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  <a href="#contact">{plan.id === "enterprise" ? "Contact Sales" : "Get Started"}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 fade-in-up">
          <p className="text-gray-400 mb-4">All plans include a 14-day free trial. No credit card required.</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span>✓ Cancel anytime</span>
            <span>✓ 99.9% uptime SLA</span>
            <span>✓ SOC 2 compliant</span>
            <span>✓ GDPR ready</span>
          </div>
        </div>
      </div>
    </section>
  )
}
