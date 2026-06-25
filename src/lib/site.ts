export const SITE = {
  name: "Hobby Locomotive Insurance",
  domain: "hobbylocomotiveinsurance.com",
  url: "https://hobbylocomotiveinsurance.com",
  tagline: "Insurance for Model Train & Hobby Locomotive Enthusiasts",
  description: "Specialty insurance for model train collectors, live steam operators, garden railway hobbyists, and miniature railroad clubs. Agreed value coverage, transit protection, club liability. Licensed in all 50 states. Same-day quotes.",
  phone: "844-967-5247",
  phoneHref: "tel:+18449675247",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  statesLicensed: "All 50 states",
} as const;

export const SERVICES = [
  {
    slug: "model-train-collection-insurance",
    title: "Model Train Collection Insurance",
    short: "Agreed value coverage for HO, N, O, G scale and brass collections — no depreciation, no homeowners caps.",
    icon: "Train",
    description:
      "Standard homeowners policies cap hobby collectibles at $1,000–$3,000 with no transit coverage and no agreed value. A serious model train collection easily reaches $10,000–$100,000+. Specialty personal articles coverage protects your collection at its true, agreed value.",
    longDescription: `## Model Train Collection Insurance: Agreed Value Coverage for Every Scale

Your model train collection represents years of careful building, hunting, and investing. Whether you collect vintage Lionel O gauge, hand-built brass HO locomotives, or a modern DCC-equipped layout spanning hundreds of square feet, your homeowners policy isn't built to protect it.

## What Standard Home Insurance Misses

A typical homeowners or renters policy applies a scheduled personal property limit — often $1,000 to $3,000 total — to collectibles and hobby items. Even policies with "floaters" pay actual cash value (ACV), which means:

- A 1950s Lionel postwar set bought for $800 might receive $200 after depreciation
- A hand-built brass HO steam locomotive worth $3,500 might be paid out at $900
- Transit to a train show is typically excluded
- Mysterious disappearance (theft without a police report) is usually excluded
- Breakage from handling is almost never covered

Specialty personal articles insurance eliminates all of these gaps.

## What Agreed Value Coverage Means

When we place your collection on an agreed value policy, you and the insurance company agree on the insured value upfront. If a covered loss occurs, you receive that agreed amount — no depreciation, no ACV adjustment, no negotiation with an adjuster who has never seen a brass model.

**Example:** You insure a collection at $45,000 agreed value. A fire destroys the storage room. You receive $45,000. Period.

## What's Covered

- **Locomotives** — all scales (Z, N, HO, S, O, G, standard gauge), steam, diesel, electric
- **Rolling stock** — passenger cars, freight cars, cabooses, specialty equipment
- **Track and switches** — all gauges, flex track, turnouts, sectional track
- **DCC systems** — decoders, command stations, boosters, sound systems
- **Structures and scenery** — built kit or scratch-built, buildings, bridges, tunnels
- **Display cases** — lit display cabinets, cases with locking glass
- **Controllers and accessories** — transformers, throttles, detection systems
- **In transit** — hauling to/from shows, club meets, appraisals, repairs
- **Mysterious disappearance** — theft without evidence of forced entry
- **Accidental breakage** — dropping a locomotive, accidental damage during handling

## Scales We Regularly Insure

All scales covered: Z, N, HO, S, O (2-rail and 3-rail), Standard Gauge, G scale, and all live steam gauges. Whether you collect vintage Lionel postwar, hand-built brass, or modern DCC, we have a market for it.

## Valuation and Documentation

You do not need a formal appraisal to get coverage. We work with manufacturer price lists, secondary market comparables (eBay sold listings, dealer quotes), formal appraisals from recognized evaluators, and your own inventory documentation with photographs. We recommend photographing your collection annually and maintaining an updated inventory list.

## Pricing Factors

Collection insurance premiums depend on total insured value, storage conditions (climate-controlled room vs. garage), security measures, transit frequency, and claims history. Most collectors are surprised at how affordable coverage is. A $25,000 collection can often be covered for $150–$350 per year — far less than losing even one significant locomotive.

## Getting Your Collection Insured

The process takes about 15 minutes: tell us about your collection, we shop specialty markets, and you receive a quote same-day. We bind coverage and issue your certificate immediately.`,
    coverages: [
      "Agreed value (no depreciation)",
      "All scales: Z, N, HO, S, O, G, brass",
      "Transit to shows and repairs",
      "DCC systems and accessories",
      "Mysterious disappearance",
      "Accidental breakage coverage",
    ],
    faqs: [
      {
        q: "Does homeowners insurance cover my model train collection?",
        a: "Homeowners policies typically include a $1,000–$3,000 sublimit for collectibles and hobby equipment, pay actual cash value (not replacement cost), exclude transit losses, and usually exclude mysterious disappearance. A specialty personal articles policy fills all these gaps with agreed value coverage and broader perils.",
      },
      {
        q: "What is agreed value coverage and why does it matter?",
        a: "Agreed value means you and the insurance company agree on the insured value of your collection upfront — before any loss occurs. If a covered loss happens, you receive that agreed amount without depreciation adjustments or ACV debates. This is the critical difference between hobby insurance and a homeowners rider.",
      },
      {
        q: "Do I need a formal appraisal to get coverage?",
        a: "No. We work with photos, manufacturer records, eBay sold listings, dealer quotes, and your own inventory documentation. A formal appraisal is helpful for very high-value collections or rare brass locomotives, but is not required to start coverage.",
      },
      {
        q: "Is vintage Lionel covered at current market value?",
        a: "Yes. We insure vintage Lionel, American Flyer, Marx, and other postwar and prewar sets at current secondary market value, not original purchase price. Proper documentation (photos, secondary market price guides, recent sold comps) supports the agreed value we place on your collection.",
      },
      {
        q: "Are DCC systems and sound decoders covered?",
        a: "Yes. DCC command stations, boosters, decoders, sound systems, and associated electronics are includable in your collection policy. List them with your locomotives and rolling stock inventory.",
      },
      {
        q: "What if I don't have receipts for all my trains?",
        a: "Receipts are helpful but not required. We work with secondary market sold listings, manufacturer price lists, and dealer quotes to establish value. A thorough photo inventory and written description of each significant piece is often sufficient.",
      },
      {
        q: "Does the policy cover trains stored in a detached garage?",
        a: "Yes, provided we know where your collection is stored. Coverage typically extends to all locations where insured property is kept — your home, a detached garage, a storage unit — as long as those locations are disclosed during the application.",
      },
      {
        q: "Can I insure a layout that's built into a room?",
        a: "Yes, including benchwork, installed track, structures, and scenery. Fixed layouts attached to the structure of your home may also be coverable as part of the dwelling — we'll discuss the best coverage structure during your quote.",
      },
      {
        q: "What scales are covered?",
        a: "All scales: Z, T, N, HO, S, O (2-rail and 3-rail), Standard Gauge, G scale, and all live steam gauges (3.5\", 5\", 7.5\"). We also cover fractional scale brass and specialty scales from Japanese manufacturers.",
      },
      {
        q: "Is accidental breakage covered?",
        a: "Many specialty hobby policies include accidental breakage as a covered peril — this is one of the key benefits over homeowners, which almost never covers breakage. Confirm accidental breakage is included when we discuss your quote.",
      },
      {
        q: "Does transit to train shows count as a covered loss?",
        a: "Yes. Transit to and from shows, club meets, repairs, and appraisals is included. Standard homeowners 'property away from premises' clauses often limit or exclude this coverage.",
      },
      {
        q: "What happens if my train is stolen from my car at a show?",
        a: "A specialty hobby policy covers theft from your vehicle. Many homeowners policies exclude or severely limit property stolen from automobiles. Mysterious disappearance coverage also helps when theft cannot be proven definitively.",
      },
      {
        q: "Are unassembled kits covered?",
        a: "Yes. Unassembled kits, partially built models, and parts lots are insurable personal property. Include them in your inventory with current market values.",
      },
      {
        q: "Can I add coverage as my collection grows?",
        a: "Yes. Mid-term additions to your policy are straightforward. Call us when you make a significant purchase and we'll adjust your coverage to reflect the new value. Some policies allow automatic coverage for new acquisitions up to a stated limit — ask about this option.",
      },
      {
        q: "Are hand-built scratch-built models covered?",
        a: "Yes. Scratch-built models are insurable at documented replacement/build cost. We use material receipts, builder documentation, and comparable market values for similar custom work to establish agreed value.",
      },
      {
        q: "Does the policy cover trains on display at a museum or exhibition?",
        a: "Coverage while on loan to a museum or gallery typically requires a specific endorsement or a separate borrower's liability policy from the institution. Discuss the exhibition arrangements with us before loaning significant pieces.",
      },
      {
        q: "Do you cover models I'm buying or selling actively?",
        a: "Personal hobby coverage is for collectors and operators, not dealers. If you're engaged in regular buying/selling as a business, a commercial inland marine policy for the dealer inventory is more appropriate. We can discuss the right structure for your situation.",
      },
      {
        q: "What carriers do you use for model train insurance?",
        a: "We place hobby locomotive and model train coverage with A.M. Best A or A+ rated carriers specializing in collector and personal articles lines. These are not standard homeowners carriers — they understand the hobby and don't need to Google what an LGB locomotive is worth.",
      },
      {
        q: "How does this differ from NMRA member insurance programs?",
        a: "NMRA-affiliated programs (like the JA Bash program) are designed primarily for NMRA members with club-focused coverage. Our policies are broader: agreed value rather than ACV, coverage for all collectors regardless of club affiliation, broader peril selection, and full transit coverage. We can also cover live steam, garden railways, and clubs as a single contact.",
      },
      {
        q: "How quickly can I get a certificate of insurance?",
        a: "Same-day. Once you accept your quote and provide payment, we bind coverage and issue your certificate within hours. For train show venue requirements, we can issue additional insured endorsements as well.",
      },
      {
        q: "Can a single policy cover multiple layouts in different locations?",
        a: "Yes, with proper disclosure of all locations. If you have a layout at home, equipment at a club, and trains stored at a second residence, we can structure coverage to address all locations. Premiums reflect the total insured value and exposure across all locations.",
      },
    ],
  },
  {
    slug: "live-steam-locomotive-insurance",
    title: "Live Steam Locomotive Insurance",
    short: "Property coverage for 3.5\", 5\", and 7.5\" gauge live steamers plus liability for track operations and passenger rides.",
    icon: "Flame",
    description:
      "Live steam locomotives are the pinnacle of the hobby — and the most underinsured. A single 7.5\" gauge locomotive can be worth $20,000–$80,000. Add passenger liability, boiler exposure, and transit risk, and you have a coverage need that no homeowners policy can address.",
    longDescription: `## Live Steam Locomotive Insurance: Property and Liability for Serious Operators

Live steam is the pinnacle of model railroading. You have invested years of craftsmanship, thousands of hours, and tens of thousands of dollars into a machine that actually runs on steam — real water, real fire, real mechanical engineering. Your insurance should match that level of commitment.

## Property Coverage for Your Live Steamer

A single 7.5" gauge Pacific steam locomotive can represent $15,000–$80,000 in materials, machining time, and craftsmanship. Factory-built live steamers from established builders start at $20,000 and go up significantly. We cover the locomotive chassis, boiler, tender, passenger and riding cars, track infrastructure at your home layout, spare parts, tools, and accessories. Coverage includes transit to and from club meets, exhibitions, and events.

All coverage is at agreed value — not ACV. A live steamer's value is in the craftsmanship, not a depreciation schedule. We ensure you are not arguing with an adjuster about the market value of hand-machined driving wheels.

## Liability Coverage — The Critical Gap

### Passenger Liability
When you give a child or adult a ride on your 7.5" gauge track — even in your own backyard — you have created a liability exposure. Standard homeowners policies typically exclude recreational vehicles capable of carrying passengers. A passenger who falls off a riding car or is injured by a derailment can pursue a significant personal claim.

### Public Event Liability
Live steamers frequently take their equipment to county fairs, model railroad shows, and public exhibitions. These events create significant third-party injury exposure. Venue operators require $1M GL minimum and named additional insured certificates — we issue these same-day.

### Boiler Exposure
A pressurized steam boiler, if improperly maintained, carries explosion risk. We work with carriers who provide boiler liability coverage alongside the locomotive property coverage. Most carriers encourage or require a current NBIC inspection certificate.

## Club Operations

Many live steamers operate primarily through a club. Your personal live steam policy covers your locomotive (property) and your individual operations. When you operate your personally-owned locomotive at a club meet, we structure your personal coverage to complement what the club carries. We can also place club GL separately if needed.

## Gauges and Equipment Covered

7.5", 5", and 3.5" gauge ride-able locomotives, large-scale working display steam models (coal or propane fired), custom-built and factory-built locomotives, and associated rolling stock. Both American and European prototype equipment covered.

## Documentation Requirements

For best coverage at the best rate: photos of the locomotive from multiple angles, build records if self-built or purchase documentation if commercially acquired, current NBIC boiler inspection certificate (strongly encouraged), and club membership records showing organized operation history.`,
    coverages: [
      "Agreed value for locomotive and tender",
      "Passenger liability coverage",
      "Boiler explosion liability",
      "Public event and show liability",
      "Transit coverage to meets",
      "Club and personal operation layering",
    ],
    faqs: [
      {
        q: "Does my homeowners policy cover passenger liability for live steam rides?",
        a: "Almost certainly not. Standard homeowners policies exclude motor vehicles and often exclude recreational vehicles capable of carrying passengers. Even if your policy does not specifically exclude live steam, the liability from a passenger injury at a public event is far outside what a homeowners policy is designed to cover.",
      },
      {
        q: "What gauges of live steam do you cover?",
        a: "We cover all gauges: 7.5\", 5\", 3.5\", and smaller operational/display scale steam locomotives. Factory-built and scratch-built locomotives are both eligible. Coal-fired, propane-fired, and electric-assisted steam locomotives are all coverable.",
      },
      {
        q: "Is a boiler inspection required to get coverage?",
        a: "Most carriers strongly encourage a current NBIC inspection and some require it for boiler explosion coverage. Having a current inspection typically qualifies you for better rates and demonstrates proper maintenance to the insurer. Contact your local NBIC-certified inspector to schedule.",
      },
      {
        q: "What if I only operate at a club and not at public events?",
        a: "Coverage is still important. Club operations create liability exposure even when limited to club members. If your club's GL does not cover member-owned equipment operations, your personal live steam policy fills that gap.",
      },
      {
        q: "Can I get coverage for passengers I charge for rides?",
        a: "Charging for rides changes the liability character significantly — it moves from personal hobby to commercial operation. Discuss this with us during your quote. Commercial-level passenger operations may require a different policy structure.",
      },
    ],
  },
  {
    slug: "garden-railway-insurance",
    title: "Garden Railway Insurance",
    short: "Protect your G scale outdoor layout — locomotives, track, structures, and landscaping — from theft, storms, and vandalism.",
    icon: "Leaf",
    description:
      "A garden railway lives outdoors, exposed to weather, theft, and visitor risk that standard home insurance handles poorly. G scale equipment and mature layouts can represent $5,000–$50,000 in value. Specialty coverage protects what homeowners ignores.",
    longDescription: `## Garden Railway Insurance: Outdoor Layout Coverage That Actually Works

A garden railway is one of the most visible — and most underinsured — aspects of the hobby. Your outdoor layout represents years of planning, thousands of dollars in rolling stock and track, and often significant landscaping investment. Standard homeowners insurance handles it poorly.

## Where Homeowners Insurance Falls Short

Garden railways exist in the gray zone of homeowners coverage. Track anchored to the ground may be treated as a fixture rather than personal property, creating a gap. Most homeowners policies apply a $1,000–$3,000 collectibles sublimit to hobby equipment. Theft from the yard may receive reduced coverage. Visitor slip-and-fall liability on garden steps or around operating equipment is an exposure your homeowners liability covers inconsistently.

A specialty garden railway policy covers all of these areas explicitly and at appropriate limits.

## What Our Garden Railway Coverage Includes

Locomotives and rolling stock from all major G scale manufacturers (LGB, USA Trains, Aristo-Craft, Bachmann, Piko, Hartland), track systems including brass rail and switches, DCC and DC electrical systems, structures and station buildings, bridges, tunnels, and built landscaping features integrated with the railway. Coverage includes theft from the outdoor installation, storm damage (hail, wind, falling trees, flood), vandalism, and transit when you bring equipment indoors for winter or take it to shows.

## Weather and Seasonal Risks

G scale equipment is designed for outdoor use but is not invulnerable. Hail can crack plastic superstructures and damage delicate details. Flooding damages motors and brass. Freeze-thaw cycles split rail joints and heave track. Fallen trees from major storms are a significant risk for layouts under tree canopies. A specialty policy covers these perils explicitly.

## Documenting Your Garden Railway

Good documentation makes claims faster. Walk the layout and photograph every locomotive, structure, and track section. Include a video walkthrough showing the full layout in context. Keep purchase receipts and note total linear feet of track. Update documentation annually as you add to the layout.`,
    coverages: [
      "Locomotives, rolling stock, and track",
      "Structures and integrated landscaping",
      "Storm, hail, and flood damage",
      "Theft from outdoor installation",
      "Vandalism coverage",
      "Winter storage and transit coverage",
    ],
    faqs: [
      {
        q: "Is my garden railway covered under my homeowners insurance?",
        a: "Partially, and often inadequately. Track anchored to the ground may be treated as a fixture rather than personal property, creating coverage gaps. Rolling stock and locomotives may hit the $1,000–$3,000 collectibles sublimit. Transit to shows and theft of outdoor equipment often have reduced or excluded coverage. A specialty garden railway policy covers all of this explicitly.",
      },
      {
        q: "Does garden railway insurance cover integrated landscaping?",
        a: "Coverage for integrated landscaping (rocks, built ponds, planted berms that are part of the railway design) varies by policy. We discuss your specific layout during the quote process to ensure the right scope of coverage. Standard homeowners almost never covers landscaping damage at replacement cost.",
      },
      {
        q: "What G scale manufacturers do you insure?",
        a: "All major manufacturers: LGB, USA Trains, Aristo-Craft, Bachmann, Piko, Hartland Locomotive Works, AML, and others. We also insure custom-built G scale equipment and garden railway structures built by the owner.",
      },
      {
        q: "Is visitor liability included in garden railway coverage?",
        a: "Visitor liability (a neighbor tripping on garden steps while visiting your layout) is generally covered by your homeowners liability, not the hobby policy. However, if you host organized club events or charge admission, additional liability coverage is appropriate. We can discuss the right structure.",
      },
    ],
  },
  {
    slug: "model-railroad-club-insurance",
    title: "Model Railroad Club Insurance",
    short: "Liability and property coverage for NMRA chapters, miniature railroad associations, and clubs with permanent or portable layouts.",
    icon: "Users",
    description:
      "Model railroad clubs face significant liability exposure at public exhibitions, open houses, and club operations — and most are underinsured. We place GL, property, and event coverage for formal clubs, NMRA chapters, and garden railway societies.",
    longDescription: `## Model Railroad Club Insurance: GL, Property, and Event Coverage

Your club represents years of collective effort, significant shared equipment investment, and ongoing public engagement. Member homeowners policies cannot cover organizational liability — when the club is sued, personal policies are irrelevant.

## Who Needs Club Insurance

Formal incorporated clubs, 501(c)(3) nonprofits, and chartered chapters; NMRA local and regional divisions operating independently; garden railway societies hosting organized meets and tours; live steam associations with permanent or portable track; exhibition-focused clubs operating at shows and events; and clubhouse layout groups leasing or owning a space with a permanent installation.

## General Liability for Clubs

When a club hosts a public exhibition, opens the clubhouse to visitors, or runs trains at a fair, the liability exposure belongs to the club entity. A visitor injured at a club open house may sue the club, not individual members. Club GL covers third-party bodily injury and property damage at club events and premises, personal and advertising injury, and medical payments. We issue additional insured certificates same-day for venue requirements.

## Property Coverage for Club-Owned Equipment

Clubs typically own more than members realize: clubhouse layout benchwork, track, and wiring; club-owned locomotives and rolling stock (often donated by longtime members); display cases and showcases; tool inventory; audio-visual equipment for presentations; event supplies; and DCC control systems and layout control panels. None of this is covered under any member's homeowners policy.

## Event and Exhibition Coverage

Event coverage extends your GL to cover specific shows and exhibitions. Most venues require $1M per occurrence GL and an additional insured certificate before allowing setup. We satisfy most venue insurance requirements in hours. Short-term event policies are also available for clubs exhibiting once or twice per year.

## Directors and Officers (D&O) Coverage

Incorporated clubs have boards making financial and operational decisions. If a disgruntled member sues board members personally — for breach of fiduciary duty, discriminatory policies, or financial mismanagement — D&O coverage protects individual board members from personal financial exposure.`,
    coverages: [
      "Club general liability (GL)",
      "Public exhibition event coverage",
      "Club-owned property and equipment",
      "Additional insured certificates same-day",
      "Directors & Officers (D&O) option",
      "Short-term event policies available",
    ],
    faqs: [
      {
        q: "Are club members covered by the club GL policy?",
        a: "Members acting in their capacity as club members (running club equipment, staffing a club table at a show) are typically covered as insureds under the club GL policy. Members acting in a personal capacity — bringing their own equipment to a show — need their own personal coverage. We explain how the policies work together.",
      },
      {
        q: "What if our club does not have a permanent location?",
        a: "No problem. We insure clubs operating entirely at shows, meets, and members' homes. The GL policy covers your club's operations wherever they occur, not just at a fixed address.",
      },
      {
        q: "Does the NMRA provide insurance for local chapters?",
        a: "NMRA has affiliate programs for some coverage, but many local chapters need separate coverage to meet venue requirements or for larger exhibitions. We work with both NMRA and non-NMRA clubs. Call to discuss your chapter's specific situation.",
      },
      {
        q: "How much does model railroad club insurance cost?",
        a: "A small club with $25,000 in shared equipment and a couple of annual exhibitions can often be covered for $500–$1,200 per year. Larger clubs with permanent clubhouses, significant equipment, and multiple public shows run $1,200–$3,000. Call for a specific quote based on your club's size and operations.",
      },
    ],
  },
  {
    slug: "train-show-insurance",
    title: "Train Show & Exhibition Insurance",
    short: "Short-term and annual event liability for model train shows, swap meets, and exhibitions — same-day certificate issuance.",
    icon: "Calendar",
    description:
      "Train show venues require GL coverage that most exhibitors don't have. We place short-term event policies and annual show coverage for individual exhibitors, clubs, and show organizers — with same-day certificate issuance.",
    longDescription: `## Train Show & Exhibition Insurance: Coverage for Exhibitors and Organizers

Train shows are the social heart of the hobby — but they also carry real insurance requirements. Whether you are an individual exhibitor hauling your modular layout, a club running a public show, or a swap meet organizer, you need proof of insurance before most venues will allow setup.

## Who Needs Train Show Insurance

Individual exhibitors bringing personal modular layouts or collections to convention centers and fairgrounds; club show organizers handling venue contracts, table fees, and public attendance; swap meet operators at fire halls or community centers; and modular railroad groups (NTRAK, T-TRAK, Free-Mo) setting up collective displays.

## What Train Show Insurance Covers

General liability for third-party bodily injury and property damage at and around your exhibit space. Your exhibit property — modular layout sections, locomotives, cars, control systems, and display equipment — at the show. Transit to and from the show. Coverage applies during setup and teardown, not just show hours. Most incidents happen during load-in when foot traffic is less controlled.

## Satisfying Venue Requirements

Convention centers, fairgrounds, and large event venues typically require $1,000,000 per occurrence GL, a Certificate of Insurance naming the venue as additional insured, and sometimes 30-day advance notice. We issue certificates same-day. If your show is this weekend and you just realized you need a COI, call us — we can have coverage bound and certificates issued within hours.

## Short-Term vs. Annual Show Coverage

A short-term event policy (1–3 days) is best for individuals or clubs exhibiting at a single annual show. An annual policy covering all shows during the policy period is usually more cost-effective for exhibitors attending four or more shows per year. One policy, one premium, unlimited covered events.

## Pricing

Individual exhibitors covering a single show weekend: typically $75–$250. Annual policies for frequent exhibitors: $300–$600. Club show organizer policies covering a full public show: $400–$1,500 depending on attendance and duration.`,
    coverages: [
      "General liability at exhibitions",
      "Exhibit property and transit coverage",
      "Setup and teardown period coverage",
      "Additional insured certificates same-day",
      "Short-term (per-event) policies",
      "Annual all-shows policies for frequent exhibitors",
    ],
    faqs: [
      {
        q: "How quickly can I get a certificate of insurance for a train show?",
        a: "Same-day in most cases. Call us in the morning and we will have your quote and certificate by early afternoon. For truly urgent situations (show this weekend), call first thing — we can often turn around coverage in hours.",
      },
      {
        q: "Does my homeowners policy cover me at a train show?",
        a: "Standard homeowners policies do not cover commercial venue exhibitions. Personal liability coverage excludes business activities, and exhibiting at a convention center may be treated as a business activity by your insurer. A dedicated show policy is the right tool.",
      },
      {
        q: "What venues typically require for insurance?",
        a: "$1,000,000 per occurrence general liability is the standard minimum. Some larger venues or fairgrounds require $2M. Most require the venue to be named as additional insured on the certificate. We have this language ready and issue compliant certificates same-day.",
      },
      {
        q: "Is a short-term or annual policy better for me?",
        a: "If you attend one show per year, short-term is more cost-effective. If you attend four or more shows annually, an annual policy is typically cheaper and simpler — one application, one payment, coverage at every show you attend during the year.",
      },
      {
        q: "Does show insurance cover merchandise I sell at a swap meet?",
        a: "Standard event GL covers your liability as an exhibitor. If you are actively selling merchandise, products liability may also be relevant. Mention your sales activities during the quote process and we will ensure the right coverage is in place.",
      },
    ],
  },
] as const;

export const STATS = [
  { value: 20, suffix: "+", label: "Years Insuring Collectors" },
  { value: 50, suffix: " States", label: "Licensed Nationwide" },
  { value: 5000, suffix: "+", label: "Collections Insured" },
  { value: 24, suffix: " Hours", label: "Quote Turnaround" },
] as const;

export const TESTIMONIALS: readonly { quote: string; name: string; role: string; location: string }[] = [];

export const FAQS = [
  {
    q: "What types of model train and hobby locomotive insurance do you offer?",
    a: "We offer five coverage types: model train collection insurance (agreed value for all scales), live steam locomotive insurance (property plus passenger liability), garden railway insurance (outdoor layout coverage), model railroad club insurance (GL and property for clubs and chapters), and train show insurance (event liability with same-day certificates).",
  },
  {
    q: "Does my homeowners policy cover my model train collection?",
    a: "Almost certainly not at full value. Homeowners policies typically apply a $1,000–$3,000 collectibles sublimit, pay actual cash value (not replacement cost or agreed value), exclude transit losses, and often exclude mysterious disappearance. A specialty personal articles policy covers your collection at its true agreed value.",
  },
  {
    q: "What is agreed value coverage?",
    a: "Agreed value means you and the insurer agree on the collection's insured value before any loss occurs. A total loss pays the full agreed amount — no depreciation, no ACV adjustment. For vintage Lionel, hand-built brass, or a mature HO layout, this is essential: ACV coverage would pay a fraction of true value.",
  },
  {
    q: "How much does hobby locomotive and model train insurance cost?",
    a: "A $25,000 collection typically costs $150–$400 per year to insure. A 7.5\" gauge live steam locomotive valued at $35,000 with liability coverage might run $400–$700 per year. Train show event coverage for a weekend ranges from $75–$250. Club policies for mid-size clubs start around $500 per year. Call for a specific quote.",
  },
  {
    q: "Do I need a formal appraisal to get coverage?",
    a: "No. We work with photos, manufacturer price lists, eBay sold listings, dealer quotes, and your own inventory documentation. A formal appraisal helps for very high-value collections or rare brass locomotives, but is not required to start coverage.",
  },
  {
    q: "Is my collection covered when I take it to a train show?",
    a: "With a specialty hobby policy, yes — transit to and from shows is included. Standard homeowners policies typically exclude or limit coverage for property away from premises. If you are exhibiting at a venue that requires a GL certificate, we handle that too.",
  },
  {
    q: "Does live steam liability cover passenger injuries?",
    a: "Yes — that is one of the core reasons live steam owners need specialty coverage. Standard homeowners liability may exclude passenger rides as a motor vehicle or recreational vehicle exposure. Live steam liability coverage specifically includes passenger injury during track operations.",
  },
  {
    q: "Can model railroad clubs get coverage without a permanent location?",
    a: "Yes. We insure clubs operating entirely at exhibitions, meets, and member homes. Club GL coverage follows your operations wherever they occur. A fixed address is helpful but not required.",
  },
  {
    q: "How quickly can you issue a certificate of insurance?",
    a: "Same-day in most cases. If you need a COI for a train show this weekend, call us first thing in the morning. We can typically bind coverage and issue certificates within a few hours.",
  },
  {
    q: "Are you licensed in my state?",
    a: "Yes — we are licensed in all 50 states. Whether you are in California with a G scale garden railway or Massachusetts with a vintage O gauge collection, we can place coverage for you.",
  },
  {
    q: "What happens if my locomotive is stolen from my car at a show?",
    a: "A specialty hobby policy covers theft from your vehicle. Many homeowners policies exclude or severely limit property stolen from automobiles. Mysterious disappearance coverage also helps when theft cannot be proven definitively.",
  },
  {
    q: "Do you cover hand-built and scratch-built models?",
    a: "Yes. Scratch-built, kit-built, and commercially-manufactured models are all insurable. For scratch-built pieces, we use documented build costs, materials receipts, and comparable market values to establish agreed value.",
  },
  {
    q: "What scales of model trains do you insure?",
    a: "All scales: Z, T, N, HO, S, O (2-rail and 3-rail), Standard Gauge, G scale, and all live steam gauges (3.5\", 5\", 7.5\"). We also cover fractional scale brass and specialty scales from Japanese manufacturers.",
  },
  {
    q: "Is accidental breakage covered?",
    a: "Many specialty hobby policies include accidental breakage as a covered peril — this is a key benefit over homeowners, which almost never covers accidental breakage of collectibles. Confirm this is included when we discuss your quote.",
  },
] as const;

export const CREDENTIALS = [
  "Licensed in All 50 States",
  "NPN #8608479",
  "Founded 2005",
  "A.M. Best A+ Rated Carriers",
  "Specialty Collectibles Markets",
  "Same-Day Certificates",
] as const;

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
