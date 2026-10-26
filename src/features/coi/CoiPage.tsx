import { PageMeta } from '@/app/PageMeta'
import type { PageRoute } from '@/app/routes'
import { PageHeader } from '@/components/page/PageHeader'
import { coiCallFlow } from '@/content/coi'
import { CoiFlow } from './CoiFlow'
import './coi.css'

/**
 * Standalone page for the 9-level COI Sales Call Flow (/coi).
 * Complete interactive guide with talk tracks, diagnostic questions, objection scripts,
 * and milestone checklists.
 */
export function CoiPage({ page }: { page: PageRoute }) {
  const c = coiCallFlow

  return (
    <div className="pg">
      <PageMeta page={page} />
      <PageHeader
        eyebrow={c.eyebrow}
        titleThin={c.titleThin}
        titleBold={c.titleBold}
        lede={c.lede}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 20 }}>
          {c.stats.map((stat) => (
            <span key={stat.label} className="coi-hero-badge">
              <strong>{stat.label}:</strong> {stat.value}
            </span>
          ))}
        </div>
      </PageHeader>

      <CoiFlow embedded={false} />
    </div>
  )
}

/**
 * Home page section for the COI Sales Call Flow (/#coi).
 * Integrated into the Home page scroll order between Live Automation and Selected Work.
 */
export function CoiSection() {
  const c = coiCallFlow

  return (
    <section id="coi" className="pg pg--section" aria-labelledby="coi-title">
      <PageHeader
        level={2}
        id="coi-title"
        eyebrow={c.eyebrow}
        titleThin={c.titleThin}
        titleBold={c.titleBold}
        lede={c.lede}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 16 }}>
          {c.stats.map((stat) => (
            <span key={stat.label} className="coi-hero-badge">
              <strong>{stat.label}:</strong> {stat.value}
            </span>
          ))}
        </div>
      </PageHeader>

      <CoiFlow embedded={true} />
    </section>
  )
}
