import { useState, useMemo, type ComponentType } from 'react'
import { Link } from 'react-router'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CaretLeft,
  CaretRight,
  ChatCircleDots,
  Check,
  CheckCircle,
  Copy,
  CurrencyDollar,
  MagnifyingGlass,
  PaperPlaneTilt,
  PhoneCall,
  RocketLaunch,
  ShieldWarning,
  Sparkle,
  TrendUp,
  type IconProps,
} from '@phosphor-icons/react'
import {
  coiLevels,
  coiPhases,
  type CoiPhaseId,
} from '@/content/coi'
import './coi.css'

const LEVEL_ICONS: Record<number, ComponentType<IconProps>> = {
  1: PhoneCall,
  2: MagnifyingGlass,
  3: Sparkle,
  4: CurrencyDollar,
  5: RocketLaunch,
  6: ShieldWarning,
  7: TrendUp,
  8: CheckCircle,
  9: PaperPlaneTilt,
}

const pad2 = (n: number) => String(n).padStart(2, '0')

type Props = {
  /** When true, renders on the Home section with a link to the standalone page. */
  embedded?: boolean
}

export function CoiFlow({ embedded = false }: Props) {
  const [activeLevelNumber, setActiveLevelNumber] = useState(1)
  const [selectedPhase, setSelectedPhase] = useState<'all' | CoiPhaseId>('all')
  const [viewMode, setViewMode] = useState<'stepper' | 'matrix'>('stepper')
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const currentLevel = useMemo(
    () => coiLevels.find((lvl) => lvl.level === activeLevelNumber) ?? coiLevels[0]!,
    [activeLevelNumber],
  )

  const filteredLevels = useMemo(() => {
    if (selectedPhase === 'all') return coiLevels
    return coiLevels.filter((lvl) => lvl.phase === selectedPhase)
  }, [selectedPhase])

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedId(id)
      setTimeout(() => setCopiedId((curr) => (curr === id ? null : curr)), 2000)
    } catch {
      // Fallback for restricted clipboard contexts
      const textarea = document.createElement('textarea')
      textarea.value = text
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopiedId(id)
      setTimeout(() => setCopiedId((curr) => (curr === id ? null : curr)), 2000)
    }
  }

  const nextLevel = () => {
    if (activeLevelNumber < 9) {
      setActiveLevelNumber((prev) => prev + 1)
    }
  }

  const prevLevel = () => {
    if (activeLevelNumber > 1) {
      setActiveLevelNumber((prev) => prev - 1)
    }
  }

  const CurrentIcon = LEVEL_ICONS[currentLevel.level] ?? PhoneCall

  return (
    <div className="coi-container">
      {/* Controls & Phase Filter Bar */}
      <div className="coi-controls">
        <div className="coi-phases" role="tablist" aria-label="Call Flow Phases">
          <button
            type="button"
            className="coi-phase-btn"
            data-active={selectedPhase === 'all'}
            onClick={() => setSelectedPhase('all')}
          >
            All 9 Levels <span className="coi-phase-count">9</span>
          </button>
          {coiPhases.map((phase) => (
            <button
              key={phase.id}
              type="button"
              className="coi-phase-btn"
              data-active={selectedPhase === phase.id}
              onClick={() => {
                setSelectedPhase(phase.id)
                if (!phase.levels.includes(activeLevelNumber)) {
                  setActiveLevelNumber(phase.levels[0]!)
                }
              }}
            >
              {phase.label}
              <span className="coi-phase-count">{phase.levels.length}</span>
            </button>
          ))}
        </div>

        <div className="coi-view-toggles" role="group" aria-label="View Mode">
          <button
            type="button"
            className="coi-view-btn"
            data-active={viewMode === 'stepper'}
            onClick={() => setViewMode('stepper')}
          >
            Interactive Flow
          </button>
          <button
            type="button"
            className="coi-view-btn"
            data-active={viewMode === 'matrix'}
            onClick={() => setViewMode('matrix')}
          >
            Playbook Grid
          </button>
        </div>
      </div>

      {viewMode === 'stepper' ? (
        <>
          {/* Stepper Timeline Navigation */}
          <div className="coi-stepper-wrap" aria-label="Call Flow Timeline">
            <div className="coi-stepper-track">
              <div className="coi-stepper-line" aria-hidden />
              <div
                className="coi-stepper-progress"
                style={{
                  width: `${((activeLevelNumber - 1) / 8) * 100}%`,
                }}
                aria-hidden
              />

              {coiLevels.map((lvl) => {
                const isActive = lvl.level === activeLevelNumber
                const isCompleted = lvl.level < activeLevelNumber
                const Icon = LEVEL_ICONS[lvl.level] ?? PhoneCall

                return (
                  <button
                    key={lvl.id}
                    type="button"
                    className="coi-step-node"
                    data-active={isActive}
                    data-completed={isCompleted}
                    onClick={() => setActiveLevelNumber(lvl.level)}
                    aria-current={isActive ? 'step' : undefined}
                    title={`Level ${pad2(lvl.level)}: ${lvl.title}`}
                  >
                    <span className="coi-node-bubble">
                      {isCompleted ? <Check size={16} weight="bold" /> : <Icon size={18} />}
                    </span>
                    <span className="coi-node-label">
                      {pad2(lvl.level)} {lvl.shortTitle}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Active Level Detail Card */}
          <article className="coi-card">
            <header className="coi-card__header">
              <div className="coi-card__badge-row">
                <span className="coi-level-badge">
                  <CurrentIcon size={14} weight="bold" />
                  Level {pad2(currentLevel.level)} of 09
                </span>
                <span className="coi-duration-badge">{currentLevel.estimatedDuration}</span>
                <span className="pg-mono" style={{ opacity: 0.8 }}>
                  {coiPhases.find((p) => p.id === currentLevel.phase)?.label}
                </span>
              </div>

              <div className="coi-card__nav">
                <button
                  type="button"
                  className="coi-nav-btn"
                  onClick={prevLevel}
                  disabled={activeLevelNumber === 1}
                  aria-label="Previous Level"
                  title="Previous Level"
                >
                  <CaretLeft size={16} weight="bold" />
                </button>
                <button
                  type="button"
                  className="coi-nav-btn"
                  onClick={nextLevel}
                  disabled={activeLevelNumber === 9}
                  aria-label="Next Level"
                  title="Next Level"
                >
                  <CaretRight size={16} weight="bold" />
                </button>
              </div>
            </header>

            <div className="coi-card__body">
              <div className="coi-stage-title-wrap">
                <span className="coi-stage-tag">{currentLevel.tag}</span>
                <h3 className="coi-stage-title">{currentLevel.title}</h3>
                <p className="coi-stage-objective">{currentLevel.objective}</p>
              </div>

              {/* Why it Matters Callout */}
              <div className="coi-why-callout">
                <strong>Why This Level Matters</strong>
                {currentLevel.whyItMatters}
              </div>

              {/* Two Column Grid: Script Dialogue | Checklist & Pro Tips */}
              <div className="coi-grid-cols">
                {/* Column 1: Custom Dialogue Steps & Full Script */}
                <div className="coi-col-box">
                  <div className="coi-box-title">
                    <span>
                      <ChatCircleDots size={16} /> Call Script & Spoken Dialogue
                    </span>
                    <button
                      type="button"
                      className="coi-copy-btn"
                      data-copied={copiedId === `full-script-${currentLevel.level}`}
                      onClick={() =>
                        copyToClipboard(currentLevel.talkTrack, `full-script-${currentLevel.level}`)
                      }
                      title="Copy full script for this level"
                      aria-label="Copy full script for this level"
                    >
                      {copiedId === `full-script-${currentLevel.level}` ? (
                        <>
                          <Check size={13} weight="bold" /> Copied Full Script
                        </>
                      ) : (
                        <>
                          <Copy size={13} /> Copy Entire Script
                        </>
                      )}
                    </button>
                  </div>

                  {/* Segmented Dialogue Steps */}
                  <div className="coi-segments-list">
                    {currentLevel.scriptSegments.map((segment, idx) => {
                      const segId = `seg-${currentLevel.level}-${idx}`
                      const isCopied = copiedId === segId

                      return (
                        <div key={segment.step} className="coi-segment-item">
                          <div className="coi-segment-header">
                            <span className="coi-segment-step">{segment.step}</span>
                            <button
                              type="button"
                              className="coi-copy-btn"
                              data-copied={isCopied}
                              onClick={() => copyToClipboard(segment.dialogue, segId)}
                              title="Copy this dialogue step"
                              aria-label={`Copy ${segment.step}`}
                            >
                              {isCopied ? (
                                <>
                                  <Check size={12} weight="bold" /> Copied
                                </>
                              ) : (
                                <>
                                  <Copy size={12} /> Copy
                                </>
                              )}
                            </button>
                          </div>
                          <p className="coi-segment-text">"{segment.dialogue}"</p>
                        </div>
                      )
                    })}
                  </div>

                  {/* Full Unified Script Box */}
                  <div className="coi-full-script-box">
                    <div className="coi-full-script-head">
                      <span className="coi-full-script-title">Full Continuous Script</span>
                      <button
                        type="button"
                        className="coi-copy-btn"
                        data-copied={copiedId === `unified-${currentLevel.level}`}
                        onClick={() =>
                          copyToClipboard(currentLevel.talkTrack, `unified-${currentLevel.level}`)
                        }
                      >
                        {copiedId === `unified-${currentLevel.level}` ? (
                          <>
                            <Check size={12} weight="bold" /> Copied
                          </>
                        ) : (
                          <>
                            <Copy size={12} /> Copy All
                          </>
                        )}
                      </button>
                    </div>
                    <p className="coi-full-script-text">{currentLevel.talkTrack}</p>
                  </div>
                </div>

                {/* Column 2: Pro Tips & Exit Criteria */}
                <div className="coi-col-box">
                  <div className="coi-box-title">
                    <span>
                      <Sparkle size={16} /> Pro Tips & Guidelines
                    </span>
                  </div>

                  <ul className="coi-tips-list">
                    {currentLevel.proTips.map((tip) => (
                      <li key={tip} className="coi-tip-item">
                        <span className="coi-tip-bullet" aria-hidden />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stage Exit Criteria */}
                  <div className="coi-exit-banner">
                    <div>
                      <strong>Stage Exit Criteria</strong>
                      <span>{currentLevel.exitCriteria}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Navigation & Progress */}
            <footer className="coi-card__footer">
              <div className="coi-footer-tracker">
                <span>
                  Stage <b>{activeLevelNumber}</b> of <b>9</b>
                </span>
              </div>

              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                {activeLevelNumber > 1 && (
                  <button type="button" className="pg-btn" onClick={prevLevel}>
                    <ArrowLeft size={16} /> Back
                  </button>
                )}

                {activeLevelNumber < 9 ? (
                  <button type="button" className="coi-primary-btn" onClick={nextLevel}>
                    Advance to Level {pad2(activeLevelNumber + 1)} <ArrowRight size={16} />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="coi-primary-btn"
                    onClick={() => setActiveLevelNumber(1)}
                  >
                    Restart Call Flow <ArrowRight size={16} />
                  </button>
                )}

                {embedded && (
                  <Link to="/coi" className="pg-btn">
                    Full Playbook Page <ArrowUpRight size={14} weight="bold" />
                  </Link>
                )}
              </div>
            </footer>
          </article>
        </>
      ) : (
        /* Matrix Grid View: All 9 Levels simultaneously */
        <div className="coi-matrix-grid">
          {filteredLevels.map((lvl) => {
            const Icon = LEVEL_ICONS[lvl.level] ?? PhoneCall
            const isSelected = lvl.level === activeLevelNumber
            return (
              <div
                key={lvl.id}
                className="coi-matrix-card"
                role="button"
                tabIndex={0}
                style={isSelected ? { borderColor: 'var(--accent)' } : undefined}
                onClick={() => {
                  setActiveLevelNumber(lvl.level)
                  setViewMode('stepper')
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setActiveLevelNumber(lvl.level)
                    setViewMode('stepper')
                  }
                }}
              >
                <div>
                  <div className="coi-matrix-top">
                    <span className="coi-matrix-num">LEVEL {pad2(lvl.level)}</span>
                    <span className="coi-matrix-icon">
                      <Icon size={18} />
                    </span>
                  </div>
                  <h4 className="coi-matrix-title">{lvl.title}</h4>
                  <span className="coi-matrix-tag">{lvl.tag}</span>
                  <p className="coi-matrix-desc">{lvl.objective}</p>
                </div>

                <div className="coi-matrix-bottom">
                  <span>{lvl.estimatedDuration}</span>
                  <span style={{ color: 'var(--accent-ink)', fontWeight: 600 }}>
                    Inspect Script →
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
