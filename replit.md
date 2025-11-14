# Wedding Invitation Website

## Overview
This project is a full-stack JavaScript application for a wedding invitation website for Engr. Mathew and Reyniella, celebrating their wedding on December 14, 2025. It features a responsive, interactive, and modern design with multiple sections including hero, slideshow, invitation details, countdown, story, venue, RSVP, and more. The website aims to provide an elegant and engaging experience for wedding guests. Key capabilities include an interactive quiz game to reveal different invitation designs, background music with user interaction, and SEO optimization.

## User Preferences
- Background music should play automatically when clicking "Open Invitation" with NO control buttons
- Clean, sophisticated design without visual artifacts or decorative elements that interfere with images
- Elegant wedding-appropriate typography using Google Fonts

## System Architecture
The application is a full-stack JavaScript project using a React frontend with TypeScript, Vite for bundling, and Tailwind CSS with shadcn/ui for styling. The backend is an Express.js server also written in TypeScript. Routing is handled by Wouter, and server state management uses TanStack Query. Data is currently stored in-memory using MemStorage, with potential for PostgreSQL integration. The UI/UX incorporates a dark mode aesthetic with an "old money" style, elegant Google Fonts (Playfair Display, Cormorant Garamond, Inter), and sophisticated components from shadcn/ui. Core features include an interactive quiz game that determines the invitation design (premium vs. standard based on score), responsive design for various devices, and a background music feature that respects user interaction for playback. The system is designed for deployment on platforms like Replit, with specific configurations for port handling and static asset serving.

## External Dependencies
- **Cloudinary CDN**: Used for hosting audio files and images.
- **Google Fonts**: Playfair Display, Cormorant Garamond, Inter for typography.
- **Tailwind CSS**: For utility-first styling.
- **shadcn/ui**: UI component library.
- **TanStack Query**: For server state management.
- **Wouter**: For client-side routing.
- **Express.js**: Backend server framework.
- **Vite**: Frontend build tool.

## Recent Changes
- **2025-11-14**: Complete content overhaul for Engr. Mathew & Reyniella's wedding:
  - Updated all components with new couple names "Engr. Mathew & Reyniella"
  - Changed wedding date to December 14, 2025 at 3:00 PM
  - Updated venue to single location in Pulilan, Bulacan:
    - Ceremony & Reception: Merryland - Old Cagayan Valley Road 3005 Pulilan, Bulacan
  - Updated dress code section with detailed attire guidelines:
    - Sponsors: Formal attire
      - Men: Coat / Barong / Long sleeves
      - Women: Evening Gown / Tailored Suits
    - Guests: Semi Formal Attire
      - Men: Suit / Blazer / Polo / Polo Shirt
      - Women: Sunday dress / Jumpsuit / Elegant Skirt
    - Maintained important reminder: Strictly no denim pants and t-shirts
  - Updated wedding color palette:
    - Ivory (#FFFFF0), Champagne (#F7E7CE), Espresso Brown (#4E3524), Gold (#FFD700)
  - Updated wedding timeline:
    - 2:00 PM: Guest Arrival
    - 3:00 PM: Ceremony
    - 5:00 PM: Cocktail Hours
    - 6:00 PM: Program
  - Changed wedding hashtag to #ELLAndedToMATsHeart
  - Updated RSVP details:
    - Contact: Reyniella Valiente / Ella Ella on Facebook
    - Phone: 09766497574
    - Deadline: November 25
  - Updated countdown timer to December 14, 2025 at 3:00 PM
  - Added Bible verse to footer: "Therefore what God has joined together, let no one separate." — Mark 10:9
  - Updated gift section message with new wording about prayers, presence, and monetary gifts
  - Updated all references throughout the website including Hero, Footer, Venue, DressCode, Timeline, FAQ, RSVP, SaveTheDate, and HashtagGifts sections
  - **Image Updates** (2025-11-14):
    - Hero section: Updated to use cover3_1763139981442.JPG
    - Venue section: Consolidated to single venue image (venue_1763139981453.jpg) for both ceremony and reception
    - Polaroid section: Changed labels from "soulmates, forever, beloved" to "bride, couple, groom"
      - Bride image: bride_1763139981440.JPG
      - Couple image: cover3_1763139981442.JPG  
      - Groom image: groom_1763139981443.JPG
    - Cover section: Updated to cover2_1763139981442.JPG
    - Story section: Updated to shesaidyes_1763139981452.jpg
    - Prenup photos: Replaced with 12 new images (prenup1-12 with _1763139981444-451.JPG timestamps)

