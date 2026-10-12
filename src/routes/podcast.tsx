import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Radio } from 'lucide-react'
import { pageHead } from '@/components/site/content'
import { CallToAction } from '@/components/site/site-shell'
import { Button } from '@/components/ui/button'

import guest1 from '@/assets/podcast/guests/guest-ep1.png'
import guest2 from '@/assets/podcast/guests/guest-ep2.png'
import guest3 from '@/assets/podcast/guests/guest-ep3.jpg'
import guest4 from '@/assets/podcast/guests/guest-ep4.png'
import guest5 from '@/assets/podcast/guests/guest-ep5.png'
import guest6 from '@/assets/podcast/guests/guest-ep6.png'
import guest7 from '@/assets/podcast/guests/guest-ep7.png'

export const Route = createFileRoute('/podcast')({
  head: () =>
    pageHead(
      'The Mission Critical Podcast',
      'The Mission Critical Podcast brought to you by Confluence features the most innovative leaders in mission-critical construction. Listen on Spotify.'
    ),
  component: Podcast,
})

const allEpisodes = [
  {
    number: '07',
    title: 'Episode 7: Andreas Beck',
    guest: 'Andreas Beck',
    guestPhoto: guest7,
    spotifyUrl: 'https://open.spotify.com/episode/4hfEOpUHHclx3oE0QgcvrL',
    description:
      'Mission-critical systems, operational resilience, and energy transition with Andreas Beck.',
    isFeatured: true,
  },
  {
    number: '06',
    title: 'Episode 6: Alan Bates',
    guest: 'Alan Bates',
    guestPhoto: guest6,
    spotifyUrl:
      'https://open.spotify.com/episode/6g8UVOfzfGAeCHJELoNx1P?si=166369a0299a4edb',
    description:
      'Innovation, quality control, and the future of data centre infrastructure with Alan Bates.',
  },
  {
    number: '05',
    title: 'Episode 5: Damien Buckley',
    guest: 'Damien Buckley',
    guestPhoto: guest5,
    spotifyUrl: 'https://open.spotify.com/episode/45QbVeHCbqC2hifL2DwnsB',
    description:
      'Strategy, team deployment, and construction management across Europe with Damien Buckley.',
  },
  {
    number: '04',
    title: "Episode 4: Kenny O' Malley",
    guest: "Kenny O' Malley",
    guestPhoto: guest4,
    spotifyUrl: 'https://open.spotify.com/episode/23ui7E02Sq9mtU2mRmsAtS',
    description:
      'Navigating site challenges and delivering complex M&E infrastructure with Kenny O’ Malley.',
  },
  {
    number: '03',
    title: 'Episode 3: Timothy Locke',
    guest: 'Timothy Locke',
    guestPhoto: guest3,
    spotifyUrl: 'https://open.spotify.com/episode/5GsfmZCB2oj61Dm2DGPW2f',
    description:
      'Exploring technical excellence and mission-critical engineering with Timothy Locke.',
  },
  {
    number: '02',
    title: 'Episode 2: Matt Jakubowski',
    guest: 'Matt Jakubowski',
    guestPhoto: guest2,
    spotifyUrl: 'https://open.spotify.com/episode/4XJ2SPTpYHr9HIFGceDAxq',
    description:
      'Diving deep into large-scale project execution and leadership with Matt Jakubowski.',
  },
  {
    number: '01',
    title: 'Episode 1: Alexandru Gabriel Caramis',
    guest: 'Alexandru Gabriel Caramis',
    guestPhoto: guest1,
    spotifyUrl: 'https://open.spotify.com/episode/3PB5XOB2LU1GHgJHAjQPcn',
    description:
      'Insights into the most innovative minds in mission-critical construction with Alexandru Gabriel Caramis.',
  },
]

function SpotifyIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.497 17.306c-.217.356-.677.469-1.032.252-2.827-1.728-6.386-2.119-10.578-1.162-.406.093-.812-.162-.905-.568-.093-.406.162-.812.568-.905 4.588-1.047 8.528-.598 11.695 1.341.355.217.468.677.252 1.042zm1.468-3.264c-.273.444-.855.586-1.299.313-3.238-1.99-8.173-2.566-12.002-1.402-.497.151-1.03-.133-1.181-.63-.151-.497.133-1.03.63-1.181 4.382-1.332 9.808-.68 13.539 1.601.444.273.586.855.313 1.299zm.126-3.41c-3.882-2.305-10.288-2.518-13.992-1.393-.595.181-1.227-.16-1.408-.755-.181-.595.16-1.227.755-1.408 4.259-1.293 11.333-1.043 15.807 1.613.535.317.708 1.013.391 1.548-.317.534-1.013.708-1.553.395z" />
    </svg>
  )
}

function Podcast() {
  const featured = allEpisodes[0]!
  const archive = allEpisodes.slice(1)

  return (
    <main>
      <section className="page-intro">
        <div className="site-container">
          <div className="eyebrow">
            <Radio className="w-3.5 h-3.5" /> Confluence Media
          </div>
          <h1>The Mission Critical Podcast</h1>
          <p>
            Insights into the most innovative minds in mission-critical construction.
            Sit back, grab a coffee, and listen as we dive into what it takes to
            thrive in this explosive sector across Europe.
          </p>
        </div>
      </section>

      <section className="section site-container">
        {/* Featured Latest Episode */}
        <div className="eyebrow mb-5">Latest Release</div>
        <article className="podcast-featured">
          <div className="podcast-featured-stage">
            <div className="podcast-featured-avatar">
              <img
                src={featured.guestPhoto}
                alt={featured.guest}
                width={600}
                height={600}
                loading="eager"
              />
            </div>
            <div className="podcast-guest-name text-base mt-4">{featured.guest}</div>
            <span className="text-xs text-muted-foreground mt-1">Special Guest</span>
          </div>

          <div className="podcast-featured-content">
            <div className="flex items-center gap-2 mb-2">
              <span className="service-number">EPISODE {featured.number}</span>
              <span className="text-xs text-muted-foreground">• FEATURED RELEASE</span>
            </div>
            <h2 className="podcast-featured-title">{featured.title}</h2>
            <p className="podcast-featured-desc">{featured.description}</p>
            <div className="podcast-featured-meta">
              <span className="podcast-tag">Full Episode</span>
              <span className="podcast-tag">Spotify Exclusive</span>
              <span className="podcast-tag">Mission-Critical Leadership</span>
            </div>
            <div>
              <Button asChild variant="brand" size="lg" className="gap-2">
                <a href={featured.spotifyUrl} target="_blank" rel="noreferrer noopener">
                  <SpotifyIcon className="w-4 h-4" />
                  <span>Listen on Spotify</span>
                  <ArrowUpRight size={16} />
                </a>
              </Button>
            </div>
          </div>
        </article>

        {/* All Episodes */}
        <div className="section-heading">
          <div>
            <div className="eyebrow">Archive</div>
            <h2>All Episodes</h2>
          </div>
          <p>
            Explore conversations with engineering specialists, project leaders,
            and industry pioneers across Europe.
          </p>
        </div>

        <div className="podcast-grid">
          {archive.map((ep) => (
            <article className="podcast-card" key={ep.number}>
              <div className="podcast-card-hero">
                <div className="podcast-card-meta">
                  <span className="podcast-pill">EP. {ep.number}</span>
                  <span className="flex items-center gap-1 opacity-60">
                    <span className="w-0.5 h-2 bg-foreground rounded-full inline-block" />
                    <span className="w-0.5 h-3.5 bg-foreground rounded-full inline-block" />
                    <span className="w-0.5 h-2 bg-foreground rounded-full inline-block" />
                    <span className="w-0.5 h-3 bg-foreground rounded-full inline-block" />
                  </span>
                </div>
                <div className="podcast-card-avatar">
                  <img
                    src={ep.guestPhoto}
                    alt={ep.guest}
                    width={600}
                    height={600}
                    loading="lazy"
                  />
                </div>
                <div className="podcast-guest-name">{ep.guest}</div>
              </div>

              <div className="podcast-content">
                <h3 className="podcast-title">{ep.title}</h3>
                <p className="podcast-description">{ep.description}</p>
                <div className="podcast-actions">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full justify-between hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  >
                    <a
                      href={ep.spotifyUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span className="flex items-center gap-2">
                        <SpotifyIcon className="w-3.5 h-3.5" />
                        <span>Listen on Spotify</span>
                      </span>
                      <ArrowUpRight size={14} />
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CallToAction />
    </main>
  )
}
