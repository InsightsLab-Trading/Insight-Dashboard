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
    timestamp: "April 14, 2026 · Intraday",
    analyst:   "Intraday Update",
    note:      "Next update: EOD",
  },

  // ── Alert bar (set show: false to hide) ──────────────────
  alert: {
    show: true,
    text: "<strong>26,000 Breakout + Soft PPI Catalyst:</strong> ENQM26 trading above 26,000 (~26,008.50) for the first time — new month high and week high at 26,615.00 remains the upside reference. Soft PPI (0.5% vs 1.1% est) driving risk-on momentum. 1H RSI 80.51 and 4H RSI 79.26 — extreme multi-TF overbought. Key support: 25,969.25 (prior month high), then 4H EMA(9) 25,713.",
  },

  // ── Top stat cards ────────────────────────────────────────
  stats: {
    price: {
      value:       "26,008",
      label:       "ENQM26 Last Price",
      change:      "▲ Above 26,000 · New Highs",
      changeClass: "up",
    },
    bias: {
      signal:      "Bullish",
      signalClass: "signal-bull",
      dot:         "●",
      description: "All timeframes aligned bullish. Price cleared 26,000 on soft PPI catalyst — new session highs. Risk-on confirmed: broad sector participation, falling VIX, dollar weakness, global indices higher. COT large specs net LONG +12,525 provides structural tailwind.",
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
      label: "15 Minute", price: "26,008",
      signal: "Momentum Bull", signalClass: "signal-bull",
      rows: [
        { key: "EMA(9)",  val: "25,996.94", cls: "" },
        { key: "EMA(21)", val: "25,963.94", cls: "" },
      ],
      rsi:  { value: 70.12, label: "70.12", cls: "neutral", gradient: "linear-gradient(90deg,#4ade80,#fbbf24)" },
      note: { text: "Price holding above both EMAs with EMA(9) at 25,996.94 acting as immediate support. RSI 70.12 — elevated but not extreme on 15m. Momentum intact; pullbacks to EMA(9) are buyable in trend context.", cls: "" },
    },
    {
      label: "1 Hour", price: "26,008",
      signal: "Extreme Overbought", signalClass: "signal-warn",
      rows: [
        { key: "EMA(9)",    val: "25,926.92", cls: "" },
        { key: "EMA(21)",   val: "25,787.85", cls: "" },
        { key: "pHigh",     val: "26,003.25", cls: "up" },
        { key: "pMiddle",   val: "25,781.62", cls: "neutral" },
        { key: "pLow",      val: "24,560.00", cls: "down" },
      ],
      rsi:  { value: 80.51, label: "80.51", cls: "down", gradient: "linear-gradient(90deg,#4ade80,#f87171)" },
      note: { text: "⚠ RSI extreme overbought at 80.51 on 1H — highest mean-reversion risk. Price ~220pts above EMA(21). pHigh 26,003.25 just cleared — now acts as first support. Extended but news-driven continuation possible.", cls: "down" },
    },
    {
      label: "4 Hour", price: "26,008",
      signal: "Strong Bull", signalClass: "signal-bull",
      rows: [
        { key: "EMA(9)",    val: "25,713.11", cls: "" },
        { key: "EMA(21)",   val: "25,443.98", cls: "" },
        { key: "Week High", val: "26,615.00", cls: "up" },
        { key: "Week Mid",  val: "25,459.75", cls: "neutral" },
        { key: "Week Low",  val: "24,904.50", cls: "down" },
      ],
      rsi:  { value: 79.26, label: "79.26", cls: "down", gradient: "linear-gradient(90deg,#4ade80,#f87171)" },
      note: { text: "Price ~295pts above 4H EMA(9). RSI 79.26 overbought but trending. Week high 26,615 is the next meaningful auction reference above. EMA structure firmly stacked bullish — dips to 25,713 remain buyable.", cls: "" },
    },
    {
      label: "Daily", price: "26,008",
      signal: "Uptrend · Room to Run", signalClass: "signal-bull",
      rows: [
        { key: "EMA(9)",     val: "25,275.40", cls: "" },
        { key: "EMA(21)",    val: "24,892.69", cls: "" },
        { key: "Month High", val: "26,615.00", cls: "up" },
        { key: "Month Mid",  val: "24,840.50", cls: "neutral" },
        { key: "Month Low",  val: "23,666.00", cls: "down" },
      ],
      rsi:  { value: 65, label: "~65", cls: "up", gradient: "linear-gradient(90deg,#4ade80,#4f8ef7)" },
      note: { text: "V-shape recovery intact. Price ~733pts above Daily EMA(9) — extended on daily but not extreme by this timeframe's RSI. Month high 26,615 is the upside reference; daily RSI ~65 has room before overbought.", cls: "" },
    },
  ],

  // ── Key price levels ─────────────────────────────────────
  keyLevels: [
    { label: "Month High / Week High (Reference)",        val: "26,615.00", cls: "down" },
    { label: "Current Price",                             val: "26,008.50", cls: "" },
    { label: "1H pHigh (Cleared → Support)",              val: "26,003.25", cls: "neutral" },
    { label: "15m EMA(9)",                                val: "25,996.94", cls: "neutral" },
    { label: "15m EMA(21)",                               val: "25,963.94", cls: "neutral" },
    { label: "1H EMA(9)",                                 val: "25,926.92", cls: "up" },
    { label: "1H EMA(21)",                                val: "25,787.85", cls: "up" },
    { label: "1H pMiddle",                                val: "25,781.62", cls: "neutral" },
    { label: "4H EMA(9)",                                 val: "25,713.11", cls: "up" },
    { label: "4H EMA(21) / Week Mid",                     val: "25,459.75", cls: "up" },
    { label: "Daily EMA(9)",                              val: "25,275.40", cls: "up" },
    { label: "Daily EMA(21)",                             val: "24,892.69", cls: "up" },
    { label: "Week Low / Support",                        val: "24,904.50", cls: "up" },
    { label: "Month Low",                                 val: "23,666.00", cls: "up" },
  ],

  // ── US Index performance ─────────────────────────────────
  indices: [
    { name: "S&P 500",      price: "9,966.63",  chg: "+1.17%", cls: "up" },
    { name: "Dow Jones",    price: "48,544.52", chg: "+0.06%", cls: "up" },
    { name: "Nasdaq",       price: "23,632.89", chg: "+1.04%", cls: "up" },
    { name: "Nasdaq 100",   price: "25,833.10", chg: "+1.29%", cls: "up" },
    { name: "Russell 2000", price: "2,705.87",  chg: "+1.29%", cls: "up" },
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
    { label: "NASDAQ VIX",    val: "21.89", chg: "−3.23%", chgCls: "down" },
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
  correlationsNote: "All indices highly correlated — unified risk-on move. IWM +1.42% confirms broad participation beyond mega-cap. Nasdaq 100 +1.29% leading, consistent with tech/growth rotation on soft PPI.",

  // ── Commodities & FX ─────────────────────────────────────
  commodities: [
    { label: "Crude Oil (WTI)", val: "$91.55",    chg: "−7.00%", chgCls: "down" },
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
    { label: "Ethereum", val: "$2,322",  chg: "−2.02%", chgCls: "down" },
    { label: "Solana",   val: "$83.79",  chg: "−2.22%", chgCls: "down" },
    { label: "XRP",      val: "$1.36",   chg: "−1.20%", chgCls: "down" },
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
    note: "Large specs net LONG +12,525 — structural bullish positioning confirmed. Rising OI (+1,472) alongside price breakout = healthy trend expansion. Small specs net short is a contrarian bullish signal. COT data as of Apr 7; current price action above 26,000 may show even stronger spec longs in next release.",
  },

  // ── Trade thesis ──────────────────────────────────────────
  thesis: {
    bull: {
      title: "📈 Bull Case",
      text: "ENQM26 cleared 26,000 on soft PPI catalyst (0.5% vs 1.1% est) — momentum buyers in control. All major US indices higher: Nasdaq 100 +1.29%, S&P 500 +1.17%, Russell 2000 +1.29%. VIX contracting to 18.36. COT large specs net LONG +12,525 with rising OI. Global participation: Nikkei +2.33%, DAX +1.12%, Euro Stoxx +1.19%. Dollar weakness (DXY −0.03% and structurally weak at $98). Geopolitical relief (U.S.-Iran peace talk optimism). Daily RSI ~65 — ample room on primary timeframe. Week high 26,615 is the next upside auction reference.",
    },
    bear: {
      title: "⚠ Bear Case / Risks",
      text: "1H RSI 80.51 and 4H RSI 79.26 — multi-timeframe overbought convergence at new highs. Crypto broadly weak (BTC −0.34%, ETH −2.02%, SOL −2.22%) — diverging from equity rally. WTI Crude −7.00% and Energy sector −2.19% signal macro fragility. Gold +1.98% rallying alongside equities = hedge demand intact. Multiple Fed speakers remain (Goolsbee, Barr, Barkin, Collins) — hawkish rhetoric risk. Price extended ~295pts above 4H EMA(9) at 25,713. Any failure to hold 26,003.25 (1H pHigh) on retest triggers mean-reversion risk.",
    },
    scenarios: {
      title: "🎯 Key Scenarios",
      text: "Hold above 26,003.25 (1H pHigh) on any pullback = bullish continuation — target week high 26,615. Pullback to 15m EMA(9) ~25,997 and bounce = scalp long re-entry. Failure below 25,963 (15m EMA21) = escalating mean-reversion risk, look for 4H EMA(9) 25,713. Watch Fed speakers: hawkish tone spikes VIX → invalidates near-term long bias and shifts to wait mode.",
    },
    bullets: [
      "ENQM26 cleared 26,000 on soft PPI data (0.5% vs 1.1% est) — Grok news-sentiment score 82/100, Confidence 72/100",
      "1H RSI 80.51 and 4H RSI 79.26 — extreme multi-timeframe overbought, but news-driven momentum can sustain elevated RSI",
      "Nasdaq Mini COT (Apr 7): Large specs LONG +12,525 — bullish structural positioning; rising OI (+1,472) = trend expansion not exhaustion",
      "All four major indices positive: IWM +1.42% leads, NQ100 +1.29%, SPY +0.99%, DIA +0.62% — broad risk-on participation confirmed",
      "Geopolitical de-escalation (U.S.-Iran ceasefire optimism) providing additional risk-on tailwind beyond PPI",
      "Crypto (BTC −0.34%, ETH −2.02%) and WTI Crude (−7.00%) diverging from equity rally — watch as leading risk-off indicators",
      "AMZN +3.81%, GOOG +3.56%, TSLA +3.34% driving Consumer Discretionary (+2.21%) and Comm Services momentum; AAPL −0.14% and JPM −0.72% notable laggards",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // NEW SECTIONS — update these each session
  // ══════════════════════════════════════════════════════════

  // ── Possible Playbooks ────────────────────────────────────
  playbooks: {
    context: "ENQM26 has cleared 26,000 on a soft PPI catalyst with all timeframes aligned bullish. The dominant orderflow setup is continuation long on any consolidation/dip, with a secondary mean-reversion short thesis valid only on confirmed rejection at or above 26,008 with VIX expansion. Auction is in price discovery mode above prior month highs — no overhead resistance until week high 26,615.",
    setups: [
      {
        name:        "26,003 Hold / Continuation Long",
        direction:   "long",
        concept:     "Auction Continuation",
        description: "Price cleared the 1H pHigh at 26,003.25, which now flips to support — a classic auction continuation setup where a prior resistance level becomes the new value floor. Institutional logic: buyers who drove the initial breakout will defend this level on a first retest to add to positions at better prices, absorbing any profit-taking supply. The PPI-driven risk-on backdrop and contracting VIX reduce the probability of a deep reversal, making shallow pullbacks to the 26,003–25,997 zone high-probability re-entry opportunities. Valid as long as any retest of 26,003 is met with buying volume and does not close below 15m EMA(9) at 25,997. Invalidated if price closes a 15m bar below 25,963 (15m EMA21), signaling the auction structure has shifted.",
        details: [
          { key: "Trigger",      val: "Pullback to 26,003–25,997 zone with bullish 15m candle close (hammer / engulf)", cls: "" },
          { key: "Entry Zone",   val: "26,003–25,997 (1H pHigh flip + 15m EMA9 confluence)", cls: "" },
          { key: "Confirmation", val: "Bullish 15m close + RSI holding above 60 + volume uptick on bounce candle", cls: "" },
          { key: "Target 1",     val: "26,050 (intraday extension above current highs)", cls: "up" },
          { key: "Target 2",     val: "26,200 (measured move / next psychological level)", cls: "up" },
          { key: "Stop",         val: "25,963 (15m EMA21 close — structure break)", cls: "down" },
          { key: "Invalidation", val: "15m bar closes below 25,963 or VIX spikes above 21 on hawkish Fed speaker", cls: "" },
          { key: "Risk/Reward",  val: "~1:2.5 (40pt risk / 100pt+ target)", cls: "" },
        ],
      },
      {
        name:        "Overbought Exhaustion Short",
        direction:   "short",
        concept:     "Failed Auction / Mean Reversion",
        description: "With 1H RSI at 80.51 and 4H RSI at 79.26, ENQM26 is in extreme multi-timeframe overbought territory. A failed auction setup triggers if price makes a new intraday high above 26,008 and then is immediately rejected back below 26,003.25 (1H pHigh) on expanding volume — this signals seller absorption at the auction high and a lack of responsive buyers at the extension. The institutional logic is mean-reversion back toward the 1H EMA(21) at 25,787.85 or the 4H EMA(9) at 25,713, both of which represent fair value on higher timeframes. This setup is lower probability in a news-driven risk-on session but becomes high probability if a hawkish Fed speaker comment triggers a VIX spike above 20. Only take this setup with clear confirmation — do not anticipate.",
        details: [
          { key: "Trigger",      val: "New intraday high above 26,008 rejected; 15m bar closes back below 26,003.25", cls: "" },
          { key: "Entry Zone",   val: "26,000–26,003 on confirmed failure close (not before)", cls: "" },
          { key: "Confirmation", val: "15m RSI rolling over from 70+ with bearish engulfing or doji + increasing volume on down bar", cls: "" },
          { key: "Target 1",     val: "25,926 (1H EMA9 — first mean-reversion target)", cls: "up" },
          { key: "Target 2",     val: "25,787 (1H EMA21 — full mean-reversion target)", cls: "up" },
          { key: "Stop",         val: "26,060 (new intraday high + 50pt buffer — auction extension invalidates short)", cls: "down" },
          { key: "Invalidation", val: "Any new sustained high above 26,020 held for 2+ 15m bars; bullish sector follow-through accelerating", cls: "" },
          { key: "Risk/Reward",  val: "~1:2.3 (60pt risk / 139pt target to 1H EMA21)", cls: "" },
        ],
      },
      {
        name:        "Fed Speaker Hawkish Spike Fade",
        direction:   "long",
        concept:     "Stop Hunt Reversal",
        description: "If an afternoon Fed speaker (Goolsbee, Barr, Barkin, or Collins) delivers unexpectedly hawkish commentary and triggers a rapid VIX spike and NQ flush, this creates a stop-hunt reversal opportunity. The thesis: algorithmic responses to headline Fed commentary are typically fast and shallow — they flush retail longs, print a wick, and then recover as the market prices in that speaker tone is not consensus policy. The setup requires a fast 50–100pt flush on elevated volume that then stabilizes and begins to recover with RSI diverging positively on the 15m chart. The base level to watch is 25,781.62 (1H pMiddle / value area), which represents the session's primary institutional value anchor. Any flush to this zone that is absorbed is a high-conviction long re-entry.",
        details: [
          { key: "Trigger",      val: "Hawkish Fed speaker headline → rapid 50–100pt NQ flush + VIX spike to 20–22", cls: "" },
          { key: "Entry Zone",   val: "25,781–25,800 (1H pMiddle / value area retest)", cls: "" },
          { key: "Confirmation", val: "Absorption candle (long lower wick) on 15m + VIX starting to retreat + SPY stabilizing", cls: "" },
          { key: "Target 1",     val: "25,926 (1H EMA9 — fast recovery target)", cls: "up" },
          { key: "Target 2",     val: "26,003 (back to prior breakout zone)", cls: "up" },
          { key: "Stop",         val: "25,713 (4H EMA9 — if this fails, full mean-reversion underway)", cls: "down" },
          { key: "Invalidation", val: "Price closes 15m below 25,781 and continues lower; VIX holds above 22 for 30+ minutes", cls: "" },
          { key: "Risk/Reward",  val: "~1:3 (70pt risk / 203pt target to 26,003)", cls: "" },
        ],
      },
    ],
  },

  // ── News Analysis (Grok Input) ────────────────────────────
  newsAnalysis: {
    sentimentScore:  82,
    confidenceScore: 72,
    volatilityRisk:  40,
    directionalBias: "Bullish",
    sessionCharacter: "Trend-supportive · Momentum continuation",

    summary: "Cooler-than-expected PPI (0.5% m/m vs 1.1% forecast; core also softer) delivered a clear dovish inflation read, easing yield pressure and supporting growth/tech valuations. X is uniformly bullish on the back of this data relief plus geopolitical optimism around potential U.S.-Iran peace talks, driving Nasdaq 100 +1.8% and the longest winning streak in years. Fed speakers today add light commentary risk but no major releases remain. Backdrop is solidly supportive for NQ continuation into the close.",

    xSentiment: {
      overview: "Overall tone is strongly bullish and broad-based. Dominant narrative: risk-on rally on soft PPI plus Iran ceasefire hopes lifting tech and growth assets. Crowd psychology is confident and momentum-chasing, with traders highlighting streak extension and buying strength. Signal quality is high — consistent across market-focused accounts with low noise or conflict.",
      bullets: [
        "Dominant narrative: Risk-on rally on soft PPI + Iran ceasefire hopes lifting tech/growth assets",
        "Crowd psychology: Confident and momentum-chasing; traders highlighting streak extension and buying strength",
        "Signal quality: High — consistent across market-focused accounts with low noise or conflict",
        "Trading implication: Favors trend-following longs; dips are being bought aggressively",
        "Crowd behavior: Minimal counter-narrative or hedging chatter — clean directional signal",
      ],
    },

    macro: {
      overview: "PPI m/m 0.5% (vs 1.1% exp) and Core PPI softer than forecast at ~0.3% — both meaningfully below estimates. Multiple FOMC member speeches remain (Miran 6:20pm ET, Goolsbee, Barr, Barkin, Collins, Paulson) but event risk level is low as PPI is already released and speakers are narrative only. Dovish inflation print lowers rate-hike odds and supports lower yields — direct positive for mega-cap tech and risk appetite.",
      bullets: [
        "PPI m/m: 0.5% actual vs 1.1% expected — meaningful undershoot, directly dovish for rate path",
        "Core PPI: ~0.3% actual, softer than forecast — amplifies dovish read across the board",
        "Post-data relief rally has clean runway; data beat outweighs remaining speaker noise",
        "Upcoming: Multiple FOMC speakers (Miran 6:20pm ET, Goolsbee, Barr, Barkin, Collins, Paulson) — narrative only, no market-moving data",
        "Macro interpretation for NQ: Lower rate-hike odds + lower real yields = multiple expansion for growth/tech",
      ],
    },

    crossMarket: "Risk regime is firmly risk-on. Nasdaq outperformance, soft PPI actuals, and X consensus on geo + macro relief all confirm the directional read. What confirms: Nasdaq outperformance, soft PPI actuals, and X consensus on geo + macro relief. What weakens: any unexpectedly hawkish Fed speaker tone or sudden geopolitical reversal. Session character likely trends toward momentum continuation with no major catalyst remaining to disrupt the move.",

    confirms: [
      "Nasdaq outperformance relative to all other US indices (NQ100 +1.29% vs DIA +0.06%)",
      "Soft PPI actuals (0.5% vs 1.1%) providing clean dovish macro backdrop",
      "X consensus uniformly bullish with high signal quality and low counter-narrative noise",
      "VIX contracting to 18.36 — fear premium being actively sold",
      "Global indices all higher (Nikkei +2.33%, DAX +1.12%) confirming unified risk-on regime",
    ],
    weakens: [
      "Unexpectedly hawkish Fed speaker tone from Goolsbee, Barr, Barkin or Collins creating narrative volatility spike",
      "Sudden geopolitical reversal on Iran ceasefire talks collapsing",
      "Crypto (BTC, ETH, SOL) continuing to deteriorate — divergence from equity rally persisting",
      "WTI Crude accelerating lower below $90 — signals deeper macro risk-off concern",
      "Any intraday VIX spike above 21 reversing the contracting volatility narrative",
    ],

    keyDrivers: [
      "Cooler-than-expected PPI (dovish inflation surprise) — the session's primary macro catalyst",
      "Geopolitical de-escalation hopes (Iran ceasefire optimism) — secondary risk-on tailwind",
      "Risk-on equity momentum and tech leadership (AMZN +3.81%, GOOG +3.56%, TSLA +3.34%)",
      "Fed speaker schedule — low-vol narrative risk only; no policy-changing data remaining",
      "No major data releases left for the session — reduced whipsaw risk supports trend continuation",
    ],

    scoreRationale: "Strong alignment between dovish PPI, risk-on X tone, and NQ-positive logic pushes the score high at 82, but one-sided sentiment and remaining Fed commentary keep confidence at 72 and vol risk from maxing out. Score is not 90+ because PPI is medium (not headline CPI) impact and some intraday momentum may already be priced into the morning session move.",
  },

  // ── Insight Meter ─────────────────────────────────────────
  insightMeter: {
    score:    78,
    label:    "Bullish",
    sublabel: "PPI dovish · All TFs aligned · COT long · VIX contracting",
  },

  // ── Insight's Plan ────────────────────────────────────────
  insightPlan: {
    title:    "Soft PPI Continuation — Buy Pullbacks Above 26,003, Respect Multi-TF Overbought Risk",
    verdict:  "Bullish Bias",
    overview: "The primary edge today is directional continuation long in a news-driven, risk-on session where the macro catalyst (soft PPI) has already printed clean and no further high-impact data remains. The plan is built on the thesis that ENQM26 above 26,003.25 (1H pHigh) remains bullish — any dip to the 26,003–25,997 zone is a re-entry opportunity, not a reversal signal. Risk is managed by respecting the extreme overbought readings on 1H and 4H RSI (80.51 / 79.26): position sizing should be reduced versus a normal session, and counter-trend shorts require confirmed rejection signals — not anticipation. The overall posture is long-biased with disciplined stops below structure.",
    scenarios: [
      {
        condition: "Price holds above 26,003.25 (1H pHigh) on any shallow pullback",
        action: "Execute auction continuation long from 26,003–25,997 zone with 15m bullish confirmation. Target T1: 26,050, T2: 26,200. Stop below 25,963 (15m EMA21)."
      },
      {
        condition: "Price makes new intraday high above 26,008 then immediately reverses below 26,003.25 on volume",
        action: "Failed auction signal — stand aside or take small short with confirmation of 15m close below 26,003. Target 1H EMA9 at 25,926. Stop above 26,060."
      },
      {
        condition: "Fed speaker delivers hawkish tone, causing a rapid 50–100pt flush below 25,963",
        action: "Do not chase the flush. Wait for 15m stabilization and absorption near 25,781 (1H pMiddle / value area). Look for long re-entry on confirmed bounce with VIX retreating."
      },
      {
        condition: "Price consolidates between 25,963 and 26,008 for 2+ hours with declining RSI",
        action: "Reduce exposure and move to observation mode. Tight range with fading momentum in overbought territory can precede sharp mean-reversion. Wait for directional resolution before adding."
      },
      {
        condition: "Price breaks below 25,713 (4H EMA9) on a 1H close",
        action: "Bullish plan fully invalidated. Step aside completely. Shift to defensive posture and monitor 25,459 (4H EMA21 / week mid) as next major support. Do not average into longs."
      },
    ],
    execution: [
      "Step 1 — Session Open Assessment: Confirm price is holding above 26,003.25 (1H pHigh) and that VIX is below 20. Check if overnight session maintained the breakout. If yes, bias is active. If price opened below 25,963, reassess before any trades.",
      "Step 2 — Primary Setup: Watch for first pullback to 26,003–25,997 confluence (1H pHigh + 15m EMA9). Enter long on bullish 15m close with volume confirmation. Use half-size position due to elevated overbought RSI readings.",
      "Step 3 — Trade Management: Trail stop to 25,963 (15m EMA21) after T1 hit at 26,050. Take 50% off at T1, hold runners toward 26,200. If price immediately launches from open without a pullback, do not chase — wait for next defined re-entry.",
      "Step 4 — Fed Speaker Watch: 12:45 ET (Barr/Barkin) and 6:20 ET (Miran) are key windows. Reduce open position exposure by 30–50% heading into each speaker. Resume full bias if no hawkish commentary within 15 minutes of each speaker.",
      "Step 5 — EOD Review: Evaluate whether price closed above 26,003.25 (confirms next session bullish bias) or below 25,963 (shifts to neutral/wait). Log RSI levels across timeframes for next session setup quality assessment.",
    ],
    invalidations: [
      "1H bar closes below 25,963 (15m EMA21) with volume — structure break that signals failed auction and shifts bias to neutral immediately",
      "Fed speaker (Goolsbee, Barr, Barkin, or Collins) delivers hawkish pivot commentary causing VIX to spike above 21 and hold — macro override that suspends the long plan until VIX retreats",
      "Price closes 4H bar below 25,713 (4H EMA9) — full trend invalidation; plan is abandoned and session shifts to defensive/short watch mode toward 25,459",
    ],
  },

};
