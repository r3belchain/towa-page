export type Avatar = { name: string; avatarUrl: string };

export const communityStats = [
  { value: "12.8K", label: "Warga" },
  { value: "1.2K", label: "Online" },
  { value: "248", label: "Boosters" },
];

export const featureItems = [
  {
    icon: "gamepad",
    title: "Mabar",
    description: "Mobile Legends, Roblox, Valorant, dan game lainnya.",
  },
  {
    icon: "sparkles",
    title: "Anime Talk",
    description: "Bahas anime seru favorit kamu bareng warga lain.",
  },
  {
    icon: "users",
    title: "Relasi",
    description: "Temukan teman baru dan bangun pertemanan yang hangat.",
  },
  {
    icon: "message",
    title: "Asbun",
    description: "Obrolan bebas dan santai, dari serius sampai random.",
  },
  {
    icon: "camera",
    title: "Kirim Momen",
    description: "Bagikan momen keseharianmu ke seluruh warga TOWA.",
  },
  {
    icon: "palette",
    title: "Pamer Karya",
    description: "Tunjukkan hasil karya dan kreativitasmu ke warga lain.",
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
  },
  {
    title: "mas mas",
    image: "/dc-assets/asset7.png",
    size: "tall",
  },
  {
    title: "Dating",
    image: "/dc-assets/asset3.png",
    size: "tall",
  },
  {
    title: "Antara aku, kamu, dan senja",
    image: "/dc-assets/asset4.png",
    size: "tall",
  },
  {
    title: "diajak mama yoga",
    image: "/dc-assets/asset6.jpg",
    size: "tall",
  },
  {
    title: "Nonton sama my kisah",
    image: "/dc-assets/asset2.jpg",
    size: "tall",
  },
];

export const artworks = [
  {
    title: "WithYou",
    artist: "Rage T",
    image: "/dc-assets/pamerkarya1.png",
  },
  {
    title: "hmmmm",
    artist: "Joan",
    image: "/dc-assets/pamerkarya3.jpg",
  },
  {
    title: "My Original Character",
    artist: "Naomi",
    image: "/dc-assets/pamerkarya2.png",
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
    question: "Gabung TOWA bayar atau gratis?",
    answer:
      "Gratis dong. TOWA terbuka untuk siapa saja yang ingin ngobrol, mabar, dan cari teman baru.",
  },
  { question: "Boleh promosi karya atau komunitas?", answer: "Tidak Boleh yaa.." },
  {
    question: "Apakah wajib aktif setiap hari?",
    answer:
      "Tidak wajib. Datang kapan saja saat butuh teman ngobrol atau ingin berbagi momen.",
  },
  {
    question: "Bagaimana cara ikut event?",
    answer: "Pantau kanal pengumuman agar tidak ketinggalan keseruannya.",
  },
];
