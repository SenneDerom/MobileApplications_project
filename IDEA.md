# Campus Connect: App Idea

Campus Connect is a mobile app for visitors of the UCLL open days. It lets them explore the
campus at their own pace. During the open day, signs around the campus have QR codes on them.
Scanning one with the app shows information about the study programme (opleiding) that belongs
to that spot. The codes can be scanned in any order, and visitors can pause the tour and
continue later that day.

## Target audience

- **Future students** (mainly final-year secondary school pupils) who visit the campus during
  the open days.
- **Parents and companions** who come along to the open day.

## What am I going to build? (roadmap)

- [x] Landing page with intro and buttons to start the tour or read the explanation
- [x] Explanation page ("Hoe werkt het?") with footer navigation
- [x] Supabase database setup: have a running Supabase instance
- [ ] Supabase setup: store the programmes and QR locations in a database
- [ ] QR code scanning with the phone camera ("Start de rondleiding")
- [ ] Programme pages: the information shown after scanning a QR code
- [ ] Progress tracking: show which QR codes have already been scanned, so the tour can be
      paused and continued later

## Competitors

- **Guided tours during the open day:** students and staff show visitors around. They give a
  personal touch, but visitors have to follow a fixed route at the group's pace.
- **The UCLL website and digital info sessions:** they contain all the programme information,
  but have no link to the physical campus.
- **Generic QR code scanners** (e.g. the phone's built-in camera) that open a web page:
  they work for one-off links, but have no tour, no overview and no progress tracking.

**What makes Campus Connect different:** it combines the physical campus with programme
information in a self-guided tour that visitors can follow in any order and at their own pace
during the open day, without having to wait for or follow a guided tour.
