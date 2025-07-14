import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EditableText } from "@/components/cms/editable-text"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
      <Navigation />

      <div className="relative z-10 pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-3xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                <EditableText id="privacy-title" defaultValue="Privacy Policy" />
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <div className="space-y-6 text-gray-300">
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    <EditableText id="privacy-section-1-title" defaultValue="Information We Collect" />
                  </h2>
                  <p>
                    <EditableText
                      id="privacy-section-1-content"
                      defaultValue="We collect information you provide directly to us, such as when you create an account, fill out a form, or contact us for support."
                      multiline
                    />
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    <EditableText id="privacy-section-2-title" defaultValue="How We Use Your Information" />
                  </h2>
                  <p>
                    <EditableText
                      id="privacy-section-2-content"
                      defaultValue="We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you."
                      multiline
                    />
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    <EditableText id="privacy-section-3-title" defaultValue="Information Sharing" />
                  </h2>
                  <p>
                    <EditableText
                      id="privacy-section-3-content"
                      defaultValue="We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy."
                      multiline
                    />
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    <EditableText id="privacy-section-4-title" defaultValue="Data Security" />
                  </h2>
                  <p>
                    <EditableText
                      id="privacy-section-4-content"
                      defaultValue="We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
                      multiline
                    />
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    <EditableText id="privacy-section-5-title" defaultValue="Contact Us" />
                  </h2>
                  <p>
                    <EditableText
                      id="privacy-section-5-content"
                      defaultValue="If you have any questions about this Privacy Policy, please contact us at support@vampforge.site"
                      multiline
                    />
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
