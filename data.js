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
    text: "<strong>Month High Breakout + Multi-TF Overbought:</strong> ENQM26 at ~25,985 has now breached and extended above the prior month high (25,969.25) — new month high printing at 25,990.00. 1H RSI at 80.94 and 4H RSI at 78.88 — extreme overbought across timeframes. 15m RSI elevated at 73.91. Nasdaq Mini COT (Apr 7): Large specs net LONG +12,525. Price is in uncharted monthly territory — watch for continuation or exhaustion reversal. Key levels: 25,990 (new month high resistance), 25,969.25 (broken resistance, now support).",
  },

  // ── Top stat cards ────────────────────────────────────────
  stats: {
    price: {
      value: "25,985",
      label: "ENQM26 Last Price",
      change: "▲ Month High Breakout",
      changeClass: "up",
    },
    bias: {
      signal: "Bullish",
      signalClass: "signal-bull",
      dot: "●",
      description: "All timeframes aligned bullish. Price has broken above and extended past prior month high 25,969.25 — new month high at 25,990. Broad risk-on confirmed across indices, sectors, and COT positioning.",
    },
    volatility: {
      value: "18.37",
      valueClass: "neutral",
      label: "VIX Index",
      change: "▼ −3.92% · Contracting",
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
      label: "15 Minute",
      price: "25,985",
      signal: "Above EMAs",
      signalClass: "signal-bull",
      rows: [
        { key: "EMA(9)",   val: "25,937.94", cls: "" },
        { key: "EMA(21)",  val: "25,888.96", cls: "" },
        { key: "PDHigh",   val: "25,969.25", cls: "up" },
        { key: "PDMid",    val: "25,764.62", cls: "neutral" },
        { key: "PDLow",    val: "24,904.50", cls: "down" },
      ],
      rsi: { value: 73.91, label: "73.91", cls: "neutral", gradient: "linear-gradient(90deg,#22c55e,#f59e0b)" },
      note: { text: "Price well above both EMAs — EMA(9)=25,938 / EMA(21)=25,889. Has cleared the PDHigh (25,969.25) and extended. RSI 73.91 elevated but not yet extreme — momentum supporting continuation on the 15m.", cls: "" },
    },
    {
      label: "1 Hour",
      price: "25,985",
      signal: "Extreme Overbought",
      signalClass: "signal-warn",
      rows: [
        { key: "EMA(9)",   val: "25,654.52", cls: "" },
        { key: "EMA(21)",  val: "25,716.54", cls: "" },
        { key: "PDHigh",   val: "25,599.25", cls: "up" },
        { key: "PDMiddle", val: "25,201.88", cls: "neutral" },
        { key: "PDLow",    val: "24,904.50", cls: "down" },
      ],
      rsi: { value: 80.94, label: "80.94", cls: "down", gradient: "linear-gradient(90deg,#22c55e,#ef4444)" },
      note: { text: "⚠ RSI extreme overbought at 80.94 — highest reading across all timeframes. Price extended ~269pts above EMA21. Highest mean-reversion risk. Month high now breached — 25,969.25 flips to support.", cls: "down" },
    },
    {
      label: "4 Hour",
      price: "25,985",
      signal: "Strong Bull",
      signalClass: "signal-bull",
      rows: [
        { key: "EMA(9)",    val: "25,636.01", cls: "" },
        { key: "EMA(21)",   val: "25,386.06", cls: "" },
        { key: "Week High", val: "25,990.00", cls: "up" },
        { key: "Week Mid",  val: "25,447.35", cls: "neutral" },
        { key: "Week Low",  val: "24,904.50", cls: "down" },
      ],
      rsi: { value: 78.88, label: "78.88", cls: "down", gradient: "linear-gradient(90deg,#22c55e,#ef4444)" },
      note: { text: "Price has extended above the prior week high — new week high printing at 25,990. RSI at 78.88, overbought. 4H EMA structure remains firmly bullish. Momentum strong but extended ~349pts above EMA(9).", cls: "" },
    },
    {
      label: "Daily",
      price: "25,985",
      signal: "Uptrend",
      signalClass: "signal-bull",
      rows: [
        { key: "EMA(9)",     val: "25,091.17", cls: "" },
        { key: "EMA(21)",    val: "24,780.68", cls: "" },
        { key: "Month High", val: "25,990.00", cls: "up" },
        { key: "Month Mid",  val: "24,628.00", cls: "neutral" },
        { key: "Month Low",  val: "23,666.00", cls: "down" },
      ],
      rsi: { value: 65, label: "~65", cls: "up", gradient: "linear-gradient(90deg,#22c55e,#4f8ef7)" },
      note: { text: "V-shape recovery from Feb lows ~23,400 complete. EMA stack firmly bullish. Price now making new month highs — 25,990 is the live high. Daily RSI ~65 — not yet overbought at this timeframe.", cls: "" },
    },
  ],

  // ── Key price levels ─────────────────────────────────────
  keyLevels: [
    { label: "New Month High / Resistance",  val: "25,990.00", cls: "down" },
    { label: "Current Price",               val: "25,985.00", cls: "" },
    { label: "Prior Month High (Broken → Support)", val: "25,969.25", cls: "neutral" },
    { label: "Week High",                   val: "25,990.00", cls: "neutral" },
    { label: "PDHigh",                      val: "25,599.25", cls: "neutral" },
    { label: "Daily EMA(9)",                val: "25,091.17", cls: "up" },
    { label: "Daily EMA(21)",               val: "24,780.68", cls: "up" },
    { label: "Week Low / Support",          val: "24,904.50", cls: "up" },
    { label: "Month Low",                   val: "23,666.00", cls: "up" },
  ],

  // ── US Index performance ─────────────────────────────────
  indices: [
    { name: "S&P 500",       price: "8,963.88",   chg: "+3.12%", cls: "up" },
    { name: "Dow Jones",     price: "48,532.00",  chg: "+0.60%", cls: "up" },
    { name: "Nasdaq",        price: "23,608.96",  chg: "+1.03%", cls: "up" },
    { name: "Nasdaq 100",    price: "25,811.67",  chg: "+1.07%", cls: "up" },
    { name: "Russell 2000",  price: "2,705.26",   chg: "+1.30%", cls: "up" },
    { name: "Dollar Index",  price: "$97.91",     chg: "−0.97%", cls: "down" },
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
  // barWidth: 0–100 (relative), barColor: css color string
  sectors: [
    { name: "Consumer Discretionary", barWidth: 100, barColor: "var(--green)",           val: "+2.21%", cls: "up" },
    { name: "Communication Services", barWidth: 67,  barColor: "var(--green)",           val: "+1.48%", cls: "up" },
    { name: "Technology",             barWidth: 64,  barColor: "var(--green)",           val: "+1.41%", cls: "up" },
    { name: "Real Estate",            barWidth: 41,  barColor: "var(--green)",           val: "+0.91%", cls: "up" },
    { name: "Health Care",            barWidth: 28,  barColor: "var(--green)",           val: "+0.61%", cls: "up" },
    { name: "Industrials",            barWidth: 18,  barColor: "var(--green)",           val: "+0.39%", cls: "up" },
    { name: "Financials",             barWidth: 12,  barColor: "var(--green)",           val: "+0.26%", cls: "up" },
    { name: "Utilities",              barWidth: 11,  barColor: "var(--green)",           val: "+0.25%", cls: "up" },
    { name: "Consumer Staples",       barWidth: 5,   barColor: "rgba(245,158,11,0.7)",   val: "−0.10%", cls: "down" },
    { name: "Materials",              barWidth: 7,   barColor: "var(--red)",             val: "−0.16%", cls: "down" },
    { name: "Energy",                 barWidth: 99,  barColor: "var(--red)",             val: "−2.19%", cls: "down" },
  ],

  // ── Notable movers (heatmap) ──────────────────────────────
  movers: [
    { ticker: "AMZN", pct: "+3.84%", cls: "up",   bg: "rgba(34,197,94,0.25)",  border: "rgba(34,197,94,0.40)" },
    { ticker: "TSLA", pct: "+3.70%", cls: "up",   bg: "rgba(34,197,94,0.22)",  border: "rgba(34,197,94,0.35)" },
    { ticker: "GOOG", pct: "+3.18%", cls: "up",   bg: "rgba(34,197,94,0.18)",  border: "rgba(34,197,94,0.30)" },
    { ticker: "JPM",  pct: "−0.55%", cls: "down", bg: "rgba(239,68,68,0.17)",  border: "rgba(239,68,68,0.30)" },
    { ticker: "AAPL", pct: "−0.32%", cls: "down", bg: "rgba(239,68,68,0.14)",  border: "rgba(239,68,68,0.28)" },
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
    note: "Large specs net LONG +12,525 in Nasdaq Mini — structural bullish positioning confirmed. Rising open interest (+1,472) alongside the price breakout above month highs = healthy trend expansion, not exhaustion buying. Commercial hedgers (smart money) slightly short at −10,305 — typical hedging, not an aggressive reversal signal. Small specs net short is a contrarian bullish signal. COT structure continues to support the upside with the new month-high breakout.",
  },

  // ── Trade thesis ──────────────────────────────────────────
  thesis: {
    bull: {
      title: "📈 Bull Case",
      text: "ENQM26 has broken above the prior month high (25,969.25) and is printing new highs at 25,990.00 — a clean monthly breakout. All major US indices higher: S&P 500 +3.12%, Nasdaq 100 +1.07%, Russell 2000 +1.30%. VIX contracting to 18.37 (−3.92%) and MOVE Bond Vol declining confirm broad risk-on environment. Nasdaq Mini COT shows large specs net LONG +12,525 with rising OI (+1,472) — trend health intact. Nikkei +2.33%, DAX +1.12% confirm global participation. Consumer Discretionary leads all sectors (+2.21%) with mega-cap tech AMZN +3.84%, TSLA +3.70%, GOOG +3.18% driving the move. Dollar weakness (DXY −0.97%) provides a further tailwind for equities and commodities. Daily RSI ~65 — ample room before overbought on the primary trend timeframe.",
    },
    bear: {
      title: "⚠ Bear Case / Risks",
      text: "1H RSI at 80.94 (extreme overbought) and 4H RSI at 78.88 — multi-timeframe overbought convergence at the highest risk level yet. 15m RSI 73.91 elevated. Price is making new monthly highs with no nearby overhead reference — entering price discovery which can mean sharp reversals. Crypto broadly weak: BTC −0.64%, ETH −2.01%, SOL −2.03%, XRP −1.29% — diverging from equity rally. WTI Crude oil −7.51% to $91.64 and broader commodity selloff (Heating Oil −9.23%, Gasoline −3.23%) signal macro fragility in real economy pricing. Energy sector −2.19% is the only major red sector. Gold +2.06% rallying alongside equities signals macro uncertainty hedge remains active — not pure risk-on. 30Y yield at 4.98% persistent. Small specs net short in COT may be getting squeezed into strength — watch for coverage exhaustion.",
    },
    scenarios: {
      title: "🎯 Key Scenarios to Watch",
      text: "Sustained hold above 25,969.25 (former month high, now support) on any pullback = bullish continuation — next targets open at 26,200 then 26,500+. Failure to hold 25,969.25 on first retest = potential false breakout — look for acceleration back to 4H EMA(9) at 25,636 then week mid 25,447. 1H RSI at 80.94 with fresh all-time monthly highs = extreme mean-reversion setup if any negative catalyst emerges. Watch energy / crude: sustained WTI below $90 would add macro risk-off pressure. BTC holding above $74,000 is a secondary risk-on confirmation to monitor. 25,990 (current month high) is the live resistance; close above it on the daily = price discovery continuation.",
    },
    bullets: [
      "ENQM26 at ~25,985 has broken above prior month high 25,969.25 — new month high at 25,990.00 — price is in breakout / price discovery mode",
      "1H RSI 80.94 is the session's most extreme overbought reading — mean-reversion risk is elevated; however 15m RSI 73.91 and daily RSI ~65 show the primary trend has room",
      "Nasdaq Mini COT (Apr 7): Large specs LONG +12,525 — bullish positioning intact; rising OI (+1,472) with new price highs = trend confirmation, not exhaustion",
      "IWM +1.54% leads all major indices — broad market participation confirmed; S&P 500 +3.12% outsized, Nikkei +2.33% global risk-on",
      "Dollar weakness (DXY −0.97%) is the largest single FX driver — supportive of equities and global risk appetite; Gold +2.06% holding bid alongside stocks signals macro hedge demand remains",
      "WTI Crude −7.51% to $91.64 and Heating Oil −9.23% are the session's biggest risk-off outliers — energy sector −2.19% is the sole major red sector; crypto (BTC −0.64%, ETH −2.01%, SOL −2.03%) diverging from equity rally",
      "AMZN +3.84%, TSLA +3.70%, GOOG +3.18% are the mega-cap leaders driving Consumer Discretionary (+2.21%) and Comm Services (+1.48%); JPM −0.55% and AAPL −0.32% are the notable large-cap laggards",
    ],
  },

};
