# Wedding Invitation Website

## Overview
This project is a full-stack JavaScript application for a wedding invitation website for Kenneth I. Napa and Suzette A. Contreras, celebrating their wedding on December 28, 2025. It features a responsive, interactive, and modern design with multiple sections including hero, slideshow, invitation details, countdown, story, venue, RSVP, and more. The website aims to provide an elegant and engaging experience for wedding guests. Key capabilities include an interactive quiz game to reveal different invitation designs, background music with user interaction, and SEO optimization.

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
- **2025-11-14**: Complete content overhaul for Kenneth & Suzette's wedding:
  - Updated all components with new couple names "Kenneth I. Napa & Suzette A. Contreras"
  - Changed wedding date to December 28, 2025 at 2:30 PM
  - Updated venues to two separate locations in Taal, Batangas:
    - Ceremony: Basilica De San Martin De Tours - Taal, Batangas
    - Reception: The Stable Rancho Blanco Event Center - Taal, Batangas
  - Updated dress code section with new attire guidelines:
    - Principal Sponsors: Formal attire
    - Guests: Semi Formal Attire
    - Added important reminder: Strictly no denim pants and t-shirts
  - Updated wedding color palette:
    - Ivory (#FFFFF0), Champagne (#F7E7CE), Espresso Brown (#4E3524), Gold (#FFD700)
  - Updated wedding timeline:
    - 2:00 PM: Assembly Time
    - 2:30 PM: Wedding Ceremony
    - 3:30 PM: Photos
    - 4:30 PM: Pica Pica
    - 5:00 PM: Reception
    - 6:00 PM: Dinner
    - 8:00 PM: Party Party!
    - 9:00 PM: Send-off
  - Changed wedding hashtag to #SuzyKennethAskForMore
  - Updated RSVP deadline to December 20, 2025
  - Updated RSVP link to kenneth-suzette-rsvp.replit.app
  - Updated countdown timer to December 28, 2025 at 2:30 PM
  - Updated all references throughout the website including Hero, Footer, Venue, DressCode, Timeline, FAQ, RSVP, SaveTheDate, and HashtagGifts sections

