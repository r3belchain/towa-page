export type Avatar = { name: string; avatarUrl: string };

export const communityStats = [
  { value: "12.8K", label: "Warga" },
  { value: "1.2K", label: "Online" },
  { value: "248", label: "Boosters" },
];
export const featureItems = [
  {
    title: "Gaming & Mabar",
    description:
      "Cari teman mabar 24 jam. Mulai dari Mobile Legends, Valorant, Project SEKAI, sampai game co-op santai.",
    icon: "gamepad",
    imageLight: "/features/gaming-light.png",
    imageDark: "/features/gaming-dark.png",
  },
  {
    title: "Anime Talk",
    description:
      "Bahas anime seru favorit kamu bareng warga lain. Dari anime musiman sampai rekomendasi manga.",
    icon: "sparkles",
    imageLight: "/features/anime-light.png",
    imageDark: "/features/anime-dark.png",
  },
  {
    title: "Kirim Momen",
    description:
      "Bagikan momen keseharianmu ke seluruh warga TOWA. Dari foto jalan-jalan, makanan, sampai hal random.",
    icon: "camera",
    imageLight: "/features/kirimmomen-light.png",
    imageDark: "/features/kirimmomen-dark.png",
  },
  {
    title: "Pamer Karya",
    description:
      "Tunjukkan hasil karya dan kreativitasmu ke warga lain. Mulai dari digital art, foto, editan, atau proyek iseng.",
    icon: "palette",
    imageLight: "/features/pamerkarya-light.png",
    imageDark: "/features/pamerkarya-dark.png",
  },
  {
    title: "Asbun Apapun",
    description: "Obrolan bebas dan santai, dari serius sampai random. Warga siap dengerin!",
    icon: "message",
    imageLight: "/features/asbun-light.png",
    imageDark: "/features/asbun-dark.png",
  },
];


export const voiceChannels = [
  { name: "Ruang Tengah", people: 18, avatars: ["Bima", "Naya", "Raka"] },
  { name: "Mabar Santuy", people: 7, avatars: ["Jihan", "Fikri", "Salsa"] },
  { name: "Kopi Sore", people: 4, avatars: ["Dito", "Mia", "Adit"] },
];

export const moments = [
  {
    title: "Jalan Pagi",
    image: "/dc-assets/asset1.jpg",
    size: "tall",
    ratio: 0.75,
  },
  {
    title: "mas mas",
    image: "/dc-assets/asset7.png",
    size: "tall",
    ratio: 1.93,
  },
  {
    title: "Dating",
    image: "/dc-assets/asset3.png",
    size: "tall",
    ratio: 1.78,
  },
  {
    title: "Antara aku, kamu, dan senja",
    image: "/dc-assets/asset4.png",
    size: "tall",
    ratio: 1.78,
  },
  {
    title: "diajak mama yoga",
    image: "/dc-assets/asset6.jpg",
    size: "tall",
    ratio: 0.56,
  },
  {
    title: "Nonton sama my kisah",
    image: "/dc-assets/asset2.jpg",
    size: "tall",
    ratio: 0.75,
  },
  { title: "Meong", image: "/dc-assets/kucing.jpg", size: "tall", ratio: 1.33 },
  {
    title: "Khufra ketutup Tembok Grock",
    image: "/dc-assets/mlbb.png",
    size: "tall",
    ratio: 2.16,
  },
  {
    title: "Menjelajahi Samudra",
    image: "/dc-assets/asset8.png",
    size: "tall",
    ratio: 2.16,
  },
  {
    title: "Pejuang Code",
    image: "/dc-assets/asset9.png",
    size: "tall",
    ratio: 2.16,
  },
  {
    title: "On a generational run",
    image: "/dc-assets/asset10.png",
    size: "tall",
    ratio: 2.16,
  },
];

export const artworks = [
  {
    title: "WithYou",
    artist: "Rage T",
    image: "/dc-assets/pamerkarya1.png",
    type: "spotify", // Kategori: 'spotify', 'video', atau 'image'
    link: "https://open.spotify.com/track/2VcXdUQFWwi6r9OgXogI28?si=_tvK5g3lTeaCquZ-qmEZew&utm_source=copy-link", // Link lagu
  },
  {
    title: "hmmmm",
    artist: "Joan",
    image: "/dc-assets/pamerkarya3.jpg",
    type: "image",
    link: "/dc-assets/pamerkarya3.jpg",
  },
  {
    title: "My Original Character",
    artist: "Noura",
    image: "/dc-assets/pamerkarya2.png",
    type: "image",
    link: "/dc-assets/pamerkarya2.png", // Link gambar full resolusi
  },
  {
    title: "Digital Illustration",
    artist: "Tristan",
    image: "/dc-assets/pamerkarya4.jpg",
    type: "image",
    link: "/dc-assets/pamerkarya4.jpg", // Link gambar full resolusi
  },
  {
    title: "Digital Painting",
    artist: "Eclipse",
    image: "/dc-assets/pamerkarya5.png",
    type: "image",
    link: "/dc-assets/pamerkarya5.png", // Link gambar full resolusi
  },
];

export const team = [
  {
    name: "!Shiro",
    username: "@aoki_s0ra",
    role: "Owner",
    avatarUrl: "profile/!shiro.png",
  },
  {
    name: "!San",
    username: "@tianiii09",
    role: "Moderator",
    avatarUrl: "profile/!san.png",
  },
  {
    name: "ceritanya ini bangku",
    username: "@loveveily",
    role: "Menteri",
    avatarUrl: "profile/menteri.png",
  },
  {
    name: "愤怒T",
    username: "@rage.t",
    role: "Bandar Event",
    avatarUrl: "profile/rage.png",
  },
  {
    name: "ゼンニット",
    username: "@uszeroo",
    role: "Mekanik Towa",
    avatarUrl: "profile/zenx.png",
  },
];

export type RolePillMember = {
  discordUserId: string;
  username: string;
  avatarUrl: string;
};

export type RoleGroup = {
  label: string;
  icon: string;
  members: RolePillMember[];
};

export const teamRoles: RoleGroup[] = [
  {
    label: "Owner",
    icon: "👑",
    members: [
      {
        discordUserId: "1",
        username: "@aoki_s0ra",
        avatarUrl: "/profile/!shiro.png",
      },
    ],
  },
  {
    label: "Three of Founder",
    icon: "🧱",
    members: [
      {
        discordUserId: "2",
        username: "@aoki_s0ra",
        avatarUrl: "/profile/!shiro.png",
      },
      {
        discordUserId: "3",
        username: "@ryrynz",
        avatarUrl: "/profile/katag.png",
      },
      {
        discordUserId: "4",
        username: "tes",
        avatarUrl: "/profile/katag.png",
      },
    ],
  },
  {
    label: "Menteri Towa",
    icon: "🎩",
    members: [
      {
        discordUserId: "5",
        username: "@loveveily",
        avatarUrl: "/profile/menteri.png",
      },
    ],
  },
  {
    label: "Bandar Event",
    icon: "🎪",
    members: [
      {
        discordUserId: "6",
        username: "@rage.t",
        avatarUrl: "/profile/rage.png",
      },
      {
        discordUserId: "7",
        username: "@shenaraley",
        avatarUrl: "/profile/shenaraley.png",
      },
    ],
  },
  {
    label: "Mekanik Towa",
    icon: "🛠️",
    members: [
      {
        discordUserId: "8",
        username: "uszeroo",
        avatarUrl: "/profile/zenx.png",
      },
    ],
  },
  {
    label: "Moderator",
    icon: "🛡️",
    members: [
      {
        discordUserId: "9",
        username: "@ryrynz",
        avatarUrl: "/profile/katag.png",
      },
      {
        discordUserId: "10",
        username: "@ryrynz",
        avatarUrl: "/profile/katag.png",
      },
    ],
  },
  {
    label: "Guide Towa",
    icon: "🧭",
    members: [
      {
        discordUserId: "11",
        username: "@mizxue",
        avatarUrl: "/profile/mizxue.png",
      },
    ],
  },
  {
    label: "Tukang Ramein",
    icon: "🎉",
    members: [
      {
        discordUserId: "12",
        username: "@aoki_s0ra",
        avatarUrl: "/profile/!shiro.png",
      },
      {
        discordUserId: "13",
        username: "@aoki_s0ra",
        avatarUrl: "/profile/!shiro.png",
      },
    ],
  },
];

export const donorTiers: (RoleGroup & { icon: string })[] = [
  {
    label: "Donatur Warkop",
    icon: "☕",
    members: [
      {
        discordUserId: "20",
        username: "@aoki_s0ra",
        avatarUrl: "/profile/!shiro.png",
      },
      {
        discordUserId: "21",
        username: "@aoki_s0ra",
        avatarUrl: "/profile/!shiro.png",
      },
      {
        discordUserId: "22",
        username: "@aoki_s0ra",
        avatarUrl: "/profile/!shiro.png",
      },
    ],
  },
  {
    label: "Investor Tongkrongan",
    icon: "💰",
    members: [
      {
        discordUserId: "23",
        username: "@aoki_s0ra",
        avatarUrl: "/profile/!shiro.png",
      },
      {
        discordUserId: "24",
        username: "@aoki_s0ra",
        avatarUrl: "/profile/!shiro.png",
      },
    ],
  },
  {
    label: "Warga Sultan",
    icon: "👑",
    members: [
      {
        discordUserId: "25",
        username: "@aoki_s0ra",
        avatarUrl: "/profile/!shiro.png",
      },
    ],
  },
  {
    label: "Juragan Towa",
    icon: "🏆",
    members: [
      {
        discordUserId: "26",
        username: "@aoki_s0ra",
        avatarUrl: "/profile/!shiro.png",
      },
    ],
  },
];

export const boosters: Avatar[] = [
  { name: "!shiro", avatarUrl: "/profile/!shiro.png" },
  { name: "!shiro", avatarUrl: "/profile/!shiro.png" },
  { name: "!shiro", avatarUrl: "/profile/!shiro.png" },
  { name: "!shiro", avatarUrl: "/profile/!shiro.png" },
  { name: "!shiro", avatarUrl: "/profile/!shiro.png" },
  { name: "!shiro", avatarUrl: "/profile/!shiro.png" },
  { name: "!shiro", avatarUrl: "/profile/!shiro.png" },
  { name: "!shiro", avatarUrl: "/profile/!shiro.png" },
];

export const faqs = [
  {
    question:
      "Aku baru gabung nih, gimana sih cara mulai nongkrong di Discord TOWA?",
    answer: `Cara main di sini super simpel! Di TOWA, aktivitas nongkrong dibagi jadi 2 area utama:
• 💬 Area Ngetik (Text Channel): Pas buat yang lagi mager open mic, di tempat umum, atau nyaman interaksi via tulisan/meme.
• 🔊 Area Ngomong (Voice Channel): Tempat buat yang mau denger suara human asli, ngobrol langsung, atau sekadar dengerin warga yapping.`,
  },
  {
    question:
      "Kalau aku lagi mager open mic atau di tempat umum, bisa nongkrong di mana aja?",
    answer: `Kamu bisa meluncur ke Area Ngetik (Text Channels). Pilih channel sesuai mood kamu:
• 💬 obrolan-random : Alun-alun utama warga. Bebas bahas topik apa aja, asbun (asal bunyi), dan gak perlu jaim.
• 💬 asbun-apapun : Lapak khusus lempar jokes, meme, atau bahasan super random di luar nalar.
• ❤️‍🩹 curhat : Tempat numpahin keluh kesah, galau, atau capek sama real life. Warga siap dengerin.
• 🔎 cari-pemain : Lapak kumpul buat nyari party mabar game.`,
  },
  {
    question: "Gimana caranya kalau aku mau cari teman mabar game?",
    answer: `Tinggal ikuti 3 langkah simpel ini:
1. Masuk ke channel 🔎・cari-pemain.
2. Drop atau sebutkan nama game yang mau dimainkan (Roblox, Mobile Legends, Valorant, dll).
3. Tulis sisa slot pemain yang kamu butuhkan. Warga yang lagi standby bakal langsung nyaut buat mabar bareng!`,
  },
  {
    question:
      "Kalau mau coba masuk Voice Channel (VC) tapi masih malu/pemula, gimana?",
    answer: `Santai aja, gak perlu canggung! Ini tips nongkrong di VC buat pemula:
• Lompat Langsung: Tinggal klik dan masuk ke Ruang Suara / Tempat Nongkrong.
• Boleh Mute (Diam Dulu): Kalau di awal masih malu buat ngomong, masuk aja dalam keadaan mute buat dengerin orang ngobrol.
• Sapa Pelan-pelan: Nanti kalau udah merasa nyaman, tinggal unmute dan sapa warga lainnya!`,
  },
  {
    question:
      "Apakah aman kalau aku mau numpahin cerita atau curhat masalah pribadi?",
    answer: `Sangat aman! TOWA menyediakan ruang aman buat warga:
• Langsung meluncur ke channel ❤️‍🩹・curhat.
• Bebas numpahin rasa capek real life, galau, atau keluh kesah.
• Warga TOWA selalu siap mendengarkan tanpa menghakimi.`,
  },
];
