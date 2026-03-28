window.MARKET_PRESSURE_DATA = {
  totalQuestions: 12,
  band: { low: 2, mid: 5, high: 8.5 },
  forceMeta: {
    d: { name: 'Demand Pressure', color: '#0f6e56', hex: '#0f6e56' },
    s: { name: 'Supply Pressure', color: '#9b8ec4', hex: '#9b8ec4' },
    a: { name: 'Advertising Pressure', color: '#d48a3a', hex: '#d48a3a' },
    m: { name: 'Margin Corridor', color: '#3a9e78', hex: '#3a9e78' }
  },
  questions: [
    { id: 'D1', force: 'd', text: 'Monthly search volume for this product category (use Google Trends or Amazon search estimates)', opts: [
      { text: 'Under 10,000 searches/month', band: 'low' },
      { text: '10,000 – 100,000 searches/month', band: 'mid' },
      { text: 'Over 100,000 searches/month', band: 'high' }
    ] },
    { id: 'D2', force: 'd', text: 'Trend direction — is demand for this category growing, stable, or declining over the past 12 months?', opts: [
      { text: 'Declining — search and interest are dropping', band: 'low' },
      { text: 'Stable / flat — consistent but not growing', band: 'mid' },
      { text: 'Growing — clear upward trajectory', band: 'high' }
    ] },
    { id: 'D3', force: 'd', text: 'Buyer intent quality — when people search for this category, are searches mostly informational or transactional?', opts: [
      { text: 'Mostly informational ("what is", "how to use")', band: 'low' },
      { text: 'Mixed — both research and buying intent', band: 'mid' },
      { text: 'Mostly transactional ("buy", "best price", "where to get")', band: 'high' }
    ] },

    { id: 'S1', force: 's', text: 'How many competing product listings exist in your primary marketplace for this category?', opts: [
      { text: 'Under 500 results', band: 'low' },
      { text: '500 – 5,000 results', band: 'mid' },
      { text: 'Over 5,000 results', band: 'high' }
    ] },
    { id: 'S2', force: 's', text: 'How fragmented is the seller landscape? (Many small sellers = high fragmentation = more noise)', opts: [
      { text: '1–2 dominant brands own most of the market', band: 'low' },
      { text: 'A handful of established brands with some smaller sellers', band: 'mid' },
      { text: 'Many small sellers — no clear dominant player', band: 'high' }
    ] },
    { id: 'S3', force: 's', text: 'Is there visible differentiation opportunity — unmet buyer needs, poor reviews, product gaps?', opts: [
      { text: 'Clear white space — obvious unmet needs or gaps', band: 'low' },
      { text: 'Some gaps visible — requires deeper analysis', band: 'mid' },
      { text: 'Fully saturated — products are largely homogeneous', band: 'high' }
    ] },

    { id: 'A1', force: 'a', text: 'Estimated cost-per-click (CPC) for paid ads in this category (check Amazon suggested bids or Google Keyword Planner)', opts: [
      { text: 'Under $0.50 per click', band: 'low' },
      { text: '$0.50 – $1.50 per click', band: 'mid' },
      { text: 'Over $1.50 per click', band: 'high' }
    ] },
    { id: 'A2', force: 'a', text: 'What percentage of page 1 results on your primary marketplace are sponsored / paid listings?', opts: [
      { text: 'Under 20% — mostly organic results', band: 'low' },
      { text: '20–50% — mixed organic and sponsored', band: 'mid' },
      { text: 'Over 50% — page 1 is dominated by ads', band: 'high' }
    ] },
    { id: 'A3', force: 'a', text: 'Can a new seller realistically achieve organic search ranking within 3–6 months without heavy ad spend?', opts: [
      { text: 'Yes — organic ranking achievable with good listing quality', band: 'low' },
      { text: 'Partial — both organic effort and some paid spend needed', band: 'mid' },
      { text: 'No — paid advertising is the only realistic path to visibility', band: 'high' }
    ] },

    { id: 'M1', force: 'm', text: 'Price spread in your category — what is the range between the highest and lowest price for comparable products?', opts: [
      { text: 'Wide spread — top price is 3x or more the lowest price', band: 'low' },
      { text: 'Moderate spread — top price is 1.5x to 3x the lowest', band: 'mid' },
      { text: 'Narrow spread — prices are clustered, race-to-bottom dynamic', band: 'high' }
    ] },
    { id: 'M2', force: 'm', text: 'Estimated gross margin at typical market price (price minus landed cost / price)', opts: [
      { text: 'Over 50% gross margin at market price', band: 'low' },
      { text: '30–50% gross margin at market price', band: 'mid' },
      { text: 'Under 30% gross margin at market price', band: 'high' }
    ] },
    { id: 'M3', force: 'm', text: 'Combined fee burden — platform fees, fulfillment, and estimated ad spend as % of sale price', opts: [
      { text: 'Under 35% of sale price consumed by fees and ads', band: 'low' },
      { text: '35–50% of sale price consumed by fees and ads', band: 'mid' },
      { text: 'Over 50% of sale price consumed by fees and ads', band: 'high' }
    ] }
  ],
  dominantData: {
    d: { cardClass: 'dominant-card-demand', eyecolor: '#0f6e56', title: 'Demand-Driven Market', what: '<strong>What it means:</strong> Your category has clear buyer intent, but you are entering into a market where the structure is still being defined. Demand is the constraining factor, not supply or price.', action: '<strong>Move fast.</strong> Target neglected sub-niches within the category. Prioritize first-mover advantage and reviews over margin early. Understand that your biggest risk is that demand was in one niche and you are selling to another.' },
    s: { cardClass: 'dominant-card-supply', eyecolor: '#9b8ec4', title: 'Supply-Constrained (or -Saturated)', what: '<strong>What it means:</strong> You are entering into a market with structural competition dynamics. Either supply is restricted (unusual), or it is saturated with sellers competing on overlapping attributes.', action: '<strong>Do not enter without clear differentiation.</strong> Mine 3-star reviews — look at what customers say is good but not great. Build your product or brand specifically to address a gap they are pointing to. Expect to spend capital on customer acquisition and brand-building.' },
    a: { cardClass: 'dominant-card-ads', eyecolor: '#d48a3a', title: 'Advertising-Driven (High Ad Spend)', what: '<strong>What it means:</strong> The market structure is such that visibility requires paid media. Organic reach is either limited or extremely expensive. You are competing in an auction for attention.', action: '<strong>Model at TACoS 20–35% from day one.</strong> If your unit economics do not support that, the market is closed to you. Plan for 6–12 months of customer acquisition spend before profitability. Consider whether your product margin can sustain this cost of entry.' },
    m: { cardClass: 'dominant-card-margin', eyecolor: '#3a9e78', title: 'Margin-Constrained (Price Compression)', what: '<strong>What it means:</strong> Price competition and fees have compressed the margin corridor so tightly that profitable growth requires either extremely high volume or extreme cost discipline.', action: '<strong>Stress-test unit economics ruthlessly.</strong> If landed cost + fees + ads exceeds 70% of your price, find a premium variant of the product or choose a different category. Volume alone will not solve margin problems.' }
  },
  oceanCopy: {
    blue: { label: 'Blue Ocean', body: 'Low cross-pressure. Room to enter, differentiate, and price with margin. Your main risk is underestimating the time and capital required to build visibility from scratch in a category that has not yet been heavily contested. Move with intention — blue oceans do not stay blue.' },
    amber: { label: 'Transitional Market', body: 'Mixed pressure signals. Entry is viable but requires a clear answer to the dominant force driving your score. The gap between a 3.0 and a 6.5 is significant — at 3.0 you have maneuver room and can recover from early mistakes; at 6.5 the margin for error is thin and capital requirements are higher. Understand which force is highest before committing.' },
    red: { label: 'Red Ocean', body: 'High structural pressure, self-reinforcing. All four forces are active and amplify each other: dense supply raises ad costs, compressed margins force price competition, price competition attracts more sellers. Entry is possible but requires strong differentiation, 12+ months of capital runway, and a specific asymmetric advantage. Your Entry Strategy will address whether your specific profile can navigate this — and what conditions need to be true before committing capital.' }
  }
};
