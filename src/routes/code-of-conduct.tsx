import { createFileRoute } from '@tanstack/react-router'
import { pageHead } from '@/components/site/content'
import { CallToAction } from '@/components/site/site-shell'
import { ShieldCheck, HeartHandshake, Scale, Award, FileText, CheckCircle2 } from 'lucide-react'

export const Route = createFileRoute('/code-of-conduct')({
  head: () =>
    pageHead(
      'Code of Conduct & Ethics Policy',
      'The Confluence Management Consulting Code of Conduct and Ethics Policy defines our operational principles, workplace respect, human rights commitments, and anti-bribery standards.'
    ),
  component: CodeOfConduct,
})

function CodeOfConduct() {
  return (
    <main>
      <section className="page-intro">
        <div className="site-container">
          <div className="eyebrow">Governance & Ethics</div>
          <h1>Code of Conduct &amp; Ethics Policy</h1>
          <p>
            The values, principles, and professional conduct standards governing every engagement, partnership, and
            project delivery across Confluence Management Consulting.
          </p>
        </div>
      </section>

      <section className="section site-container">
        <div className="legal-layout">
          <aside className="legal-sidebar" aria-label="Table of contents">
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2">Sections</span>
            <a href="#code-of-conduct" className="legal-sidebar-link">1. Code of Conduct</a>
            <a href="#ethics" className="legal-sidebar-link">2. Ethics & Responsibility</a>
            <a href="#human-rights" className="legal-sidebar-link">3. Human Rights</a>
            <a href="#anti-bribery" className="legal-sidebar-link">4. Anti-Bribery & Corruption</a>
            <a href="#implementation" className="legal-sidebar-link">5. Implementation & Enforcement</a>
            <a href="#conclusion" className="legal-sidebar-link">6. Conclusion</a>
          </aside>

          <div className="legal-body">
            <article id="code-of-conduct" className="legal-section">
              <h2>1. Code of Conduct</h2>

              <h3>1.1 Professional Behavior</h3>
              <ul>
                <li>
                  <strong>Integrity:</strong> All employees must conduct themselves with integrity, honesty, and
                  fairness in all business dealings and interactions.
                </li>
                <li>
                  <strong>Compliance:</strong> Adherence to all applicable laws, regulations, and internal policies is
                  mandatory.
                </li>
                <li>
                  <strong>Confidentiality:</strong> Employees must protect confidential information related to the
                  Company, its clients, and candidates.
                </li>
              </ul>

              <h3>1.2 Respect in the Workplace</h3>
              <ul>
                <li>
                  <strong>Non-Discrimination:</strong> The Company is committed to providing a work environment free of
                  discrimination and harassment. Discrimination based on race, color, religion, gender, age, sexual
                  orientation, disability, or any other protected characteristic is prohibited.
                </li>
                <li>
                  <strong>Harassment:</strong> Any form of harassment, including sexual harassment, bullying, or any
                  unwelcome behavior that creates a hostile work environment, will not be tolerated.
                </li>
                <li>
                  <strong>Dignity and Respect:</strong> All employees are expected to treat each other, as well as
                  clients and candidates, with dignity and respect.
                </li>
              </ul>
            </article>

            <article id="ethics" className="legal-section">
              <h2>2. Ethics</h2>

              <h3>2.1 Ethical Conduct</h3>
              <ul>
                <li>
                  <strong>Transparency:</strong> All business activities should be conducted transparently, honestly, and
                  ethically.
                </li>
                <li>
                  <strong>Conflict of Interest:</strong> Employees must avoid situations where personal interests
                  conflict, or appear to conflict, with the interests of the Company.
                </li>
                <li>
                  <strong>Fair Competition:</strong> Employees must engage in fair competition and not engage in
                  anti-competitive practices.
                </li>
              </ul>

              <h3>2.2 Social Responsibility</h3>
              <ul>
                <li>
                  <strong>Sustainability:</strong> The Company is committed to sustainable business practices and
                  minimizing environmental impact across project management and operations.
                </li>
                <li>
                  <strong>Community Engagement:</strong> The Company encourages involvement in community activities and
                  supports charitable organizations.
                </li>
              </ul>
            </article>

            <article id="human-rights" className="legal-section">
              <h2>3. Human Rights</h2>

              <h3>3.1 Commitment to Human Rights</h3>
              <ul>
                <li>
                  <strong>Respect for Human Rights:</strong> The Company is committed to respecting and promoting human
                  rights as defined by the European Convention on Human Rights and the Universal Declaration of Human
                  Rights.
                </li>
                <li>
                  <strong>Non-Exploitation:</strong> The Company opposes all forms of forced labor, child labor, and
                  human trafficking.
                </li>
                <li>
                  <strong>Fair Working Conditions:</strong> The Company ensures fair wages, reasonable working hours,
                  and safe working conditions for all employees.
                </li>
              </ul>

              <h3>3.2 Equal Opportunities</h3>
              <ul>
                <li>
                  <strong>Equality and Diversity:</strong> The Company promotes equality and diversity in its workforce
                  and provides equal opportunities for all employees.
                </li>
                <li>
                  <strong>Inclusion:</strong> The Company is committed to creating an inclusive work environment where all
                  employees feel valued and respected.
                </li>
              </ul>
            </article>

            <article id="anti-bribery" className="legal-section">
              <h2>4. Anti-Bribery &amp; Corruption</h2>

              <h3>4.1 Zero Tolerance Policy</h3>
              <ul>
                <li>
                  <strong>Prohibition of Bribery:</strong> The Company prohibits any form of bribery, whether direct or
                  indirect, and in both the public and private sectors.
                </li>
                <li>
                  <strong>Facilitation Payments:</strong> The Company does not allow facilitation payments, which are
                  small unofficial payments made to secure or expedite a routine government action.
                </li>
              </ul>

              <h3>4.2 Gifts and Hospitality</h3>
              <ul>
                <li>
                  <strong>Acceptable Gifts:</strong> Employees may accept or offer gifts and hospitality only if they are
                  reasonable, proportionate, and not intended to influence business decisions.
                </li>
                <li>
                  <strong>Disclosure:</strong> All gifts and hospitality must be declared and recorded in accordance with
                  company policy.
                </li>
              </ul>

              <h3>4.3 Reporting and Compliance</h3>
              <ul>
                <li>
                  <strong>Reporting:</strong> Employees must report any suspected or actual bribery or corruption
                  incidents immediately to their supervisor or the designated compliance officer.
                </li>
                <li>
                  <strong>Compliance Monitoring:</strong> The Company will regularly monitor compliance with this Policy
                  and conduct audits where necessary.
                </li>
              </ul>
            </article>

            <article id="implementation" className="legal-section">
              <h2>5. Implementation &amp; Enforcement</h2>

              <h3>5.1 Communication and Training</h3>
              <ul>
                <li>
                  <strong>Policy Awareness:</strong> This Policy will be communicated to all employees, contractors, and
                  associates.
                </li>
                <li>
                  <strong>Training:</strong> Regular training will be provided to ensure understanding and compliance
                  with this Policy.
                </li>
              </ul>

              <h3>5.2 Disciplinary Actions</h3>
              <ul>
                <li>
                  <strong>Non-Compliance:</strong> Any breach of this Policy may result in disciplinary action, up to and
                  including termination of employment.
                </li>
                <li>
                  <strong>Whistleblower Protection:</strong> The Company ensures protection for employees who report
                  violations of this Policy in good faith.
                </li>
              </ul>

              <h3>5.3 Review and Updates</h3>
              <ul>
                <li>
                  <strong>Regular Review:</strong> This Policy will be reviewed annually to ensure its effectiveness and
                  compliance with current legislation.
                </li>
                <li>
                  <strong>Updates:</strong> The Policy will be updated as necessary to reflect any changes in laws or
                  Company practices.
                </li>
              </ul>
            </article>

            <article id="conclusion" className="legal-section">
              <h2>6. Conclusion</h2>
              <p>
                This Code of Conduct and Ethics Policy sets the standards for behavior and practices at Confluence.
              </p>
              <p>
                All employees are expected to adhere to these principles to maintain the integrity, reputation, and
                success of the Company. Compliance with this Policy is essential to our commitment to ethical conduct,
                respect for human rights, and adherence to anti-bribery regulations.
              </p>
              <div className="legal-card flex items-start gap-3 mt-6">
                <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                <div>
                  <h4>Committed to excellence across Europe</h4>
                  <p>
                    For inquiries or compliance guidance regarding this policy, contact our management team directly or
                    refer to our confidential Whistleblowing Policy.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  )
}
