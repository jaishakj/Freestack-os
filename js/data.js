/* ============================================================
   FREESTACK OS — data.js
   5 categories · 44 sources · access-type badge map
   source shape: { name, url, best, bookmark, tag, category }
   tag: FREE = free tier · ADS = ad-supported · LIB = library card · PD = public domain
   ============================================================ */

export const BADGES = {
  FREE: { label: '[FREE TIER]',     cls: 'free' },
  ADS:  { label: '[AD-SUPPORTED]',  cls: 'ads'  },
  LIB:  { label: '[LIBRARY CARD]',  cls: 'lib'  },
  PD:   { label: '[PUBLIC DOMAIN]', cls: 'pd'   }
};

export const DATA = [
  {
    id: 'movies',
    glyph: '🎬',
    name: 'Movies & TV',
    accent: '#FF4D4D',
    theme: 'theme-movies',
    sources: [
      { name: 'Tubi',                url: 'https://tubitv.com',                                  best: 'Massive rotating catalog of studio films, cult horror and forgotten gems.', bookmark: 'tubi hidden gems list',            tag: 'ADS',  category: 'movies' },
      { name: 'Pluto TV',            url: 'https://pluto.tv',                                    best: 'Hundreds of live linear channels plus on-demand — zero signup needed.',     bookmark: 'pluto tv best channels',           tag: 'ADS',  category: 'movies' },
      { name: 'Plex',                url: 'https://www.plex.tv/watch-free',                      best: 'Free films & live TV, doubles as a media server for your own library.',     bookmark: 'plex free movies this month',      tag: 'ADS',  category: 'movies' },
      { name: 'Kanopy',              url: 'https://www.kanopy.com',                              best: 'A24, Criterion and world cinema — unlocked with a library card.',           bookmark: 'kanopy criterion collection',      tag: 'LIB',  category: 'movies' },
      { name: 'Internet Archive',    url: 'https://archive.org/details/feature_films',           best: 'Public-domain noir, sci-fi B-movies and early cinema classics.',            bookmark: 'archive.org film noir collection', tag: 'PD',   category: 'movies' },
      { name: 'Crackle',             url: 'https://www.crackle.com',                             best: 'Sony-backed catalog with originals and rotating studio titles.',            bookmark: 'crackle new releases',             tag: 'ADS',  category: 'movies' },
      { name: 'Peacock Free',        url: 'https://www.peacocktv.com',                           best: 'NBC library slice, news and select films on the no-cost tier.',             bookmark: 'peacock free tier catalog',        tag: 'FREE', category: 'movies' },
      { name: 'Popcornflix',         url: 'https://www.popcornflix.com',                         best: 'Indie features, thrillers and documentaries, no account required.',         bookmark: 'popcornflix best thrillers',       tag: 'ADS',  category: 'movies' },
      { name: 'YouTube Free Movies', url: 'https://www.youtube.com/feed/storefront',             best: 'Official studio uploads of full features under Free with Ads.',             bookmark: 'youtube free movies with ads',     tag: 'ADS',  category: 'movies' }
    ]
  },
  {
    id: 'music',
    glyph: '🎵',
    name: 'Music & Radio',
    accent: '#FF9A3C',
    theme: 'theme-music',
    sources: [
      { name: 'Spotify Free',        url: 'https://open.spotify.com',                            best: 'Full catalog with shuffle on mobile, unrestricted on desktop.',             bookmark: 'spotify free desktop tips',        tag: 'FREE', category: 'music' },
      { name: 'SomaFM',              url: 'https://somafm.com',                                  best: 'Legendary listener-supported net radio — ambient, drone, indie.',           bookmark: 'somafm groove salad',              tag: 'FREE', category: 'music' },
      { name: 'Radio Garden',        url: 'https://radio.garden',                                best: 'Spin a 3D globe and drop into any live radio station on Earth.',            bookmark: 'radio garden tokyo stations',      tag: 'FREE', category: 'music' },
      { name: 'BBC Sounds',          url: 'https://www.bbc.co.uk/sounds',                        best: 'BBC radio, mixes and music documentaries streamed free.',                   bookmark: 'bbc sounds essential mix',         tag: 'FREE', category: 'music' },
      { name: 'Free Music Archive',  url: 'https://freemusicarchive.org',                        best: 'Curated CC-licensed music — safe for projects, edits and videos.',          bookmark: 'free music archive lofi cc',       tag: 'PD',   category: 'music' },
      { name: 'Bandcamp',            url: 'https://bandcamp.com',                                best: 'Stream almost everything free; artists get paid when you buy.',             bookmark: 'bandcamp name your price',         tag: 'FREE', category: 'music' },
      { name: 'YouTube Music',       url: 'https://music.youtube.com',                           best: 'Deep catalog plus rare live sets and bootlegs, ad-supported.',              bookmark: 'youtube music full concerts',      tag: 'ADS',  category: 'music' },
      { name: 'Mixcloud',            url: 'https://www.mixcloud.com',                            best: 'DJ sets, radio shows and long-form mixes, legally licensed.',               bookmark: 'mixcloud deep house sets',         tag: 'FREE', category: 'music' },
      { name: 'IA Audio Archive',    url: 'https://archive.org/details/audio',                   best: 'Live concert archive incl. thousands of taper-recorded shows.',             bookmark: 'archive.org live music archive',   tag: 'PD',   category: 'music' }
    ]
  },
  {
    id: 'podcasts',
    glyph: '🎙️',
    name: 'Podcasts & Audiobooks',
    accent: '#A78BFA',
    theme: 'theme-podcasts',
    sources: [
      { name: 'LibriVox',            url: 'https://librivox.org',                                best: 'Volunteer-read audiobooks of every public-domain classic.',                 bookmark: 'librivox best narrators',          tag: 'PD',   category: 'podcasts' },
      { name: 'Hoopla',              url: 'https://www.hoopladigital.com',                       best: 'Current audiobooks, comics and music via your library card.',               bookmark: 'hoopla audiobook borrows',         tag: 'LIB',  category: 'podcasts' },
      { name: 'Pocket Casts',        url: 'https://pocketcasts.com',                             best: 'Best-in-class podcast player, full listening features free.',               bookmark: 'pocket casts web player',          tag: 'FREE', category: 'podcasts' },
      { name: 'Spotify Podcasts',    url: 'https://open.spotify.com/genre/podcasts-web',         best: 'Almost the entire podcast universe with zero paywall.',                     bookmark: 'spotify exclusive podcasts',       tag: 'FREE', category: 'podcasts' },
      { name: 'Project Gutenberg',   url: 'https://www.gutenberg.org',                           best: '75k+ free ebooks — pair with TTS for instant audiobooks.',                  bookmark: 'project gutenberg top 100',        tag: 'PD',   category: 'podcasts' },
      { name: 'Loyal Books',         url: 'http://www.loyalbooks.com',                           best: 'Clean interface over public-domain audiobooks by genre.',                   bookmark: 'loyal books sci-fi audio',         tag: 'PD',   category: 'podcasts' },
      { name: 'Open Culture',        url: 'https://www.openculture.com/freeaudiobooks',          best: 'Curated index of 1,000+ free audiobooks and courses.',                      bookmark: 'open culture free audiobooks',     tag: 'FREE', category: 'podcasts' },
      { name: 'Podbean',             url: 'https://www.podbean.com',                             best: 'Podcast directory + player with a generous free listening tier.',           bookmark: 'podbean top charts',               tag: 'FREE', category: 'podcasts' }
    ]
  },
  {
    id: 'games',
    glyph: '🎮',
    name: 'Games',
    accent: '#34D399',
    theme: 'theme-games',
    sources: [
      { name: 'itch.io',             url: 'https://itch.io/games/free',                          best: 'Endless indie experiments, jam games and pay-what-you-want.',               bookmark: 'itch.io best free games',          tag: 'FREE', category: 'games' },
      { name: 'Epic Free Games',     url: 'https://store.epicgames.com/en-US/free-games',        best: 'One or more full paid games given away every single week.',                 bookmark: 'epic free games this week',        tag: 'FREE', category: 'games' },
      { name: 'Steam F2P',           url: 'https://store.steampowered.com/genre/Free%20to%20Play/', best: 'Free-to-play catalog plus frequent 100%-off weekend promos.',            bookmark: 'steam free weekend deals',         tag: 'FREE', category: 'games' },
      { name: 'IA DOS Games',        url: 'https://archive.org/details/softwarelibrary_msdos_games', best: 'Thousands of DOS-era classics emulated right in the browser.',          bookmark: 'archive.org msdos games',          tag: 'PD',   category: 'games' },
      { name: 'Poki',                url: 'https://poki.com',                                    best: 'Instant browser games — no installs, works on anything.',                   bookmark: 'poki best browser games',          tag: 'ADS',  category: 'games' },
      { name: 'Newgrounds',          url: 'https://www.newgrounds.com/games',                    best: 'The OG indie web-game portal, still alive and weird.',                      bookmark: 'newgrounds top rated games',       tag: 'FREE', category: 'games' },
      { name: 'GOG Free',            url: 'https://www.gog.com/en/games?priceRange=0,0',         best: 'DRM-free freebies and classic giveaways you keep forever.',                 bookmark: 'gog free games list',              tag: 'FREE', category: 'games' },
      { name: 'CrazyGames',          url: 'https://www.crazygames.com',                          best: 'Huge browser arcade — casual, .io and multiplayer titles.',                 bookmark: 'crazygames multiplayer',           tag: 'ADS',  category: 'games' },
      { name: 'Flashpoint',          url: 'https://flashpointarchive.org',                       best: '200k+ preserved Flash-era web games, playable again offline.',              bookmark: 'flashpoint archive setup',         tag: 'FREE', category: 'games' }
    ]
  },
  {
    id: 'docs',
    glyph: '🧠',
    name: 'Docs & Education',
    accent: '#38BDF8',
    theme: 'theme-docs',
    sources: [
      { name: 'NASA+',               url: 'https://plus.nasa.gov',                               best: 'NASA\u2019s own streaming service — launches, docs, live missions.',        bookmark: 'nasa plus documentaries',          tag: 'FREE', category: 'docs' },
      { name: 'Khan Academy',        url: 'https://www.khanacademy.org',                         best: 'Structured courses from arithmetic to college-level, forever free.',        bookmark: 'khan academy computer science',    tag: 'FREE', category: 'docs' },
      { name: 'MIT OpenCourseWare',  url: 'https://ocw.mit.edu',                                 best: 'Actual MIT lectures, notes and problem sets, openly licensed.',             bookmark: 'mit ocw 6.006 algorithms',         tag: 'FREE', category: 'docs' },
      { name: 'Coursera Audit',      url: 'https://www.coursera.org',                            best: 'Audit most university courses free — skip the certificate.',                bookmark: 'coursera audit course trick',      tag: 'FREE', category: 'docs' },
      { name: 'Documentary Heaven',  url: 'https://documentaryheaven.com',                       best: 'Curated index of thousands of free full documentaries.',                    bookmark: 'documentary heaven top rated',     tag: 'ADS',  category: 'docs' },
      { name: 'Top Documentary Films', url: 'https://topdocumentaryfilms.com',                   best: 'Long-running documentary directory with reviews and ratings.',              bookmark: 'top documentary films science',    tag: 'ADS',  category: 'docs' },
      { name: 'Smithsonian Channel', url: 'https://www.smithsonianchannel.com',                  best: 'History, air & space and nature documentaries streamed free.',              bookmark: 'smithsonian free full episodes',   tag: 'FREE', category: 'docs' },
      { name: 'CuriosityStream Free', url: 'https://curiositystream.com',                        best: 'Rotating selection of free factual titles and previews.',                   bookmark: 'curiositystream free titles',      tag: 'FREE', category: 'docs' },
      { name: 'YouTube Docs',        url: 'https://www.youtube.com/results?search_query=full+documentary', best: 'Official channels (DW, Real Stories, Fern) posting full docs.',   bookmark: 'real stories full documentary',    tag: 'ADS',  category: 'docs' }
    ]
  }
];

export const TOTAL_SOURCES = DATA.reduce((sum, cat) => sum + cat.sources.length, 0);

/* stable unique id for a source (used by bookmarks) */
export const sourceId = (source) => `${source.category}::${source.name}`;

/* look a source back up from its id */
export function findSource(id) {
  const [catId, name] = id.split('::');
  const cat = DATA.find(c => c.id === catId);
  if (!cat) return null;
  const source = cat.sources.find(s => s.name === name);
  return source ? { cat, source } : null;
}
