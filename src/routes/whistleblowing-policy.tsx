import { createFileRoute } from '@tanstack/react-router'
import { pageHead } from '@/components/site/content'
import { CallToAction } from '@/components/site/site-shell'
import { ShieldCheck, Mail, AlertTriangle, Lock, FileCheck } from 'lucide-react'

export const Route = createFileRoute('/whistleblowing-policy')({
  head: () =>
    pageHead(
      'Whistleblowing Policy',
      'Learn about Confluence Management Consulting’s whistleblowing policy, reporting procedures under the Protected Disclosures Act 2014, and whistleblower safeguards.'
    ),
  component: WhistleblowingPolicy,
})

function WhistleblowingPolicy() {
  return (
    <main>
      <section className="page-intro">
        <div className="site-container">
          <div className="eyebrow">Governance & Compliance</div>
          <h1>Whistleblowing Policy</h1>
          <p>
            Our framework for reporting potential irregularities in confidence, ensuring transparent
            investigations and full protection under the Protected Disclosures Act 2014.
          </p>
        </div>
      </section>

      <section className="section site-container">
        <div className="legal-layout">
          <aside className="legal-sidebar" aria-label="Policy navigation">
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2">On this page</span>
            <a href="#objective" className="legal-sidebar-link">1. Objective & Purpose</a>
            <a href="#whistleblower" className="legal-sidebar-link">2. Eligible Whistleblowers</a>
            <a href="#reportable-offences" className="legal-sidebar-link">3. Reportable Offences</a>
            <a href="#reporting-channels" className="legal-sidebar-link">4. Reporting Procedures</a>
            <a href="#confidentiality" className="legal-sidebar-link">5. Confidentiality & Safeguards</a>
          </aside>

          <div className="legal-body">
            <article id="objective" className="legal-section">
              <h2>1. Objective, purpose & scope of application</h2>
              <h3>1.1 Objective</h3>
              <p>
                Confluence Talent (hereinafter also referred to as &ldquo;we&rdquo; or &ldquo;us&rdquo;) pursues
                the goal of preventing unlawful behaviour in our area of responsibility at best, but in any case
                to comprehensively clarify and remedy it. In doing so, we rely on the trusting assistance of
                whistleblowers, whose protection we want to ensure against this background.
              </p>
              <h3>1.2 Purpose</h3>
              <p>
                This policy sets out the framework conditions for reporting information on possible legal violations
                in our organisation. The policy is intended to ensure that reports of violations can be processed,
                stored, forwarded and archived in accordance with the legal requirements of the Protected Disclosures
                Act 2014 and taking into account the necessary confidentiality.
              </p>
              <p>
                At the same time, the Policy describes the safeguards that exist in the interests of bona fide
                whistleblowers and the consequences that can result from a deliberate false report.
              </p>
            </article>

            <article id="whistleblower" className="legal-section">
              <h2>2. Whistleblower entitlement</h2>
              <p>
                Natural persons who obtain information about violations under our responsibility in connection with
                their professional activities or in the run-up to such activities are entitled and encouraged by us
                to report such information.
              </p>
              <div className="legal-card">
                <h4>Scope of eligible persons</h4>
                <p>
                  This applies in particular to our employees, job applicants, management personnel, contractors, and
                  our business partners across European operations.
                </p>
              </div>
            </article>

            <article id="reportable-offences" className="legal-section">
              <h2>2.1 Reportable offences</h2>
              <p>Offences can be reported if they:</p>
              <ul>
                <li>Are punishable by law,</li>
                <li>
                  Are subject to fines, e.g. violations of occupational health and safety regulations, health
                  protection, or violations of the Minimum Wage Act,
                </li>
                <li>
                  Violate federal or state legislation or directly applicable legal acts of the European Union and
                  within the meaning of Section 2 para. 1 no. 3 of the Whistleblower Protection Act, e.g. public
                  procurement, environmental law, data protection,
                </li>
                <li>Violate corporate guidelines or rules of conduct.</li>
              </ul>
              <div className="legal-card flex items-start gap-3">
                <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="text-foreground">Exclusion notice</h4>
                  <p>
                    Please note that the whistleblower system is not intended for submitting general complaints,
                    commercial enquiries, or warranty claims.
                  </p>
                </div>
              </div>
            </article>

            <article id="reporting-channels" className="legal-section">
              <h2>2.2 Reporting procedure</h2>
              <h3>2.2.1 Internal or external message</h3>
              <p>
                Whistleblowers are free to report via the reporting channels specified and provided by us or to an
                external body, i.e. a competent authority.
              </p>
              <div className="legal-card flex items-start gap-3">
                <Mail className="text-primary shrink-0 mt-0.5" size={20} />
                <div>
                  <h4>External reporting channel</h4>
                  <p>
                    Information on external reporting procedures can be submitted via the designated reporting address:
                  </p>
                  <p className="mt-2">
                    <a
                      href="mailto:pdcorrespondence@defence.ie"
                      className="font-medium text-foreground underline hover:text-primary transition-colors"
                    >
                      pdcorrespondence@defence.ie
                    </a>
                  </p>
                </div>
              </div>
              <h3>2.2.2 Type of message</h3>
              <p>
                When reporting electronically or in writing, please remember to include all information necessary for
                correct classification. It is particularly important to state that the report relates to processes in
                our organisation.
              </p>
            </article>

            <article id="confidentiality" className="legal-section">
              <h2>3. Confidentiality & safeguards</h2>
              <div className="legal-card flex items-start gap-3 mb-6">
                <Lock className="text-primary shrink-0 mt-0.5" size={20} />
                <div>
                  <h4>Guaranteed confidentiality</h4>
                  <p>
                    All reports are treated with strict confidentiality. Identity disclosures are strictly limited to
                    authorized investigative personnel unless disclosure is mandatory by law.
                  </p>
                </div>
              </div>
              <p>
                The company guarantees protection from any form of retaliation, discrimination, disciplinary penalty,
                or contractual disadvantage for individuals who raise concerns in good faith.
              </p>
              <p>
                Conversely, deliberately false or malicious allegations will not be afforded protection and may result
                in appropriate disciplinary action or legal proceedings.
              </p>
            </article>
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  )
}
