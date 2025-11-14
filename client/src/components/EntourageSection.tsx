import { motion } from 'framer-motion';

const EntourageSection = () => {
  const entourageData = {
    parents: [
      { label: "Parents of Bride", names: ["Mr. Reynaldo S. Valiente Jr.", "Mrs. Manelyn N. Valiente"] },
      { label: "Parents of Groom", names: ["Mr. Nepthalie S. Ventura", "Mrs. Rowena R. Ventura"] }
    ],
    principalSponsors: {
      title: "Principal Sponsors",
      men: [
        "Mr. Ruben S. Ronquillo, Jr.",
        "Kap. Michael Ramos",
        "Mr. Raymond Kaibigan",
        "Mr. Allan Abayari",
        "Doc. Eduardo Torne",
        "Mr. Jesus Pangilinan",
        "Engr. Segundo Ventura II",
        "Mr. Joseph Glenn Segismundo Angeles",
        "Mr. Rodan Roque",
        "Mr. Ross Francisco",
        "Mr. Guilliermo Mia",
        "Mr. Danilo P. Segismundo I",
        "Mr. Belteshazzar Ventura"
      ],
      women: [
        "Mrs. Josephine Garcia",
        "Mrs. Minerva Lacson",
        "Ms. Jasmine Esguerra",
        "Ms. Maureen Valiente",
        "Mrs. Marissa Torne",
        "Doc. Cecil Balita Braga",
        "Mrs. Edna Ventura",
        "Mrs. Evelyn Palasigue",
        "Mrs. Charry Jane Ventura",
        "Mrs. Ada Karina Pineda",
        "Mrs. Fely Mia",
        "Mrs. Ma. Cecilia V. Cali",
        "Mrs. Miriam Ventura"
      ]
    },
    bestMan: { name: "Mr. John Moises Ventura", role: "Best Man" },
    maidOfHonor: { name: "Ms. Sharon Grace Garcia", role: "Maid of Honor" },
    secondarySponsors: {
      title: "Secondary Sponsors",
      couples: [
        { man: "Engr. Aldrin Salazar", woman: "Mrs. Annalyn Salazar" },
        { man: "Engr. Ervien Joseph Pagtalunan", woman: "Mrs. Hannah Jade Pagtalunan" }
      ]
    },
    groomsmen: [
      "Rey Christian Valiente",
      "Rey Justin Valiente",
      "Christian Jeb Bernardino",
      "Kelvin Estrada",
      "Noah Ventura",
      "Daniel Isher Saranilla",
      "Engr. Aldrian Igna",
      "Richard Cruz",
      "Kyle Justine San Mateo",
      "Richard De Juaiting"
    ],
    maidOfHonorList: [
      "Angel Ventura",
      "Jean Heart Ragas",
      "Lyd Josephin Ventura",
      "Romy Rose Ranoco",
      "Shekinah Ventura",
      "Nielle Andrea Alarcon",
      "Archt. Eila Bettina Ner Ronquillo",
      "Charlotte Morales",
      "Percy Mallari",
      "Justine Mae Domingo"
    ],
    cordVeilCandle: [
      { role: "Cord", names: ["Ms. Romy Rose Ranoco", "Mr. Kelvin Estrada"] },
      { role: "Veil", names: ["Engr. Aldrin Salazar", "Mrs. Annalyn Salazar"] },
      { role: "Candle", names: ["Engr. Ervien Joseph Pagtalunan", "Mrs. Hannah Jade Pagtalunan"] }
    ],
    bearers: [
      { role: "Bible Bearer", names: ["Criztan James Ranoco"] },
      { role: "Coin Bearer", names: ["Alistair Frauste Santos"] },
      { role: "Ring Bearer", names: ["Lucas Ventura"] }
    ],
    flowerGirls: [
      "Leonore Ventura"
    ]
  };

  return (
    <motion.section 
      id="entourage" 
      className="entourage-section section-hard-blue bg-white relative overflow-hidden py-8 md:py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 8.5 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 border border-primary/30 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-primary/30 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-gold-bright mb-6 md:mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.5 }}
        >
          Entourage
        </motion.h2>

        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.7 }}
        >
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl italic text-foreground/80 mb-2">
              "Therefore what God has joined together, let no one separate."
            </p>
            <cite className="text-sm md:text-base not-italic text-foreground/60">— Mark 10:9</cite>
          </blockquote>
        </motion.div>

        {/* Parents */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.8 }}
        >
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            {entourageData.parents.map((parent, index) => (
              <div key={index} className="text-center" data-testid={`parents-section-${index}`}>
                <h3 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-2 md:mb-3 text-primary">
                  {parent.label}
                </h3>
                {parent.names.map((name, nameIndex) => (
                  <p key={nameIndex} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1" data-testid={`parent-name-${index}-${nameIndex}`}>
                    {name}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Principal Sponsors */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.0 }}
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold mb-4 md:mb-6 text-primary" data-testid="principal-sponsors-title">
            {entourageData.principalSponsors.title}
          </h3>
          <div className="max-w-4xl mx-auto space-y-1">
            {entourageData.principalSponsors.men.map((manName, index) => {
              const womanName = entourageData.principalSponsors.women[index];
              if (!manName && !womanName) return null;
              
              return (
                <div key={index} className="grid grid-cols-2 gap-4 md:gap-8">
                  <p className="text-xs md:text-base lg:text-lg font-telma text-foreground text-right" data-testid={`principal-sponsor-man-${index}`}>
                    {manName}
                  </p>
                  <p className="text-xs md:text-base lg:text-lg font-telma text-foreground text-left" data-testid={`principal-sponsor-woman-${index}`}>
                    {womanName}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Best Man and Maid of Honor */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.2 }}
        >
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center" data-testid="best-man-section">
              <h3 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-2 md:mb-3 text-primary">
                {entourageData.bestMan.role}
              </h3>
              <p className="text-xs md:text-base lg:text-lg font-telma text-foreground" data-testid="best-man-name">
                {entourageData.bestMan.name}
              </p>
            </div>
            <div className="text-center" data-testid="maid-of-honor-section">
              <h3 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-2 md:mb-3 text-primary">
                {entourageData.maidOfHonor.role}
              </h3>
              <p className="text-xs md:text-base lg:text-lg font-telma text-foreground" data-testid="maid-of-honor-name">
                {entourageData.maidOfHonor.name}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Secondary Sponsors */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.4 }}
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold mb-4 md:mb-6 text-primary" data-testid="secondary-sponsors-title">
            {entourageData.secondarySponsors.title}
          </h3>
          <div className="max-w-4xl mx-auto space-y-1">
            {entourageData.secondarySponsors.couples.map((couple, index) => (
              <div key={index} className="grid grid-cols-2 gap-4 md:gap-8" data-testid={`secondary-sponsor-${index}`}>
                <p className="text-xs md:text-base lg:text-lg font-telma text-foreground text-right">
                  {couple.man}
                </p>
                <p className="text-xs md:text-base lg:text-lg font-telma text-foreground text-left">
                  {couple.woman}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Groomsmen & Maid of Honor */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.6 }}
        >
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center" data-testid="groomsmen-section">
              <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
                Groomsmen
              </h3>
              {entourageData.groomsmen.map((name, index) => (
                <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1 text-right" data-testid={`groomsman-${index}`}>
                  {name}
                </p>
              ))}
            </div>
            <div className="text-center" data-testid="maid-of-honor-list-section">
              <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
                Maid of Honor
              </h3>
              {entourageData.maidOfHonorList.map((name, index) => (
                <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1 text-left" data-testid={`maid-of-honor-list-${index}`}>
                  {name}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Cord, Veil, Candle */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.8 }}
        >
          <div className="max-w-4xl mx-auto space-y-3">
            {entourageData.cordVeilCandle.map((item, index) => (
              <div key={index} className="text-center" data-testid={`${item.role.toLowerCase()}-section`}>
                <h4 className="text-sm md:text-base lg:text-lg font-display font-semibold text-primary mb-1">
                  {item.role}
                </h4>
                <div className="space-y-1">
                  {item.names.map((name, nameIndex) => (
                    <p key={nameIndex} className="text-xs md:text-base font-telma text-foreground" data-testid={`${item.role.toLowerCase()}-name-${nameIndex}`}>
                      {name}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bearers */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 10.0 }}
        >
          <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {entourageData.bearers.map((item, index) => (
              <div key={index} className="text-center" data-testid={`bearer-${item.role.toLowerCase().replace(/\s+/g, '-')}`}>
                <h4 className="text-sm md:text-lg font-display font-semibold mb-2 text-primary">
                  {item.role}
                </h4>
                {item.names.map((name, nameIndex) => (
                  <p key={nameIndex} className="text-xs md:text-base font-telma text-foreground" data-testid={`${item.role.toLowerCase().replace(/\s+/g, '-')}-name-${nameIndex}`}>
                    {name}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Flower girl */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 10.2 }}
        >
          <div className="text-center" data-testid="flower-girls-section">
            <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
              Flower girl
            </h3>
            <div className="grid grid-cols-3 gap-2 max-w-3xl mx-auto">
              {entourageData.flowerGirls.map((name, index) => (
                <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1" data-testid={`flower-girl-${index}`}>
                  {name}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;
