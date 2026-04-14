// ============================================================
// MARKET ANALYSIS DASHBOARD — DATA FILE
// Update this file each session. Do NOT modify index.html.
// ============================================================

const MARKET_DATA = {

  // ── Meta ──────────────────────────────────────────────────
  meta: {
    instrument: "NQ Futures (ENQH26)",
    symbol: "ENQH26",
    date: "April 14, 2026",
    session: "US Regular Hours",
    generated: "April 14, 2026",
  },

  // ── Alert bar (set text to "" to hide) ───────────────────
  alert: {
    show: true,
    text: "<strong>RSI Overbought Alert:</strong> 1H RSI at 80.03 and 4H RSI at 73.81 — extreme overbought territory. COT data shows large specs still net SHORT (-43,108 contracts) despite the rally. Divergence risk elevated — watch for reversal at 25,929 week high.",
  },

  // ── Top stat cards ────────────────────────────────────────
  stats: {
    price: {
      value: "25,917",
      label: "ENQH26 Last Price",
      change: "▲ Strong Uptrend",
      changeClass: "up",
    },
    bias: {
      signal: "Bullish",
      signalClass: "signal-bull",
      dot: "●",
      description: "All timeframes aligned. Price above all EMAs. Broad market risk-on.",
    },
    volatility: {
      value: "18.44",
      valueClass: "neutral",
      label: "VIX Index",
      change: "▼ −3.06% · Contracting",
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
      price: "25,917",
      signal: "Above EMAs",
      signalClass: "signal-bull",
      rows: [
        { key: "EMA(9)",   val: "25,921",    cls: "" },
        { key: "EMA(21)",  val: "25,908",    cls: "" },
        { key: "PDHigh",   val: "25,969.25", cls: "up" },
        { key: "PDLow",    val: "24,904.50", cls: "down" },
      ],
      rsi: { value: 67.18, label: "67.18", cls: "neutral", gradient: "linear-gradient(90deg,#22c55e,#f59e0b)" },
      note: { text: "Price above both EMAs. EMA(9)=25,921 / EMA(21)=25,908. Consolidating near week high 25,929. Compression setup.", cls: "" },
    },
    {
      label: "1 Hour",
      price: "25,917",
      signal: "Overbought",
      signalClass: "signal-warn",
      rows: [
        { key: "EMA(9)",   val: "25,624",    cls: "" },
        { key: "EMA(21)",  val: "25,689",    cls: "" },
        { key: "PDHigh",   val: "25,599.25", cls: "up" },
        { key: "PDLow",    val: "24,904.50", cls: "down" },
      ],
      rsi: { value: 80.03, label: "80.03", cls: "down", gradient: "linear-gradient(90deg,#22c55e,#ef4444)" },
      note: { text: "⚠ RSI extreme overbought. Price extended ~228pts above EMA21. Highest pullback risk across all TFs.", cls: "down" },
    },
    {
      label: "4 Hour",
      price: "25,917",
      signal: "Strong Bull",
      signalClass: "signal-bull",
      rows: [
        { key: "EMA(9)",   val: "25,625",    cls: "" },
        { key: "EMA(21)",  val: "25,381",    cls: "" },
        { key: "Week High",val: "25,929.25", cls: "up" },
        { key: "Week Mid", val: "25,436.88", cls: "neutral" },
        { key: "Week Low", val: "24,904.50", cls: "down" },
      ],
      rsi: { value: 73.81, label: "73.81", cls: "down", gradient: "linear-gradient(90deg,#22c55e,#ef4444)" },
      note: { text: "Impulse leg from week low +1,013pts. Testing week high. Momentum still strong.", cls: "" },
    },
    {
      label: "Daily",
      price: "25,077",
      signal: "Uptrend",
      signalClass: "signal-bull",
      rows: [
        { key: "EMA(9)",     val: "25,080",    cls: "" },
        { key: "EMA(21)",    val: "24,775",    cls: "" },
        { key: "Month High", val: "25,969.25", cls: "up" },
        { key: "Month Mid",  val: "24,617.62", cls: "neutral" },
        { key: "Month Low",  val: "23,666.00", cls: "down" },
      ],
      rsi: { value: 62, label: "~62", cls: "up", gradient: "linear-gradient(90deg,#22c55e,#4f8ef7)" },
      note: { text: "V-shape recovery from Feb lows ~23,400. EMA stack bullish. Price at month highs.", cls: "" },
    },
  ],

  // ── Key price levels ─────────────────────────────────────
  keyLevels: [
    { label: "Month High / Resistance", val: "25,969.25", cls: "down" },
    { label: "Current Price",           val: "25,917.00", cls: "" },
    { label: "PDHigh",                  val: "25,599.25", cls: "neutral" },
    { label: "Daily EMA(9)",            val: "25,079.92", cls: "up" },
    { label: "Month Middle",            val: "24,617.62", cls: "up" },
    { label: "Daily EMA(21)",           val: "24,775.37", cls: "up" },
    { label: "Week Low / Support",      val: "24,904.50", cls: "up" },
    { label: "Month Low",               val: "23,666.00", cls: "up" },
  ],

  // ── US Index performance ─────────────────────────────────
  indices: [
    { name: "S&P 500",       price: "6,953.08",   chg: "+0.97%", cls: "up" },
    { name: "Nasdaq 100",    price: "25,760.58",  chg: "+1.06%", cls: "up" },
    { name: "Nasdaq Comp.",  price: "23,568.85",  chg: "+1.06%", cls: "up" },
    { name: "Dow Jones",     price: "48,488.54",  chg: "+0.66%", cls: "up" },
    { name: "Russell 2000",  price: "2,699.44",   chg: "+1.08%", cls: "up" },
    { name: "Dollar Index",  price: "$97.90",     chg: "−0.47%", cls: "down" },
  ],

  // ── Bond yields ───────────────────────────────────────────
  yields: [
    { tenor: "2Y",  val: "3.71%", chg: "+0.02", cls: "up" },
    { tenor: "10Y", val: "4.30%", chg: "−0.01", cls: "down" },
    { tenor: "30Y", val: "4.90%", chg: "+0.01", cls: "up" },
  ],

  // ── Volatility ────────────────────────────────────────────
  volatility: [
    { label: "VIX",           val: "18.44", chg: "−3.06%", chgCls: "down" },
    { label: "NASDAQ VIX",    val: "21.79", chg: "−3.42%", chgCls: "down" },
    { label: "MOVE Bond Vol", val: "72.13", chg: "−3.04%", chgCls: "down" },
  ],

  // ── Global indices ────────────────────────────────────────
  globalIndices: [
    { name: "Euro Stoxx 50", chg: "+1.19%", cls: "up" },
    { name: "DAX",           chg: "+1.12%", cls: "up" },
    { name: "Nikkei 225",    chg: "+2.33%", cls: "up" },
    { name: "Hang Seng",     chg: "+0.80%", cls: "up" },
    { name: "IBEX 35",       chg: "+1.08%", cls: "up" },
  ],

  // ── Sector performance ────────────────────────────────────
  // barWidth: 0–100 (relative), barColor: css color string
  sectors: [
    { name: "Consumer Cyclical",  barWidth: 100, barColor: "var(--green)",                      val: "+2.06%", cls: "up" },
    { name: "Communication Svcs", barWidth: 88,  barColor: "var(--green)",                      val: "+1.82%", cls: "up" },
    { name: "Technology",         barWidth: 75,  barColor: "var(--green)",                      val: "+1.55%", cls: "up" },
    { name: "Financials",         barWidth: 58,  barColor: "var(--green)",                      val: "+1.19%", cls: "up" },
    { name: "Real Estate",        barWidth: 50,  barColor: "var(--green)",                      val: "+1.02%", cls: "up" },
    { name: "Health Care",        barWidth: 40,  barColor: "var(--green)",                      val: "+0.83%", cls: "up" },
    { name: "Industrials",        barWidth: 30,  barColor: "var(--green)",                      val: "+0.26%", cls: "up" },
    { name: "Materials",          barWidth: 24,  barColor: "rgba(245,158,11,0.7)",              val: "−0.55%", cls: "down" },
    { name: "Utilities",          barWidth: 20,  barColor: "var(--red)",  barOpacity: "0.7",    val: "−0.61%", cls: "down" },
    { name: "Consumer Staples",   barWidth: 22,  barColor: "var(--red)",  barOpacity: "0.7",    val: "−0.62%", cls: "down" },
    { name: "Energy",             barWidth: 55,  barColor: "var(--red)",                        val: "−2.62%", cls: "down" },
  ],

  // ── Notable movers (heatmap) ──────────────────────────────
  movers: [
    { ticker: "AMZN", pct: "+3.99%", cls: "up",   bg: "rgba(34,197,94,0.20)",  border: "rgba(34,197,94,0.3)" },
    { ticker: "GOOG", pct: "+3.12%", cls: "up",   bg: "rgba(34,197,94,0.18)",  border: "rgba(34,197,94,0.3)" },
    { ticker: "TSLA", pct: "+3.13%", cls: "up",   bg: "rgba(34,197,94,0.16)",  border: "rgba(34,197,94,0.3)" },
    { ticker: "AAPL", pct: "−0.29%", cls: "down", bg: "rgba(239,68,68,0.18)",  border: "rgba(239,68,68,0.3)" },
    { ticker: "JPM",  pct: "−0.47%", cls: "down", bg: "rgba(239,68,68,0.15)",  border: "rgba(239,68,68,0.3)" },
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
    { label: "Brent Crude",     val: "$94.92",    chg: "−4.47%", chgCls: "down" },
    { label: "Natural Gas",     val: "$2.00",     chg: "−1.10%", chgCls: "down" },
    { label: "Gold",            val: "$4,563.08", chg: "+2.01%", chgCls: "up" },
    { label: "EUR/USD",         val: "$1.18",     chg: "+0.32%", chgCls: "up" },
    { label: "USD/JPY",         val: "¥158.79",   chg: "−0.40%", chgCls: "down" },
  ],

  // ── Crypto ────────────────────────────────────────────────
  crypto: [
    { label: "Bitcoin",  val: "$76,442", chg: "−0.08%", chgCls: "down" },
    { label: "Ethereum", val: "$2,331",  chg: "−1.63%", chgCls: "down" },
    { label: "Solana",   val: "$84.71",  chg: "−1.40%", chgCls: "down" },
  ],

  // ── COT Report ────────────────────────────────────────────
  cot: {
    title: "COT Report · S&P 500 Futures · As of Apr 7, 2026",
    groups: [
      {
        label: "Non-Commercial (Large Specs)",
        long:  { val: "230,957", chg: "−8,662",  chgCls: "down" },
        short: { val: "274,065", chg: "−4,341",  chgCls: "down" },
        net:   { val: "−43,108", cls: "down" },
        signal: "Specs Net Short", signalClass: "signal-bear",
      },
      {
        label: "Commercial (Hedgers)",
        long:  { val: "1,420,144", chg: "−12,117", chgCls: "down" },
        short: { val: "1,434,434", chg: "−29,197", chgCls: "up" },
        net:   { val: "−14,290",   cls: "down" },
        signal: "Hedgers Slight Short", signalClass: "signal-neut",
      },
      {
        label: "Non-Reportable (Small Specs)",
        long:  { val: "249,070", chg: "−1,551",  chgCls: "down" },
        short: { val: "191,672", chg: "+11,208", chgCls: "up" },
        net:   { val: "+57,398", cls: "up" },
        signal: "Small Specs Net Long", signalClass: "signal-bull",
      },
    ],
    openInterest: { val: "1,948,342", chg: "−18,401", chgCls: "down" },
    note: "⚠ Large specs remain net short despite the 1,013-pt rally from week lows — a notable divergence. Either a short squeeze is building, or smart money anticipates a reversal. Small specs long is typically a contrarian signal. Watch OI trends for confirmation.",
  },

  // ── Trade thesis ──────────────────────────────────────────
  thesis: {
    bull: {
      title: "📈 Bull Case",
      text: "All major indices up 0.6–1.4% on the day. VIX contracting to 18.44 (-3.06%) and MOVE Bond Vol declining confirm broad risk-on. NQ in strong uptrend — price above all EMAs on 15m/1H/4H/1D. Recovery from Feb lows complete. Global markets (Nikkei +2.33%, DAX +1.12%) confirming the bid. Consumer Cyclical and Comm Services sectors leading — growth rotation intact. S&P 500 at 6,953 signals macro strength.",
    },
    bear: {
      title: "⚠ Bear Case / Risks",
      text: "1H RSI at 80.03 (extreme overbought) and 4H RSI at 73.81. COT data (as of Apr 7) shows large speculators still net SHORT -43,108 contracts — a bearish divergence with the price rally. NQ approaching month high resistance at 25,969.25 / week high 25,929.25. Energy collapse (WTI -7.52%) and crypto weakness (ETH -1.63%) signal selective risk-off. 30Y yield at 4.90% (+0.01) still rising — long-end pressure unresolved.",
    },
    scenarios: {
      title: "🎯 Key Scenarios to Watch",
      text: "Break and hold above 25,929 (week high) and 25,969.25 (month high) = further upside toward 26,200+. Rejection here with 1H RSI at 80 = high-probability pullback to 25,620–25,689 (1H EMA zone). COT large-spec short squeeze in play — if specs cover, explosive upside possible. Watch 25,800 as near-term bull/bear line. Oil sustained below $90 = macro concern worth monitoring.",
    },
    bullets: [
      "NQ at 25,917 is 12 pts below week high (25,929) and 52 pts below month high (25,969.25) — these two levels are the critical near-term battleground",
      "All 4 timeframes now aligned bullish on structure including 15m (price above EMA9 and EMA21); 1H RSI 80.03 is the most extreme reading across all TFs — elevated mean-reversion risk",
      "COT report (Apr 7): large speculators net SHORT -43,108 contracts despite 1,013-pt rally from week lows — potential short-squeeze fuel if price breaks 25,969",
      "IWM outperforming (+1.42%) signals broad risk appetite; S&P 500 at 6,953 (+0.97%) — healthy breadth with Russell 2000 at +1.08%",
      "Dollar weakness (DXY -0.47%) supportive of equities; Gold at $4,563 (+2.01%) — dual risk-on equity + safe-haven gold bid signals macro uncertainty persists",
      "WTI crude -7.52% to $91.63 is the session's biggest outlier — energy the only major red sector (-2.62%); crypto also weak (ETH -1.63%, BTC -0.08%) contra the equity move",
      "TSLA +3.13%, AMZN +3.99%, GOOG +3.12% driving Consumer Cyclical and Comm Services; AAPL -0.29% and JPM -0.47% lagging — watch AVGO -0.03% and INTC -3.64% for tech sector health",
    ],
  },

};
