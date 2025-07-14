import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EditableText } from "@/components/cms/editable-text"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />

      {/* Navbar */}
      <Navigation />

      {/* Page content */}
      <main className="relative z-10 pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-3xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                <EditableText id="terms-title" defaultValue="Terms of Service" />
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <div className="space-y-6 text-gray-300">
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    <EditableText id="terms-section-1-title" defaultValue="Acceptance of Terms" />
                  </h2>
                  <p>
                    <EditableText
                      id="terms-section-1-content"
                      defaultValue="By accessing and using VAMPForge services, you accept and agree to be bound by the terms and provisions of this agreement."
                      multiline
                    />
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    <EditableText id="terms-section-2-title" defaultValue="Services" />
                  </h2>
                  <p>
                    <EditableText
                      id="terms-section-2-content"
                      defaultValue="VAMPForge provides software development, web development, and IT consulting services. We reserve the right to modify or discontinue services at any time."
                      multiline
                    />
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    <EditableText id="terms-section-3-title" defaultValue="User Responsibilities" />
                  </h2>
                  <p>
                    <EditableText
                      id="terms-section-3-content"
                      defaultValue="You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account."
                      multiline
                    />
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    <EditableText id="terms-section-4-title" defaultValue="Intellectual Property" />
                  </h2>
                  <p>
                    <EditableText
                      id="terms-section-4-content"
                      defaultValue="All content, features, and functionality of our services are owned by VAMPForge and are protected by copyright, trademark, and other intellectual property laws."
                      multiline
                    />
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    <EditableText id="terms-section-5-title" defaultValue="Limitation of Liability" />
                  </h2>
                  <p>
                    <EditableText
                      id="terms-section-5-content"
                      defaultValue="VAMPForge shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services."
                      multiline
                    />
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    <EditableText id="terms-section-6-title" defaultValue="Contact Information" />
                  </h2>
                  <p>
                    <EditableText
                      id="terms-section-6-content"
                      defaultValue="For questions about these Terms of Service, please contact us at support@vampforge.site"
                      multiline
                    />
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
