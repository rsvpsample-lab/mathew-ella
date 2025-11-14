import { useEffect, useRef, useState } from 'react';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ImageLoop from '@/components/ImageLoop';
// Cover media
import cover2Image from '@assets/cover2_1763139981442.JPG';
import CountdownSection from '@/components/CountdownSection';
import StorySection from '@/components/StorySection';
import ScrollTriggeredTimeline from '@/components/ScrollTriggeredTimeline';
import VenueSection from '@/components/VenueSection';
import DressCodeSection from '@/components/DressCodeSection';
import HashtagGiftsSection from '@/components/HashtagGiftsSection';
import EntourageSection from '@/components/EntourageSection';
import RSVPSection from '@/components/RSVPSection';
import MemorableMomentsSection from '@/components/MemorableMomentsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import CoverSection from '@/components/CoverSection';
import InvitationRevealSection from '@/components/InvitationRevealSection';
import SaveTheDateSection from '@/components/SaveTheDateSection';
import MusicConsentPopup from '@/components/MusicConsentPopup';
import { AnimationContext } from '@/contexts/AnimationContext';

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [animationsEnabled, setAnimationsEnabled] = useState(false);
  const [showMusicConsent, setShowMusicConsent] = useState(true);

  const handleMusicConsent = async (consent: boolean) => {
    setShowMusicConsent(false);
    setAnimationsEnabled(true);
    
    if (consent && audioRef.current) {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.error('Background music playback failed:', error);
      }
    }
  };

  return (
    <AnimationContext.Provider value={{ animationsEnabled }}>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        style={{ display: 'none' }}
        data-testid="background-audio"
        src="https://res.cloudinary.com/da4jexvxy/video/upload/v1762581346/ytmp3free.cc_kay-tagal-kitang-hinintay-sponge-cola-with-lyrics-youtubemp3free.org_t9kqqe.mp3"
      />

      <MusicConsentPopup 
        onConsent={handleMusicConsent} 
        isVisible={showMusicConsent} 
      />

      <div className="min-h-screen relative">
        <Navigation />

        <main className="relative z-10 space-y-0">
          <HeroSection audioRef={audioRef} />
        <InvitationRevealSection />
        <CountdownSection />
        <ImageLoop />
        <StorySection />
        <SaveTheDateSection audioRef={audioRef} />
        <ScrollTriggeredTimeline />
        <VenueSection />
        <CoverSection
          imageUrl={cover2Image}
          alt="Mathew & Reyniella Wedding Cover"
        />
        <DressCodeSection />
        <HashtagGiftsSection />
        <MemorableMomentsSection />
        <RSVPSection />
        <CoverSection
          youtubeVideoId="EMa2ePJdSso"
          youtubeStartTime={14}
          youtubeEndTime={30}
          alt="Wedding Video Cover"
          showControls={false}
          showYoutubeBranding={false}
          enableInteraction={false}
        />
        <EntourageSection />
        <FAQSection />
        <Footer />
      </main>
    </div>
    </AnimationContext.Provider>
  );
};

export default Index;