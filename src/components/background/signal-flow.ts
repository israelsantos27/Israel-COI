/**
 * Space and Moving Meteorite Background
 * Deep cosmic starfield with radiant stars, celestial nebulas,
 * and high-velocity luminous meteorites (shooting stars) with glowing tails and particle sparks.
 */

export type FlowColors = { accent: string; deep: string }
export type FlowSettings = { strength: number; speed: number; calm: boolean }

type Star = {
  xRatio: number
  yRatio: number
  radius: number
  baseAlpha: number
  twinkleSpeed: number
  phase: number
  color: string
  hasGlow: boolean
  isSpecial: boolean
}

type Spark = {
  x: number
  y: number
  vx: number
  vy: number
  alpha: number
  decay: number
  size: number
  color: string
}

type Meteorite = {
  x: number
  y: number
  vx: number
  vy: number
  speed: number
  length: number
  thickness: number
  age: number
  maxAge: number
  headColor: string
  trailColor: string
  sparks: Spark[]
}

const STAR_COLORS = [
  '#ffffff',
  '#ffffff',
  '#f0f8ff',
  '#e0f2fe',
  '#bae6fd',
  '#7dd3fc',
  '#cffafe',
  '#fef08a',
]

export function createSignalFlow(
  canvas: HTMLCanvasElement,
  colors: FlowColors,
  settings: FlowSettings,
) {
  const ctx = canvas.getContext('2d')
  if (!ctx) {
    throw new Error('Canvas 2D context not available')
  }

  let width = window.innerWidth
  let height = window.innerHeight
  let dpr = Math.min(window.devicePixelRatio || 1, 2)
  let centerPx = width / 2
  let currentColors = colors

  // Stars generation: Richer, brighter, and more radiant
  const STAR_COUNT = Math.min(Math.floor((width * height) / 2600), 360)
  const stars: Star[] = []

  for (let i = 0; i < STAR_COUNT; i++) {
    const isSpecial = Math.random() < 0.12 // Major radiant stars
    const isMedium = !isSpecial && Math.random() < 0.45
    const radius = isSpecial
      ? 2.0 + Math.random() * 1.2
      : isMedium
        ? 1.2 + Math.random() * 0.6
        : 0.7 + Math.random() * 0.4

    stars.push({
      xRatio: Math.random(),
      yRatio: Math.random(),
      radius,
      baseAlpha: isSpecial
        ? 0.9 + Math.random() * 0.1
        : isMedium
          ? 0.7 + Math.random() * 0.25
          : 0.45 + Math.random() * 0.35,
      twinkleSpeed: 0.8 + Math.random() * 2.8,
      phase: Math.random() * Math.PI * 2,
      color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)]!,
      hasGlow: isSpecial || (isMedium && Math.random() < 0.3),
      isSpecial,
    })
  }

  // Meteorites pool: more frequent, radiant, and energetic
  const meteorites: Meteorite[] = []
  let nextMeteoriteTime = 0.3

  function spawnMeteorite(nowSeconds: number) {
    const fromRight = Math.random() < 0.7
    const angle = fromRight
      ? Math.PI * (0.68 + Math.random() * 0.14) // ~125° to ~145° (travels left-down)
      : Math.PI * (0.18 + Math.random() * 0.14) // ~35° to ~55° (travels right-down)

    const speed = (18 + Math.random() * 14) * settings.speed
    const vx = Math.cos(angle) * speed
    const vy = Math.sin(angle) * speed

    const startX = fromRight
      ? width * 0.15 + Math.random() * (width * 0.95)
      : -width * 0.1 + Math.random() * (width * 0.85)
    const startY = -60 + Math.random() * (height * 0.45)

    const isFireball = Math.random() < 0.22
    const length = (isFireball ? 260 : 160) + Math.random() * 140
    const thickness = (isFireball ? 3.5 : 2.2) + Math.random() * 1.0
    const maxAge = Math.floor((isFireball ? 65 : 50) + Math.random() * 25)

    meteorites.push({
      x: startX,
      y: startY,
      vx,
      vy,
      speed,
      length,
      thickness,
      age: 0,
      maxAge,
      headColor: '#ffffff',
      trailColor: isFireball ? '#38bdf8' : (currentColors.accent || '#60a5fa'),
      sparks: [],
    })

    // Next shooting star spawns every 1.0 to 2.4 seconds
    nextMeteoriteTime = nowSeconds + (1.0 + Math.random() * 1.4) / settings.speed
  }

  // Pre-seed 1 active meteorite right away
  spawnMeteorite(0)

  return {
    resize(w: number, h: number) {
      width = w
      height = h
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
    },

    setCenter(xPx: number) {
      centerPx = xPx
    },

    setColors(next: FlowColors) {
      currentColors = next
    },

    render(seconds: number) {
      ctx.save()
      ctx.scale(dpr, dpr)
      ctx.clearRect(0, 0, width, height)

      // 1. Vibrant Cosmic Nebula Glows (Brighter atmosphere)
      // Top Left / Upper Sky Nebula
      const neb1 = ctx.createRadialGradient(
        width * 0.2,
        height * 0.18,
        30,
        width * 0.2,
        height * 0.18,
        Math.max(width, height) * 0.55,
      )
      neb1.addColorStop(0, 'rgba(59, 130, 246, 0.25)')
      neb1.addColorStop(0.35, 'rgba(99, 102, 241, 0.15)')
      neb1.addColorStop(0.7, 'rgba(30, 58, 138, 0.06)')
      neb1.addColorStop(1, 'transparent')
      ctx.fillStyle = neb1
      ctx.fillRect(0, 0, width, height)

      // Right / Mid Sky Radiant Cyan Nebula
      const neb2 = ctx.createRadialGradient(
        width * 0.82,
        height * 0.45,
        50,
        width * 0.82,
        height * 0.45,
        Math.max(width, height) * 0.6,
      )
      neb2.addColorStop(0, 'rgba(56, 189, 248, 0.22)')
      neb2.addColorStop(0.4, 'rgba(14, 165, 233, 0.12)')
      neb2.addColorStop(0.75, 'rgba(15, 23, 42, 0.04)')
      neb2.addColorStop(1, 'transparent')
      ctx.fillStyle = neb2
      ctx.fillRect(0, 0, width, height)

      // Center Top Cosmic Dawn Aura
      const neb3 = ctx.createRadialGradient(
        width * 0.5,
        0,
        10,
        width * 0.5,
        0,
        Math.max(width, height) * 0.5,
      )
      neb3.addColorStop(0, 'rgba(147, 197, 253, 0.18)')
      neb3.addColorStop(0.5, 'rgba(59, 130, 246, 0.08)')
      neb3.addColorStop(1, 'transparent')
      ctx.fillStyle = neb3
      ctx.fillRect(0, 0, width, height)

      // 2. Stars Rendering (Luminous & Sparkling)
      for (const star of stars) {
        const x = star.xRatio * width
        const y = star.yRatio * height

        let calmFactor = 1.0
        if (settings.calm) {
          const distX = Math.abs(x - centerPx)
          const normDist = distX / (width * 0.35)
          if (normDist < 1) {
            calmFactor = 0.72 + 0.28 * normDist
          }
        }

        const twinkle = Math.sin(seconds * star.twinkleSpeed + star.phase)
        const alpha = Math.max(
          0.15,
          Math.min(1, (star.baseAlpha + twinkle * 0.25) * settings.strength * calmFactor),
        )

        ctx.fillStyle = star.color
        ctx.globalAlpha = alpha

        ctx.beginPath()
        ctx.arc(x, y, star.radius, 0, Math.PI * 2)
        ctx.fill()

        // Brilliant glow aura for luminous stars
        if (star.hasGlow && alpha > 0.5) {
          const glowRadius = star.radius * (star.isSpecial ? 5.5 : 3.8)
          const glowGrad = ctx.createRadialGradient(x, y, 0, x, y, glowRadius)
          glowGrad.addColorStop(0, 'rgba(255, 255, 255, 0.65)')
          glowGrad.addColorStop(0.35, 'rgba(186, 230, 253, 0.35)')
          glowGrad.addColorStop(1, 'transparent')

          ctx.fillStyle = glowGrad
          ctx.beginPath()
          ctx.arc(x, y, glowRadius, 0, Math.PI * 2)
          ctx.fill()

          // Subtle 4-point diffraction spike on prominent radiant stars
          if (star.isSpecial && alpha > 0.75) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.45})`
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(x - star.radius * 4.5, y)
            ctx.lineTo(x + star.radius * 4.5, y)
            ctx.moveTo(x, y - star.radius * 4.5)
            ctx.lineTo(x, y + star.radius * 4.5)
            ctx.stroke()
          }
        }
      }

      // 3. Meteorites Lifecycle & Spawning
      if (seconds > nextMeteoriteTime) {
        spawnMeteorite(seconds)
      }

      // 4. Render Active Meteorites (High Luminosity)
      for (let i = meteorites.length - 1; i >= 0; i--) {
        const m = meteorites[i]!
        m.age++

        m.x += m.vx
        m.y += m.vy

        // Emit glowing stardust sparks
        if (Math.random() < 0.75 && m.age < m.maxAge * 0.85) {
          m.sparks.push({
            x: m.x - m.vx * 0.12 + (Math.random() - 0.5) * 6,
            y: m.y - m.vy * 0.12 + (Math.random() - 0.5) * 6,
            vx: -m.vx * 0.08 + (Math.random() - 0.5) * 2.0,
            vy: -m.vy * 0.08 + (Math.random() - 0.5) * 2.0,
            alpha: 1.0,
            decay: 0.035 + Math.random() * 0.035,
            size: 1.0 + Math.random() * 1.8,
            color: Math.random() < 0.4 ? '#ffffff' : '#bae6fd',
          })
        }

        // Opacity envelope
        const progress = m.age / m.maxAge
        let opacity = 1.0
        if (progress < 0.12) {
          opacity = progress / 0.12
        } else if (progress > 0.6) {
          opacity = 1 - (progress - 0.6) / 0.4
        }
        opacity = Math.max(0, Math.min(1, opacity))

        const speedMagnitude = Math.hypot(m.vx, m.vy) || 1
        const unitX = m.vx / speedMagnitude
        const unitY = m.vy / speedMagnitude

        const tailX = m.x - unitX * m.length
        const tailY = m.y - unitY * m.length

        // Radiant Meteor Trail Gradient
        const trailGrad = ctx.createLinearGradient(m.x, m.y, tailX, tailY)
        trailGrad.addColorStop(0, `rgba(255, 255, 255, ${opacity})`)
        trailGrad.addColorStop(0.18, `rgba(224, 242, 254, ${opacity * 0.9})`)
        trailGrad.addColorStop(0.5, `rgba(56, 189, 248, ${opacity * 0.65})`)
        trailGrad.addColorStop(0.8, `rgba(96, 165, 250, ${opacity * 0.3})`)
        trailGrad.addColorStop(1, 'rgba(56, 189, 248, 0)')

        ctx.strokeStyle = trailGrad
        ctx.lineWidth = m.thickness
        ctx.lineCap = 'round'
        ctx.beginPath()
        ctx.moveTo(m.x, m.y)
        ctx.lineTo(tailX, tailY)
        ctx.stroke()

        // Brilliant Outer Meteorite Flare Head
        const flareRadius = m.thickness * 6.5
        const headGlow = ctx.createRadialGradient(
          m.x,
          m.y,
          0,
          m.x,
          m.y,
          flareRadius,
        )
        headGlow.addColorStop(0, `rgba(255, 255, 255, ${opacity})`)
        headGlow.addColorStop(0.3, `rgba(224, 242, 254, ${opacity * 0.85})`)
        headGlow.addColorStop(0.65, `rgba(56, 189, 248, ${opacity * 0.45})`)
        headGlow.addColorStop(1, 'rgba(56, 189, 248, 0)')

        ctx.fillStyle = headGlow
        ctx.beginPath()
        ctx.arc(m.x, m.y, flareRadius, 0, Math.PI * 2)
        ctx.fill()

        // White-hot inner core
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
        ctx.beginPath()
        ctx.arc(m.x, m.y, m.thickness * 1.3, 0, Math.PI * 2)
        ctx.fill()

        // Trailing luminous sparks
        for (let sIdx = m.sparks.length - 1; sIdx >= 0; sIdx--) {
          const sp = m.sparks[sIdx]!
          sp.x += sp.vx
          sp.y += sp.vy
          sp.alpha -= sp.decay

          if (sp.alpha <= 0) {
            m.sparks.splice(sIdx, 1)
            continue
          }

          ctx.fillStyle = sp.color
          ctx.globalAlpha = sp.alpha * opacity
          ctx.beginPath()
          ctx.arc(sp.x, sp.y, sp.size, 0, Math.PI * 2)
          ctx.fill()
        }

        // Clean up dead meteorites
        if (
          m.age >= m.maxAge ||
          m.x < -120 ||
          m.x > width + 120 ||
          m.y > height + 120
        ) {
          meteorites.splice(i, 1)
        }
      }

      ctx.restore()
    },

    dispose() {
      stars.length = 0
      meteorites.length = 0
    },
  }
}

export type SignalFlow = ReturnType<typeof createSignalFlow>
