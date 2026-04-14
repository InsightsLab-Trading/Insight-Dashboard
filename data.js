// ============================================================
// MARKET ANALYSIS DASHBOARD — DATA FILE
// Update this file each session. Do NOT modify index.html.
// ============================================================

const MARKET_DATA = {

  // ── Meta ──────────────────────────────────────────────────
  meta: {
    instrument: "NQ Futures (ENQM26)",
    symbol: "ENQM26",
    date: "April 14, 2026",
    session: "US Regular Hours",
    generated: "April 14, 2026",
  },

  // ── Alert bar (set text to "" to hide) ───────────────────
  alert: {
    show: true,
    text: "<strong>Multi-TF Overbought Alert:</strong> 1H RSI at 80.13 and 4H RSI at 73.93 — extreme overbought across timeframes. Price at 25,962.50 has now breached the prior week high (25,929.25) and is pressing directly into month-high resistance at 25,969.25. Nasdaq Mini COT (Apr 7): Large specs net LONG +12,525 — a shift from prior bearish positioning. Watch for exhaustion or breakout above 25,969.",
  },

  // ── Top stat cards ────────────────────────────────────────
  stats: {
    price: {
      value: "25,962",
      label: "ENQM26 Last Price",
      change: "▲ Breakout Above Week High",
      changeClass: "up",
    },
    bias: {
      signal: "Bullish",
      signalClass: "signal-bull",
      dot: "●",
      description: "All timeframes aligned bullish. Price broke above week high 25,929 and is at month-high resistance 25,969.25. Broad risk-on confirmed.",
    },
    volatility: {
      value: "18.41",
      valueClass: "neutral",
      label: "VIX Index",
      change: "▼ −3.71% · Contracting",
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
      label: "15 Minute",
      price: "25,962",
      signal: "Above EMAs",
      signalClass: "signal-bull",
      rows: [
        { key: "EMA(9)",   val: "25,926.71", cls: "" },
        { key: "EMA(21)",  val: "25,879.16", cls: "" },
        { key: "PDHigh",   val: "25,969.25", cls: "up" },
        { key: "PDMid",    val: "25,764.62", cls: "neutral" },
        { key: "PDLow",    val: "24,904.50", cls: "down" },
      ],
      rsi: { value: 71.52, label: "71.52", cls: "neutral", gradient: "linear-gradient(90deg,#22c55e,#f59e0b)" },
      note: { text: "Price holding above both EMAs. EMA(9)=25,926 / EMA(21)=25,879. Pressing directly into month-high resistance 25,969.25. RSI elevated but not extreme — room for final push.", cls: "" },
    },
    {
      label: "1 Hour",
      price: "25,962",
      signal: "Overbought",
      signalClass: "signal-warn",
      rows: [
        { key: "EMA(9)",   val: "25,049.98", cls: "" },
        { key: "EMA(21)",  val: "25,714.47", cls: "" },
        { key: "PDHigh",   val: "25,599.25", cls: "up" },
        { key: "PDMiddle", val: "25,201.88", cls: "neutral" },
        { key: "PDLow",    val: "24,904.50", cls: "down" },
      ],
      rsi: { value: 80.13, label: "80.13", cls: "down", gradient: "linear-gradient(90deg,#22c55e,#ef4444)" },
      note: { text: "⚠ RSI extreme overbought at 80.13. Price extended ~248pts above EMA21. Highest mean-reversion risk across all TFs. Key level: 25,969.25.", cls: "down" },
    },
    {
      label: "4 Hour",
      price: "25,962",
      signal: "Strong Bull",
      signalClass: "signal-bull",
      rows: [
        { key: "EMA(9)",   val: "25,631.46", cls: "" },
        { key: "EMA(21)",  val: "25,383.99", cls: "" },
        { key: "Week High",val: "25,929.25", cls: "up" },
        { key: "Week Mid", val: "25,436.88", cls: "neutral" },
        { key: "Week Low", val: "24,904.50", cls: "down" },
      ],
      rsi: { value: 73.93, label: "73.93", cls: "down", gradient: "linear-gradient(90deg,#22c55e,#ef4444)" },
      note: { text: "Price has broken above week high 25,929.25 — bullish structural breakout. RSI at 73.93 overbought but momentum intact. Next target: month high 25,969.25.", cls: "" },
    },
    {
      label: "Daily",
      price: "25,962",
      signal: "Uptrend",
      signalClass: "signal-bull",
      rows: [
        { key: "EMA(9)",     val: "25,086.62", cls: "" },
        { key: "EMA(21)",    val: "24,778.61", cls: "" },
        { key: "Month High", val: "25,969.25", cls: "up" },
        { key: "Month Mid",  val: "24,617.62", cls: "neutral" },
        { key: "Month Low",  val: "23,666.00", cls: "down" },
      ],
      rsi: { value: 63, label: "~63", cls: "up", gradient: "linear-gradient(90deg,#22c55e,#4f8ef7)" },
      note: { text: "V-shape recovery from Feb lows ~23,400 nearly complete. EMA stack bullish. Price approaching all-time monthly resistance. Clean trend structure.", cls: "" },
    },
  ],

  // ── Key price levels ─────────────────────────────────────
  keyLevels: [
    { label: "Month High / Resistance",  val: "25,969.25", cls: "down" },
    { label: "Current Price",            val: "25,962.00", cls: "" },
    { label: "Week High (Broken)",       val: "25,929.25", cls: "neutral" },
    { label: "PDHigh",                   val: "25,599.25", cls: "neutral" },
    { label: "Daily EMA(9)",             val: "25,086.62", cls: "up" },
    { label: "Daily EMA(21)",            val: "24,778.61", cls: "up" },
    { label: "Week Low / Support",       val: "24,904.50", cls: "up" },
    { label: "Month Low",                val: "23,666.00", cls: "up" },
  ],

  // ── US Index performance ─────────────────────────────────
  indices: [
    { name: "S&P 500",       price: "6,950.20",   chg: "+0.93%", cls: "up" },
    { name: "Nasdaq 100",    price: "25,778.92",  chg: "+1.59%", cls: "up" },
    { name: "Nasdaq Comp.",  price: "23,590.83",  chg: "+1.76%", cls: "up" },
    { name: "Dow Jones",     price: "48,488.54",  chg: "+0.50%", cls: "up" },
    { name: "Russell 2000",  price: "2,700.65",   chg: "+1.18%", cls: "up" },
    { name: "Dollar Index",  price: "$97.90",     chg: "−0.47%", cls: "down" },
  ],

  // ── Bond yields ───────────────────────────────────────────
  yields: [
    { tenor: "2Y",  val: "3.71%", chg: "+0.02", cls: "up" },
    { tenor: "10Y", val: "4.38%", chg: "−0.01", cls: "down" },
    { tenor: "30Y", val: "4.98%", chg: "+0.01", cls: "up" },
  ],

  // ── Volatility ────────────────────────────────────────────
  volatility: [
    { label: "VIX",           val: "18.41", chg: "−3.71%", chgCls: "down" },
    { label: "NASDAQ VIX",    val: "21.87", chg: "−1.87%", chgCls: "down" },
    { label: "MOVE Bond Vol", val: "72.15", chg: "−3.04%", chgCls: "down" },
  ],

  // ── Global indices ────────────────────────────────────────
  globalIndices: [
    { name: "Euro Stoxx 50", chg: "+1.16%", cls: "up" },
    { name: "DAX",           chg: "+1.12%", cls: "up" },
    { name: "Nikkei 225",    chg: "+2.33%", cls: "up" },
    { name: "Hang Seng",     chg: "+0.86%", cls: "up" },
    { name: "IBEX 35",       chg: "+1.23%", cls: "up" },
  ],

  // ── Sector performance ────────────────────────────────────
  // barWidth: 0–100 (relative), barColor: css color string
  sectors: [
    { name: "Consumer Cyclical",  barWidth: 100, barColor: "var(--green)",             val: "+2.09%", cls: "up" },
    { name: "Communication Svcs", barWidth: 71,  barColor: "var(--green)",             val: "+1.49%", cls: "up" },
    { name: "Technology",         barWidth: 61,  barColor: "var(--green)",             val: "+1.27%", cls: "up" },
    { name: "Health Care",        barWidth: 28,  barColor: "var(--green)",             val: "+0.58%", cls: "up" },
    { name: "Industrials",        barWidth: 18,  barColor: "var(--green)",             val: "+0.37%", cls: "up" },
    { name: "Financials",         barWidth: 15,  barColor: "var(--green)",             val: "+0.31%", cls: "up" },
    { name: "Materials",          barWidth: 5,   barColor: "rgba(245,158,11,0.7)",     val: "−0.03%", cls: "down" },
    { name: "Utilities",          barWidth: 8,   barColor: "var(--red)",               val: "−0.08%", cls: "down" },
    { name: "Consumer Staples",   barWidth: 12,  barColor: "var(--red)",               val: "−0.23%", cls: "down" },
    { name: "Energy",             barWidth: 55,  barColor: "var(--red)",               val: "−2.29%", cls: "down" },
  ],

  // ── Notable movers (heatmap) ──────────────────────────────
  movers: [
    { ticker: "AMZN", pct: "+3.60%", cls: "up",   bg: "rgba(34,197,94,0.22)",  border: "rgba(34,197,94,0.35)" },
    { ticker: "TSLA", pct: "+3.60%", cls: "up",   bg: "rgba(34,197,94,0.20)",  border: "rgba(34,197,94,0.3)" },
    { ticker: "GOOG", pct: "+3.25%", cls: "up",   bg: "rgba(34,197,94,0.18)",  border: "rgba(34,197,94,0.3)" },
    { ticker: "AVGO", pct: "−0.86%", cls: "down", bg: "rgba(239,68,68,0.16)",  border: "rgba(239,68,68,0.3)" },
    { ticker: "AAPL", pct: "−0.46%", cls: "down", bg: "rgba(239,68,68,0.15)",  border: "rgba(239,68,68,0.3)" },
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
  correlationsNote: "All indices highly correlated — unified risk-on move.",

  // ── Commodities & FX ─────────────────────────────────────
  commodities: [
    { label: "Crude Oil (WTI)", val: "$91.63",    chg: "−7.52%", chgCls: "down" },
    { label: "Brent Crude",     val: "$95.18",    chg: "−4.03%", chgCls: "down" },
    { label: "Natural Gas",     val: "$2.69",     chg: "−3.44%", chgCls: "down" },
    { label: "Gold",            val: "$4,859.50", chg: "+1.93%", chgCls: "up" },
    { label: "Silver",          val: "$29.98",    chg: "−2.49%", chgCls: "down" },
    { label: "EUR/USD",         val: "$1.18",     chg: "+0.32%", chgCls: "up" },
    { label: "GBP/USD",         val: "$1.36",     chg: "+0.50%", chgCls: "up" },
    { label: "USD/JPY",         val: "¥158.79",   chg: "−0.40%", chgCls: "down" },
  ],

  // ── Crypto ────────────────────────────────────────────────
  crypto: [
    { label: "Bitcoin",  val: "$76,132", chg: "−0.42%", chgCls: "down" },
    { label: "Ethereum", val: "$2,316",  chg: "−2.23%", chgCls: "down" },
    { label: "Solana",   val: "$84.71",  chg: "−1.45%", chgCls: "down" },
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
        long:  { val: "137,538", chg: "+8,786",  chgCls: "up" },
        short: { val: "147,843", chg: "−3,617",  chgCls: "down" },
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
    note: "Large specs in Nasdaq Mini are net LONG +12,525 — confirming the bullish price structure. Rising open interest (+1,472) alongside rising prices = healthy trend confirmation. Commercial hedgers (smart money) slightly short — typical hedging behavior, not a strong reversal signal. Small specs net short is a contrarian bullish signal. Overall: COT structure supports further upside unless commercials aggressively add shorts.",
  },

  // ── Trade thesis ──────────────────────────────────────────
  thesis: {
    bull: {
      title: "📈 Bull Case",
      text: "Price has broken above the prior week high (25,929.25) and is now pressing into month-high resistance at 25,969.25. All major indices up 0.5–1.76% on the day. VIX contracting to 18.41 (-3.71%) and MOVE declining confirm broad risk-on. Nasdaq Mini COT now shows large specs net LONG +12,525 — a structural shift supporting the trend. Rising open interest (+1,472) with price action = trend confirmation. Nikkei +2.33%, DAX +1.12% confirming global bid. Consumer Cyclical leading (+2.09%) with AMZN +3.6%, TSLA +3.6%, GOOG +3.25%.",
    },
    bear: {
      title: "⚠ Bear Case / Risks",
      text: "1H RSI at 80.13 (extreme overbought) and 4H RSI at 73.93 — multi-timeframe overbought convergence. Price is within 7 points of month-high resistance 25,969.25 — major supply zone. Energy sector -2.29% (WTI -7.52%) and broad commodity weakness signal macro fragility. Crypto weak across the board (BTC -0.42%, ETH -2.23%, SOL -1.45%). 30Y yield at 4.98% — persistent long-end pressure. Silver -2.49% and broader commodity selloff may be a leading risk-off signal. Gold +1.93% diverging from risk assets — hedge bid active.",
    },
    scenarios: {
      title: "🎯 Key Scenarios to Watch",
      text: "Break and close above 25,969.25 (month high) on elevated volume = extension toward 26,200–26,400. Rejection at 25,969.25 with 1H RSI at 80+ = high-probability pullback to 25,631–25,714 (4H/1H EMA zone). 15m RSI at 71.52 offers more room than higher TFs — intraday momentum could push for a test of 25,969. Watch 25,929 (former week high, now support) as bull/bear line on any pullback. Oil sustained below $90 + crypto weakness = macro risk-off rotation risk.",
    },
    bullets: [
      "ENQM26 at 25,962 has broken above week high 25,929.25 — structural breakout confirmed — now 7pts from month-high resistance at 25,969.25",
      "1H RSI 80.13 is the most extreme reading across all timeframes — mean-reversion risk elevated; however 15m RSI at 71.52 leaves short-term momentum room",
      "Nasdaq Mini COT (Apr 7): Large specs LONG +12,525 — bullish positioning shift; rising OI (+1,472) with price = trend health; small specs net short is a contrarian bullish signal",
      "IWM +1.42% outperforming again — broad risk appetite confirmed; Nasdaq Composite +1.76% leading all indices today",
      "Dollar weakness (DXY -0.47%) supportive of equities; Gold at $4,859.50 (+1.93%) bid alongside equities — macro uncertainty hedge remains active",
      "WTI crude -7.52% to $91.63 is the session's biggest risk-off outlier — energy sector -2.29% only major red sector; crypto (BTC -0.42%, ETH -2.23%) also diverging from equity rally",
      "AMZN +3.60%, TSLA +3.60%, GOOG +3.25% driving Consumer Cyclical (+2.09%) and Comm Services (+1.49%); AVGO -0.86% and AAPL -0.46% are the notable mega-cap laggards in tech",
    ],
  },

};
