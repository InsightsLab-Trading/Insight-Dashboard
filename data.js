// ============================================================
// INSIGHT DASHBOARD — DATA FILE
// Update this file each session. Do NOT modify index.html.
// ============================================================

const MARKET_DATA = {

  // ── Meta ──────────────────────────────────────────────────
  meta: {
    instrument: "NQ Futures (ENQM26)",
    symbol:     "ENQM26",
    date:       "April 14, 2026",
    session:    "US Regular Hours",
    generated:  "April 14, 2026",
  },

  // ── Time Updated ─────────────────────────────────────────
  // Update this every session so the dashboard shows when it was last run.
  timeUpdated: {
    timestamp: "Haven't computed",   // e.g. "April 14, 2026 · 9:45 AM ET"
    analyst:   "Haven't computed",   // e.g. "Pre-Market Analysis"
    note:      "Haven't computed",   // e.g. "Next update: EOD"
  },

  // ── Alert bar (set show: false to hide) ──────────────────
  alert: {
    show: true,
    text: "<strong>Month High Breakout + Multi-TF Overbought:</strong> ENQM26 at ~25,985 has breached the prior month high (25,969.25) — new month high printing at 25,990.00. 1H RSI 80.94 and 4H RSI 78.88 — extreme overbought across timeframes. Large specs net LONG +12,525 (COT Apr 7). Key levels: 25,990 (new resistance), 25,969.25 (broken resistance, now support).",
  },

  // ── Top stat cards ────────────────────────────────────────
  stats: {
    price: {
      value:       "25,985",
      label:       "ENQM26 Last Price",
      change:      "▲ Month High Breakout",
      changeClass: "up",
    },
    bias: {
      signal:      "Bullish",
      signalClass: "signal-bull",
      dot:         "●",
      description: "All timeframes aligned bullish. Price broken above prior month high 25,969.25 — new month high 25,990. Broad risk-on confirmed across indices, sectors, and COT positioning.",
    },
    volatility: {
      value:       "18.37",
      valueClass:  "neutral",
      label:       "VIX Index",
      change:      "▼ −3.92% · Contracting",
      changeClass: "down",
    },
    breadth: [
      { ticker: "IWM", pct: "+1.54%", cls: "up" },
      { ticker: "QQQ", pct: "+1.21%", cls: "up" },
      { ticker: "SPY", pct: "+0.95%", cls: "up" },
      { ticker: "DIA", pct: "+0.61%", cls: "up" },
    ],
  },

  // ── Multi-timeframe analysis ──────────────────────────────
  timeframes: [
    {
      label: "15 Minute", price: "25,985",
      signal: "Above EMAs", signalClass: "signal-bull",
      rows: [
        { key: "EMA(9)",  val: "25,937.94", cls: "" },
        { key: "EMA(21)", val: "25,888.96", cls: "" },
      ],
      rsi:  { value: 73.91, label: "73.91", cls: "neutral", gradient: "linear-gradient(90deg,#4ade80,#fbbf24)" },
      note: { text: "Price well above both EMAs. Cleared PDHigh (25,969.25) and extended. RSI 73.91 elevated but not extreme — momentum supports continuation on 15m.", cls: "" },
    },
    {
      label: "1 Hour", price: "25,985",
      signal: "Extreme Overbought", signalClass: "signal-warn",
      rows: [
        { key: "EMA(9)",   val: "25,654.52", cls: "" },
        { key: "EMA(21)",  val: "25,716.54", cls: "" },
        { key: "PDHigh",   val: "25,599.25", cls: "up" },
        { key: "PDMiddle", val: "25,201.88", cls: "neutral" },
        { key: "PDLow",    val: "24,904.50", cls: "down" },
      ],
      rsi:  { value: 80.94, label: "80.94", cls: "down", gradient: "linear-gradient(90deg,#4ade80,#f87171)" },
      note: { text: "⚠ RSI extreme overbought at 80.94. Price extended ~269pts above EMA21. Highest mean-reversion risk. 25,969.25 flips to support.", cls: "down" },
    },
    {
      label: "4 Hour", price: "25,985",
      signal: "Strong Bull", signalClass: "signal-bull",
      rows: [
        { key: "EMA(9)",    val: "25,636.01", cls: "" },
        { key: "EMA(21)",   val: "25,386.06", cls: "" },
        { key: "Week High", val: "25,990.00", cls: "up" },
        { key: "Week Mid",  val: "25,447.35", cls: "neutral" },
        { key: "Week Low",  val: "24,904.50", cls: "down" },
      ],
      rsi:  { value: 78.88, label: "78.88", cls: "down", gradient: "linear-gradient(90deg,#4ade80,#f87171)" },
      note: { text: "Price extended above prior week high — new week high 25,990. RSI 78.88, overbought. 4H EMA structure firmly bullish. ~349pts above EMA(9).", cls: "" },
    },
    {
      label: "Daily", price: "25,985",
      signal: "Uptrend", signalClass: "signal-bull",
      rows: [
        { key: "EMA(9)",     val: "25,091.17", cls: "" },
        { key: "EMA(21)",    val: "24,780.68", cls: "" },
        { key: "Month High", val: "25,990.00", cls: "up" },
        { key: "Month Mid",  val: "24,628.00", cls: "neutral" },
        { key: "Month Low",  val: "23,666.00", cls: "down" },
      ],
      rsi:  { value: 65, label: "~65", cls: "up", gradient: "linear-gradient(90deg,#4ade80,#4f8ef7)" },
      note: { text: "V-shape recovery from Feb lows ~23,400 complete. EMA stack firmly bullish. Daily RSI ~65 — not yet overbought at this timeframe.", cls: "" },
    },
  ],

  // ── Key price levels ─────────────────────────────────────
  keyLevels: [
    { label: "New Month High / Resistance",           val: "25,990.00", cls: "down" },
    { label: "Current Price",                         val: "25,985.00", cls: "" },
    { label: "Prior Month High (Broken → Support)",   val: "25,969.25", cls: "neutral" },
    { label: "Week High",                             val: "25,990.00", cls: "neutral" },
    { label: "PDHigh",                                val: "25,599.25", cls: "neutral" },
    { label: "Daily EMA(9)",                          val: "25,091.17", cls: "up" },
    { label: "Daily EMA(21)",                         val: "24,780.68", cls: "up" },
    { label: "Week Low / Support",                    val: "24,904.50", cls: "up" },
    { label: "Month Low",                             val: "23,666.00", cls: "up" },
  ],

  // ── US Index performance ─────────────────────────────────
  indices: [
    { name: "S&P 500",      price: "8,963.88",  chg: "+3.12%", cls: "up" },
    { name: "Dow Jones",    price: "48,532.00", chg: "+0.60%", cls: "up" },
    { name: "Nasdaq",       price: "23,608.96", chg: "+1.03%", cls: "up" },
    { name: "Nasdaq 100",   price: "25,811.67", chg: "+1.07%", cls: "up" },
    { name: "Russell 2000", price: "2,705.26",  chg: "+1.30%", cls: "up" },
    { name: "Dollar Index", price: "$97.91",    chg: "−0.97%", cls: "down" },
  ],

  // ── Bond yields ───────────────────────────────────────────
  yields: [
    { tenor: "2Y",  val: "3.78%", chg: "−0.03", cls: "down" },
    { tenor: "10Y", val: "4.38%", chg: "−0.01", cls: "down" },
    { tenor: "30Y", val: "4.98%", chg: "−0.01", cls: "down" },
  ],

  // ── Volatility ────────────────────────────────────────────
  volatility: [
    { label: "VIX",           val: "18.37", chg: "−3.92%", chgCls: "down" },
    { label: "NASDAQ VIX",    val: "21.76", chg: "−1.94%", chgCls: "down" },
    { label: "MOVE Bond Vol", val: "72.15", chg: "−3.64%", chgCls: "down" },
  ],

  // ── Global indices ────────────────────────────────────────
  globalIndices: [
    { name: "Euro Stoxx 50", chg: "+1.19%", cls: "up" },
    { name: "FTSE 100",      chg: "+0.06%", cls: "up" },
    { name: "DAX",           chg: "+1.12%", cls: "up" },
    { name: "Nikkei 225",    chg: "+2.33%", cls: "up" },
    { name: "Hang Seng",     chg: "+0.88%", cls: "up" },
    { name: "IBEX 35",       chg: "+1.23%", cls: "up" },
  ],

  // ── Sector performance ────────────────────────────────────
  sectors: [
    { name: "Consumer Discretionary", barWidth: 100, barColor: "#4ade80",                       val: "+2.21%", cls: "up" },
    { name: "Communication Services", barWidth: 67,  barColor: "#4ade80",                       val: "+1.48%", cls: "up" },
    { name: "Technology",             barWidth: 64,  barColor: "#4ade80",                       val: "+1.41%", cls: "up" },
    { name: "Real Estate",            barWidth: 41,  barColor: "#4ade80",                       val: "+0.91%", cls: "up" },
    { name: "Health Care",            barWidth: 28,  barColor: "#4ade80",                       val: "+0.61%", cls: "up" },
    { name: "Industrials",            barWidth: 18,  barColor: "#4ade80",                       val: "+0.39%", cls: "up" },
    { name: "Financials",             barWidth: 12,  barColor: "#4ade80",                       val: "+0.26%", cls: "up" },
    { name: "Utilities",              barWidth: 11,  barColor: "#4ade80",                       val: "+0.25%", cls: "up" },
    { name: "Consumer Staples",       barWidth: 5,   barColor: "rgba(251,191,36,0.7)",          val: "−0.10%", cls: "down" },
    { name: "Materials",              barWidth: 7,   barColor: "#f87171",                       val: "−0.16%", cls: "down" },
    { name: "Energy",                 barWidth: 99,  barColor: "#f87171",                       val: "−2.19%", cls: "down" },
  ],

  // ── Notable movers ────────────────────────────────────────
  movers: [
    { ticker: "AMZN", pct: "+3.84%", cls: "up",   bg: "rgba(74,222,128,0.12)",  border: "rgba(74,222,128,0.25)" },
    { ticker: "TSLA", pct: "+3.70%", cls: "up",   bg: "rgba(74,222,128,0.10)",  border: "rgba(74,222,128,0.22)" },
    { ticker: "GOOG", pct: "+3.18%", cls: "up",   bg: "rgba(74,222,128,0.08)",  border: "rgba(74,222,128,0.18)" },
    { ticker: "JPM",  pct: "−0.55%", cls: "down", bg: "rgba(248,113,113,0.10)", border: "rgba(248,113,113,0.22)" },
    { ticker: "AAPL", pct: "−0.32%", cls: "down", bg: "rgba(248,113,113,0.08)", border: "rgba(248,113,113,0.18)" },
  ],

  // ── Index correlations ────────────────────────────────────
  correlations: [
    { pair: "SPY / QQQ", val: "0.990" },
    { pair: "SPY / DIA", val: "0.981" },
    { pair: "SPY / IWM", val: "0.986" },
    { pair: "QQQ / IWM", val: "0.958" },
    { pair: "QQQ / DIA", val: "0.958" },
    { pair: "DIA / IWM", val: "0.984" },
  ],
  correlationsNote: "All indices highly correlated — unified risk-on move. IWM outperforming (+1.54%) signals broad market participation.",

  // ── Commodities & FX ─────────────────────────────────────
  commodities: [
    { label: "Crude Oil (WTI)", val: "$91.64",    chg: "−7.51%", chgCls: "down" },
    { label: "Brent Crude",     val: "$94.90",    chg: "−4.49%", chgCls: "down" },
    { label: "Natural Gas",     val: "$2.68",     chg: "−0.91%", chgCls: "down" },
    { label: "Gold",            val: "$4,865.80", chg: "+2.06%", chgCls: "up" },
    { label: "Copper",          val: "$6.99",     chg: "+1.58%", chgCls: "up" },
    { label: "EUR/USD",         val: "$1.18",     chg: "+0.33%", chgCls: "up" },
    { label: "GBP/USD",         val: "$1.36",     chg: "+0.49%", chgCls: "up" },
    { label: "USD/JPY",         val: "¥158.05",   chg: "−0.36%", chgCls: "down" },
    { label: "USD/CHF",         val: "Fr0.78",    chg: "−0.77%", chgCls: "down" },
  ],

  // ── Crypto ────────────────────────────────────────────────
  crypto: [
    { label: "Bitcoin",  val: "$74,404", chg: "−0.64%", chgCls: "down" },
    { label: "Ethereum", val: "$2,323",  chg: "−2.01%", chgCls: "down" },
    { label: "Solana",   val: "$84.21",  chg: "−2.03%", chgCls: "down" },
    { label: "XRP",      val: "$1.36",   chg: "−1.29%", chgCls: "down" },
  ],

  // ── COT Report ────────────────────────────────────────────
  cot: {
    title: "COT Report · Nasdaq Mini Futures · As of Apr 7, 2026",
    groups: [
      {
        label: "Non-Commercial (Large Specs)",
        long:  { val: "72,783",  chg: "−5,845", chgCls: "down" },
        short: { val: "60,258",  chg: "+2,230", chgCls: "up" },
        net:   { val: "+12,525", cls: "up" },
        signal: "Specs Net Long", signalClass: "signal-bull",
      },
      {
        label: "Commercial (Hedgers)",
        long:  { val: "137,538", chg: "+8,786", chgCls: "up" },
        short: { val: "147,843", chg: "−3,617", chgCls: "down" },
        net:   { val: "−10,305", cls: "down" },
        signal: "Hedgers Slight Short", signalClass: "signal-neut",
      },
      {
        label: "Non-Reportable (Small Specs)",
        long:  { val: "30,929", chg: "−3,126", chgCls: "down" },
        short: { val: "33,949", chg: "+1,202", chgCls: "up" },
        net:   { val: "−3,020", cls: "down" },
        signal: "Small Specs Net Short", signalClass: "signal-neut",
      },
    ],
    openInterest: { val: "246,794", chg: "+1,472", chgCls: "up" },
    note: "Large specs net LONG +12,525 — structural bullish positioning confirmed. Rising OI (+1,472) alongside the price breakout = healthy trend expansion. Small specs net short is a contrarian bullish signal.",
  },

  // ── Trade thesis ──────────────────────────────────────────
  thesis: {
    bull: {
      title: "📈 Bull Case",
      text: "ENQM26 broken above prior month high (25,969.25) — new highs at 25,990. All major US indices higher: S&P 500 +3.12%, Nasdaq 100 +1.07%, Russell 2000 +1.30%. VIX contracting to 18.37. COT large specs net LONG +12,525 with rising OI. Nikkei +2.33%, DAX +1.12% confirm global participation. Dollar weakness (DXY −0.97%) tailwind. Daily RSI ~65 — ample room on primary trend timeframe.",
    },
    bear: {
      title: "⚠ Bear Case / Risks",
      text: "1H RSI 80.94 (extreme overbought) and 4H RSI 78.88 — multi-timeframe overbought convergence. Price in monthly price discovery — sharp reversals possible. Crypto broadly weak (BTC −0.64%, ETH −2.01%). WTI Crude −7.51% signals macro fragility. Gold +2.06% rallying alongside equities = hedge demand intact. 30Y yield 4.98% persistent.",
    },
    scenarios: {
      title: "🎯 Key Scenarios",
      text: "Hold above 25,969.25 on any pullback = bullish continuation — targets 26,200 then 26,500+. Failure to hold 25,969.25 on retest = potential false breakout — look for acceleration back to 4H EMA(9) at 25,636 then week mid 25,447. Watch energy/crude: sustained WTI below $90 adds macro risk-off pressure.",
    },
    bullets: [
      "ENQM26 at ~25,985 broken above prior month high 25,969.25 — new month high at 25,990.00 — price in breakout / price discovery mode",
      "1H RSI 80.94 is the session's most extreme overbought reading — mean-reversion risk elevated; however daily RSI ~65 shows primary trend has room",
      "Nasdaq Mini COT (Apr 7): Large specs LONG +12,525 — bullish positioning intact; rising OI (+1,472) with new price highs = trend confirmation",
      "IWM +1.54% leads all major indices — broad market participation confirmed; S&P 500 +3.12% outsized, Nikkei +2.33% global risk-on",
      "Dollar weakness (DXY −0.97%) supportive of equities; Gold +2.06% holding alongside stocks signals macro hedge demand remains",
      "WTI Crude −7.51% and Energy sector −2.19% are the sole risk-off outliers; crypto (BTC −0.64%, ETH −2.01%) diverging from equity rally",
      "AMZN +3.84%, TSLA +3.70%, GOOG +3.18% driving Consumer Discretionary (+2.21%) and Comm Services (+1.48%); JPM −0.55% and AAPL −0.32% notable laggards",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // NEW SECTIONS — update these each session
  // ══════════════════════════════════════════════════════════

  // ── Possible Playbooks ────────────────────────────────────
  // Minimum 2 setups. direction: "long" | "short" | "neutral"
  // details[].cls: "up" | "down" | "" (optional coloring)
  playbooks: {
    context: "Haven't computed — current market context will determine which orderflow setups are in play. Setups below are placeholders showing structure.",
    setups: [
      {
        name:        "Haven't computed",
        direction:   "long",
        concept:     "Auction Continuation",
        description: "Haven't computed — describe the orderflow setup in detail: what initiates it, where the entry trigger is, what confirms participation, and the target logic based on auction theory.",
        details: [
          { key: "Trigger",      val: "Haven't computed" },
          { key: "Entry Zone",   val: "Haven't computed" },
          { key: "Confirmation", val: "Haven't computed" },
          { key: "Target 1",     val: "Haven't computed", cls: "up" },
          { key: "Target 2",     val: "Haven't computed", cls: "up" },
          { key: "Stop",         val: "Haven't computed", cls: "down" },
          { key: "Invalidation", val: "Haven't computed" },
          { key: "Risk/Reward",  val: "Haven't computed" },
        ],
      },
      {
        name:        "Haven't computed",
        direction:   "short",
        concept:     "Failed Auction / Mean Reversion",
        description: "Haven't computed — describe the failed auction or exhaustion setup: what the overbought/overextension signal is, where price needs to reject, and how to confirm participation on the short side.",
        details: [
          { key: "Trigger",      val: "Haven't computed" },
          { key: "Entry Zone",   val: "Haven't computed" },
          { key: "Confirmation", val: "Haven't computed" },
          { key: "Target 1",     val: "Haven't computed", cls: "up" },
          { key: "Target 2",     val: "Haven't computed", cls: "up" },
          { key: "Stop",         val: "Haven't computed", cls: "down" },
          { key: "Invalidation", val: "Haven't computed" },
          { key: "Risk/Reward",  val: "Haven't computed" },
        ],
      },
    ],
  },

  // ── News Analysis (Grok Input) ────────────────────────────
  // Populate from Grok's structured news response each session.
  // sentimentScore, confidenceScore, volatilityRisk: integers 0–100
  // directionalBias: "Bullish" | "Bearish" | "Neutral"
  newsAnalysis: {
    sentimentScore:  78,
    confidenceScore: 72,
    volatilityRisk:  38,
    directionalBias: "Bullish",
    sessionCharacter: "Trend-supportive · Expansion potential",

    summary: "Cooler-than-expected PPI data released this morning (m/m 0.5% vs 1.1% est; YoY 4.0% vs 4.6% est) eased inflation fears and triggered a classic risk-on reaction in growth/tech. X crowd tone is decisively bullish on Nasdaq/QQQ leadership. No major scheduled releases remain today — only lower-impact Fed speakers — so the backdrop supports continuation rather than whipsaw.",

    xSentiment: {
      overview: "Overall tone is bullish and broad-based among macro/tech accounts. Dominant narrative: cooler PPI removes near-term hawkish pressure, unlocking rotation back into mega-cap tech/AI. Minimal fear or hedging chatter. Signal quality high — credible accounts and price action alignment; low meme/engagement-bait noise.",
      bullets: [
        "Dominant narrative: Cooler PPI removes near-term hawkish pressure, unlocking rotation back into mega-cap tech/AI; Nasdaq posting multi-year streak length records",
        "Crowd psychology: Confident and broad-based; focus on 'inflation cooled → yields ease → growth re-rated higher'",
        "Signal quality: High — credible accounts and price action alignment; low meme/engagement-bait noise",
        "Trading implication: Supports trend-following long bias; early strength has follow-through potential, not fade conditions",
      ],
    },

    macro: {
      overview: "PPI Final Demand (8:30 ET) — m/m 0.5% (est 1.1%, prior 0.5%); Core PPI m/m 0.1% (est 0.4%); YoY 4.0% (est 4.6%). Event risk is now LOW — data already out; remaining Fed speakers are narrative fillers, not market movers. Cooler PPI = dovish rate-path signal → lower real yields → higher equity multiples, especially long-duration tech/growth.",
      bullets: [
        "PPI Final Demand m/m: 0.5% (est 1.1%) — meaningful undershoot, directly supportive of lower-for-longer Fed path",
        "Core PPI m/m: 0.1% (est 0.4%) — even cooler core print amplifies dovish read",
        "Upcoming: Fed speakers (Barr 12:45 ET, Barkin 12:45 ET, Miran 6:20 ET) — no high-impact data remaining",
        "Macro interpretation: Removes pre-data caution; favors buy-the-dip or trend-continuation setups over headline-driven reversals",
      ],
    },

    crossMarket: "Risk regime: Risk-on. Likely session character: Trend-supportive with expansion potential (tech-led follow-through). Sustained Nasdaq outperformance + falling 10-yr yields + continued NVDA/QQQ leadership confirms the read. Any hawkish surprise from Fed speakers or sudden geopolitical flare that spikes VIX would weaken it.",

    confirms: [
      "Sustained Nasdaq outperformance and QQQ/NVDA leadership into close",
      "Falling 10-year yields through the session",
      "VIX continuing to contract below 18",
      "Mega-cap tech (AMZN, TSLA, GOOG) holding gains or extending",
    ],
    weakens: [
      "Hawkish surprise from Fed speakers creating a narrative volatility spike",
      "10-year yields reversing and pushing higher intraday",
      "VIX spike above 22 on any geopolitical flare",
      "Crypto (BTC) breaking below $74,000 support signaling broader risk-off",
    ],

    keyDrivers: [
      "Cooler PPI directly supportive of lower-for-longer Fed path — the session's primary macro driver",
      "Mega-cap tech/AI leadership intact (NVDA streak + infrastructure rotation)",
      "No high-impact data remaining — reduced event whipsaw risk supports trend continuation",
      "Broad X risk-on tone with minimal counter-narrative",
      "Falling real yields benefiting Nasdaq valuation multiple expansion",
    ],

    scoreRationale: "Strong dovish macro surprise + aligned bullish X tone pushes score well into bullish zone, but not 80+ because (1) PPI is medium (not headline CPI) impact and (2) late-session timing means some intraday momentum may already be priced; confidence tempered slightly by speaker schedule and post-data digestion phase.",
  },

  // ── Insight Meter ─────────────────────────────────────────
  // score: integer 0–100 (1=max bearish, 100=max bullish, 50=neutral)
  // label: short verdict text (e.g. "Bullish", "Bearish", "Neutral")
  // sublabel: one-line context (e.g. "All TFs aligned · Low VIX")
  insightMeter: {
    score:    75,
    label:    "Haven't computed",
    sublabel: "Haven't computed",
  },

  // ── Insight's Plan ────────────────────────────────────────
  // title: session headline
  // verdict: "Bullish Bias" | "Bearish Bias" | "Neutral / Wait"
  // overview: 2–3 sentence summary of the overall plan
  // scenarios[]: condition → action pairs
  // execution[]: ordered steps for the session
  // invalidations[]: what would kill the plan
  insightPlan: {
    title:    "Haven't computed",
    verdict:  "Haven't computed",
    overview: "Haven't computed — overall plan summary goes here: what the primary edge is, what conditions the plan is built on, and what the overall risk posture is for the session.",
    scenarios: [
      { condition: "Haven't computed", action: "Haven't computed — describe what to do if this condition is met." },
      { condition: "Haven't computed", action: "Haven't computed — describe what to do if this condition is met." },
      { condition: "Haven't computed", action: "Haven't computed — describe what to do if this condition is met." },
    ],
    execution: [
      "Haven't computed — Step 1: describe the first action or observation to make at session open.",
      "Haven't computed — Step 2: describe the primary setup to look for and how to enter it.",
      "Haven't computed — Step 3: describe how to manage the trade or when to step aside.",
      "Haven't computed — Step 4: describe end-of-session review criteria.",
    ],
    invalidations: [
      "Haven't computed — primary invalidation that kills the plan entirely",
      "Haven't computed — secondary invalidation that shifts bias",
      "Haven't computed — macro/news event that overrides the technical plan",
    ],
  },

};
