import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';

export const design: DesignSystem = {
  palette: { bg: '#FFFBF5', text: '#1E1B4B', accent: '#7C3AED' },
  fonts: {
    display: '"Syne", system-ui, -apple-system, sans-serif',
    body: '"Archivo", system-ui, -apple-system, sans-serif',
  },
  typeScale: { hero: 160, body: 36 },
  radius: 12,
};

const muted = '#64748B';
const subtle = '#94A3B8';
const indigo = '#6366F1';
const violet = '#7C3AED';
const cream = '#FFFBF5';

const fill = {
  width: '100%',
  height: '100%',
  fontFamily: 'var(--osd-font-body)',
} as const;

// ============================================================================
// PAGE 1: Cover
// ============================================================================
const Cover: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 160px',
    }}
  >
    <style>{`@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap');`}</style>
    <div
      style={{
        fontSize: 14,
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.25em',
        color: 'var(--osd-accent)',
        marginBottom: 48,
      }}
    >
      Andus
    </div>
    <h1
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 'var(--osd-size-hero)',
        fontWeight: 400,
        lineHeight: 1.0,
        letterSpacing: '-0.02em',
        margin: 0,
      }}
    >
      Product Strategy
      <br />
      <span style={{ fontStyle: 'italic', color: 'var(--osd-accent)' }}>
        Pressure Test
      </span>
    </h1>
    <p
      style={{
        fontSize: 32,
        color: muted,
        marginTop: 48,
        fontWeight: 300,
      }}
    >
      Internal working session — May 2026
    </p>
  </div>
);

// ============================================================================
// PAGE 2: Agenda
// ============================================================================
const Agenda: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      padding: 120,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div
      style={{
        fontSize: 14,
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        color: 'var(--osd-accent)',
        marginBottom: 16,
      }}
    >
      90 Minutes
    </div>
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 72,
        fontWeight: 400,
        margin: 0,
        marginBottom: 64,
      }}
    >
      What we'll cover
    </h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <AgendaItem num="01" text="The customer need Andus is positioned to address" />
      <AgendaItem num="02" text="The types of product solutions this invites" />
      <AgendaItem num="03" text="What constitutes good product-market fit" />
      <AgendaItem num="04" text="What makes a product scalable vs a one-time solve" />
      <AgendaItem num="05" text="Our current thinking evaluated through these lenses" />
    </div>
  </div>
);

const AgendaItem = ({ num, text }: { num: string; text: string }) => (
  <div style={{ display: 'flex', alignItems: 'baseline', gap: 24 }}>
    <span
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 28,
        fontStyle: 'italic',
        color: 'var(--osd-accent)',
        minWidth: 48,
      }}
    >
      {num}
    </span>
    <span style={{ fontSize: 36, fontWeight: 300 }}>{text}</span>
  </div>
);

// ============================================================================
// PAGE 3: Section - Customer Needs
// ============================================================================
const Section01: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-accent)',
      color: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 160px',
    }}
  >
    <div
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 120,
        fontWeight: 300,
        opacity: 0.3,
        marginBottom: 24,
      }}
    >
      01
    </div>
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 96,
        fontWeight: 400,
        margin: 0,
        lineHeight: 1.1,
      }}
    >
      Customer Needs
    </h2>
    <p
      style={{
        fontSize: 32,
        fontWeight: 300,
        marginTop: 32,
        opacity: 0.8,
      }}
    >
      What problem are we actually solving?
    </p>
  </div>
);

// ============================================================================
// PAGE 4: Discussion - The Core Question
// ============================================================================
const Discussion01: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0 200px',
      textAlign: 'center',
    }}
  >
    <div
      style={{
        fontSize: 14,
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        color: 'var(--osd-accent)',
        marginBottom: 48,
      }}
    >
      Discussion
    </div>
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 80,
        fontWeight: 400,
        fontStyle: 'italic',
        margin: 0,
        lineHeight: 1.2,
      }}
    >
      "How much do we want to be in the business of automating lower-order tasks?"
    </h2>
    <p
      style={{
        fontSize: 28,
        color: muted,
        marginTop: 64,
        maxWidth: 900,
        lineHeight: 1.6,
      }}
    >
      Maybe our positioning is to stay higher up in the org chart. How do leadership roles change? What are the second/third order implications?
    </p>
  </div>
);

// ============================================================================
// PAGE 5: Content - The Positioning Tension
// ============================================================================
const PositioningTension: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      padding: 120,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 72,
        fontWeight: 400,
        margin: 0,
        marginBottom: 64,
      }}
    >
      The positioning tension
    </h2>
    <div style={{ display: 'flex', gap: 80 }}>
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontSize: 18,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: subtle,
            marginBottom: 16,
          }}
        >
          Where everyone else is
        </div>
        <p style={{ fontSize: 36, lineHeight: 1.5, fontWeight: 300, margin: 0 }}>
          Automating lower-order tasks — rote processes, efficiency gains, AI interviews for workflows
        </p>
      </div>
      <div
        style={{
          width: 2,
          background: 'var(--osd-accent)',
          opacity: 0.3,
        }}
      />
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontSize: 18,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: 'var(--osd-accent)',
            marginBottom: 16,
          }}
        >
          Where Andus could be
        </div>
        <p style={{ fontSize: 36, lineHeight: 1.5, fontWeight: 300, margin: 0 }}>
          Higher up the org chart — how leaders manage hybrid human/agent systems, strategic implications
        </p>
      </div>
    </div>
  </div>
);

// ============================================================================
// PAGE 6: Section - Product Solutions
// ============================================================================
const Section02: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-accent)',
      color: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 160px',
    }}
  >
    <div
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 120,
        fontWeight: 300,
        opacity: 0.3,
        marginBottom: 24,
      }}
    >
      02
    </div>
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 96,
        fontWeight: 400,
        margin: 0,
        lineHeight: 1.1,
      }}
    >
      Product Solutions
    </h2>
    <p
      style={{
        fontSize: 32,
        fontWeight: 300,
        marginTop: 32,
        opacity: 0.8,
      }}
    >
      What types of products does this positioning invite?
    </p>
  </div>
);

// ============================================================================
// PAGE 7: Content - Product Ecosystem
// ============================================================================
const ProductEcosystem: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      padding: 100,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 64,
        fontWeight: 400,
        margin: 0,
        marginBottom: 56,
      }}
    >
      Three-tier product ecosystem
    </h2>
    <div style={{ display: 'flex', gap: 48, flex: 1 }}>
      <TierCard
        tier="01"
        title="Executive Level"
        items={['Simulator', 'Diagnostic Toolkit', 'Quorum', 'Listening Tool']}
        highlight
      />
      <TierCard
        tier="02"
        title="Product Factory"
        items={['Dynamic proofs of concept', 'Codex-powered builds', 'Brief → Deploy pipeline']}
      />
      <TierCard
        tier="03"
        title="Agents as Staff"
        items={['AI as employees', 'Defined roles & autonomy', 'Human-in-the-loop escalation']}
      />
    </div>
  </div>
);

const TierCard = ({
  tier,
  title,
  items,
  highlight,
}: {
  tier: string;
  title: string;
  items: string[];
  highlight?: boolean;
}) => (
  <div
    style={{
      flex: 1,
      background: highlight ? 'rgba(124, 58, 237, 0.08)' : '#FFFFFF',
      border: `1px solid ${highlight ? 'var(--osd-accent)' : 'rgba(0,0,0,0.08)'}`,
      borderRadius: 'var(--osd-radius)',
      padding: 40,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 48,
        fontWeight: 300,
        color: 'var(--osd-accent)',
        opacity: 0.4,
        marginBottom: 8,
      }}
    >
      {tier}
    </div>
    <div
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 36,
        fontWeight: 500,
        marginBottom: 32,
      }}
    >
      {title}
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            fontSize: 28,
            fontWeight: 300,
            color: muted,
            paddingLeft: 20,
            borderLeft: `2px solid var(--osd-accent)`,
          }}
        >
          {item}
        </div>
      ))}
    </div>
  </div>
);

// ============================================================================
// PAGE 8: Discussion - Wedge Product
// ============================================================================
const Discussion02: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0 200px',
      textAlign: 'center',
    }}
  >
    <div
      style={{
        fontSize: 14,
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        color: 'var(--osd-accent)',
        marginBottom: 48,
      }}
    >
      Discussion
    </div>
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 80,
        fontWeight: 400,
        fontStyle: 'italic',
        margin: 0,
        lineHeight: 1.2,
      }}
    >
      "What's the wedge product?"
    </h2>
    <p
      style={{
        fontSize: 28,
        color: muted,
        marginTop: 64,
        maxWidth: 1000,
        lineHeight: 1.6,
      }}
    >
      Which product is the easiest yes? Simulator as hook? Diagnostic as trust-builder? Product Factory as proof point?
    </p>
  </div>
);

// ============================================================================
// PAGE 9: Section - Product-Market Fit
// ============================================================================
const Section03: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-accent)',
      color: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 160px',
    }}
  >
    <div
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 120,
        fontWeight: 300,
        opacity: 0.3,
        marginBottom: 24,
      }}
    >
      03
    </div>
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 96,
        fontWeight: 400,
        margin: 0,
        lineHeight: 1.1,
      }}
    >
      Product-Market Fit
    </h2>
    <p
      style={{
        fontSize: 32,
        fontWeight: 300,
        marginTop: 32,
        opacity: 0.8,
      }}
    >
      How do we know we're winning?
    </p>
  </div>
);

// ============================================================================
// PAGE 10: Content - North Star Recommendation
// ============================================================================
const NorthStar: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      padding: 120,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div
      style={{
        fontSize: 14,
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        color: 'var(--osd-accent)',
        marginBottom: 16,
      }}
    >
      North Star Metric Recommendation
    </div>
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 80,
        fontWeight: 400,
        margin: 0,
        marginBottom: 48,
      }}
    >
      Capacity Created
    </h2>
    <p
      style={{
        fontSize: 36,
        fontWeight: 300,
        color: muted,
        marginBottom: 48,
        maxWidth: 1200,
        lineHeight: 1.5,
      }}
    >
      Hours per employee per week freed from routine work and available for strategic, creative, or high-judgment work.
    </p>
    <div style={{ display: 'flex', gap: 48 }}>
      <CapacityPoint text="Sidesteps the headcount reduction narrative" />
      <CapacityPoint text="Measurable and concrete" />
      <CapacityPoint text="Aligns with 'recomposing the OS' positioning" />
    </div>
  </div>
);

const CapacityPoint = ({ text }: { text: string }) => (
  <div
    style={{
      flex: 1,
      padding: 32,
      background: 'rgba(124, 58, 237, 0.08)',
      borderRadius: 'var(--osd-radius)',
      fontSize: 28,
      fontWeight: 400,
      lineHeight: 1.4,
    }}
  >
    {text}
  </div>
);

// ============================================================================
// PAGE 11: Discussion - Metric Tension
// ============================================================================
const Discussion03: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0 200px',
      textAlign: 'center',
    }}
  >
    <div
      style={{
        fontSize: 14,
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        color: 'var(--osd-accent)',
        marginBottom: 48,
      }}
    >
      Discussion
    </div>
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 72,
        fontWeight: 400,
        fontStyle: 'italic',
        margin: 0,
        lineHeight: 1.2,
      }}
    >
      "Revenue per Employee is easier to sell to CFOs. Why is Capacity Created better?"
    </h2>
    <p
      style={{
        fontSize: 28,
        color: muted,
        marginTop: 64,
        maxWidth: 900,
        lineHeight: 1.6,
      }}
    >
      The human cost problem: optimizing for headcount reduction is not a narrative Andus wants to tell.
    </p>
  </div>
);

// ============================================================================
// PAGE 12: Section - Scalability
// ============================================================================
const Section04: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-accent)',
      color: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 160px',
    }}
  >
    <div
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 120,
        fontWeight: 300,
        opacity: 0.3,
        marginBottom: 24,
      }}
    >
      04
    </div>
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 96,
        fontWeight: 400,
        margin: 0,
        lineHeight: 1.1,
      }}
    >
      Scalability
    </h2>
    <p
      style={{
        fontSize: 32,
        fontWeight: 300,
        marginTop: 32,
        opacity: 0.8,
      }}
    >
      What makes this repeatable?
    </p>
  </div>
);

// ============================================================================
// PAGE 13: Content - Day 91 Problem
// ============================================================================
const Day91: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 160px',
    }}
  >
    <div
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 200,
        fontWeight: 400,
        color: 'var(--osd-accent)',
        lineHeight: 1,
        marginBottom: 32,
      }}
    >
      Day 91
    </div>
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 64,
        fontWeight: 400,
        margin: 0,
        marginBottom: 32,
      }}
    >
      What does a client do with Andus after the initial engagement ends?
    </h2>
    <p
      style={{
        fontSize: 32,
        fontWeight: 300,
        color: muted,
        maxWidth: 1200,
        lineHeight: 1.5,
      }}
    >
      The current product suite is heavily weighted toward onboarding and assessment. Without a compelling ongoing value story, Andus risks becoming a one-time engagement rather than a long-term partnership.
    </p>
  </div>
);

// ============================================================================
// PAGE 14: Discussion - Project vs Partnership
// ============================================================================
const Discussion04: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0 200px',
      textAlign: 'center',
    }}
  >
    <div
      style={{
        fontSize: 14,
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        color: 'var(--osd-accent)',
        marginBottom: 48,
      }}
    >
      Discussion
    </div>
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 80,
        fontWeight: 400,
        fontStyle: 'italic',
        margin: 0,
        lineHeight: 1.2,
      }}
    >
      "Is Andus a project or a partnership?"
    </h2>
    <div
      style={{
        display: 'flex',
        gap: 64,
        marginTop: 80,
      }}
    >
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: subtle,
            marginBottom: 16,
          }}
        >
          PROJECT
        </div>
        <p style={{ fontSize: 28, color: muted, margin: 0, lineHeight: 1.5 }}>
          One-time diagnostic, training, then handoff. Lower LTV.
        </p>
      </div>
      <div
        style={{
          width: 2,
          background: 'var(--osd-accent)',
          opacity: 0.3,
        }}
      />
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: 'var(--osd-accent)',
            marginBottom: 16,
          }}
        >
          PARTNERSHIP
        </div>
        <p style={{ fontSize: 28, color: muted, margin: 0, lineHeight: 1.5 }}>
          Ongoing Quorum access, managed agents, quarterly re-assessment.
        </p>
      </div>
    </div>
  </div>
);

// ============================================================================
// PAGE 15: Section - Current Thinking
// ============================================================================
const Section05: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-accent)',
      color: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 160px',
    }}
  >
    <div
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 120,
        fontWeight: 300,
        opacity: 0.3,
        marginBottom: 24,
      }}
    >
      05
    </div>
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 96,
        fontWeight: 400,
        margin: 0,
        lineHeight: 1.1,
      }}
    >
      Current Thinking
    </h2>
    <p
      style={{
        fontSize: 32,
        fontWeight: 300,
        marginTop: 32,
        opacity: 0.8,
      }}
    >
      Evaluated through these lenses
    </p>
  </div>
);

// ============================================================================
// PAGE 16: Content - Open Questions
// ============================================================================
const OpenQuestions: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      padding: 100,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 64,
        fontWeight: 400,
        margin: 0,
        marginBottom: 56,
      }}
    >
      Three questions to resolve
    </h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      <QuestionCard
        num="01"
        question="Should the Simulator be entertainment, assessment, or both?"
        context="A game that's fun but doesn't generate insights is just marketing."
      />
      <QuestionCard
        num="02"
        question="Who is the actual buyer?"
        context="CEO? CTO? CHRO? Each has different budgets, pain points, and timelines."
      />
      <QuestionCard
        num="03"
        question="What's the repeatable motion beyond ServiceNow?"
        context="One marquee client doesn't make a business."
      />
    </div>
  </div>
);

const QuestionCard = ({
  num,
  question,
  context,
}: {
  num: string;
  question: string;
  context: string;
}) => (
  <div
    style={{
      display: 'flex',
      gap: 32,
      alignItems: 'flex-start',
    }}
  >
    <div
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 36,
        fontStyle: 'italic',
        color: 'var(--osd-accent)',
        minWidth: 64,
      }}
    >
      {num}
    </div>
    <div>
      <div
        style={{
          fontSize: 36,
          fontWeight: 500,
          marginBottom: 8,
          lineHeight: 1.3,
        }}
      >
        {question}
      </div>
      <div style={{ fontSize: 28, color: muted, fontWeight: 300 }}>{context}</div>
    </div>
  </div>
);

// ============================================================================
// PAGE 17: Discussion - Scope
// ============================================================================
const Discussion05: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0 200px',
      textAlign: 'center',
    }}
  >
    <div
      style={{
        fontSize: 14,
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        color: 'var(--osd-accent)',
        marginBottom: 48,
      }}
    >
      Discussion
    </div>
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 80,
        fontWeight: 400,
        fontStyle: 'italic',
        margin: 0,
        lineHeight: 1.2,
      }}
    >
      "What does Andus NOT do?"
    </h2>
    <p
      style={{
        fontSize: 28,
        color: muted,
        marginTop: 64,
        maxWidth: 900,
        lineHeight: 1.6,
      }}
    >
      Defining boundaries helps focus resources and makes the value prop clearer. It also prevents overcommitment to clients.
    </p>
    <div
      style={{
        display: 'flex',
        gap: 32,
        marginTop: 64,
      }}
    >
      <ScopeOption text="No implementation?" />
      <ScopeOption text="No ongoing IT support?" />
      <ScopeOption text="No mass employee training?" />
    </div>
  </div>
);

const ScopeOption = ({ text }: { text: string }) => (
  <div
    style={{
      padding: '20px 32px',
      background: 'rgba(124, 58, 237, 0.1)',
      borderRadius: 'var(--osd-radius)',
      fontSize: 24,
      color: muted,
    }}
  >
    {text}
  </div>
);

// ============================================================================
// PAGE 18: Closing
// ============================================================================
const Closing: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 160px',
    }}
  >
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 80,
        fontWeight: 400,
        margin: 0,
        marginBottom: 64,
      }}
    >
      Next steps
    </h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <NextStep num="01" text="Lock the wedge product decision" />
      <NextStep num="02" text="Define the Day 91 engagement model" />
      <NextStep num="03" text="Document ServiceNow learnings for repeatability" />
    </div>
    <div
      style={{
        marginTop: 80,
        paddingTop: 48,
        borderTop: '1px solid rgba(0,0,0,0.1)',
      }}
    >
      <p style={{ fontSize: 28, color: muted, margin: 0 }}>
        Full strategy docs & prototypes available at{' '}
        <span style={{ color: 'var(--osd-accent)', fontWeight: 500 }}>
          shanelykins.github.io/andus
        </span>
      </p>
    </div>
  </div>
);

const NextStep = ({ num, text }: { num: string; text: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
    <div
      style={{
        width: 48,
        height: 48,
        borderRadius: '50%',
        background: 'var(--osd-accent)',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--osd-font-display)',
        fontSize: 24,
        fontWeight: 500,
      }}
    >
      {num}
    </div>
    <span style={{ fontSize: 36, fontWeight: 400 }}>{text}</span>
  </div>
);

export const meta: SlideMeta = { title: 'Product Strategy Pressure Test' };

export default [
  Cover,
  Agenda,
  Section01,
  Discussion01,
  PositioningTension,
  Section02,
  ProductEcosystem,
  Discussion02,
  Section03,
  NorthStar,
  Discussion03,
  Section04,
  Day91,
  Discussion04,
  Section05,
  OpenQuestions,
  Discussion05,
  Closing,
] satisfies Page[];
