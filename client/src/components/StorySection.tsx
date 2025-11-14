import { motion } from 'framer-motion';
import storyCoupleImage from '@assets/shesaidyes_1763139981452.jpg';
import { Heart } from 'lucide-react';

const StorySection = () => {
  return (
    <motion.section 
      id="story" 
      className="bg-white py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 3.5 }}
      data-testid="section-story"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 3.8 }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-center text-foreground mb-3" data-testid="text-story-title">
          OUR STORY
        </h2>
        <p className="text-center text-sm sm:text-base text-foreground/60 italic">A couple, a spark, and a shared love for adventure</p>
      </motion.div>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 4 }}
        >
          {/* Left Side - Text Content */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 relative">
            {/* Decorative Icon */}
            <div className="mb-6">
              <Heart className="w-10 h-10 text-primary" />
            </div>

            {/* Complete Story */}
            <div className="space-y-4 text-base text-foreground/90 leading-relaxed" data-testid="text-story-content">
              <p>
                It all began in December 2020 — a simple conversation that quickly grew into something special. What started as friendly chats soon turned into late-night talks filled with laughter, shared dreams, and a connection that felt real and effortless.
              </p>
              
              <p>
                By March 2021, our hearts already knew — this was the beginning of something beautiful. Since then, we've shared countless adventures together. Our days are made even brighter by our two adorable fur babies, Maxi and Mocha, who remind us every day what unconditional love looks like.
              </p>
              
              <p>
                And now, as we step into this new chapter as husband and wife, we're beyond grateful for the journey that brought us here — and for the love that continues to grow with every beat of our hearts.
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="order-first lg:order-last">
            <img
              src={storyCoupleImage}
              alt="Our Love Story"
              className="w-full h-auto rounded-2xl shadow-lg"
              data-testid="img-story-background"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StorySection;
