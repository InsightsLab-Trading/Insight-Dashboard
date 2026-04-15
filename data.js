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
    session:    "US After Hours",
    generated:  "April 14, 2026",
  },

  // ── Time Updated ─────────────────────────────────────────
  timeUpdated: {
    timestamp: "April 14, 2026 · After Hours",
    analyst:   "After Hours Update",
    note:      "Next update: Next Session Open",
  },

  // ── Alert bar (set show: false to hide) ──────────────────
  alert: {
    show: true,
    text: "<strong>26,025 After Hours — New Session Highs, EMAs Compressing Bullishly:</strong> ENQM26 trading ~26,025.54 after hours. 15m EMA(9) at 26,025.36 and price are nearly flush — tight coil near highs. Week/Month High confirmed at 26,038.25. 1H RSI now 81.73 (further elevated from 80.51) and 4H RSI 79.77 — multi-TF overbought pressure builds. All EMA levels have stepped higher with price. Key support: 15m EMA(21) 26,002.20 (prior month high area), then 1H EMA(9) 25,965.13. Bull case: sustained hold above 26,002 targets 26,038.25 week/month high then price discovery above.",
  },

  // ── Top stat cards ────────────────────────────────────────
  stats: {
    price: {
      value:       "26,025",
      label:       "ENQM26 Last Price",
      change:      "▲ After Hours · New Session High 26,038.25",
      changeClass: "up",
    },
    bias: {
      signal:      "Bullish",
      signalClass: "signal-bull",
      dot:         "●",
      description: "All timeframes remain aligned bullish after hours. Price settled ~26,025 with EMAs stepping higher across all TFs. 15m EMA(9) at 26,025.36 nearly touching price — tight bullish coil. Week/Month High 26,038.25 is the immediate upside reference. COT large specs net LONG +12,525 structural tailwind intact. Risk: 1H RSI 81.73 and 4H RSI 79.77 at extreme overbought — position sizing discipline required.",
    },
    volatility: {
      value:       "18.36",
      valueClass:  "neutral",
      label:       "VIX Index",
      change:      "▼ −3.97% · Contracting",
      changeClass: "down",
    },
    breadth: [
      { ticker: "IWM", pct: "+1.42%", cls: "up" },
      { ticker: "QQQ", pct: "+1.05%", cls: "up" },
      { ticker: "SPY", pct: "+0.99%", cls: "up" },
      { ticker: "DIA", pct: "+0.62%", cls: "up" },
    ],
  },

  // ── Multi-timeframe analysis ──────────────────────────────
  timeframes: [
    {
      label: "15 Minute", price: "26,025",
      signal: "Momentum Bull · EMA Coil", signalClass: "signal-bull",
      rows: [
        { key: "EMA(9)",  val: "26,025.36", cls: "" },
        { key: "EMA(21)", val: "26,002.20", cls: "" },
      ],
      rsi:  { value: 69.34, label: "69.34", cls: "neutral", gradient: "linear-gradient(90deg,#4ade80,#fbbf24)" },
      note: { text: "Price and EMA(9) nearly identical at 26,025 — tight coil near highs. EMA(21) at 26,002.20 is immediate key support (former month high). RSI 69.34 — slightly cooled from 70.12 intraday high, healthy for continuation. Bullish EMA stack intact. Hold above 26,002 = continuation; close below = structure break.", cls: "" },
    },
    {
      label: "1 Hour", price: "26,028",
      signal: "Extreme Overbought", signalClass: "signal-warn",
      rows: [
        { key: "EMA(9)",    val: "25,965.13", cls: "" },
        { key: "EMA(21)",   val: "25,830.40", cls: "" },
        { key: "pMiddle",   val: "25,781.42", cls: "neutral" },
        { key: "pLow",      val: "24,560.00", cls: "down" },
      ],
      rsi:  { value: 81.73, label: "81.73", cls: "down", gradient: "linear-gradient(90deg,#4ade80,#f87171)" },
      note: { text: "⚠ RSI further elevated to 81.73 (from 80.51 intraday) — extreme overbought deepening after hours. Price ~60pts above 1H EMA(9). EMAs have stepped up: EMA(9) 25,965, EMA(21) 25,830 — both now higher than earlier session levels. Mean-reversion risk elevated but trend-dominant. First support: 1H EMA(9) at 25,965.13.", cls: "down" },
    },
    {
      label: "4 Hour", price: "26,038",
      signal: "Strong Bull", signalClass: "signal-bull",
      rows: [
        { key: "EMA(9)",    val: "25,779.70", cls: "" },
        { key: "EMA(21)",   val: "25,498.81", cls: "" },
        { key: "Week High", val: "26,038.25", cls: "up" },
        { key: "Week Mid",  val: "Not Computed", cls: "neutral" },
        { key: "Week Low",  val: "Not Computed", cls: "down" },
      ],
      rsi:  { value: 79.77, label: "79.77", cls: "down", gradient: "linear-gradient(90deg,#4ade80,#f87171)" },
      note: { text: "Price tagged Week/Month High at 26,038.25 — confirmed reference level. 4H EMA(9) stepped up to 25,779.70 and EMA(21) to 25,498.81. RSI 79.77 — overbought but trending. ~246pts above 4H EMA(9). Price holding near week/month high after hours is constructive — breakout above 26,038.25 opens price discovery. EMA structure firmly stacked bullish.", cls: "" },
    },
    {
      label: "Daily", price: "26,025",
      signal: "Uptrend · Room to Run", signalClass: "signal-bull",
      rows: [
        { key: "EMA(9)",     val: "Not Computed", cls: "" },
        { key: "EMA(21)",    val: "Not Computed", cls: "" },
        { key: "Month High", val: "26,038.25", cls: "up" },
        { key: "Month Mid",  val: "Not Computed", cls: "neutral" },
        { key: "Month Low",  val: "Not Computed", cls: "down" },
      ],
      rsi:  { value: 65, label: "~65", cls: "up", gradient: "linear-gradient(90deg,#4ade80,#4f8ef7)" },
      note: { text: "V-shape recovery intact. Month High confirmed at 26,038.25. Daily RSI ~65 estimated — ample room before overbought on primary timeframe. Daily EMA values not visible in current chart view. Macro tailwinds (soft PPI, VIX contraction) support higher daily close. Next session open above 26,003 maintains bullish daily bias.", cls: "" },
    },
  ],

  // ── Key price levels ─────────────────────────────────────
  keyLevels: [
    { label: "Week High / Month High (New Reference)",       val: "26,038.25", cls: "down" },
    { label: "Current Price (After Hours)",                  val: "26,025.54", cls: "" },
    { label: "15m EMA(9) — Price Coil Zone",                val: "26,025.36", cls: "neutral" },
    { label: "15m EMA(21) — Immediate Support",              val: "26,002.20", cls: "neutral" },
    { label: "1H EMA(9)",                                   val: "25,965.13", cls: "up" },
    { label: "1H EMA(21)",                                  val: "25,830.40", cls: "up" },
    { label: "1H pMiddle",                                  val: "25,781.42", cls: "neutral" },
    { label: "4H EMA(9)",                                   val: "25,779.70", cls: "up" },
    { label: "4H EMA(21)",                                  val: "25,498.81", cls: "up" },
    { label: "Daily EMA(9)",                                val: "Not Computed", cls: "up" },
    { label: "Daily EMA(21)",                               val: "Not Computed", cls: "up" },
  ],

  // ── US Index performance ─────────────────────────────────
  indices: [
    { name: "S&P 500",      price: "9,966.63",  chg: "+1.17%", cls: "up" },
    { name: "Dow Jones",    price: "48,544.52", chg: "+0.06%", cls: "up" },
    { name: "Nasdaq",       price: "23,632.89", chg: "+1.04%", cls: "up" },
    { name: "Nasdaq 100",   price: "25,833.10", chg: "+1.29%", cls: "up" },
    { name: "Russell 2000", price: "2,705.07",  chg: "+1.29%", cls: "up" },
    { name: "Dollar Index", price: "$98.11",    chg: "−0.03%", cls: "down" },
  ],

  // ── Bond yields ───────────────────────────────────────────
  yields: [
    { tenor: "2Y",  val: "3.76%", chg: "−0.02", cls: "down" },
    { tenor: "10Y", val: "4.26%", chg: "−0.04", cls: "down" },
    { tenor: "30Y", val: "4.87%", chg: "−0.03", cls: "down" },
  ],

  // ── Volatility ────────────────────────────────────────────
  volatility: [
    { label: "VIX",           val: "18.36", chg: "−3.97%", chgCls: "down" },
    { label: "NASDAQ VIX",    val: "21.23", chg: "−3.97%", chgCls: "down" },
    { label: "MOVE Bond Vol", val: "74.42", chg: "−0.66%", chgCls: "down" },
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
    { ticker: "AMZN", pct: "+3.81%", cls: "up",   bg: "rgba(74,222,128,0.12)",  border: "rgba(74,222,128,0.25)" },
    { ticker: "GOOG", pct: "+3.56%", cls: "up",   bg: "rgba(74,222,128,0.10)",  border: "rgba(74,222,128,0.22)" },
    { ticker: "TSLA", pct: "+3.34%", cls: "up",   bg: "rgba(74,222,128,0.08)",  border: "rgba(74,222,128,0.18)" },
    { ticker: "JPM",  pct: "−0.72%", cls: "down", bg: "rgba(248,113,113,0.10)", border: "rgba(248,113,113,0.22)" },
    { ticker: "AAPL", pct: "−0.14%", cls: "down", bg: "rgba(248,113,113,0.08)", border: "rgba(248,113,113,0.18)" },
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
  correlationsNote: "All indices highly correlated — unified risk-on close. IWM +1.42% confirms broad participation beyond mega-cap. Nasdaq 100 +1.29% leading, consistent with tech/growth rotation on soft PPI. Strong day-over-day correlation maintenance signals regime cohesion, not momentum exhaustion.",

  // ── Commodities & FX ─────────────────────────────────────
  commodities: [
    { label: "Crude Oil (WTI)", val: "$91.55",    chg: "−7.60%", chgCls: "down" },
    { label: "Brent Crude",     val: "$95.09",    chg: "−4.37%", chgCls: "down" },
    { label: "Natural Gas",     val: "$2.59",     chg: "−1.37%", chgCls: "down" },
    { label: "Gold",            val: "$4,861.70", chg: "+1.98%", chgCls: "up" },
    { label: "Copper",          val: "$6.08",     chg: "+1.31%", chgCls: "up" },
    { label: "Wheat",           val: "$622.75",   chg: "+3.33%", chgCls: "up" },
    { label: "EUR/USD",         val: "$1.18",     chg: "+0.32%", chgCls: "up" },
    { label: "GBP/USD",         val: "$1.36",     chg: "+0.50%", chgCls: "up" },
    { label: "USD/JPY",         val: "¥158.83",   chg: "−0.46%", chgCls: "down" },
    { label: "USD/CHF",         val: "Fr0.78",    chg: "−0.59%", chgCls: "down" },
  ],

  // ── Crypto ────────────────────────────────────────────────
  crypto: [
    { label: "Bitcoin",  val: "$76,177", chg: "−0.34%", chgCls: "down" },
    { label: "Ethereum", val: "$2,322",  chg: "−2.04%", chgCls: "down" },
    { label: "Solana",   val: "$83.79",  chg: "−2.52%", chgCls: "down" },
    { label: "XRP",      val: "$1.36",   chg: "−1.28%", chgCls: "down" },
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
        short: { val: "147,043", chg: "−3,617", chgCls: "down" },
        net:   { val: "−9,505",  cls: "down" },
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
    note: "Large specs net LONG +12,525 — structural bullish positioning confirmed. Rising OI (+1,472) alongside price breakout = healthy trend expansion. Small specs net short is a contrarian bullish signal. COT data as of Apr 7; price action closing at 26,025 after hours — next COT release (Apr 14) likely to show further spec long accumulation given magnitude of the breakout move.",
  },

  // ── Trade thesis ──────────────────────────────────────────
  thesis: {
    bull: {
      title: "📈 Bull Case",
      text: "ENQM26 settled ~26,025 after hours, holding near session highs and week/month high at 26,038.25. 15m EMA(9) at 26,025.36 essentially touching price — bullish coil signal. All major US indices closed higher: Nasdaq 100 +1.29%, S&P 500 +1.17%, Russell 2000 +1.29%. VIX closed at 18.36 with NASDAQ VIX at 21.23. COT large specs net LONG +12,525 with rising OI. Global participation confirmed: Nikkei +2.33%, DAX +1.12%, Euro Stoxx +1.19%. Dollar weakness (DXY −0.03%). Soft PPI catalyst (0.5% vs 1.1% est) fully priced and supportive. Next session open above 26,002 (15m EMA21) maintains full bullish bias — break above 26,038.25 opens price discovery.",
    },
    bear: {
      title: "⚠ Bear Case / Risks",
      text: "1H RSI 81.73 (deepened from intraday 80.51) and 4H RSI 79.77 — multi-timeframe overbought pressure building after hours. Crypto broadly weak (BTC −0.34%, ETH −2.04%, SOL −2.52%) — persistent divergence from equity close. WTI Crude −7.60% and Energy sector −2.19% signal macro fragility. Gold +1.98% rallying alongside equities = hedge demand alive. 15m EMA(9) and price at same level (26,025) — any gap below 26,002 on next open risks cascading to 1H EMA(9) at 25,965. Price extended ~246pts above 4H EMA(9) at 25,779. Overnight session weakness could shift morning bias quickly.",
    },
    scenarios: {
      title: "🎯 Key Scenarios",
      text: "Next session opens above 26,002 (15m EMA21) = bullish bias active — target 26,038.25 (week/month high), then price discovery above. Overnight consolidation between 26,002 and 26,038 = healthy coil setup for morning breakout. Gap open below 25,965 (1H EMA9) = structure break — shift to neutral, wait for re-test and bounce confirmation before re-entering long. 4H bar close below 25,779 (4H EMA9) = full invalidation of bullish thesis; shift to defensive mode and monitor 25,498 (4H EMA21) as next major support.",
    },
    bullets: [
      "ENQM26 closed ~26,025 after hours, near week/month high of 26,038.25 — 15m EMA(9) at 26,025.36 in a tight bullish coil with price",
      "1H RSI 81.73 and 4H RSI 79.77 — extreme multi-TF overbought deepened from intraday levels; news-driven momentum sustaining elevated readings",
      "Nasdaq Mini COT (Apr 7): Large specs LONG +12,525 — bullish structural positioning; next Apr 14 COT release expected to show further spec accumulation",
      "All four major indices closed positive: IWM +1.42% leads, NQ100 +1.29%, SPY +0.99%, DIA +0.62% — broad risk-on close confirmed",
      "EMA levels stepped higher across all timeframes: 4H EMA(9) 25,779 (was 25,713), 1H EMA(9) 25,965 (was 25,926) — trend in acceleration phase",
      "Crypto (BTC −0.34%, ETH −2.04%, SOL −2.52%) and WTI Crude (−7.60%) diverging from equity close — key risk-off early warning indicators to monitor",
      "AMZN +3.81%, GOOG +3.56%, TSLA +3.34% drove Consumer Discretionary (+2.21%) and Comm Services; AAPL −0.14% and JPM −0.72% notable laggards within strong tape",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // NEW SECTIONS — update these each session
  // ══════════════════════════════════════════════════════════

  // ── Possible Playbooks ────────────────────────────────────
  playbooks: {
    context: "ENQM26 closed at ~26,025 after hours with 15m EMA(9) at 26,025.36 — price and EMA are essentially touching, forming a tight coil near week/month highs. The dominant orderflow setup entering the next session is continuation long on a confirmed hold above 26,002 (15m EMA21), with the week/month high at 26,038.25 as the near-term breakout target. Secondary setup is a mean-reversion short only on confirmed rejection with RSI divergence. EMA structure across all timeframes has stepped higher — trend is in acceleration, not distribution.",
    setups: [
      {
        name:        "26,002 EMA Hold / Continuation Long",
        direction:   "long",
        concept:     "Bullish Coil Resolution",
        description: "Price closed with 15m EMA(9) at 26,025.36 and EMA(21) at 26,002.20 — the spread between price and EMA(21) is ~23pts, forming a tight coil structure near highs. On next session open, a confirmed hold above 26,002 (15m EMA21) on the first 15m candle signals the coil is resolving bullish. Institutional logic: the EMA(21) at 26,002 represents the short-term mean — a sustained hold above it after a gap-and-hold overnight means buyers are defending the new value area. Target is the week/month high at 26,038.25 (immediate), then price discovery above. Valid as long as 15m candles do not close below 26,002 on open.",
        details: [
          { key: "Trigger",      val: "Next session 15m open candle holds above 26,002 (15m EMA21)", cls: "" },
          { key: "Entry Zone",   val: "26,002–26,015 (15m EMA21 + half-gap retest zone)", cls: "" },
          { key: "Confirmation", val: "Bullish 15m close above 26,010 + RSI holding above 60 + VIX below 20", cls: "" },
          { key: "Target 1",     val: "26,038.25 (Week/Month High — immediate auction reference)", cls: "up" },
          { key: "Target 2",     val: "26,100–26,200 (price discovery / psychological extension)", cls: "up" },
          { key: "Stop",         val: "25,963 (15m EMA21 area close — structure break on next session)", cls: "down" },
          { key: "Invalidation", val: "15m bar closes below 26,002 on open or VIX spikes above 21 on any news", cls: "" },
          { key: "Risk/Reward",  val: "~1:2.5 (23pt risk to EMA21 / 60pt+ target to month high)", cls: "" },
        ],
      },
      {
        name:        "26,038 Breakout Continuation",
        direction:   "long",
        concept:     "Auction Breakout — Price Discovery",
        description: "If ENQM26 opens above or runs to 26,038.25 (week/month high) and sustains a 15m close above it on expanding volume, this confirms a clean auction breakout into price discovery territory. No overhead reference levels above 26,038.25 — the next meaningful auction zone requires a measured move projection. The institutional logic: a sustained close above the week/month high removes the supply that capped the prior session, triggering fresh breakout buying and short covering. This is the highest-momentum, lowest-hesitation setup in the current context but requires confirmation — not anticipation.",
        details: [
          { key: "Trigger",      val: "15m close above 26,038.25 on above-average volume", cls: "" },
          { key: "Entry Zone",   val: "26,038–26,050 (breakout retest / first pullback to prior resistance)", cls: "" },
          { key: "Confirmation", val: "Sustained hold above 26,038 for 2+ 15m bars + VIX not spiking", cls: "" },
          { key: "Target 1",     val: "26,100 (psychological + ~62pt measured extension)", cls: "up" },
          { key: "Target 2",     val: "26,200 (next major psychological / measured move)", cls: "up" },
          { key: "Stop",         val: "26,000 (prior month high area — if breakout fails, return to value)", cls: "down" },
          { key: "Invalidation", val: "Price fails to hold 26,038 and closes back below on 15m; auction reversal", cls: "" },
          { key: "Risk/Reward",  val: "~1:3 (38pt risk / 112pt+ target to 26,150)", cls: "" },
        ],
      },
      {
        name:        "Overbought Gap Fade / Mean Reversion Short",
        direction:   "short",
        concept:     "Failed Auction / Exhaustion Reversal",
        description: "With 1H RSI at 81.73 and 4H RSI at 79.77 — both elevated from intraday readings — a gap-up open into or above 26,038.25 that immediately fails (bearish rejection candle, high wick) triggers a mean-reversion short. The thesis: aggressive overnight gap-ups in extreme overbought conditions often represent retail FOMO entries at worst prices, which institutions absorb as supply to distribute against. A failed auction at the week/month high with RSI divergence is a high-probability fade setup targeting 1H EMA(9) at 25,965. Only take on confirmed rejection — not anticipation of the top.",
        details: [
          { key: "Trigger",      val: "Gap-up open at or above 26,038 that prints a bearish 15m rejection candle (doji/shooting star/engulf down)", cls: "" },
          { key: "Entry Zone",   val: "26,020–26,038 on confirmed 15m bearish close after rejection", cls: "" },
          { key: "Confirmation", val: "15m RSI rolling over from 75+ with bearish candle + volume spike on down bar", cls: "" },
          { key: "Target 1",     val: "25,965 (1H EMA9 — first mean-reversion target)", cls: "up" },
          { key: "Target 2",     val: "25,830 (1H EMA21 — full mean-reversion target)", cls: "up" },
          { key: "Stop",         val: "26,080 (above month high buffer — if sustained, trend continues)", cls: "down" },
          { key: "Invalidation", val: "Any sustained 15m close above 26,038.25 held for 2+ bars — bullish continuation active", cls: "" },
          { key: "Risk/Reward",  val: "~1:2.2 (42pt risk / 73pt target to 1H EMA9 at 25,965)", cls: "" },
        ],
      },
    ],
  },

  // ── News Analysis (Grok Input) ────────────────────────────
  newsAnalysis: {
    sentimentScore:  82,
    confidenceScore: 72,
    volatilityRisk:  38,
    directionalBias: "Bullish",
    sessionCharacter: "Trend-supportive · After Hours Coil Near Highs",

    summary: "Session closed with ENQM26 holding ~26,025 after hours, near the week/month high of 26,038.25. Soft PPI catalyst (0.5% vs 1.1% est) was the session's dominant driver — fully processed and priced in. Fed speakers delivered no hawkish surprises (volatility risk realized at low end). Crypto continued to diverge (BTC −0.34%, ETH −2.04%) but did not trigger broad risk-off. VIX closed at 18.36. The after-hours coil with 15m EMA(9) and price essentially touching suggests a controlled consolidation near highs — constructive setup for next session.",

    xSentiment: {
      overview: "Post-close tone on X remains bullish with momentum-chasing narrative intact. Traders noting the streak extension and after-hours price stability near highs. Some overbought caution emerging in more analytical accounts, but no dominant counter-narrative. Signal quality remains high — no major reversals of view from intraday session.",
      bullets: [
        "Post-close narrative: Price stability above 26,000 confirms session's bullish close, not a fade",
        "Momentum-chasing crowd still dominant — streak extension commentary active on X",
        "Overbought caution emerging in analytical accounts but not yet driving counter-sentiment",
        "No hawkish Fed surprise materialized — risk event passed without disruption",
        "Crypto weakness (ETH, SOL) is being noted but not yet cited as equity risk-off signal",
      ],
    },

    macro: {
      overview: "All scheduled macro events for April 14 have passed. PPI (0.5% vs 1.1% est) and Core PPI softer — both fully digested. Fed speakers (Barr, Barkin, Collins, Miran, Goolsbee) delivered no hawkish surprises — volatility risk from speakers realized at low end. Next catalyst watch: April 15 macro schedule (check for CPI revisions, retail sales, or Fed commentary). Yield curve remains dovishly sloped with 10Y at 4.26% and 2Y at 3.76%.",
      bullets: [
        "PPI m/m 0.5% (vs 1.1% exp) — fully priced, dovish read sustained through close",
        "All April 14 Fed speakers passed without hawkish surprise — risk event resolved bullishly",
        "10Y yield at 4.26% −0.04, 2Y at 3.76% −0.02 — yields falling = supportive for growth/tech into next session",
        "Next session macro watch: April 15 calendar (retail sales, Fed commentary — check for new catalysts)",
        "Dollar Index at $98.11 −0.03% — structural dollar weakness supportive of risk assets and commodity prices (ex-energy)",
      ],
    },

    crossMarket: "Risk regime remains firmly risk-on at close. Equities held gains into after hours, VIX closed at 18.36, yields fell, dollar weak. What confirms: Nasdaq after-hours stability at 26,025, all four US index breadth positive, global indices closed higher. What weakens: persistent crypto divergence (BTC, ETH, SOL all red), crude oil −7.60% (macro demand concern), gold +1.98% (hedge demand alive alongside equities — mixed signal). Session character was clean trend-follow day; after-hours coil near highs is the dominant setup read entering April 15.",

    confirms: [
      "Nasdaq after-hours holding ~26,025 — no fade from session highs, constructive close",
      "All four US indices closed positive — broad risk-on participation confirmed through end of day",
      "VIX closed at 18.36 and NASDAQ VIX at 21.23 — volatility premium compressed and holding low",
      "Fed speakers (all five) passed without hawkish surprise — headline risk for April 14 fully resolved",
      "15m EMA(9) at 26,025.36 nearly touching price — controlled coil near highs, not exhaustion distribution",
    ],
    weakens: [
      "Crypto (BTC −0.34%, ETH −2.04%, SOL −2.52%) diverging through close — persistent early warning signal",
      "WTI Crude −7.60% into close — deepening energy weakness signals possible demand-side macro concern",
      "1H RSI deepened to 81.73 after hours (was 80.51 intraday) — overbought pressure not resolving",
      "Gold +1.98% rallying with equities through close — hedge demand persisting despite risk-on",
      "Overnight session risk: thin liquidity can amplify any gap-down below 26,002 (15m EMA21)",
    ],

    keyDrivers: [
      "Soft PPI (0.5% vs 1.1% exp) — session's primary macro driver, fully processed by close",
      "Fed speaker schedule passed without incident — resolved as a non-event for bulls",
      "After-hours EMA coil (price ~= 15m EMA9 at 26,025) — next session's primary technical setup driver",
      "Week/Month High at 26,038.25 — the critical breakout reference for next session open",
      "April 15 macro calendar — next scheduled catalyst; check for retail sales, Fed commentary",
    ],

    scoreRationale: "Score maintained at 82 / confidence 72. Catalyst (PPI) fully priced; no new bullish information has emerged after hours, but no adverse developments either. Volatility risk reduced slightly to 38 (from 40) as Fed speaker risk fully passed without incident. The after-hours coil is constructive but does not add new information — holding scores steady into next session.",
  },

  // ── Insight Meter ─────────────────────────────────────────
  insightMeter: {
    score:    78,
    label:    "Bullish",
    sublabel: "PPI fully priced · EMA coil near highs · COT long · VIX closed low",
  },

  // ── Insight's Plan ────────────────────────────────────────
  insightPlan: {
    title:    "After Hours Coil at 26,025 — Next Session: Hold Above 26,002 for Continuation, Break 26,038.25 for Price Discovery",
    verdict:  "Bullish Bias · Next Session",
    overview: "ENQM26 closed the April 14 session at ~26,025 with 15m EMA(9) at 26,025.36 — price and EMA are nearly identical, forming a tight coil near the week/month high of 26,038.25. The plan for the next session is built on the thesis that any open above 26,002 (15m EMA21) with a bullish first candle maintains the full long bias. The primary trade is the coil resolution long: hold 26,002, target 26,038.25, then price discovery above. A break of the week/month high at 26,038.25 on volume is the highest-conviction momentum setup. Risk is managed by respecting the extreme overbought readings (1H RSI 81.73, 4H RSI 79.77) — reduced position sizing remains warranted. Any failure below 26,002 on open shifts to neutral/wait.",
    scenarios: [
      {
        condition: "Next session opens above 26,002 (15m EMA21) and first 15m candle closes bullish",
        action: "Activate long bias. Enter on first pullback to 26,002–26,015 zone with 15m bullish confirmation. Target T1: 26,038.25 (week/month high). Hold runners for T2: 26,100+. Stop below 25,963 (1H EMA9)."
      },
      {
        condition: "Price runs directly to 26,038.25 and sustains a 15m close above it on expanding volume",
        action: "Add on breakout retest of 26,038.25 (former resistance becomes support). Target 26,100 (T1) and 26,200 (T2). Trail stop to 26,000 after T1 hit. This is price discovery — no defined resistance above."
      },
      {
        condition: "Gap-up open at or above 26,038.25 that immediately prints a bearish rejection candle",
        action: "Do not chase the gap. Wait for 15m bearish close confirmation. If confirmed, take small mean-reversion short targeting 1H EMA9 at 25,965. Stop above 26,080."
      },
      {
        condition: "Next session opens below 26,002 (15m EMA21) — gap-down or overnight weakness",
        action: "Suspend long bias immediately. Shift to observation mode. Wait for a confirmed reclaim of 26,002 with bullish 15m close before re-engaging. Do not average into longs on the gap-down."
      },
      {
        condition: "Price breaks below 25,779 (4H EMA9) on a 1H close",
        action: "Full bullish thesis invalidated. Step aside completely. Shift to defensive posture and monitor 25,498 (4H EMA21) as next major support. This would signal a significant structural reversal — do not fight it."
      },
    ],
    execution: [
      "Step 1 — Pre-Market Check: Confirm overnight price held above 26,002 (15m EMA21). Check for any after-hours news, macro releases, or gap-risk catalysts for April 15 (retail sales, Fed speakers). If below 26,002 on futures open, suspend plan and wait.",
      "Step 2 — Open Assessment (First 15m Candle): If price holds 26,002 and closes bullish on first 15m candle, long bias is active. Enter on first pullback to 26,002–26,015 zone. Use 50% position size due to elevated RSI readings (1H 81.73, 4H 79.77).",
      "Step 3 — Primary Target (26,038.25): Trail stop to 26,002 after price clears 26,020. At 26,038.25, take 50% off — watch for rejection or breakout. If sustained close above 26,038.25 prints, hold runners and add on retest of prior month high.",
      "Step 4 — Breakout Extension: If 26,038.25 is cleared on volume, trail stop to 26,020 and target 26,100–26,200 (price discovery). Reduce size at round numbers; these are areas of potential institutional absorption.",
      "Step 5 — EOD Review: Log whether price closed above 26,038.25 (confirms price discovery bias for next session) or below 26,002 (shifts to neutral/reassess). Update EMA values from end-of-session chart reads for next data.js update.",
    ],
    invalidations: [
      "Next session first 15m bar closes below 26,002 (15m EMA21) — structure break; suspend long bias and move to observation mode",
      "Any catalyst (macro release, Fed speaker) drives VIX above 21 with sustained hold — macro override; suspend plan until VIX retreats below 20",
      "Price closes 4H bar below 25,779 (4H EMA9) — full trend invalidation; abandon plan entirely and shift to defensive/short-watch mode toward 25,498",
    ],
  },

};