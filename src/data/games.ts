export interface Game {
  name: string;
  slug: string;
  category: string;
  description: string;
  steamAppId?: number;
  localImage?: string; // Path to local image in /public/images/games/
}

// Steam image URLs helper
export function getSteamHeaderImage(appId: number): string {
  return `https://cdn.akamai.steamstatic.com/steam/apps/${appId}/header.jpg`;
}

export function getSteamCapsuleImage(appId: number): string {
  return `https://cdn.akamai.steamstatic.com/steam/apps/${appId}/library_600x900.jpg`;
}

// Get the appropriate image for a game (local or Steam)
export function getGameImage(game: Game): string | null {
  if (game.localImage) {
    return game.localImage;
  }
  if (game.steamAppId) {
    return getSteamHeaderImage(game.steamAppId);
  }
  return null;
}

export const games: Game[] = [
  // Battle Royale & FPS
  { name: "Fortnite", slug: "fortnite", category: "Battle Royale", description: "Drop into epic battles in the world's most popular battle royale game with premium PCs and ultra-smooth gameplay.", localImage: "/images/games/non-steam/fortnite.jpg" },
  { name: "Apex Legends", slug: "apex-legends", category: "Battle Royale", description: "Master your legend and dominate the arena with high-performance gaming setups designed for competitive play.", steamAppId: 1172470 },
  { name: "Call of Duty: Warzone", slug: "call-of-duty-warzone", category: "Battle Royale", description: "Drop into Verdansk in the free-to-play battle royale from Call of Duty. Compete in MOSEF tournaments and Missouri State esports competitions.", localImage: "/images/games/non-steam/cod-warzone.jpg" },
  { name: "PUBG Battlegrounds", slug: "pubg-battlegrounds", category: "Battle Royale", description: "Experience the original battle royale with maximum settings and zero lag on our premium gaming stations.", steamAppId: 578080 },
  { name: "Counter Strike 2", slug: "counter-strike-2", category: "FPS", description: "Compete in the legendary tactical shooter with pro-level equipment and low-latency connections.", steamAppId: 730 },
  { name: "Valorant", slug: "valorant", category: "FPS", description: "Showcase your tactical prowess in Riot's competitive shooter with high refresh rate monitors and premium peripherals.", localImage: "/images/games/non-steam/valorant.jpg" },
  { name: "Rainbow Six Siege", slug: "rainbow-six-siege", category: "FPS", description: "Plan and execute tactical operations with crystal-clear visuals and responsive controls.", steamAppId: 359550 },
  { name: "Overwatch 2", slug: "overwatch-2", category: "FPS", description: "Join the fight with your favorite heroes on high-performance gaming rigs built for competitive play.", steamAppId: 2357570 },
  { name: "Team Fortress 2", slug: "team-fortress-2", category: "FPS", description: "Enjoy the classic team-based shooter with smooth performance and a thriving community.", steamAppId: 440 },
  { name: "Escape from Tarkov", slug: "escape-from-tarkov", category: "FPS", description: "Survive the intense hardcore shooter with the performance you need to stay alive.", localImage: "/images/games/non-steam/escape-from-tarkov.jpg" },
  { name: "FEAR", slug: "fear", category: "FPS", description: "Experience the horror FPS classic with modern hardware for the ultimate scare.", steamAppId: 21090 },
  { name: "FEAR 2", slug: "fear-2", category: "FPS", description: "Continue the terrifying journey with enhanced graphics and smooth gameplay.", steamAppId: 16450 },
  { name: "Helldivers 2", slug: "helldivers-2", category: "Co-op Shooter", description: "Team up for intense co-op action with seamless multiplayer performance.", steamAppId: 553850 },

  // MOBA & Strategy
  { name: "League of Legends", slug: "league-of-legends", category: "MOBA", description: "Climb the ranks in the world's most popular MOBA with tournament-grade setups and coaching available.", localImage: "/images/games/non-steam/league-of-legends.jpg" },
  { name: "Dota 2", slug: "dota-2", category: "MOBA", description: "Master the complex MOBA with professional gaming equipment and a competitive community.", steamAppId: 570 },

  // MMORPGs & ARPGs
  { name: "World of Warcraft", slug: "world-of-warcraft", category: "MMORPG", description: "Explore Azeroth with maximum graphics settings and reliable connections for endless adventures.", localImage: "/images/games/non-steam/world-of-warcraft.jpg" },
  { name: "Runescape", slug: "runescape", category: "MMORPG", description: "Quest through Gielinor on premium gaming setups perfect for grinding and bossing.", steamAppId: 1343400 },
  { name: "Old School Runescape", slug: "old-school-runescape", category: "MMORPG", description: "Relive the classic MMORPG experience with modern performance and comfort.", steamAppId: 1343370 },
  { name: "Ultima Online", slug: "ultima-online", category: "MMORPG", description: "Experience the legendary MMORPG that started it all on our retro-capable systems.", localImage: "/images/games/non-steam/ultima-online.jpg" },
  { name: "EverQuest", slug: "everquest", category: "MMORPG", description: "Journey through Norrath in the classic MMO that defined a generation.", localImage: "/images/games/non-steam/everquest.jpg" },
  { name: "EverQuest 2", slug: "everquest-2", category: "MMORPG", description: "Continue your adventures in the expanded world of EverQuest.", localImage: "/images/games/non-steam/everquest-2.jpg" },
  { name: "Path of Exile", slug: "path-of-exile", category: "ARPG", description: "Delve into the dark action RPG with hardware capable of handling the most intense builds.", steamAppId: 238960 },
  { name: "Diablo III", slug: "diablo-3", category: "ARPG", description: "Slay demons and hunt for legendary loot with buttery-smooth performance.", localImage: "/images/games/non-steam/diablo-3.jpg" },
  { name: "Torchlight 2", slug: "torchlight-2", category: "ARPG", description: "Hack and slash through dungeons in this beloved action RPG.", steamAppId: 200710 },

  // RPGs
  { name: "Baldur's Gate", slug: "baldurs-gate", category: "RPG", description: "Experience the legendary D&D adventure with modern performance enhancements.", steamAppId: 228280 },
  { name: "Skyrim", slug: "skyrim", category: "RPG", description: "Explore the vast world of Tamriel with enhanced graphics and smooth framerates.", steamAppId: 489830 },
  { name: "Morrowind", slug: "morrowind", category: "RPG", description: "Return to Vvardenfell in the classic Elder Scrolls adventure.", steamAppId: 22320 },
  { name: "Oblivion", slug: "oblivion", category: "RPG", description: "Save Cyrodiil from the Oblivion Crisis with enhanced visuals and performance.", steamAppId: 22330 },
  { name: "Stardew Valley", slug: "stardew-valley", category: "RPG", description: "Build your dream farm in the cozy indie hit that captured hearts worldwide.", steamAppId: 413150 },
  { name: "Potion Permit", slug: "potion-permit", category: "RPG", description: "Heal the townspeople and explore in this charming life-sim RPG.", steamAppId: 1337760 },

  // Survival & Horror
  { name: "Minecraft", slug: "minecraft", category: "Sandbox", description: "Build, explore, and survive in the endless blocky universe with friends or solo on our powerful gaming PCs.", localImage: "/images/games/minecraft.webp" },
  { name: "Terraria", slug: "terraria", category: "Sandbox", description: "Dig, fight, and build in the 2D sandbox adventure with endless possibilities.", steamAppId: 105600 },
  { name: "Palworld", slug: "palworld", category: "Survival", description: "Catch and battle with mysterious creatures in this survival crafting adventure.", steamAppId: 1623730 },
  { name: "Phasmophobia", slug: "phasmophobia", category: "Horror", description: "Hunt ghosts with friends in this terrifying co-op horror experience with immersive audio.", steamAppId: 739630 },
  { name: "Dead by Daylight", slug: "dead-by-daylight", category: "Horror", description: "Survive the night or hunt survivors in this asymmetric horror multiplayer game.", steamAppId: 381210 },
  { name: "Lethal Company", slug: "lethal-company", category: "Horror", description: "Scavenge and survive with your crew in this co-op horror phenomenon.", steamAppId: 1966720 },
  { name: "Five Nights at Freddy's", slug: "five-nights-at-freddys", category: "Horror", description: "Survive the night shift at Freddy Fazbear's Pizza in this iconic horror game.", steamAppId: 319510 },
  { name: "Five Nights at Freddy's 2", slug: "five-nights-at-freddys-2", category: "Horror", description: "Return for another terrifying night at the new and improved Freddy's.", steamAppId: 332800 },
  { name: "Left 4 Dead", slug: "left-4-dead", category: "Horror", description: "Fight through the zombie apocalypse in Valve's classic co-op shooter.", steamAppId: 500 },
  { name: "Left for Dead 2", slug: "left-for-dead-2", category: "Horror", description: "Continue the fight for survival with more zombies, more weapons, and more chaos.", steamAppId: 550 },
  { name: "Project Zomboid", slug: "project-zomboid", category: "Survival", description: "Survive the zombie apocalypse in this deep and immersive survival simulation.", steamAppId: 108600 },
  { name: "Dark and Darker", slug: "dark-and-darker", category: "Survival", description: "Delve into dangerous dungeons in this hardcore first-person dungeon crawler.", steamAppId: 2016590 },

  // Racing & Driving
  { name: "Forza Horizon", slug: "forza-horizon", category: "Racing", description: "Race through stunning open worlds with realistic physics and beautiful graphics at maximum settings.", steamAppId: 1293830 },
  { name: "Rocket League", slug: "rocket-league", category: "Sports", description: "Master car soccer with competitive setups perfect for aerial plays and tournament matches.", steamAppId: 252950 },
  { name: "BeamNG.drive", slug: "beamng-drive", category: "Simulation", description: "Experience the most realistic vehicle physics and soft-body crashes.", steamAppId: 284160 },
  { name: "American Truck Simulator", slug: "american-truck-simulator", category: "Simulation", description: "Haul cargo across America in this relaxing driving simulation.", steamAppId: 270880 },

  // Strategy & Management
  { name: "Civilization VI", slug: "civilization-6", category: "Strategy", description: "Build an empire to stand the test of time in Sid Meier's legendary turn-based strategy game.", steamAppId: 289070 },
  { name: "Age of Empires 2", slug: "age-of-empires-2", category: "Strategy", description: "Command medieval armies in the definitive real-time strategy classic.", steamAppId: 813780 },
  { name: "Warcraft 3 Reign of Chaos", slug: "warcraft-3", category: "Strategy", description: "Experience Blizzard's legendary RTS that launched a gaming phenomenon.", localImage: "/images/games/non-steam/warcraft-III.jpg" },
  { name: "Star Wars Empire at War", slug: "star-wars-empire-at-war", category: "Strategy", description: "Command fleets and armies in epic Star Wars real-time strategy battles.", steamAppId: 32470 },
  { name: "Cities Skylines", slug: "cities-skylines", category: "Simulation", description: "Design and manage your dream city in this comprehensive city-building simulation.", steamAppId: 255710 },
  { name: "Tropico 4", slug: "tropico-4", category: "Strategy", description: "Rule your own island nation as El Presidente in this humorous dictator sim.", steamAppId: 57690 },
  { name: "Banished", slug: "banished", category: "Strategy", description: "Build and maintain a thriving settlement in this challenging survival city-builder.", steamAppId: 242920 },
  { name: "RimWorld", slug: "rimworld", category: "Strategy", description: "Create your colony story in this deep sci-fi simulation with emergent storytelling.", steamAppId: 294100 },
  { name: "Satisfactory", slug: "satisfactory", category: "Simulation", description: "Build massive automated factories on an alien planet in first-person.", steamAppId: 526870 },
  { name: "Factorio", slug: "factorio", category: "Strategy", description: "Automate everything in this addictive factory-building and automation game.", steamAppId: 427520 },
  { name: "Timberborn", slug: "timberborn", category: "Strategy", description: "Build a beaver colony in this innovative post-apocalyptic city builder.", steamAppId: 1062090 },
  { name: "Farming Simulator 22", slug: "farming-simulator-22", category: "Simulation", description: "Experience modern farming with authentic vehicles and farming activities.", steamAppId: 1248130 },
  { name: "Train Valley 2", slug: "train-valley-2", category: "Strategy", description: "Build efficient railway networks in this charming puzzle strategy game.", steamAppId: 602320 },
  { name: "Sid Meier's Railroads", slug: "sid-meiers-railroads", category: "Strategy", description: "Build a railroad empire in this classic tycoon game from the master of strategy.", steamAppId: 7600 },
  { name: "Kerbal Space Program", slug: "kerbal-space-program", category: "Simulation", description: "Design and fly spacecraft with realistic orbital physics and adorable Kerbals.", steamAppId: 220200 },

  // Puzzle & Indie
  { name: "Portal", slug: "portal", category: "Puzzle", description: "Solve mind-bending puzzles with portals in Valve's critically acclaimed masterpiece.", steamAppId: 400 },
  { name: "Portal 2", slug: "portal-2", category: "Puzzle", description: "Team up or go solo in the expanded sequel with more puzzles and story.", steamAppId: 620 },
  { name: "FTL Advanced Edition", slug: "ftl-advanced-edition", category: "Strategy", description: "Command your spaceship through a hostile galaxy in this roguelike strategy game.", steamAppId: 212680 },
  { name: "Papers Please", slug: "papers-please", category: "Puzzle", description: "Check papers and make moral choices as an immigration inspector in Arstotzka.", steamAppId: 239030 },
  { name: "Opus Magnum", slug: "opus-magnum", category: "Puzzle", description: "Design elegant alchemical machines in this Zachtronics programming puzzle game.", steamAppId: 558990 },
  { name: "while True: learn()", slug: "while-true-learn", category: "Puzzle", description: "Learn visual programming basics in this cat-filled machine learning simulation.", steamAppId: 619150 },
  { name: "Shapez", slug: "shapez", category: "Puzzle", description: "Automate shape processing in this minimalist factory-automation game.", steamAppId: 1318690 },
  { name: "Mini Motorways", slug: "mini-motorways", category: "Puzzle", description: "Design efficient road networks in this minimalist strategy puzzle game.", steamAppId: 1127500 },
  { name: "Besiege", slug: "besiege", category: "Puzzle", description: "Build medieval siege engines to conquer castles and complete challenges.", steamAppId: 346010 },
  { name: "Inside", slug: "inside", category: "Puzzle", description: "Experience the haunting puzzle-platformer from the creators of Limbo.", steamAppId: 304430 },
  { name: "Limbo", slug: "limbo", category: "Puzzle", description: "Navigate the dark atmospheric world in this award-winning indie puzzle game.", steamAppId: 48000 },
  { name: "Cuphead", slug: "cuphead", category: "Platformer", description: "Master the brutally challenging run-and-gun with stunning hand-drawn animation.", steamAppId: 268910 },
  { name: "Stray", slug: "stray", category: "Adventure", description: "Explore a cyberpunk city as a cat in this charming and atmospheric adventure.", steamAppId: 1332010 },

  // Co-op & Party Games
  { name: "Chained Together", slug: "chained-together", category: "Co-op", description: "Work together while literally chained to your friends in this challenging platformer.", steamAppId: 2567870 },
  { name: "Pico Park", slug: "pico-park", category: "Co-op", description: "Cooperate with friends in this adorable puzzle-platformer designed for teamwork.", steamAppId: 1509960 },
  { name: "Supermarket Together", slug: "supermarket-together", category: "Co-op", description: "Run a supermarket with friends in this cooperative management simulation.", steamAppId: 2709570 },
  { name: "RV There Yet?", slug: "rv-there-yet", category: "Co-op", description: "Drive your RV through Mabutts Valley with friends in this hilarious physics-based co-op adventure where teamwork and creativity are key to survival.", localImage: "/images/games/non-steam/rv-there-yet.jpg" },
  { name: "Cluster Truck", slug: "cluster-truck", category: "Platformer", description: "Jump between moving trucks in this chaotic first-person platformer.", steamAppId: 397950 },

  // Space & Sci-Fi
  { name: "No Man's Sky", slug: "no-mans-sky", category: "Adventure", description: "Explore infinite procedurally-generated planets in this massive space exploration game.", steamAppId: 275850 },
  { name: "Sea of Thieves", slug: "sea-of-thieves", category: "Adventure", description: "Set sail for adventure and treasure as a pirate crew in this beautiful multiplayer game.", steamAppId: 1172620 },
  { name: "Void Crew", slug: "void-crew", category: "Co-op", description: "Operate a spaceship with your crew in this cooperative space adventure.", steamAppId: 1063420 },
  { name: "Everspace 2", slug: "everspace-2", category: "Action", description: "Explore space and engage in fast-paced combat in this open-world space shooter.", steamAppId: 1128920 },
  { name: "Starbound", slug: "starbound", category: "Sandbox", description: "Explore alien planets and build in this 2D procedural universe.", steamAppId: 211820 },
  { name: "Hardspace Shipbreaker", slug: "hardspace-shipbreaker", category: "Simulation", description: "Salvage spaceships in zero-G in this first-person space simulation.", steamAppId: 1161580 },
  { name: "Duskers", slug: "duskers", category: "Strategy", description: "Control drones to explore derelict spaceships in this tense strategy game.", steamAppId: 254320 },
  { name: "Cloudpunk", slug: "cloudpunk", category: "Adventure", description: "Deliver packages in a stunning voxel cyberpunk city as a courier driver.", steamAppId: 746850 },

  // Action & Adventure
  { name: "Marvel Rivals", slug: "marvel-rivals", category: "Action", description: "Battle as your favorite Marvel heroes in this exciting new team-based action game.", localImage: "/images/games/non-steam/marvel-rivals.jpg" },
  { name: "The Finals", slug: "the-finals", category: "FPS", description: "Compete in the explosive virtual combat game show with destructible environments.", steamAppId: 2073850 },
  { name: "Warhammer 2 Vermintide", slug: "warhammer-vermintide-2", category: "Action", description: "Fight the Skaven horde in this intense first-person co-op action game.", steamAppId: 552500 },
  { name: "War Thunder", slug: "war-thunder", category: "Action", description: "Command vehicles from WWII to modern day in realistic combat scenarios.", steamAppId: 236390 },
  { name: "The Hunter Call of the Wild", slug: "the-hunter-call-of-the-wild", category: "Simulation", description: "Hunt in stunning natural environments with realistic animal behavior and ballistics.", steamAppId: 518790 },
  { name: "Mount and Blade Warband", slug: "mount-and-blade-warband", category: "Action", description: "Build your medieval kingdom and lead armies in this beloved RPG.", steamAppId: 48700 },
  { name: "Tomb Raider Underworld", slug: "tomb-raider-underworld", category: "Action", description: "Join Lara Croft on her classic adventure through ancient ruins and tombs.", steamAppId: 8140 },
  { name: "Sonic Adventure 2", slug: "sonic-adventure-2", category: "Platformer", description: "Speed through levels as Sonic and friends in this beloved 3D platformer.", steamAppId: 213610 },
  { name: "Heat Signature", slug: "heat-signature", category: "Action", description: "Board spaceships and improvise your way through this top-down action game.", steamAppId: 268130 },
  { name: "R.E.P.O.", slug: "repo", category: "Action", description: "Online co-op horror game where you and up to 5 friends venture into terrifying environments to extract valuable objects using your physics-based grabbing tool.", steamAppId: 3241660 },

  // Lego Games
  { name: "Lego Star Wars The Complete Saga", slug: "lego-star-wars", category: "Action", description: "Experience all six Star Wars episodes in charming LEGO form.", steamAppId: 32440 },
  { name: "Lego Harry Potter Years 1-4", slug: "lego-harry-potter-1-4", category: "Action", description: "Relive Harry's first four years at Hogwarts in LEGO form.", steamAppId: 21130 },
  { name: "Lego Harry Potter Years 5-7", slug: "lego-harry-potter-5-7", category: "Action", description: "Complete Harry's journey through his final years at Hogwarts.", steamAppId: 204120 },

  // Card & Strategy Games
  { name: "Hearthstone", slug: "hearthstone", category: "Card Game", description: "Master the strategic card game from Blizzard. Compete in MOSEF Spring tournaments and build your ultimate deck.", localImage: "/images/games/non-steam/hearthstone.jpg" },
  { name: "Pokémon Unite", slug: "pokemon-unite", category: "MOBA", description: "Team up in 5v5 Pokémon battles in this free-to-play MOBA. Featured in MOSEF Winter season competitions for all skill levels.", localImage: "/images/games/non-steam/pokemon-unite.jpg" },

  // Nintendo Switch Games
  { name: "Super Smash Bros. Ultimate", slug: "super-smash-bros-ultimate", category: "Fighting", description: "Battle it out with Nintendo's all-stars in the ultimate fighting game. Compete in MOSEF tournaments across Fall and Spring seasons in solos and crew battles.", localImage: "/images/games/non-steam/smash-ultimate.jpg" },
  { name: "Mario Kart 8 Deluxe", slug: "mario-kart-8-deluxe", category: "Racing", description: "Race through creative tracks in Nintendo's premier kart racer. Featured in MOSEF Winter tournaments for high school and middle school divisions.", localImage: "/images/games/non-steam/mario-kart-8.jpg" },

  // Casual & Other
  { name: "Roblox", slug: "roblox", category: "Sandbox", description: "Create and play millions of user-generated games in the Roblox universe.", localImage: "/images/games/non-steam/roblox.jpg" },
  { name: "Sims 4", slug: "sims-4", category: "Simulation", description: "Create and control people in this life simulation classic with endless possibilities.", steamAppId: 1222670 },
  { name: "12 Labours of Hercules", slug: "12-labours-of-hercules", category: "Puzzle", description: "Complete the legendary tasks in this casual time-management puzzle game.", steamAppId: 342580 },
  { name: "The WereCleaner", slug: "the-were-cleaner", category: "Action", description: "A stealth-comedy game about being a janitor werewolf on the night shift - clean messes and fight your instincts to not kill anyone.", steamAppId: 2795000 },
];

// Get games by category
export function getGamesByCategory() {
  const categories: Record<string, Game[]> = {};

  games.forEach(game => {
    if (!categories[game.category]) {
      categories[game.category] = [];
    }
    categories[game.category].push(game);
  });

  return categories;
}

// Get game by slug
export function getGameBySlug(slug: string): Game | undefined {
  return games.find(game => game.slug === slug);
}
