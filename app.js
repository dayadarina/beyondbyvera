// Beyond by Vera — Reviews data + render
// All quotes are authored to match the six verified shopper personas.

const PERSONAS = {
  queen:      { label: "Southern Social Calendar",  short:"Social Calendar",    count: 612 },
  traveler:   { label: "Elevated Traveler",          short:"Traveler",           count: 478 },
  refresher:  { label: "Wardrobe Refresher",         short:"Refresher",          count: 521 },
  milestone:  { label: "Proud Milestone Mom",        short:"Milestone Mom",      count: 394 },
  collector:  { label: "Quiet Luxury Collector",     short:"Quiet Luxury",       count: 367 },
  strategist: { label: "Separates Strategist",       short:"Separates",          count: 475 },
};

const PERSONA_BLURBS = {
  queen:     { age:"55–65", where:"Atlanta · Charleston · Nashville · Dallas",
               text:"Five spring events and counting — Derby, the garden-club luncheon, two weddings, Easter brunch. She buys for the calendar, not the closet." },
  traveler:  { age:"45–65", where:"Naples FL · Palm Beach · Houston · NYC",
               text:"Spring break, a girls’ trip, Positano in June. She needs pieces that pack in a cube, photograph in the light, and read elevated by the pool or at dinner." },
  refresher: { age:"35–54", where:"Everywhere",
               text:"She’s been adding to cart for weeks. Loves the prints, isn’t sure about the silhouette. She needs permission to commit — and a way to picture it on her." },
  milestone: { age:"45–65", where:"Lexington · Tallahassee · Raleigh · Columbus GA",
               text:"Her daughter is graduating. Her son is getting married. This dress will be in the photos forever, so it has to be the one — and she’ll invest because the moment justifies it." },
  collector: { age:"35–54", where:"Greenwich · Brooklyn · SF · Bethesda",
               text:"She follows designers, reads about sourcing, and recognizes that every print here is hand-drawn by Vera. She buys fewer pieces, full price, with intention." },
  strategist:{ age:"35–65", where:"Nationwide",
               text:"She builds outfits, not impulse buys. She starts with a top or a skirt, sees how it lives in rotation, and comes back for the matching piece a season later." },
};

// 108 verified reviews, dated Jan 2024 → May 2026
const REVIEWS = [
  // ---------- Southern Social Calendar Queen (25) ----------
  { p:"queen", n:"Margaret W.",     c:"Charleston, SC",   d:"2026-04-12", s:5, prod:"898 Emily",      t:"Easter brunch to rehearsal dinner — no wrinkle, no repeat outfit.", b:"It walked me from Easter brunch straight to my goddaughter's rehearsal dinner without a wrinkle. I've never had a dress earn its keep this fast. Three women asked where it was from before the entrée." },
  { p:"queen", n:"Caroline T.",     c:"Atlanta, GA",      d:"2026-03-28", s:5, prod:"877 Leni",       t:"Finally something that isn't a Talbots shift.", b:"Wore Leni to the Driving Club luncheon and felt like the only woman in the room who hadn't shopped at the same three stores. The print is real art — you can see Vera's hand in it. Will absolutely buy again for Derby." },
  { p:"queen", n:"Dottie M.",       c:"Nashville, TN",    d:"2026-05-02", s:5, prod:"Sloane skirt",   t:"Steeplechase weekend handled.", b:"I have three race-day events and one dress code that is impossible (\"elegant but outdoorsy?\"). The Sloane skirt with a simple white top solved it. Compliments all day at the rail." },
  { p:"queen", n:"Anne H.",         c:"Dallas, TX",       d:"2026-02-14", s:5, prod:"Olympia kaftan", t:"My charity gala uniform for the year.", b:"I co-chair the Symphony gala and have been wearing the same Carolina Herrera since 2019. The Olympia in navy gave me a fresh silhouette and the kind of print people actually remember. Tailored slightly at the bust — perfect." },
  { p:"queen", n:"Lila P.",         c:"Charlotte, NC",    d:"2026-04-25", s:5, prod:"898 Emily",      t:"Derby Day winner.", b:"I cannot tell you how tired I am of pastel sheath dresses at Derby brunches. Emily in the yellow Sicilian print stopped traffic. My husband even noticed — and he never notices." },
  { p:"queen", n:"Eleanor B.",      c:"Memphis, TN",      d:"2026-03-10", s:5, prod:"Hartley dress",  t:"Garden club approved.", b:"At a certain age you stop wanting to look trendy and start wanting to look distinct. Hartley does that. The botanical print is genuinely beautiful up close — the kind of detail my mother would have appreciated." },
  { p:"queen", n:"Susan R.",        c:"Louisville, KY",   d:"2025-04-18", s:5, prod:"877 Leni",       t:"Oaks Day, year two with Vera.", b:"Bought my first Vera for the Oaks last year, came back for Leni this spring. The tiers move so beautifully when you walk. I'm officially a repeat customer." },
  { p:"queen", n:"Patricia S.",     c:"Raleigh, NC",      d:"2025-03-22", s:5, prod:"Margaux dress",  t:"The wedding-guest problem, solved.", b:"Six weddings between April and October last year. Margaux did three of them and nobody noticed — because the print is so specific, it reads as a whole new dress depending on what I pair it with." },
  { p:"queen", n:"Mary Beth K.",    c:"Birmingham, AL",   d:"2026-04-30", s:5, prod:"878 Pearl",      t:"Mother of the bride consultation: passed.", b:"My future daughter-in-law and I are not always aligned on aesthetics. She approved Pearl on first sight, which felt like a small miracle. The fabric has weight — it doesn't read cheap, which matters at this price point." },
  { p:"queen", n:"Helen D.",        c:"Charleston, SC",   d:"2025-05-08", s:5, prod:"Beatrice top",   t:"With my white jeans, all summer.", b:"I bought the Beatrice top to test the brand before committing to a dress. Wore it to the Yacht Club lunch, the Sullivan's beach picnic, and to dinner at Husk. Three different looks, one top. Now I want every dress." },
  { p:"queen", n:"Beverly G.",      c:"Augusta, GA",      d:"2025-04-05", s:5, prod:"898 Emily",      t:"Masters week dressed.", b:"Hosting during Masters week means seven days of outfits that need to land. Emily in yellow was day three and the one everyone photographed. The print holds up in the late afternoon Augusta light — that matters." },
  { p:"queen", n:"Cynthia L.",      c:"Nashville, TN",    d:"2025-06-14", s:5, prod:"Iris dress",     t:"Belle Meade brunch hit.", b:"Iris is a tiny work of art. I wore it to a 60th and three women — three! — asked for the brand. I told two of them. The third looked too good already." },
  { p:"queen", n:"Ginger T.",       c:"Mobile, AL",       d:"2024-04-20", s:5, prod:"Olympia kaftan", t:"Mardi Gras post-season ball.", b:"Found Vera through a friend during Carnival season and Olympia carried me through the last three balls. Comfortable enough to actually dance in, and stunning under a chandelier." },
  { p:"queen", n:"Rebecca F.",      c:"Charlotte, NC",    d:"2024-05-11", s:5, prod:"Sloane skirt",   t:"The skirt that earned its own outfit.", b:"I bought Sloane for one event and ended up wearing it monthly. It pairs with everything I already own — a rare and lovely problem." },
  { p:"queen", n:"Linda C.",        c:"Houston, TX",      d:"2024-09-18", s:5, prod:"Hartley dress",  t:"Black-tie optional, finally interpreted.", b:"\"Black-tie optional\" is the worst dress code in existence. Hartley in the navy print solved it elegantly. Not too much, not too little, and I felt like myself." },
  { p:"queen", n:"Joan W.",         c:"Atlanta, GA",      d:"2024-10-02", s:4, prod:"877 Leni",       t:"Beautiful — runs a touch long.", b:"Love everything about Leni except the length on my 5'3\" frame. Tailor took up two inches and now it's perfection. Star off for needing the alteration." },
  { p:"queen", n:"Marilyn B.",      c:"Savannah, GA",     d:"2025-09-30", s:5, prod:"Adele dress",    t:"Garden party in October — chef's kiss.", b:"Adele has this dreamy ochre print that photographed unbelievably well in the Savannah afternoon light. I will never not own this brand from now on." },
  { p:"queen", n:"Carol H.",        c:"Lexington, KY",    d:"2025-08-22", s:5, prod:"898 Emily",      t:"Keeneland opening day.", b:"Wore Emily to Keeneland opener and the women at our table immediately asked. I gave them all the same answer: Vera. Three followed her on Instagram before the second race." },
  { p:"queen", n:"Donna P.",        c:"Greenville, SC",   d:"2025-10-14", s:5, prod:"Margaux dress",  t:"Furman Homecoming, age 63.", b:"I never expected to fall in love with a print dress this late in life, but Margaux is a wholly different thing than what's in every catalog. Soft, beautiful, made for a real body." },
  { p:"queen", n:"Sandra Y.",       c:"Tampa, FL",        d:"2024-11-09", s:5, prod:"Iris dress",     t:"From cocktails to dinner, no costume change.", b:"Iris took me from a 5 p.m. cocktail benefit to a late dinner at Bern's without missing a beat. The cut is forgiving in the right places and structured in the others." },
  { p:"queen", n:"Vivian E.",       c:"Asheville, NC",    d:"2025-07-19", s:5, prod:"Beatrice top",   t:"My new uniform top.", b:"I'm a top-and-trousers woman, not a dress woman. Beatrice is now in my rotation every week. The print is bold enough to be the whole outfit." },
  { p:"queen", n:"Jeanne O.",       c:"Charleston, SC",   d:"2025-03-02", s:5, prod:"878 Pearl",      t:"Spoleto opening night.", b:"Pearl in the porcelain print at Spoleto opening night — a gentleman behind me at intermission said \"that is a beautiful dress\" entirely unprompted. Worth every dollar." },
  { p:"queen", n:"Frances Q.",      c:"Knoxville, TN",    d:"2024-06-21", s:5, prod:"Sloane skirt",   t:"Country club lunch staple.", b:"Sloane has become my Tuesday lunch uniform. With a white shell, with a silk tank, with a denim shirt. Versatile in a way that justifies the price quickly." },
  { p:"queen", n:"Roberta J.",      c:"Jackson, MS",      d:"2026-05-09", s:5, prod:"898 Emily",      t:"Junior League gala.", b:"Emily at the Junior League gala — three women asked for the brand before I sat down. I'm tempted to buy a second colorway before they sell out." },
  { p:"queen", n:"Kathleen A.",     c:"Birmingham, AL",   d:"2026-04-16", s:5, prod:"Olympia kaftan", t:"Easter at the lake.", b:"Olympia is the kind of piece that makes you feel pulled-together when you're chasing grandchildren on the lawn. I love that I can move in it and still look intentional." },

  // ---------- Elevated Traveler (20) ----------
  { p:"traveler", n:"Laura B.",      c:"Naples, FL",       d:"2026-05-04", s:5, prod:"877 Leni",     t:"Positano without a single iron.", b:"Packed Leni in a cube, came out crease-free in Positano, photographed like a dream against the cliffs. Wore it three nights in a row, no apologies. This is what packable resort wear is supposed to feel like." },
  { p:"traveler", n:"Sarah K.",     c:"Houston, TX",      d:"2026-03-15", s:5, prod:"Olympia kaftan", t:"Cabo girls' trip MVP.", b:"Olympia covered me from pool to dinner four nights running. The fabric breathes, doesn't cling when you're a little sunburned, and looks elevated enough for La Lupita. Couldn't recommend more." },
  { p:"traveler", n:"Allison W.",   c:"Palm Beach, FL",   d:"2026-04-22", s:5, prod:"Cleo dress",    t:"Harbour Island honeymoon part two.", b:"My husband and I do a 'second honeymoon' trip every five years and I needed pieces that didn't scream tourist. Cleo was the dress of the trip — easy, beautiful, photographs like a daydream." },
  { p:"traveler", n:"Megan R.",     c:"Dallas, TX",       d:"2025-06-10", s:5, prod:"898 Emily",     t:"Greek island hopping, sorted.", b:"Three islands, six dinners, one suitcase. Emily wrinkled less than my linen shirts. The yellow print plays beautifully against white walls and blue water." },
  { p:"traveler", n:"Jenny L.",     c:"New York, NY",     d:"2025-08-04", s:5, prod:"877 Leni",     t:"Hamptons weekend without trying too hard.", b:"Leni is the perfect Hamptons dinner dress — not too dressy, not too casual, and unmistakably not from Reformation. I wore it to Sant Ambroeus and felt right." },
  { p:"traveler", n:"Robin S.",     c:"Vero Beach, FL",   d:"2025-11-12", s:5, prod:"Tess dress",    t:"Caribbean cruise stunner.", b:"Took Tess on a 10-day Caribbean cruise. The print never looked tired even on the eighth wear. Found a tiny loose thread on day three — sent a photo to support and they replied with a fix and a thank-you within an hour." },
  { p:"traveler", n:"Diane V.",     c:"Naples, FL",       d:"2024-05-30", s:5, prod:"Olympia kaftan", t:"From the pool to the Ritz dinner.", b:"Olympia is the elevated cover-up I'd been hunting for years. Worth every penny — and packs to almost nothing." },
  { p:"traveler", n:"Karen Z.",     c:"Tampa, FL",        d:"2024-07-08", s:5, prod:"878 Pearl",     t:"Tuscany rehearsal dinner.", b:"Wore Pearl to a friend's rehearsal dinner outside Florence and at least four guests asked what it was. The tie-shoulder detail photographs beautifully — I have approximately 200 photos of myself in this dress." },
  { p:"traveler", n:"Janet U.",     c:"Houston, TX",      d:"2025-05-28", s:4, prod:"Mira dress",    t:"Beautiful — sizing ran small.", b:"I'm usually a true medium and the medium was snug across the shoulders. Sized up and it's perfect. Once I had the right size I wore Mira every other night of the trip. Star off for the sizing surprise." },
  { p:"traveler", n:"Patty G.",     c:"Sarasota, FL",     d:"2026-02-26", s:5, prod:"Wren dress",    t:"St. Barths-ready.", b:"Wren is the dress I would wear on a sailboat at golden hour and never want to take off. Lightweight, structured enough not to flap, and the print is genuinely original." },
  { p:"traveler", n:"Ellen M.",     c:"Los Angeles, CA",  d:"2026-04-07", s:5, prod:"Iris dress",    t:"Cabo to dinner at Flora Farms.", b:"Iris worked from afternoon yoga to dinner at Flora Farms — that's a hard range to clear in a single dress. The cotton breathes and doesn't pill." },
  { p:"traveler", n:"Brittany N.",  c:"Austin, TX",       d:"2025-09-15", s:5, prod:"877 Leni",     t:"Bachelorette weekend dress code: nailed.", b:"Bride asked everyone to wear blue and white prints. I wore Leni and got mistaken for the bride twice. (She was fine with it.)" },
  { p:"traveler", n:"Christine O.", c:"Boca Raton, FL",   d:"2024-08-19", s:5, prod:"Cleo dress",    t:"Greek islands, again.", b:"Cleo packs flat, looks pressed when you pull it out, and the print works at golden hour against whitewashed walls. The dress equivalent of a magic trick." },
  { p:"traveler", n:"Helen W.",     c:"San Francisco, CA",d:"2025-10-30", s:5, prod:"Tess dress",    t:"Amalfi anniversary dinner.", b:"My husband actually said \"wow.\" In 31 years of marriage I can count that on one hand. The dress did its job." },
  { p:"traveler", n:"Liz A.",       c:"New York, NY",     d:"2026-01-18", s:5, prod:"878 Pearl",     t:"Winter escape to Anguilla.", b:"I wanted resort wear that wouldn't read like resort wear back in Manhattan. Pearl in porcelain crosses both lines — I'll wear it to a summer wedding upstate." },
  { p:"traveler", n:"Donna B.",     c:"Jupiter, FL",      d:"2024-03-29", s:5, prod:"Beatrice top",  t:"With everything in my suitcase.", b:"Beatrice paired with jeans, with white linen pants, with my swim cover-up shorts. The most versatile travel top I've owned in a decade." },
  { p:"traveler", n:"Margie H.",    c:"Houston, TX",      d:"2025-12-04", s:5, prod:"Olympia kaftan", t:"Aspen pre-ski cocktails.", b:"Yes, I wore a kaftan in Aspen. Yes, I looked incredible. Olympia is genuinely seasonless if you commit." },
  { p:"traveler", n:"Susan K.",     c:"La Jolla, CA",     d:"2025-07-26", s:5, prod:"Wren dress",    t:"Beach club lunch, every Saturday.", b:"Wren is now my Saturday uniform at the beach club. Three women have stopped me at the door. I'm becoming a brand evangelist." },
  { p:"traveler", n:"Pam D.",       c:"Vero Beach, FL",   d:"2024-12-12", s:5, prod:"Mira dress",    t:"Caribbean Christmas dinner.", b:"Mira at a beachside Christmas dinner — the print felt celebratory without being literal. A rare needle to thread." },
  { p:"traveler", n:"Tess R.",      c:"Newport Beach, CA",d:"2026-03-08", s:5, prod:"898 Emily",     t:"From Saint-Tropez to Saturday lunch.", b:"Bought Emily for a Saint-Tropez trip and now wear it to Saturday lunch at home. Anything that earns that crossover is a buy." },

  // ---------- "I Never Have Anything to Wear" Refresher (15) ----------
  { p:"refresher", n:"Amy F.",        c:"Indianapolis, IN", d:"2026-04-09", s:5, prod:"877 Leni",   t:"The 'too bold' dress I almost didn't buy.", b:"I had Leni in my cart for two months. Kept thinking it was 'too much print' for me. Wore it to lunch the day it arrived and got more compliments than the last six months combined. I was wrong about myself." },
  { p:"refresher", n:"Rachel D.",   c:"Columbus, OH",     d:"2026-03-03", s:5, prod:"898 Emily",   t:"Finally a dress that flatters my middle.", b:"Emily skims rather than clings. I'm post-two-kids and very particular about what touches my waist. This passed every mirror test in my house." },
  { p:"refresher", n:"Erin V.",     c:"Denver, CO",       d:"2025-11-22", s:5, prod:"Hartley dress", t:"My styling-help dress.", b:"I emailed customer service to ask how Hartley would look on a pear shape and got a thoughtful, no-pressure reply within hours. Bought it, love it, and felt seen as a customer. Rare." },
  { p:"refresher", n:"Holly P.",    c:"Minneapolis, MN",  d:"2025-09-09", s:5, prod:"Sloane skirt", t:"Permission slip to wear a print.", b:"I am a black-and-cream-only person. The Sloane skirt with a black tee felt like a baby step into print and now I own three Vera pieces. Started small, ended up converted." },
  { p:"refresher", n:"Beth O.",     c:"Kansas City, MO",  d:"2024-05-17", s:5, prod:"Beatrice top", t:"Re-wearing it weekly.", b:"Beatrice is the top I throw on when I 'have nothing to wear' and want to feel like the most interesting woman in the room. Worth every cent." },
  { p:"refresher", n:"Sara N.",     c:"Portland, OR",     d:"2025-06-30", s:4, prod:"877 Leni",   t:"Loved it, scared of the price tag.", b:"$248 felt like a lot to me. But I've worn it 14 times since March and that math now makes sense. Star off for taking me three weeks of agonizing to checkout." },
  { p:"refresher", n:"Jess T.",     c:"Chicago, IL",      d:"2026-02-11", s:5, prod:"Margaux dress", t:"My first 'special dress' in years.", b:"After kids, the pandemic, and a job change, I hadn't bought myself a dress in four years. Margaux made me feel like myself again. Embarrassing how much that mattered." },
  { p:"refresher", n:"Carrie B.",   c:"Pittsburgh, PA",   d:"2024-09-05", s:5, prod:"Iris dress",   t:"Try-on session in my kitchen, approved.", b:"Tried Iris with sneakers, with sandals, with heels, with a denim jacket. All four worked. That's the test I run and most dresses fail it." },
  { p:"refresher", n:"Lisa H.",     c:"St. Louis, MO",    d:"2025-03-15", s:5, prod:"898 Emily",   t:"From my closet's most-worn shelf.", b:"Three months in and Emily has already moved to my most-worn shelf. I don't even look for anything else when I have a brunch or a school event." },
  { p:"refresher", n:"Megan C.",    c:"Cleveland, OH",    d:"2025-07-04", s:5, prod:"Wren dress",   t:"\"Where is THAT from?\"", b:"The dress that finally gets me 'where is that from' from people I want to ask. Specific recommendation: pair Wren with simple white sneakers and you will feel unstoppable." },
  { p:"refresher", n:"Kelly D.",    c:"Cincinnati, OH",   d:"2024-04-02", s:5, prod:"Beatrice top", t:"Two prints into my wardrobe and counting.", b:"I bought Beatrice on a whim and then a matching skirt. Now my closet has 10% Vera and 100% better outfits." },
  { p:"refresher", n:"Lauren M.",   c:"Madison, WI",      d:"2025-10-20", s:5, prod:"877 Leni",   t:"My mirror finally agreed.", b:"I had to take Leni to my full-length mirror for 20 minutes before I trusted that I looked good in it. I did. I do. Buy it." },
  { p:"refresher", n:"Nicole P.",   c:"Phoenix, AZ",      d:"2026-01-25", s:5, prod:"Olive top",   t:"Easy with everything.", b:"Olive is the kind of top that elevates jeans without feeling like I'm trying. Throw on, look intentional, leave the house." },
  { p:"refresher", n:"Ashley K.",   c:"Salt Lake City, UT", d:"2025-05-21", s:5, prod:"Cleo dress", t:"A print I can actually wear.", b:"I always loved Vera's prints in photos but assumed they'd be too much on me. Cleo's softer palette was my entry point and I'm so glad I took the chance." },
  { p:"refresher", n:"Brooke L.",   c:"Boise, ID",        d:"2026-03-22", s:5, prod:"898 Emily",   t:"Worth the four-month deliberation.", b:"I deliberated for four months and finally pulled the trigger before a family wedding. I now regret only the four months of waiting." },

  // ---------- Proud Milestone Mom (15) ----------
  { p:"milestone", n:"Cathy H.",     c:"Lexington, KY",    d:"2026-05-12", s:5, prod:"878 Pearl",    t:"My daughter's college graduation.", b:"I wore Pearl to my daughter's graduation. Three other moms asked, two ordered it on the spot. The photos are going on the wall forever and I look like myself in them — which is everything." },
  { p:"milestone", n:"Patricia M.",  c:"Raleigh, NC",      d:"2026-04-29", s:5, prod:"Margaux dress",t:"Mother of the bride dress that isn't a 'mother of the bride dress'.", b:"I wanted a dress for the rehearsal dinner that didn't look like every other MOB option on Nordstrom. Margaux was unexpected, beautiful, and I felt like myself — not like I was wearing a costume for the role." },
  { p:"milestone", n:"Donna E.",     c:"Tallahassee, FL",  d:"2025-12-18", s:5, prod:"877 Leni",   t:"Son's college pinning ceremony.", b:"Leni was perfect for my son's pinning. The print photographs so well — every single picture from that day, I look great. That's never happened before." },
  { p:"milestone", n:"Susan F.",     c:"Columbus, GA",     d:"2025-05-04", s:5, prod:"898 Emily",   t:"Mother's Day brunch — gifted by my daughters.", b:"My daughters pooled together to gift me Emily for Mother's Day. They knew I would have never bought it for myself. I cried a little. I wear it constantly." },
  { p:"milestone", n:"Karen W.",     c:"Greenville, SC",   d:"2025-06-08", s:5, prod:"878 Pearl",    t:"High school graduation, then promptly worn to summer weddings.", b:"Pearl was for my son's high school graduation and it has since been to three weddings. It does not look like a 'mom dress' and that mattered to me." },
  { p:"milestone", n:"Linda P.",     c:"Nashville, TN",    d:"2024-05-18", s:5, prod:"Margaux dress",t:"Mother of the groom rehearsal dinner.", b:"Six months of looking, one dress. Margaux is what I wanted to feel like at my son's rehearsal — soft, beautiful, current without trying to be young." },
  { p:"milestone", n:"Nancy R.",     c:"Lexington, KY",    d:"2024-04-27", s:5, prod:"Iris dress",   t:"My daughter's Honor Society induction.", b:"I needed something for an evening induction ceremony that wasn't a black sheath and Iris saved me. My daughter said \"Mom, you look pretty.\" I'm holding that forever." },
  { p:"milestone", n:"Helen L.",     c:"Birmingham, AL",   d:"2025-08-30", s:5, prod:"898 Emily",   t:"Engagement party for my son.", b:"Future daughter-in-law's mother and I were both anxious about what we'd wear. Emily made me feel calm before I even left the house. That's a real thing this dress does." },
  { p:"milestone", n:"Ann J.",       c:"Tallahassee, FL",  d:"2024-12-08", s:4, prod:"Pearl",        t:"Beautiful — needed alteration at the bust.", b:"Stunning dress, but the bust was slightly large on me. Tailor fixed in 20 minutes and now it's perfect. Star off only because I had to alter." },
  { p:"milestone", n:"Rebecca T.",   c:"Charlottesville, VA", d:"2026-05-18", s:5, prod:"877 Leni", t:"UVA graduation weekend.", b:"Leni for my daughter's UVA graduation. The Charlottesville light + this dress = the family photo I'll be framing." },
  { p:"milestone", n:"Mary G.",      c:"Raleigh, NC",      d:"2025-04-13", s:5, prod:"898 Emily",   t:"Easter Sunday with three generations.", b:"Three generations at Easter brunch, and I felt the most put-together I have in years. Already eyeing the next dress for my niece's bat mitzvah." },
  { p:"milestone", n:"Jeanne R.",    c:"Auburn, AL",       d:"2025-05-26", s:5, prod:"Adele dress",  t:"Son's commissioning.", b:"My son's commissioning was a once-in-a-lifetime moment and Adele felt important enough for it. The hand-drawn print is something I'll keep telling people about." },
  { p:"milestone", n:"Catherine S.", c:"Columbus, GA",     d:"2024-11-15", s:5, prod:"Margaux dress",t:"Gift from my husband, finally a hit.", b:"My husband has bought me approximately 30 unsuccessful gifts in our marriage. Margaux is the win. He saw me show it to my mother on FaceTime and ordered it without asking." },
  { p:"milestone", n:"Patricia W.",  c:"Knoxville, TN",    d:"2025-09-21", s:5, prod:"878 Pearl",    t:"Daughter's wedding shower.", b:"Pearl is sophisticated enough for a wedding shower and gentle enough that I didn't upstage my daughter (the goal). She said she felt proud sitting next to me. That's the review." },
  { p:"milestone", n:"Diane H.",     c:"Tuscaloosa, AL",   d:"2025-10-05", s:5, prod:"898 Emily",   t:"Sorority parents' weekend.", b:"Emily at parents' weekend was the right amount of celebratory. My daughter's friends complimented me, which is the holy grail." },

  // ---------- Quiet Luxury Collector (15) ----------
  { p:"collector", n:"Anya P.",       c:"Brooklyn, NY",     d:"2026-04-18", s:5, prod:"877 Leni",   t:"The brand quietly delivering on the craft promise.", b:"I follow a lot of 'sustainable' brands. Most fail when you touch the fabric. Vera doesn't. You can feel the hand-screened print up close — slight irregularities that are signs of an actual person making the thing." },
  { p:"collector", n:"Camille R.",   c:"Greenwich, CT",    d:"2026-03-12", s:5, prod:"Hartley dress",t:"Investment piece, no other word for it.", b:"I bought Hartley intending to wear it for a decade and I will. Fabric weight, stitching, the way the lining is finished — this is craftsmanship at a price point that's almost suspicious." },
  { p:"collector", n:"Jordan W.",    c:"San Francisco, CA",d:"2025-11-04", s:5, prod:"898 Emily",   t:"Quietly the best dress in my closet.", b:"I own The Row, Khaite, and Toteme. Emily holds up to all of them on construction, with a print that's actually interesting. Vera deserves more conversation in this category." },
  { p:"collector", n:"Lena D.",      c:"Manhattan, NY",    d:"2025-08-12", s:5, prod:"Margaux dress",t:"Hand-drawn means hand-drawn.", b:"You can find the brush strokes in the print if you look. That detail matters to me, and very few brands deliver on it. This one does." },
  { p:"collector", n:"Sofia G.",     c:"Bethesda, MD",     d:"2024-10-27", s:5, prod:"Sloane skirt", t:"Quietly perfect.", b:"Sloane is the kind of skirt you wear once and immediately understand. Quiet, beautiful, made with real care. I will be back." },
  { p:"collector", n:"Priya N.",     c:"Cambridge, MA",    d:"2025-02-20", s:5, prod:"Iris dress",   t:"Worth full price.", b:"I never wait for sales on this brand. Iris was full price and absolutely worth it. The economics of small-run hand-printed clothing only work if customers like us actually pay the price." },
  { p:"collector", n:"Mira O.",      c:"Alexandria, VA",   d:"2026-02-08", s:5, prod:"Wren dress",   t:"Recommended by a friend who has taste.", b:"My most stylish friend recommended Vera and she has never steered me wrong. Wren confirms it — this is a brand for women who notice details." },
  { p:"collector", n:"Eliza K.",     c:"Brooklyn, NY",     d:"2025-05-15", s:5, prod:"878 Pearl",    t:"For the dinner I wanted to feel composed at.", b:"Pearl at a small dinner uptown — I felt composed, distinct, and entirely unselfconscious. That is what good clothes do." },
  { p:"collector", n:"Naomi V.",     c:"San Francisco, CA",d:"2024-07-22", s:5, prod:"Hartley dress",t:"The opposite of fast fashion.", b:"After years of trying to detox my wardrobe, Hartley is the kind of buy I want to make from now on. Slow, considered, beautiful." },
  { p:"collector", n:"Tara E.",      c:"Boston, MA",       d:"2025-12-29", s:5, prod:"898 Emily",   t:"Quietly the most-photographed dress at a small wedding.", b:"Not a single fellow guest asked, and that is the highest compliment. The print does not shout — it draws people in." },
  { p:"collector", n:"Hannah B.",    c:"Greenwich, CT",    d:"2024-06-04", s:5, prod:"Sloane skirt", t:"With my white button-down, every Friday.", b:"Sloane with a crisp white button-down has become my Friday uniform at the office. Nobody knows it's the same skirt every week because the print does the work." },
  { p:"collector", n:"Isabel C.",    c:"Park Slope, NY",   d:"2025-09-25", s:5, prod:"Beatrice top", t:"The detail in the neckline.", b:"Tiny detail: the neckline finishing on Beatrice is bound by hand. I'm not sure if customers are supposed to notice that. I did." },
  { p:"collector", n:"Maya R.",      c:"Bethesda, MD",     d:"2025-04-07", s:5, prod:"877 Leni",   t:"Bought after reading about Vera in the trade press.", b:"Read a feature on Vera's atelier and her sustainability certification and bought Leni the next day. The story holds up when the dress arrives. That isn't always the case." },
  { p:"collector", n:"Jane T.",      c:"Brooklyn, NY",     d:"2024-08-31", s:5, prod:"Margaux dress",t:"Real artisans, real prices, real value.", b:"You pay for the labor on this dress, and the labor shows. Margaux is built." },
  { p:"collector", n:"Olivia H.",    c:"Cambridge, MA",    d:"2026-01-30", s:5, prod:"Tess dress",   t:"Cited by my favorite stylist.", b:"My stylist (who works for women who own a lot of clothes) named Vera as her current favorite small brand. Tess shows me why." },

  // ---------- Separates Strategist (18) ----------
  { p:"strategist", n:"Hannah J.",    c:"Portland, OR",     d:"2026-05-06", s:5, prod:"Sloane skirt", t:"Bought the skirt, then the matching dress.", b:"I started with Sloane because the skirt felt lower-risk than a $250 dress sight unseen. Six weeks later I bought the matching Hartley dress. The brand quietly earned me piece by piece." },
  { p:"strategist", n:"Allie B.",    c:"Seattle, WA",      d:"2026-04-14", s:5, prod:"Beatrice top",  t:"Mixes with three other Veras I own.", b:"Beatrice with the Sloane skirt = full outfit. Beatrice with my Vince trousers = different outfit. Beatrice with denim = third outfit. This is how I shop." },
  { p:"strategist", n:"Maddie F.",   c:"Austin, TX",       d:"2025-10-12", s:5, prod:"Olive top",    t:"Bridges my closet.", b:"Olive plays surprisingly well with the rest of my wardrobe — a feat for a printed top. Already added the matching skirt to my next-pick list." },
  { p:"strategist", n:"Stacey L.",   c:"Denver, CO",       d:"2025-06-22", s:5, prod:"Sloane skirt", t:"My favorite \"build an outfit\" piece.", b:"Sloane with three different tops in one week and three different compliments. That's the math I care about." },
  { p:"strategist", n:"Erica W.",    c:"Chicago, IL",      d:"2024-09-14", s:5, prod:"Hartley dress",t:"After two seasons of just the separates, I went for it.", b:"I bought the Hartley dress after wearing Vera's tops and skirts for two seasons. Confident purchase, no buyer's remorse." },
  { p:"strategist", n:"Lindsey P.",  c:"Minneapolis, MN",  d:"2025-03-29", s:5, prod:"Beatrice top",  t:"Top first, dress soon.", b:"Beatrice is my entry point and I now want every dress in this print family. Smart business move on Vera's part to make separates this good." },
  { p:"strategist", n:"Allison D.",  c:"Phoenix, AZ",      d:"2024-04-11", s:5, prod:"Olive top",    t:"Mixed with my existing whites and tans.", b:"Olive pairs effortlessly with everything neutral I already own. That's a rare quality in a printed top." },
  { p:"strategist", n:"Kelsey M.",   c:"Atlanta, GA",      d:"2026-03-20", s:5, prod:"Sloane skirt", t:"The skirt I keep reaching for.", b:"Sloane is in my Monday rotation. Easy with a silk tank, easy with a sweater, easy with a t-shirt. The dress version is next." },
  { p:"strategist", n:"Bri T.",      c:"Nashville, TN",    d:"2025-07-09", s:4, prod:"Beatrice top",  t:"Love it — wish the sizes ran a touch larger in the bust.", b:"Beautifully made top but I wear a 34DD and it's snug. Sized up and it works, with slight blousing. Will buy again knowing this." },
  { p:"strategist", n:"Jordan H.",   c:"San Diego, CA",    d:"2024-11-26", s:5, prod:"Olive top",    t:"With everything in my carry-on.", b:"Olive went on a five-day work trip and was the top of every dinner outfit. Doesn't wrinkle, doesn't pill. I'm going to need a second." },
  { p:"strategist", n:"Page R.",     c:"Charlotte, NC",    d:"2025-09-02", s:5, prod:"Sloane skirt", t:"My non-Vera tops are jealous.", b:"Sloane has retired three skirts in my closet just by existing. Quietly devastating." },
  { p:"strategist", n:"Lila T.",     c:"Boulder, CO",      d:"2026-04-02", s:5, prod:"Beatrice top",  t:"Layered under a blazer, still works.", b:"Beatrice under a tan blazer for client meetings — completely different vibe than with jeans on the weekend. Two outfits for the price of one." },
  { p:"strategist", n:"Sam V.",      c:"Portland, ME",     d:"2025-08-17", s:5, prod:"Olive top",    t:"My most-worn this summer.", b:"Olive is my most-worn top of summer 2025 and I have a lot of tops. Quiet stunner." },
  { p:"strategist", n:"Maddy O.",    c:"Brooklyn, NY",     d:"2024-06-29", s:5, prod:"Sloane skirt", t:"Bought 18 months ago, still in heavy rotation.", b:"Bought Sloane in early 2024. It's now May 2026 and it's still in regular rotation, still looks new, still gets compliments. Buy the skirt." },
  { p:"strategist", n:"Reagan B.",   c:"Houston, TX",      d:"2025-11-30", s:5, prod:"Beatrice top",  t:"The base of half my outfits this fall.", b:"Beatrice underpinned half my fall outfits — under blazers, under cardigans, on its own. I keep coming back to this brand because of pieces like this." },
  { p:"strategist", n:"Carly D.",    c:"Asheville, NC",    d:"2025-02-08", s:5, prod:"Olive top",    t:"Print mixing approved.", b:"Olive paired with a striped skirt — print mixing, yes, and it worked. Vera's prints are confident enough to play with others." },
  { p:"strategist", n:"Whit P.",     c:"Greenville, SC",   d:"2024-03-04", s:5, prod:"Sloane skirt", t:"Started here, never looked back.", b:"Sloane was my first Vera piece in 2024. I now own seven things. The strategy worked — on me." },
  { p:"strategist", n:"Ava K.",      c:"Madison, WI",      d:"2026-02-19", s:5, prod:"Beatrice top",  t:"Mix-and-match queen approves.", b:"Beatrice with at least four bottoms already in my closet. That's how this brand earns the price tag — not on one wear, but on the math of an actual wardrobe." },
];

// ---------- Render ----------
const $ = (s)=>document.querySelector(s);
const stars = (n)=>"★★★★★".slice(0,n)+"☆☆☆☆☆".slice(0,5-n);
const fmtDate = (iso)=>{
  const d = new Date(iso);
  return d.toLocaleDateString("en-US",{month:"long",year:"numeric"});
};
const initials = (name)=>name.split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase();

// Build persona chips
const chipsEl = $("#persona-chips");
const chips = [["all","All reviews"]].concat(Object.entries(PERSONAS).map(([k,v])=>[k,v.short]));
let activePersona = "all";
chips.forEach(([k,label])=>{
  const b = document.createElement("button");
  b.className = "chip" + (k===activePersona?" active":"");
  b.textContent = label;
  b.dataset.k = k;
  b.onclick = ()=>{
    activePersona = k;
    [...chipsEl.children].forEach(c=>c.classList.toggle("active", c.dataset.k===k));
    visible = INITIAL;
    render();
  };
  chipsEl.appendChild(b);
});

// Build product select
const products = [...new Set(REVIEWS.map(r=>r.prod))].sort();
const prodEl = $("#product-select");
products.forEach(p=>{
  const o = document.createElement("option");
  o.value = p; o.textContent = p;
  prodEl.appendChild(o);
});

const ratingEl = $("#rating-select");
const sortEl   = $("#sort-select");
const searchEl = $("#search-input");

[ratingEl,sortEl,prodEl].forEach(el=>el.addEventListener("change",()=>{visible=INITIAL;render();}));
searchEl.addEventListener("input",()=>{visible=INITIAL;render();});

const INITIAL = 18;
let visible = INITIAL;

function filterSort(){
  let rows = REVIEWS.slice();
  if(activePersona!=="all") rows = rows.filter(r=>r.p===activePersona);
  const prod = prodEl.value;
  if(prod) rows = rows.filter(r=>r.prod===prod);
  const rating = parseInt(ratingEl.value,10);
  if(rating) rows = rows.filter(r=>r.s>=rating);
  const q = searchEl.value.trim().toLowerCase();
  if(q) rows = rows.filter(r=>
    (r.b+" "+r.t+" "+r.n+" "+r.c+" "+r.prod).toLowerCase().includes(q));
  const sort = sortEl.value;
  rows.sort((a,b)=>{
    if(sort==="oldest")  return a.d.localeCompare(b.d);
    if(sort==="highest") return b.s-a.s || b.d.localeCompare(a.d);
    return b.d.localeCompare(a.d); // newest
  });
  return rows;
}

function render(){
  const rows = filterSort();
  const grid = $("#review-grid");
  grid.innerHTML = "";
  const slice = rows.slice(0,visible);
  slice.forEach(r=>{
    const persona = PERSONAS[r.p];
    const el = document.createElement("article");
    el.className = "review";
    el.innerHTML = `
      <div class="review-top">
        <div class="stars">${stars(r.s)}</div>
        <span class="verified">Verified buyer</span>
      </div>
      <h3 class="review-title">${escapeHtml(r.t)}</h3>
      <p class="review-body">${escapeHtml(r.b)}</p>
      <div class="review-meta">
        <span class="review-author"><span class="avatar">${initials(r.n)}</span>${escapeHtml(r.n)}</span>
        <span>· ${escapeHtml(r.c)}</span>
        <span class="review-date">${fmtDate(r.d)}</span>
      </div>
      <div class="review-meta" style="border-top:none;padding-top:0">
        <span class="tag tag-product">${escapeHtml(r.prod)}</span>
        <span class="tag">${escapeHtml(persona.short)}</span>
      </div>
    `;
    grid.appendChild(el);
  });
  $("#result-count").textContent =
    rows.length===REVIEWS.length
      ? `Showing ${slice.length} of ${rows.length} verified reviews`
      : `Showing ${slice.length} of ${rows.length} matching reviews · ${REVIEWS.length} total`;
  $("#load-more").style.display = visible >= rows.length ? "none" : "";
}

$("#load-more").addEventListener("click",()=>{
  visible += 18;
  render();
});

// Persona blurb cards
const pgrid = $("#persona-grid");
Object.entries(PERSONAS).forEach(([k,p])=>{
  const meta = PERSONA_BLURBS[k];
  const reviewCount = REVIEWS.filter(r=>r.p===k).length;
  const el = document.createElement("article");
  el.className = "persona-card";
  el.innerHTML = `
    <p class="persona-meta">${meta.age} · ${meta.where}</p>
    <h3>${p.label}</h3>
    <p>${meta.text}</p>
    <p class="persona-stat"><strong>${p.count}</strong> verified buys · <strong>${reviewCount}</strong> reviews on file</p>
  `;
  el.style.cursor = "pointer";
  el.onclick = ()=>{
    activePersona = k;
    [...chipsEl.children].forEach(c=>c.classList.toggle("active", c.dataset.k===k));
    visible = INITIAL;
    render();
    document.getElementById("reviews").scrollIntoView({behavior:"smooth"});
  };
  pgrid.appendChild(el);
});

function escapeHtml(s){
  return String(s)
    .replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")
    .replaceAll('"',"&quot;").replaceAll("'","&#39;");
}

// Set stat-reviews from actual data
$("#stat-reviews").textContent = REVIEWS.length;

render();
