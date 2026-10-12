import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Clock, Globe2, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { pageHead } from '@/components/site/content'
import { EnquiryDialog } from '@/components/site/enquiry-dialog'

export const Route = createFileRoute('/contact')({
  head: () =>
    pageHead(
      'Contact Confluence',
      'Discuss your mission-critical project with Confluence. Connect with qualified mechanical and electrical teams for engineering, construction, data centres and renewables across Europe.'
    ),
  component: Contact,
})

function Contact() {
  const [enquiryOpen, setEnquiryOpen] = useState(false)

  return (
    <main>
      <section className="page-intro">
        <div className="site-container">
          <div className="eyebrow">Let’s talk</div>
          <h1>
            Great projects start
            <br />
            with a conversation.
          </h1>
          <p>
            Tell us what you’re building. We’ll help connect your project with
            the right expertise.
          </p>
        </div>
      </section>

      <section className="section site-container">
        <div className="contact-layout">
          <div>
            <h2>What’s your next challenge?</h2>
            <p>
              Whether you’re planning a new data centre, scaling your M&E team
              or delivering a renewable energy project, let’s discuss a solution
              built around your needs.
            </p>
            <p>
              Share your project details, location and phone number through our
              enquiry form, and we'll connect directly with your team.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                variant="brand"
                size="lg"
                onClick={() => setEnquiryOpen(true)}
                className="gap-2 cursor-pointer"
              >
                <MessageSquare size={16} />
                <span>Open project enquiry form</span>
                <ArrowUpRight size={16} />
              </Button>
            </div>
          </div>

          <div>
            <div className="contact-detail">
              <Globe2 size={25} className="mb-4" />
              <h3>European reach. Local understanding.</h3>
              <p>
                Supporting engineering, construction, data centre and renewable
                energy projects across Europe.
              </p>
            </div>

            <div className="contact-detail">
              <Clock size={25} className="mb-4" />
              <h3>Swift project response</h3>
              <p>
                We review all enquiries promptly and aim to connect with you within 24 hours with specialist staffing options.
              </p>
            </div>

            <div className="contact-detail">
              <h3>Flexible or fully managed</h3>
              <p>
                Discuss a ProjectFlow Flex Plan or All-in Package tailored to your
                project requirements.
              </p>
            </div>

            <div className="contact-detail">
              <h3>Connect with Confluence</h3>
              <a
                className="text-link"
                href="https://www.linkedin.com/company/confluence123"
                target="_blank"
                rel="noreferrer"
              >
                Find us on LinkedIn <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Project Enquiry Dialog */}
      <EnquiryDialog open={enquiryOpen} onOpenChange={setEnquiryOpen} />
    </main>
  )
}
