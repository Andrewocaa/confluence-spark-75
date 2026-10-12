import dataCentre from '@/assets/data-centre-interior.jpg'
import mechanical from '@/assets/mechanical-electrical.jpg'
import renewables from '@/assets/renewable-energy.jpg'
export const services = [
  { number: '01', title: 'Mission-critical projects', description: 'Specialist teams for complex data centre projects. The right expertise, exactly when you need it.', image: dataCentre, alt: 'Server racks and electrical distribution in a modern data centre' },
  { number: '02', title: 'Mechanical & electrical', description: 'Qualified M&E professionals who integrate into your project and keep delivery moving forward.', image: mechanical, alt: 'Mechanical ducts and electrical cable trays in an industrial building' },
  { number: '03', title: 'Cleantech & renewables', description: 'Connecting ambitious energy projects with the technical talent to build a more sustainable future.', image: renewables, alt: 'Wind turbines in the European countryside' },
]
export function pageHead(title: string, description: string) {
  return { meta: [{ title: `${title} | Confluence Management Consulting` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | Confluence Management Consulting` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }
}
export const contactUrl = 'https://www.confluencemanagementconsulting.com/contact-confluence-management-consulting'
