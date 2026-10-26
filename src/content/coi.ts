export type CoiPhaseId = 'foundation' | 'alignment' | 'execution' | 'closing'

export type CoiPhase = {
  id: CoiPhaseId
  label: string
  tagline: string
  levels: number[]
}

export type ScriptSegment = {
  step: string
  dialogue: string
}

export type CoiLevel = {
  level: number
  id: string
  title: string
  shortTitle: string
  phase: CoiPhaseId
  tag: string
  estimatedDuration: string
  objective: string
  whyItMatters: string
  proTips: string[]
  talkTrack: string
  scriptSegments: ScriptSegment[]
  exitCriteria: string
  badgeLabel?: string
}

export const coiPhases: CoiPhase[] = [
  {
    id: 'foundation',
    label: 'Phase 1: Foundation',
    tagline: 'Introduction, security verification, discovery, and account screen-sharing',
    levels: [1, 2],
  },
  {
    id: 'alignment',
    label: 'Phase 2: Value & Commercials',
    tagline: 'Meta campaign audits, tailored ad recommendations, and budget ROI framing',
    levels: [3, 4],
  },
  {
    id: 'execution',
    label: 'Phase 3: Buy-in & Derisking',
    tagline: 'Ads Manager optimization blueprint, rollout commitment, and handling objections',
    levels: [5, 6],
  },
  {
    id: 'closing',
    label: 'Phase 4: Expansion & Close',
    tagline: 'Audience unlocking, budget scaling, agreement sign-off, and execution handoff',
    levels: [7, 8, 9],
  },
]

export const coiLevels: CoiLevel[] = [
  {
    level: 1,
    id: 'opening-preparedness',
    title: 'Opening & Preparedness',
    shortTitle: 'Opening & Prep',
    phase: 'foundation',
    tag: 'Intro, Security & WebEx Screen Share',
    estimatedDuration: '3–5 mins',
    objective:
      'Confirm contact identity, establish Meta marketing pro credentials, gain permission for a 5–10 min review, verify ad account security, and transition to a real-time WebEx screen share.',
    whyItMatters:
      'Sets a professional, compliant tone immediately. Confirming decision-making authority and securing WebEx screen-share access ensures real-time collaborative review of the actual Ads Manager.',
    proTips: [
      'Have the prospect\'s Meta Ads Manager account notes, business page, and recent campaign metrics open prior to dialing.',
      'Ensure WebEx room link is queued and ready to send with one click before asking for confirmation.',
      'Speak warmly and authoritatively—position this as an exclusive, complimentary consultation from Meta.',
    ],
    scriptSegments: [
      {
        step: '1. Introduction & Contact Verification',
        dialogue:
          'Hi, This is Rae , your marketing Pro from Meta. AM i speaking with (Name)? whos responsible for the facebook and instagram advertising for (Business page) which is PHamily Hair Care?',
      },
      {
        step: '2. Reason for Call & Complimentary Value Pitch',
        dialogue:
          'Got it, thank you for confirming! The reason for my call is to share a few recommendations that could help improve your meta ads manager and support your advertising campaigns. WIth three years experience helping e-commerce business, which means I know fully how to explore opportunities for improvement. This is complimentary touch point to identify opportunities to improve your campaign',
      },
      {
        step: '3. Availability Check (5–10 Minutes)',
        dialogue:
          "Would you be available for a quick 5-10 minute conversation? I'd be happy To learn more abour your current setup, share how my experience could help with you.",
      },
      {
        step: '4. Decision Maker & Core Goal Alignment',
        dialogue:
          'Are you the decision maker for the (Business Name)? Perfect. So if we can improve your campaign and get you more [goal conversion: LEADS/purchases] that would be a big win for you right?',
      },
      {
        step: '5. Privacy & Security Verification',
        dialogue:
          'Here at Meta, we value your privacy and security - can you confirm the last 4 digit of your ad account ID? Thank youi, How about your email address?',
      },
      {
        step: '6. Quality, Compliance & Recording Disclosure',
        dialogue:
          'Before we begin, please note that this call may be recorded for quality and training purposes. You may opt out of marketing calls at any time. Is that okay with you?',
      },
      {
        step: '7. WebEx Link Delivery & Screen Share Transition',
        dialogue:
          "I've you sent an email with a link to webex. you can also share your scren through webex. This allows us to review your ad account together in real time. And I can provide personalized guidance on OPTIMIzing your existing campaigns or dicuss alternatives strategies that may better support your goals. Are we good so far? Perfect",
      },
    ],
    talkTrack:
      'Hi, This is Rae , your marketing Pro from Meta. AM i speaking with (Name)? whos responsible for the facebook and instagram advertising for (Business page) which is PHamily Hair Care?\n\nGot it, thank you for confirming! The reason for my call is to share a few recommendations that could help improve your meta ads manager and support your advertising campaigns. WIth three years experience helping e-commerce business, which means I know fully how to explore opportunities for improvement. This is complimentary touch point to identify opportunities to improve your campaign\n\nWould you be available for a quick 5-10 minute conversation? I\'d be happy To learn more abour your current setup, share how my experience could help with you.\n\nAre you the decision maker for the (Business Name)? Perfect. So if we can improve your campaign and get you more [goal conversion: LEADS/purchases] that would be a big win for you right?\n\nHere at Meta, we value your privacy and security - can you confirm the last 4 digit of your ad account ID? Thank youi, How about your email address?\n\nBefore we begin, please note that this call may be recorded for quality and training purposes. You may opt out of marketing calls at any time. Is that okay with you?\n\nI\'ve you sent an email with a link to webex. you can also share your scren through webex. This allows us to review your ad account together in real time. And I can provide personalized guidance on OPTIMIzing your existing campaigns or dicuss alternatives strategies that may better support your goals. Are we good so far? Perfect',
    exitCriteria:
      'Client confirms identity, passes security verification, accepts call recording, and connects to WebEx screen share.',
  },
  {
    level: 2,
    id: 'discovery',
    title: 'Discovery',
    shortTitle: 'Discovery',
    phase: 'foundation',
    tag: 'Account Diagnostic & Goal Alignment',
    estimatedDuration: '8–12 mins',
    objective:
      'Diagnose PHamily Hair Care current marketing setup across website, Facebook, Instagram, and Ads Manager. Uncover primary goals (Sales vs. Leads vs. Awareness), evaluate conversion discrepancies, and identify audience saturation.',
    whyItMatters:
      'Pinpointing whether the immediate bottleneck is purchase conversion volume, order value (AOV), CAPI tracking gaps, or an over-saturated 2,838-user retargeting pool anchors the exact strategy needed.',
    proTips: [
      'Acknowledge their brand strengths early: highlight the all-in-one system, hair growth positioning, and social proof.',
      'Check if website purchases match Meta Ads Manager reported conversions to spot signal leakage.',
      'Evaluate the Retargeting frequency: when audience size is only 2,838, high frequency causes ad fatigue and inflated CPAs.',
    ],
    scriptSegments: [
      {
        step: '1. Research & Business Recognition',
        dialogue:
          "(Name of the owner/Decision maker), Before our call, I reviewed PHamily hair care website, facebook page, instragram presence and Ads manager. I can see you're an e-commerce hair-care business with all in one hair care system positioned around areas like hair growth, deep conditioning and styling. i also noticed product-focused content and customer testimonials across your social presence.",
      },
      {
        step: '2. Permission & Agenda Alignment',
        dialogue:
          "I'd like to ask a few quick questions about your goals and challenges so we can focus on what matter most to your business. Is that okay?",
      },
      {
        step: '3. Primary Advertising Goal',
        dialogue:
          'What is your main goal for running Fb and IG ads right now? Do you need more sales, more leads or more greater brand awareness?',
      },
      {
        step: '4. Sales Solutions (Volume vs. Order Value)',
        dialogue:
          'Context: Looking at your promotion right now of 40% discount\n“For your ads, is your priority getting the highest number of purchases, or getting the highest total sales value (bigger orders)?”',
      },
      {
        step: '5. CAPI Solutions (Conversion Signal Accuracy)',
        dialogue:
          "Got it. I noticed youre optimizing for purchases on your website. When you compare your website sales with the purchase reported in Ads manager, do the numbers usually match or do you sometimes feel meta isn't getting the full picture of your conversion?",
      },
      {
        step: '6. Awareness Solutions (Audience Saturation vs. Broadening)',
        dialogue:
          'I saw your 1 of your ad set name is Retargeting sales campaign, are you only targeting website visitor, add to cart or past purchaser right now? or would you rather want to broaden your audience as currently it only reach 2838 user at this time that has high frequency.',
      },
    ],
    talkTrack:
      "(Name of the owner/Decision maker), Before our call, I reviewed PHamily hair care website, facebook page, instragram presence and Ads manager. I can see you're an e-commerce hair-care business with all in one hair care system positioned around areas like hair growth, deep conditioning and styling. i also noticed product-focused content and customer testimonials across your social presence.\n\nI'd like to ask a few quick questions about your goals and challenges so we can focus on what matter most to your business. Is that okay?\n\nWhat is your main goal for running Fb and IG ads right now? Do you need more sales, more leads or more greater brand awareness?\n\nSales Solutions\nContext: Looking at your promotion right now of 40% discount\n“For your ads, is your priority getting the highest number of purchases, or getting the highest total sales value (bigger orders)?”\n\nCAPI Solutions\nGot it. I noticed youre optimizing for purchases on your website. When you compare your website sales with the purchase reported in Ads manager, do the numbers usually match or do you sometimes feel meta isn't getting the full picture of your conversion?\n\nAwareness Solutions\nI saw your 1 of your ad set name is Retargeting sales campaign, are you only targeting website visitor, add to cart or past purchaser right now? or would you rather want to broaden your audience as currently it only reach 2838 user at this time that has high frequency.",
    exitCriteria:
      'Advertiser clarifies their sales vs. awareness priority, confirms tracking consistency, and acknowledges the retargeting saturation limit.',
  },
  {
    level: 3,
    id: 'tailored-solution',
    title: 'Tailored Solution',
    shortTitle: 'Tailored Solution',
    phase: 'alignment',
    tag: '3-Part Solution: CAPI, Advantage+ & Reels',
    estimatedDuration: '8–10 mins',
    objective:
      'Present a tailored 3-part Meta solution for PHamily: Conversions API for better tracking data, Advantage+ Sales campaign for automated optimization and audience expansion, and Reels-format creative for higher engagement.',
    whyItMatters:
      'Connects the exact discovery findings (accurate purchase data, 40% promotion, 2,838 audience saturation) to Meta best practices backed by verified A/B test benchmarks.',
    proTips: [
      'Name the 3-part framework upfront so the advertiser has a clear mental map.',
      'Connect each module directly back to what they showed you during Discovery.',
      'Cite Meta’s A/B test benchmarks (12% lower cost per purchase, Pilgrim’s 28% drop, Reels 34% cost efficiency) to establish undeniable authority.',
      'Establish a tight 7-day learning protocol before any scaling decisions.',
    ],
    scriptSegments: [
      {
        step: '1. NAME IT — 3-Part Solution Framework',
        dialogue:
          '“Based on what we discussed about increasing sales, reaching more customers, and getting more from every purchase, I’d like to recommend a 3-part solution for PHamily:\n\n• Conversions API for better data\n• Advantage+ Sales campaign for smarter optimization\n• Reels-format creative for stronger ads\n\nCan I walk you through how each one fits your goals?”',
      },
      {
        step: '2. CONNECT IT — Bridging to PHamily Goals',
        dialogue:
          '“Let me show you how each part connects to what you told me.\n\nFirst, better data with the Conversions API.\nYou’re running purchase-focused campaigns and sending people to your website, so accurate purchase tracking matters a lot. The Conversions API works alongside your Pixel and sends purchases to Meta directly from your store. That gives Meta more complete conversion data, which improves tracking accuracy and optimization. Right now Ads Manager shows [Y] purchases while your store shows [X].\n\nSecond, smarter optimization with Advantage+ Sales.\nYour website promo is 40% off, which makes people more likely to buy, and each purchase gives Meta more to learn from. With an Advantage+ Sales campaign set to Maximize Number of Conversions, Meta looks for the most purchases for your budget. It also uses Advantage+ Audience to find new buyers automatically. Your retargeting ad set reached only 2,838 people with high frequency, so the same small group keeps seeing your ads. Advantage+ removes that limit.\n\nThird, stronger creative with Reels.\nShort vertical videos let you show your products in action, like before-and-after routines, deep conditioning demos, and customer testimonials. It’s one of the most engaging formats on Facebook and Instagram today.\n\nWhen these three work together, you strengthen the three biggest drivers of performance: better data, smarter optimization, and stronger creative.”',
      },
      {
        step: '3. PROVE IT — Verified Benchmark Proof & Case Studies',
        dialogue:
          '“This isn’t just theory. In 15 A/B tests Meta ran, Advantage+ sales campaigns delivered a 12% lower cost per purchase than advertisers’ regular campaigns.\n\nA real example: Pilgrim’s, an e-commerce brand, saw a 28% drop in cost per purchase and a 26% increase in return on ad spend.\n\nFor Reels, Meta found that ads built with three things—9:16 vertical video, audio on, and key details placed in the safe zone—delivered a 34% lower cost per result than image ads.\n\nResults vary by business, so I’m not promising those exact numbers. These are benchmarks from Meta’s tests, not guaranteed reductions in your cost per purchase. But they show that this setup has helped brands like yours lower their costs.”',
      },
      {
        step: '4. CLOSE IT — Agreed Next Steps & 7-Day Sprint',
        dialogue:
          '“Here’s what I suggest as next steps:\n\n• Today: We set up the Conversions API alongside your Pixel and confirm in Events Manager that purchases are coming through.\n• Today or tomorrow: We build your Advantage+ Sales campaign set to Maximize Number of Conversions, with your 40% promo creative in Reels format (9:16, with audio).\n• Next 7 days: We let it run without major edits, so Meta can learn.\n• Day 7: We compare cost per purchase against your current campaign and decide together whether to scale it.”',
      },
    ],
    talkTrack:
      '“Based on what we discussed about increasing sales, reaching more customers, and getting more from every purchase, I’d like to recommend a 3-part solution for PHamily:\nConversions API for better data\nAdvantage+ Sales campaign for smarter optimization\nReels-format creative for stronger ads\nCan I walk you through how each one fits your goals?”\n\n“Let me show you how each part connects to what you told me.\nFirst, better data with the Conversions API.\nYou’re running purchase-focused campaigns and sending people to your website, so accurate purchase tracking matters a lot. The Conversions API works alongside your Pixel and sends purchases to Meta directly from your store. That gives Meta more complete conversion data, which improves tracking accuracy and optimization. Right now Ads Manager shows [Y] purchases while your store shows [X].\nSecond, smarter optimization with Advantage+ Sales.\nYour website promo is 40% off, which makes people more likely to buy, and each purchase gives Meta more to learn from. With an Advantage+ Sales campaign set to Maximize Number of Conversions, Meta looks for the most purchases for your budget. It also uses Advantage+ Audience to find new buyers automatically. Your retargeting ad set reached only 2,838 people with high frequency, so the same small group keeps seeing your ads. Advantage+ removes that limit.\nThird, stronger creative with Reels.\nShort vertical videos let you show your products in action, like before-and-after routines, deep conditioning demos, and customer testimonials. It’s one of the most engaging formats on Facebook and Instagram today.\nWhen these three work together, you strengthen the three biggest drivers of performance: better data, smarter optimization, and stronger creative.”\n\n“This isn’t just theory. In 15 A/B tests Meta ran, Advantage+ sales campaigns delivered a 12% lower cost per purchase than advertisers’ regular campaigns.\nA real example: Pilgrim’s, an e-commerce brand, saw a 28% drop in cost per purchase and a 26% increase in return on ad spend.\nFor Reels, Meta found that ads built with three things, 9:16 vertical video, audio on, and key details placed in the safe zone, delivered a 34% lower cost per result than image ads.\nResults vary by business, so I’m not promising those exact numbers. These are benchmarks from Meta’s tests, not guaranteed reductions in your cost per purchase. But they show that this setup has helped brands like yours lower their costs.”\n\n“Here’s what I suggest as next steps:\nToday: We set up the Conversions API alongside your Pixel and confirm in Events Manager that purchases are coming through.\nToday or tomorrow: We build your Advantage+ Sales campaign set to Maximize Number of Conversions, with your 40% promo creative in Reels format (9:16, with audio).\nNext 7 days: We let it run without major edits, so Meta can learn.\nDay 7: We compare cost per purchase against your current campaign and decide together whether to scale it.”',
    exitCriteria:
      'Advertiser understands how CAPI, Advantage+, and Reels address their goals and commits to the 7-day test framework.',
  },
  {
    level: 4,
    id: 'commercial-conversation',
    title: 'Commercial Conversation',
    shortTitle: 'Commercials & ROI',
    phase: 'alignment',
    tag: 'Budget Scaling: $60 to $78/Day (+30%)',
    estimatedDuration: '5–7 mins',
    objective:
      'Frame the budget increase (+30% to $78/day, or +20% to $72/day) around scaling current purchase momentum, address hesitation with a risk-free 7-day review, and secure agreement to start today.',
    whyItMatters:
      'Anchors the conversation on existing account wins (107 purchases at $60/day) and provides structured fallback options so the advertiser never feels forced or locked in.',
    proTips: [
      'Remind them that their account is already working: 107 purchases proves product-market fit.',
      'Pause after making the recommendation: let the client speak first.',
      'Reassure hesitation with total flexibility: "You’re never locked in, and you can pause or adjust at any time."',
    ],
    scriptSegments: [
      {
        step: '1. Opener & Current Account Baseline',
        dialogue:
          '“Great, since we’re moving forward, let’s make sure the budget supports the results you want.\n\nLooking at your account, your campaign is already bringing in purchases at $60 per day, with 107 purchases in the last [time period]. The question now is how we get more of what’s already working, and that’s where the budget comes in.”',
      },
      {
        step: '2. Primary Recommendation (+30% to $78/Day)',
        dialogue:
          '“If we could generate more sales while keeping a close eye on your cost per purchase, based on your goals, I’d recommend increasing your budget by 30%, from $60 to $78 per day. How does that sound?”\n\n(Pause. Let them respond before you continue.)',
      },
      {
        step: '3. If They Agree',
        dialogue:
          '“Great. Starting the new campaign at this level gives Advantage+ enough room to learn quickly and find new buyers. We’ll watch cost per purchase closely during the 7-day test.”',
      },
      {
        step: '4. If They’re Hesitant (Derisking)',
        dialogue:
          '“I understand, and the goal isn’t simply to spend more. It’s to give Advantage+ more room to find additional purchase opportunities and scale what’s already working. You’ve already seen that your campaign can bring in purchases at your current budget, and this lets us test whether it can bring in more.\n\nWe’ll review the results together after 7 days. If cost per purchase holds up, we keep it. If it doesn’t, we adjust. You’re never locked in, and you can pause or adjust at any time.”',
      },
      {
        step: '5. If They’re Still Unsure (Fallback: +20% to $72/Day)',
        dialogue:
          '“We can start smaller, with a 20% increase to $72 per day, and review after the first week. Would that feel more comfortable?”',
      },
      {
        step: '6. Confirm and Close',
        dialogue:
          '“So the plan is [$78 / $72] per day, using the Conversions API, an Advantage+ Sales campaign set to Maximize Number of Conversions, and your 40% promo in Reels format. We run it for 7 days, then compare results and decide together how to scale. Shall we get started today?”',
      },
    ],
    talkTrack:
      '“Great, since we’re moving forward, let’s make sure the budget supports the results you want.”\n\n“Looking at your account, your campaign is already bringing in purchases at $60 per day, with 107 purchases in the last [time period]. The question now is how we get more of what’s already working, and that’s where the budget comes in.”\n\n“If we could generate more sales while keeping a close eye on your cost per purchase, based on your goals, I’d recommend increasing your budget by 30%, from $60 to $78 per day. How does that sound?”\n\n(Pause. Let them respond before you continue.)\n\nIf they agree:\n“Great. Starting the new campaign at this level gives Advantage+ enough room to learn quickly and find new buyers. We’ll watch cost per purchase closely during the 7-day test.”\n\nIf they’re hesitant:\n“I understand, and the goal isn’t simply to spend more. It’s to give Advantage+ more room to find additional purchase opportunities and scale what’s already working. You’ve already seen that your campaign can bring in purchases at your current budget, and this lets us test whether it can bring in more.\n\nWe’ll review the results together after 7 days. If cost per purchase holds up, we keep it. If it doesn’t, we adjust. You’re never locked in, and you can pause or adjust at any time.”\n\nIf they’re still unsure:\n“We can start smaller, with a 20% increase to $72 per day, and review after the first week. Would that feel more comfortable?”\n\nConfirm and close:\n“So the plan is [$78 / $72] per day, using the Conversions API, an Advantage+ Sales campaign set to Maximize Number of Conversions, and your 40% promo in Reels format. We run it for 7 days, then compare results and decide together how to scale. Shall we get started today?”',
    exitCriteria:
      'Advertiser agrees to test budget ($78 or $72/day) and commits to the 7-day evaluation window.',
  },
  {
    level: 5,
    id: 'solution-implementation-commitment',
    title: 'Solution Implementation and Commitment',
    shortTitle: 'Solutions Implementation',
    phase: 'execution',
    tag: 'Webex Screen Share & Live Setup',
    estimatedDuration: '10–15 mins',
    objective:
      'Guide advertiser through Webex screen sharing to build and publish the Advantage+ Sales campaign (ASC | PHamily | Reels | Oct 2026) live at $78/day, set up Reels creatives, and schedule the Conversions API (CAPI) technical specialist call.',
    whyItMatters:
      'Screen sharing ensures the advertiser sees exactly how the campaign is structured, gains confidence to manage it later, verifies admin access, and locks in resilient tracking via CAPI.',
    proTips: [
      'Confirm admin access before creating the campaign so permissions do not block publishing.',
      'Leave Advantage+ and Advantage+ Placements on with no exclusions to find the lowest cost per purchase.',
      'Inspect Advantage+ creative enhancements individually to ensure brand and product accuracy.',
      'Stress the 7-day rule: no manual edits to budget, objective, or audience during the learning phase.',
      'Prompt them to have website admin and Meta Business logins ready for the CAPI specialist call.',
    ],
    scriptSegments: [
      {
        step: '1. Set up the Screen Share & Account Verification',
        dialogue:
          '“Great, now let’s build this together. You’ll share your screen, and I’ll walk you through each step, so you can see exactly how your campaign is set up, and you’ll know how to manage it later. Is that okay?\n\nCould you click the Webex link I sent and choose Share screen? Please share just your browser window, and close any tabs you don’t want me to see.\n\nNow could you open Meta Ads Manager and make sure you’re in the PHamily Hair Care ad account? You should see the account name near the top left. Let me know what you see.”\n\n(Confirm they have admin access. If they can’t edit campaigns, pause and ask who can.)',
      },
      {
        step: '2. Create the Campaign',
        dialogue:
          '“Please click the green Create button. Now you’ll see a list of objectives. Could you select Sales, since our goal is purchases on your website? Then click Continue if it asks.\n\nAdvantage+ is on by default for Sales campaigns. Please leave it on so Meta can optimize for you.\n\nNow let’s name it. Could you click the campaign name field and type: ASC | PHamily | Reels | Oct 2026? That makes it easy to find and compare later.”\n\n(Check-in) “Are you seeing the campaign name field?”',
      },
      {
        step: '3. Set the Budget',
        dialogue:
          '“Next, the campaign settings. Please leave A/B test off for now, since we want a clean read on this setup first.\n\nCould you find Advantage+ campaign budget and turn it on? That lets Meta move spend to where it finds purchases. Now please type $78 in the daily budget. [If smaller option: $72.] Leave the bid strategy on the default, which aims for the highest volume of purchases.”',
      },
      {
        step: '4. Set up the Ad Set',
        dialogue:
          '“Let’s scroll down to the ad set section. I’ll tell you what to select:\n\n• Conversion location: please choose Website, since your customers buy on your site.\n• Pixel and event: select your PHamily Pixel, then choose Purchase as the event. That tells Meta what a success looks like.\n• Performance goal: please choose Maximize number of conversions. Your current campaign uses Maximize Value, and this change tells Meta to find the most purchases for your budget.\n• Audience: please select Advantage+ Audience. You can add suggestions, like your website visitors or past customers, but Meta isn’t limited to them, which helps us reach beyond your 2,838-person retargeting group.\n• Placements: please keep Advantage+ placements on, with no exclusions, so your ads can show wherever a purchase costs the least.\n• Schedule: leave it as starting now, with no end date.”\n\n(Check-in) “Everything so far match what I described? Any questions before we move to the ads?”',
      },
      {
        step: '5. Build the Ads',
        dialogue:
          '“Now the creative. Please select your Facebook Page and your Instagram account in the identity section.\n\nNext, could you click to upload media and select your Reels? We’re using [number]: [list, e.g., before-and-after routine, customer testimonial, deep conditioning demo, 40% promo]. Please add one at a time.\n\nFor each ad, please fill in:\n• Primary text: [the message you agreed on]\n• Headline: [headline]\n• Call to action: Shop Now\n• Website URL: your store link [and tracking parameters, if used]\n\nYou’ll see some Advantage+ creative enhancements. Please go through them one by one with me. We’ll keep the ones that suit your brand and turn off anything that changes how your products look.\n\nFinally, please click the preview and choose Reels. Do you see the text and the Shop Now button clearly, without anything covering them?”',
      },
      {
        step: '6. Check Opportunity Score, Publish & Wrap-up',
        dialogue:
          '“You should see an Opportunity Score from 0 to 100, with suggestions. Could you read me the top one or two? We’ll turn on the ones that fit your goals.\n\nEverything looks ready. Please click Publish.\n\nYour campaign is live. Meta reviews the ads first, which is usually quick. For the next 7 days, please avoid changing the budget, goal or audience, since that can restart learning. I’ll check in on days 1 and 2 to make sure the ads were approved and purchases are tracking, and we’ll review results together on day 7. You did great today.”',
      },
      {
        step: '7. Scheduling the CAPI Call',
        dialogue:
          '“One last thing. To get the best results, we want your purchases going to Meta through the Conversions API. For that, I’ll bring in one of our Meta technical specialists to walk you through the setup. Can we find a time?\n\nWhat day and time works best for you this week or next? If you have two or three options, that helps me find the best fit.\n\nThe specialist will help connect your store to Meta and confirm that purchases are coming through. Please have your website admin login and your Meta Business account access ready.\n\nLet me repeat that back: we’re scheduled for [day, date] at [time, time zone], with [names], and the invite is going to [email]. Is that right? You’ll get the invite shortly, and I’ll follow up to confirm. Thank you, and I’m looking forward to seeing your results.”',
      },
    ],
    talkTrack:
      '“Great, now let’s build this together. You’ll share your screen, and I’ll walk you through each step, so you can see exactly how your campaign is set up, and you’ll know how to manage it later. Is that okay?”\n\nSet up the screen share:\n“Could you click the Webex link I sent and choose Share screen? Please share just your browser window, and close any tabs you don’t want me to see.\n\nNow could you open Meta Ads Manager and make sure you’re in the PHamily Hair Care ad account? You should see the account name near the top left. Let me know what you see.”\n(Confirm admin access. If they can’t edit campaigns, pause and ask who can.)\n\n1. Create the campaign:\n“Please click the green Create button. Now you’ll see a list of objectives. Could you select Sales, since our goal is purchases on your website? Then click Continue if it asks.\n\nAdvantage+ is on by default for Sales campaigns. Please leave it on so Meta can optimize for you.\n\nNow let’s name it. Could you click the campaign name field and type: ASC | PHamily | Reels | Oct 2026? That makes it easy to find and compare later.”\n(Check-in) “Are you seeing the campaign name field?”\n\n2. Set the budget:\n“Next, the campaign settings. Please leave A/B test off for now, since we want a clean read on this setup first.\n\nCould you find Advantage+ campaign budget and turn it on? That lets Meta move spend to where it finds purchases. Now please type $78 in the daily budget. [If smaller option: $72.] Leave the bid strategy on the default, which aims for the highest volume of purchases.”\n\n3. Set up the ad set:\n“Let’s scroll down to the ad set section. I’ll tell you what to select:\nConversion location: please choose Website, since your customers buy on your site.\nPixel and event: select your PHamily Pixel, then choose Purchase as the event. That tells Meta what a success looks like.\nPerformance goal: please choose Maximize number of conversions. Your current campaign uses Maximize Value, and this change tells Meta to find the most purchases for your budget.\nAudience: please select Advantage+ Audience. You can add suggestions, like your website visitors or past customers, but Meta isn’t limited to them, which helps us reach beyond your 2,838-person retargeting group.\nPlacements: please keep Advantage+ placements on, with no exclusions, so your ads can show wherever a purchase costs the least.\nSchedule: leave it as starting now, with no end date.”\n(Check-in) “Everything so far match what I described? Any questions before we move to the ads?”\n\n4. Build the ads:\n“Now the creative. Please select your Facebook Page and your Instagram account in the identity section.\n\nNext, could you click to upload media and select your Reels? We’re using [number]: [list, e.g., before-and-after routine, customer testimonial, deep conditioning demo, 40% promo]. Please add one at a time.\n\nFor each ad, please fill in:\nPrimary text: [the message you agreed on]\nHeadline: [headline]\nCall to action: Shop Now\nWebsite URL: your store link [and tracking parameters, if used]\n\nYou’ll see some Advantage+ creative enhancements. Please go through them one by one with me. We’ll keep the ones that suit your brand and turn off anything that changes how your products look.\n\nFinally, please click the preview and choose Reels. Do you see the text and the Shop Now button clearly, without anything covering them?”\n\n5. Check Opportunity Score and publish:\n“You should see an Opportunity Score from 0 to 100, with suggestions. Could you read me the top one or two? We’ll turn on the ones that fit your goals.\n\nEverything looks ready. Please click Publish.”\n\nWrap-up:\n“Your campaign is live. Meta reviews the ads first, which is usually quick. For the next 7 days, please avoid changing the budget, goal or audience, since that can restart learning. I’ll check in on days 1 and 2 to make sure the ads were approved and purchases are tracking, and we’ll review results together on day 7. You did great today.”\n\nSCHEDULING THE CAPI CALL:\nTransition:\n“One last thing. To get the best results, we want your purchases going to Meta through the Conversions API. For that, I’ll bring in one of our Meta technical specialists to walk you through the setup. Can we find a time?”\nAsk for preferred date and time:\n“What day and time works best for you this week or next? If you have two or three options, that helps me find the best fit.”\nSet expectations:\n“The specialist will help connect your store to Meta and confirm that purchases are coming through. Please have your website admin login and your Meta Business account access ready.”\nConfirm and close:\n“Let me repeat that back: we’re scheduled for [day, date] at [time, time zone], with [names], and the invite is going to [email]. Is that right? You’ll get the invite shortly, and I’ll follow up to confirm. Thank you, and I’m looking forward to seeing your results.”',
    exitCriteria:
      'Advantage+ campaign published live on Webex screen share, CAPI call scheduled with Meta technical specialist, and advertiser agrees to 7-day learning phase protocol.',
  },
  {
    level: 6,
    id: 'handling-objection',
    title: 'Handling Objection',
    shortTitle: 'Handling Objections',
    phase: 'execution',
    tag: 'Friction Resolution & Derisking',
    estimatedDuration: '5–8 mins',
    objective:
      'Isolate hesitations regarding budget constraints, past ad failures, or team capacity using the L.A.C.R. framework (Listen, Acknowledge, Clarify, Respond).',
    whyItMatters:
      'Advertisers who have burned money on Meta ads in the past need reassurance that this structured framework eliminates previous failure points.',
    proTips: [
      'Validate past frustration: "It makes total sense you\'re cautious after what happened with your previous agency."',
      'Separate the real blocker from surface hesitation.',
      'Derisk the rollout with controlled budget limits and daily spending caps.',
    ],
    scriptSegments: [
      {
        step: '1. Acknowledge & Validate',
        dialogue:
          '"I completely understand your hesitation given that your previous campaigns didn\'t yield the ROAS you expected. Most advertisers who struggled had fragmented ad sets competing against themselves in the auction."',
      },
      {
        step: '2. Clarify & Isolate Concern',
        dialogue:
          '"Aside from the concern about ad spend efficiency, is there anything else holding you back from testing this structure?"',
      },
      {
        step: '3. Derisk with Budget Safety Controls',
        dialogue:
          '"To give you total peace of mind, we will set automated rules inside your Ads Manager: if Cost Per Purchase exceeds $25, Meta automatically pauses the ad set. You are in 100% control of the downside. Does that resolve the risk for you?"',
      },
    ],
    talkTrack:
      '"I completely understand your hesitation given that your previous campaigns didn\'t yield the ROAS you expected. Most advertisers who struggled had fragmented ad sets competing against themselves in the auction.\n\nAside from the concern about ad spend efficiency, is there anything else holding you back from testing this structure?\n\nTo give you total peace of mind, we will set automated rules inside your Ads Manager: if Cost Per Purchase exceeds $25, Meta automatically pauses the ad set. You are in 100% control of the downside. Does that resolve the risk for you?"',
    exitCriteria:
      'Advertiser expresses satisfaction with the safety controls and signals readiness to proceed to launch.',
  },
  {
    level: 7,
    id: 'unlocking-upselling',
    title: 'Unlocking and Upselling',
    shortTitle: 'Unlocking & Upsell',
    phase: 'closing',
    tag: 'Audience Expansion & Multi-Channel Scale',
    estimatedDuration: '3–5 mins',
    objective:
      'Introduce secondary growth levers—such as Instagram Reels creative testing, Meta Catalog sales, and custom lookalike audience expansion—for Phase 2 scaling.',
    whyItMatters:
      'Planting seeds for account expansion when enthusiasm is high sets up long-term customer lifetime value (LTV).',
    proTips: [
      'Frame expansion as scaling winning creatives rather than increasing workload.',
      'Show how video creative diversification unlocks cheaper inventory across Instagram Reels.',
      'Keep focus on Phase 1 first while painting an inspiring Phase 2 vision.',
    ],
    scriptSegments: [
      {
        step: '1. Catalog & Creative Expansion',
        dialogue:
          '"Once we stabilize your core Advantage+ campaign, our Phase 2 lever is integrating your product catalog directly into Meta Advantage+ Catalog ads. This automatically retargets shoppers with the exact products they browsed."',
      },
      {
        step: '2. Instagram Reels & Video Synergy',
        dialogue:
          '"We also have an opportunity to test 9:16 short-form video creative on Reels, which currently delivers 30% lower CPMs across our e-commerce portfolio. We can map that out for our Day 14 sync."',
      },
    ],
    talkTrack:
      '"Once we stabilize your core Advantage+ campaign, our Phase 2 lever is integrating your product catalog directly into Meta Advantage+ Catalog ads. This automatically retargets shoppers with the exact products they browsed.\n\nWe also have an opportunity to test 9:16 short-form video creative on Reels, which currently delivers 30% lower CPMs across our e-commerce portfolio. We can map that out for our Day 14 sync."',
    exitCriteria:
      'Advertiser expresses interest in Phase 2 scaling levers and agrees to review them during milestone check-ins.',
  },
  {
    level: 8,
    id: 'closing',
    title: 'Closing',
    shortTitle: 'Closing Recap',
    phase: 'closing',
    tag: 'Executive Recap & Day 7 Checkpoint',
    estimatedDuration: '2–4 mins',
    objective:
      'Deliver the comprehensive 10-point Closing Recap summarizing the $60 to $78 budget scaling, Advantage+ audience expansion, Reels 40% promo build, CAPI specialist appointment, 7-day learning protocol, and Day 7 scaling review.',
    whyItMatters:
      'A structured, step-by-step recap reinforces advertiser confidence, eliminates buyer remorse, solidifies the mutual commitment, and ensures all technical and meeting prerequisites are locked in before hanging up.',
    proTips: [
      'Deliver the recap clearly and deliberately, highlighting the 30% budget expansion and CAPI tracking protection.',
      'Reiterate that the advertiser must have website admin and Meta Business access ready for the CAPI specialist call.',
      'Remind them not to adjust budget, audience, or goals during the 7-day learning window.',
      'Check in on Days 1 and 2 for ad approval, and lock in the exact Day 7 review date (e.g., Nov 2, 2026).',
    ],
    scriptSegments: [
      {
        step: '1. Gratitude & Baseline Account Review',
        dialogue:
          '“Thank you, [Name], for your time today, and for building this campaign with me.\n\nWe reviewed your account, where you’re spending $60 per day and have generated 107 purchases.”',
      },
      {
        step: '2. Audience Expansion & Campaign Launch',
        dialogue:
          '“We saw that your retargeting ad set reached only 2,838 people, so we’re widening your reach with Advantage+.\n\nWe launched a new Advantage+ Sales campaign set to Maximize Number of Conversions, with a budget of $78 per day, a 30% increase.”',
      },
      {
        step: '3. Creative Assets & CAPI Specialist Scheduling',
        dialogue:
          '“We added [number] Reels ads that use your 40% promo, in vertical video with audio.\n\nWe also agreed to connect the Conversions API, so Meta gets more complete purchase data alongside your Pixel.\n\nYour Conversions API setup call with our Meta technical specialist is scheduled for [day, date] at [time, time zone]. Please have your website admin and your Meta Business access ready for that call.”',
      },
      {
        step: '4. 7-Day Learning Protocol & Final Check-in',
        dialogue:
          '“For the next 7 days, please avoid changing the budget, goal or audience, and I’ll check in on days 1 and 2 to confirm everything is running.\n\nWe’ll review your results together on [Day 7 date, e.g., Nov 2, 2026] and decide whether to scale, so is there anything you’d like to ask before we end the call?”',
      },
    ],
    talkTrack:
      'CLOSING RECAP:\n“Thank you, [Name], for your time today, and for building this campaign with me.”\n“We reviewed your account, where you’re spending $60 per day and have generated 107 purchases.”\n“We saw that your retargeting ad set reached only 2,838 people, so we’re widening your reach with Advantage+.”\n“We launched a new Advantage+ Sales campaign set to Maximize Number of Conversions, with a budget of $78 per day, a 30% increase.”\n“We added [number] Reels ads that use your 40% promo, in vertical video with audio.”\n“We also agreed to connect the Conversions API, so Meta gets more complete purchase data alongside your Pixel.”\n“Your Conversions API setup call with our Meta technical specialist is scheduled for [day, date] at [time, time zone].”\n“Please have your website admin and your Meta Business access ready for that call.”\n“For the next 7 days, please avoid changing the budget, goal or audience, and I’ll check in on days 1 and 2 to confirm everything is running.”\n“We’ll review your results together on [Day 7 date, e.g., Nov 2, 2026] and decide whether to scale, so is there anything you’d like to ask before we end the call?”',
    exitCriteria:
      'Advertiser acknowledges the 10-point recap, confirms CAPI setup call requirements, and agrees to the Day 7 scaling review.',
  },
  {
    level: 9,
    id: 'post-call-follow-up-next-steps',
    title: 'Post-Call Follow-up & Next Steps',
    shortTitle: 'Follow-up & Execution',
    phase: 'closing',
    tag: 'Executive Recap & Checkpoint Prep',
    estimatedDuration: 'Immediate (< 60 mins)',
    objective:
      'Dispatch a customized recap email within 60 minutes, document Ads Manager baseline metrics in CRM, and prepare monitoring alerts for Day 7.',
    whyItMatters:
      'Prompt documentation cements credibility, provides an agreed-upon audit trail, and prevents post-call buyer remorse.',
    proTips: [
      'Send recap within 60 minutes while conversation details are fresh.',
      'Include screenshots of the published campaign structure and safety rule settings.',
      'Set an internal calendar alert to check account pacing on Day 3.',
    ],
    scriptSegments: [
      {
        step: '1. Executive Email Recap Template',
        dialogue:
          'Subject: Meta Ads Optimization Recap & Next Checkpoint — [Business Page] + Meta\n\nHi [Name],\n\nThank you for walking through your Ads Manager today! Here is a recap of the optimizations we implemented and our upcoming milestones:\n\n1. Published Advantage+ Shopping Campaign with consolidated ad set structure\n2. Verified Conversions API server-side tracking integration\n3. Set automated CPA safety caps to protect your budget\n4. Next Review: Thursday @ 10:00 AM (WebEx link attached)\n\nPlease reply if you need any assistance before our checkpoint on Thursday!',
      },
    ],
    talkTrack:
      'Subject: Meta Ads Optimization Recap & Next Checkpoint — [Business Page] + Meta\n\nHi [Name],\n\nThank you for walking through your Ads Manager today! Here is a recap of the optimizations we implemented and our upcoming milestones:\n\n1. Published Advantage+ Shopping Campaign with consolidated ad set structure\n2. Verified Conversions API server-side tracking integration\n3. Set automated CPA safety caps to protect your budget\n4. Next Review: Thursday @ 10:00 AM (WebEx link attached)\n\nPlease reply if you need any assistance before our checkpoint on Thursday!',
    exitCriteria:
      'Recap acknowledged, CRM updated, and Day 7 review placeholder confirmed.',
  },
]

export const coiCallFlow = {
  eyebrow: 'Meta Advertising Sales Framework',
  titleThin: 'Israel Santos |',
  titleBold: 'COI Call Flow.',
  lede:
    'The 9-level COI sales call framework engineered for consultative digital advertising conversations—from opening verification and WebEx screen-share audits to campaign optimization, budget scaling, and deal commitment.',
  stats: [
    { label: 'Representative', value: 'Israel Santos' },
    { label: 'Role', value: 'Sales Digital Advertising Pro' },
    { label: 'Levels', value: '09 Stages' },
    { label: 'Platform', value: 'Meta Ads Manager' },
  ],
}

export function findLevel(idOrNumber: string | number): CoiLevel | undefined {
  if (typeof idOrNumber === 'number') {
    return coiLevels.find((lvl) => lvl.level === idOrNumber)
  }
  return coiLevels.find((lvl) => lvl.id === idOrNumber || String(lvl.level) === idOrNumber)
}

export function levelsInPhase(phaseId: CoiPhaseId): CoiLevel[] {
  return coiLevels.filter((lvl) => lvl.phase === phaseId)
}
