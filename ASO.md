# Dibs: App Store Optimization (ASO)

Copy-paste metadata for App Store Connect, plus the reasoning behind it. Every character
count below was checked by script and is within Apple's limit. Keep the website's
`src/lib/site.ts` (`appStoreName`, `keywords`) in step with whatever ships here.

## How Apple ranks this (the 30-second version)

- **Searchable fields:** App Name (30) > Subtitle (30) > Keyword field (100, hidden).
  The long description is **not** indexed on iOS. It only affects conversion.
- Apple combines words across the three fields, so `chore` (name) + `tracker`
  (keywords) ranks for "chore tracker". **Never repeat a word** across fields.
- In the keyword field: commas, no spaces, singular forms, no app name, no
  competitor names, no "app" or "iPhone" (both already implied).
- The **US App Store also indexes the Spanish (Mexico) localization**. Filling
  es-MX gives Dibs ~100 extra searchable characters in the US for free.
- Conversion signals (icon, first 3 screenshots, ratings) feed back into ranking.

## English (U.S.): primary

| Field | Value | Chars |
| --- | --- | --- |
| App Name | `Dibs: Household Chore Chart` | 27/30 |
| Subtitle | `Shared to-do list for couples` | 29/30 |
| Keywords | `family,roommate,cleaning,schedule,tracker,housework,reward,planner,partner,split,todo,rota,kids,home` | 100/100 |
| Promotional Text | `Call dibs on the dishes. Share chores with your partner, roommates or family, add them by voice, and turn finished tasks into points and rewards. Synced via iCloud.` | 164/170 |

Search phrases this set covers (name + subtitle + keywords combined): chore chart,
household chores, chore tracker, family chore chart, roommate chores, couples
to-do list, shared to-do list, cleaning schedule, housework split, chore rota (UK),
reward chart, chore planner, kids chores, home to-do list.

Why this split:
- **Name** carries the two highest-volume head terms, *chore* and *chart*, plus
  *household*. "Dibs" alone is a generic word and would never rank.
- **Subtitle** targets the second biggest intent (shared to-do list) and the
  biggest audience (couples). Roommates and families go into keywords.
- Promotional text is not indexed, but it can be changed any time without a
  review. Use it for seasonal hooks ("Spring cleaning? Split it.").

### Description

```
Call dibs on the chores.

Dibs is one shared to-do list for your home. Split the housework with your partner, roommates or family, see who's doing what, and turn finished chores into points and rewards. Everyone's iPhone stays in sync through iCloud. No account, no ads.

CALL DIBS
• Assign a task to someone, or leave it for Anyone and let whoever is free claim it
• Next up shows your most urgent task at the top
• Filter by Mine or All, and by today, this week or this month

JUST SAY IT
• Tap the mic: "Buy oat milk today", "I took out the trash", "Give the bathroom to Alex", "Move groceries to Saturday", "Thank Alex for the dishes"
• Several things at once, in English or Spanish
• Speech is turned into text on your iPhone, and understood with Apple Intelligence when available

CHORES THAT PAY OFF
• Points for every finished task: small 1, medium 2, big 3
• Stamp cards: points fill a card, and a full card earns a reward you picked together, like choosing the movie or skipping a chore
• Stats with a graph of past weeks, each person's share and awards for Most points, On time, Helper and Streak. It praises; it never points at who did least
• A Thanks board for short thank-you notes

ORGANISED BY ROOM
• Repeating chores: every day, week, 2 weeks, month or custom. The next one counts from the day it was actually done
• Categories like Kitchen, Bathroom, Laundry, Groceries, Cleaning and Outside, guessed from the title. Add your own
• Reminders for tasks due today, new tasks for you and thank-you notes

PRIVATE BY DESIGN
• No sign-up: Dibs uses the iCloud account already on your iPhone
• Your household lives in your own iCloud, shared only with the people you invite
• No ads, no analytics, no tracking
• Works offline and syncs when you're back

Made for couples sharing a flat, roommates sharing a bathroom, and families sharing everything.

Invite your household with a link or QR code and call dibs.
```

### Screenshot captions

Only the first three show in search results, so they carry the pitch. Use 6.9" iPhone
screenshots (1320×2868). Large caption on top, real app UI below, one idea each.

1. **Call dibs on the chores**: task list with an Anyone task and the Dibs button
2. **Just say it**: voice sheet with "I took out the trash" turning into a done task
3. **Chores that pay off**: stamp card nearly full and a reward ready
4. **Chores that come back on their own**: repeat picker (weekly, custom)
5. **Every room, sorted**: list grouped by Kitchen, Bathroom, Laundry
6. **Stats that only praise**: weekly graph and awards
7. **Say thanks**: the Thanks board
8. **One list, every iPhone**: invite with link and QR code

Optional: a 15–30 s **app preview video** (calling dibs → voice → stamp card filling)
as the first slot. It autoplays muted in search and usually lifts conversion.

## Spanish (Mexico): also indexed in the US store

Add it as soon as the app UI is translated (voice and category guessing already work
in Spanish). Spanish speakers in the US will find Dibs through it, and these words
don't overlap the English set.

| Field | Value | Chars |
| --- | --- | --- |
| App Name | `Dibs: Tareas del Hogar` | 22/30 |
| Subtitle | `Lista de quehaceres en pareja` | 29/30 |
| Keywords | `limpieza,casa,quehaceres,domesticas,familia,roomies,turnos,organizador,recompensas,puntos,pendientes` | 100/100 |

## Spanish (Spain)

| Field | Value | Chars |
| --- | --- | --- |
| App Name | `Dibs: Tareas de Casa` | 20/30 |
| Subtitle | `Reparte las tareas en pareja` | 28/30 |
| Keywords | `limpieza,hogar,domesticas,familia,piso,compañeros,turnos,organizador,recompensas,puntos,cuadrante` | 97/100 |
| Promotional Text | `Pide dibs en los platos. Reparte las tareas con tu pareja, compañeros de piso o familia, añádelas con la voz y gana puntos y recompensas. Sincronizado con iCloud.` | 162/170 |

## Other App Store Connect settings

- **Primary category:** Productivity. **Secondary:** Lifestyle. Most chore and
  shared-list searches surface Productivity apps.
- **Age rating:** 4+.
- **App Privacy label:** the app has no analytics or SDKs and stores data in the
  user's own iCloud, so it should qualify for **"Data Not Collected"**. Confirm when
  you fill in the questionnaire. Show it off: it's a strong conversion point.
- **Privacy Policy URL:** `https://<domain>/privacy`. **Support URL:** the homepage
  or `mailto:` support address. **Marketing URL:** the homepage.

## Growth levers after launch

1. **Ratings prompt.** Ask with `RequestReviewAction` at a happy moment, for example
   right after a stamp card fills or the 10th finished task, never on first launch.
   Ratings volume is one of the strongest ranking signals.
2. **Custom product pages** for *Couples*, *Roommates* and *Families*, each with its
   own screenshots. Assign keywords to them in App Store Connect so they show in
   matching searches, and link ads or posts to them. The landing page already has
   matching anchors: `/#couples`, `/#roommates`, `/#families`.
3. **In-app events** ("Spring cleaning week", "New year, new chore chart") get
   their own cards in search and Today.
4. **Iterate keywords every 4–6 weeks.** Swap words that don't rank in the top 50
   (App Store Connect → Analytics → Sources → App Store Search) for new candidates:
   `honey`, `allowance`, `bins`, `flatmate`, `laundry`, `organizer`.
5. **Product page optimization:** A/B test the icon and first screenshot.
6. **Smart App Banner:** set `site.appStoreId` and the site adds `apple-itunes-app`
   automatically.
