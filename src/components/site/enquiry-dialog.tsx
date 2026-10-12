import * as React from 'react'
import { ArrowUpRight, CheckCircle2, Loader2, Mail, Send } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

interface EnquiryDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const RECIPIENT_EMAIL = 'andrew@confluencemanagementconsulting.com'

export function EnquiryDialog({ open, onOpenChange }: EnquiryDialogProps) {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    sector: 'Data centres',
    message: '',
  })

  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = React.useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Project Enquiry: ${formData.name} - Confluence`,
          _template: 'table',
          _captcha: 'false',
          'Full Name': formData.name,
          'Work Email': formData.email,
          'Phone (with country code)': formData.phone,
          'Project Location': formData.location || 'Not specified',
          'Industry / Sector': formData.sector,
          'Project Details & Scope': formData.message,
        }),
      })

      const data = await response.json()

      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        setStatus('success')
      } else {
        throw new Error(data.message || 'Unable to submit enquiry at this time.')
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong.'
      setStatus('error')
      setErrorMessage(message)
    }
  }

  const handleReset = () => {
    setStatus('idle')
    setErrorMessage('')
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      sector: 'Data centres',
      message: '',
    })
  }

  const mailtoFallback = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(
    `Project Enquiry from ${formData.name || 'Client'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nLocation: ${formData.location}\nSector: ${formData.sector}\n\nProject Details:\n${formData.message}`
  )}`

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto sm:p-8 bg-background border border-border">
        {status === 'success' ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-primary/20 text-foreground flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-foreground" />
            </div>
            <DialogTitle className="text-2xl font-display font-medium">
              Enquiry Submitted
            </DialogTitle>
            <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-medium text-foreground">{formData.name}</span>. Your project enquiry has been submitted successfully. Our specialist team will review your requirements and get back to you promptly.
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                Close
              </Button>
              <Button variant="brand" onClick={handleReset}>
                Send another enquiry
              </Button>
            </div>
          </div>
        ) : (
          <>
            <DialogHeader className="text-left space-y-2">
              <div className="eyebrow">Project Enquiry</div>
              <DialogTitle className="text-2xl sm:text-3xl font-display font-medium">
                Let’s discuss your project
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground leading-relaxed">
                Fill out the details below and our team will connect with you to discuss your project requirements.
              </DialogDescription>
            </DialogHeader>

            {status === 'error' && (
              <div className="p-3.5 rounded-sm bg-destructive/10 border border-destructive/20 text-destructive text-sm space-y-2">
                <p>
                  <strong>Delivery notice:</strong> {errorMessage || 'Could not reach the delivery service.'}
                </p>
                <p className="text-xs">
                  You can send your details directly via email instead:
                </p>
                <Button variant="outline" size="sm" asChild className="gap-2">
                  <a href={mailtoFallback}>
                    <Mail size={14} /> Open in Email Client
                  </a>
                </Button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="enquiry-name" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="enquiry-name"
                    name="name"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="enquiry-email" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Work Email <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="enquiry-email"
                    name="email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="enquiry-phone" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Phone (with country code) <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="enquiry-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+44 / +353 / +49..."
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="enquiry-location" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Project Location / Country
                  </label>
                  <Input
                    id="enquiry-location"
                    name="location"
                    placeholder="e.g. Frankfurt, Dublin, etc."
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="enquiry-sector" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Sector / Project Type
                </label>
                <select
                  id="enquiry-sector"
                  name="sector"
                  value={formData.sector}
                  onChange={handleChange}
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <option value="Data centres">Mission-Critical Data Centres</option>
                  <option value="Mechanical & electrical">Mechanical & Electrical Site Services</option>
                  <option value="Cleantech & renewables">Cleantech & Renewable Energy</option>
                  <option value="General inquiry">General Consultancy Inquiry</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="enquiry-message" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Project Details & Scope <span className="text-destructive">*</span>
                </label>
                <Textarea
                  id="enquiry-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Outline your project scope, timeline, and specialist team requirements..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div className="pt-2 flex justify-end">
                <Button
                  type="submit"
                  variant="brand"
                  size="lg"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto gap-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending enquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit project enquiry</span>
                      <Send size={15} />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
