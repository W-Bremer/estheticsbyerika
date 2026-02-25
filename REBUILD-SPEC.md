# Esthetics By Erika Hawthorne - Website Rebuild Spec

## Project Overview
- **Project Name:** Esthetics By Erika Hawthorne Website
- **Type:** Business website for licensed esthetician
- **Core Functionality:** Showcase services, pricing, gallery, reviews, and booking for a premium esthetics spa in Nixa, MO
- **Target Users:** Women seeking waxing, lash lifts, brow treatments in Springfield/Nixa area (417 region)

## Business Details
- **Business Name:** Esthetics By Erika Hawthorne LLC
- **Location:** 1868 N Deffer Dr Suite 7, Nixa MO 65714
- **Phone:** (417) 766-2102
- **Booking:** Custom booking page (not GlossGenius link)
- **Credentials:** Paul Mitchell trained, licensed since 2021
- **Social:** @esthetics.byerika (405 followers), Facebook 300+ likes

## SEO Targets
- "esthetician Nixa MO"
- "Brazilian wax Springfield MO"
- "lash lift Nixa"
- "brow lamination near me"
- "waxing Nixa MO"
- "best esthetician Springfield MO"

---

## Design System

### Color Palette
- **Primary:** #B8860B (Dark Goldenrod - luxurious gold)
- **Secondary:** #F5F0E8 (Warm Cream - soft spa background)
- **Accent:** #2D2D2D (Near Black - text)
- **Highlight:** #E8D5B7 (Soft Beige)
- **Success:** #7A8B6F (Sage Green - calm, natural)

### Typography
- **Headings:** Playfair Display (elegant, editorial)
- **Body:** DM Sans (clean, readable)

### Visual Style
- Soft, luxurious spa aesthetic
- Lots of whitespace
- Subtle animations (fade-in, gentle hover lifts)
- Image-forward: gallery, before/afters, workspace shots
- Warm, inviting, professional

---

## Page Structure

### 1. Homepage (`/`)
**Sections:**
- **Hero:** Full-width image carousel (3-4 rotating images), headline "Glow From Within", subheadline about premium esthetics services, CTA "Book Your Glow Up"
- **Services Preview:** 6 service cards (Brazilian Wax, Lash Lift, Brow Lamination, Full Face, Bikini, Underarm) with icons and starting prices
- **About Teaser:** Photo of Erika + brief bio "Meet Erika - Your 417 Area Esthetician"
- **Reviews Carousel:** 5-star Google reviews snippets
- **Instagram Feed:** Embedded Instagram grid (placeholder - can swap later)
- **CTA Section:** "Ready to Glow?" with booking button
- **Footer:** Contact info, hours, location, social links

### 2. Services (`/services`)
**Full service menu with pricing:**
- Brazilian Wax - $57
- New Client Brazilian - $40
- Bikini Full - $50
- Bikini Brazilian Combo - $95
- Full Face - $50
- Brow Wax - $18
- Brow Lamination - $55
- Brow Lamination + Wax + Tint - $70
- Lash Lift - $55
- Lash Lift + Tint - $70
- Lash + Brow Combo - $125
- Underarm Wax - $25
- Upper Lip - $15
- Chin - $15
- Side of Face - $25
- Full Arm - $55
- Half Arm - $35
- Underarm + Full Arm - $75
- Full Leg - $80
- Half Leg - $50
- Feet/Ankles - $30
- Chest - $45
- Back - $65
- Stomach - $30
- Brow Tint - $20
- Lash Tint - $25
- Lip Blush - $200
- Facial - $85+
- Dermaplaning - $95
- Chemical Peel - $125+

**Each service needs:**
- Name, price range
- Brief description (1-2 sentences)
- Benefits
- Aftercare tips

### 3. About (`/about`)
- Erika's photo (professional)
- Story: Paul Mitchell training, 2021 licensing, passion for making clients feel confident
- Philosophy: "Enhance your natural beauty"
- Credentials, continuing education
- Personal touches (what she loves about the 417 area)

### 4. Gallery (`/gallery`)
- Grid of workspace photos, before/afters, happy clients
- Use stock esthetics images for now (placeholder)
- Instagram feed embed (can add widget later)
- Categories: Waxing, Lashes, Brows, Facials

### 5. Reviews (`/reviews`)
- Google reviews (16 reviews, 5 stars)
- Facebook reviews (9 reviews, 5 stars)
- Testimonial quotes with names
- Average ratings display

### 6. Contact (`/contact`)
- Address with map embed placeholder
- Phone number (click-to-call)
- Email
- Hours: Mon-Fri 9am-5pm, Sat 9am-2pm (example)
- Parking info

### 7. Booking (`/booking`)
- Custom booking flow (better than linking to GlossGenius)
- Service selection
- Date/time picker (calendar UI)
- Client info form
- Confirmation message

---

## Components Needed

### Header
- Logo: "Esthetics By Erika" or "Erika Hawthorne Esthetics"
- Navigation: Home, Services, Gallery, Reviews, Contact, Book Now button
- Mobile hamburger menu

### Footer
- Business name + tagline
- Quick links
- Contact info
- Social icons
- Copyright

### ServiceCard
- Icon/image
- Service name
- Price
- Hover: subtle lift + shadow

### ReviewCard
- Star rating
- Quote
- Client name
- Source (Google/Facebook)

### BookingForm
- Multi-step: Service → Date/Time → Details → Confirm

---

## Acceptance Criteria

1. ✅ Homepage loads with hero, services preview, about teaser, reviews
2. ✅ Services page shows all 30+ services with pricing
3. ✅ About page showcases Erika with photo and story
4. ✅ Gallery page has image grid (can use placeholders)
5. ✅ Reviews page shows testimonials
6. ✅ Contact page has all info
7. ✅ Booking page has functional form flow
8. ✅ Mobile responsive (looks great on phone)
9. ✅ Fast load times
10. ✅ SEO meta tags on all pages

---

## Technical Notes

- Use Vera's site as code reference (already has great patterns)
- Tailwind for styling
- Framer Motion for animations
- Clean, semantic HTML
- Next.js App Router
