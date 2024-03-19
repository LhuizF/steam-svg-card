export interface AppDetails {
  type: string;
  name: string;
  steam_appid: number;
  required_age: number;
  is_free: boolean;
  controller_support: string;
  dlc: number[];
  detailed_description: string;
  about_the_game: string;
  short_description: string;
  supported_languages: string;
  reviews: string;
  header_image: string;
  capsule_image: string;
  capsule_imagev5: string;
  website: string;
  pc_requirements: PcRequirements;
  mac_requirements: MacRequirements;
  linux_requirements: LinuxRequirements;
  legal_notice: string;
  developers: string[];
  publishers: string[];
  price_overview: PriceOverview;
  packages: number[];
  package_groups: PackageGroup[];
  platforms: Platforms;
  metacritic: Metacritic;
  categories: Category[];
  genres: Genre[];
  screenshots: Screenshot[];
  movies: Movie[];
  recommendations: Recommendations;
  achievements: Achievements;
  release_date: ReleaseDate;
  support_info: SupportInfo;
  background: string;
  background_raw: string;
  content_descriptors: ContentDescriptors;
  ratings: Ratings;
}

interface PcRequirements {
  minimum: string;
  recommended: string;
}

interface MacRequirements {
  minimum: string;
  recommended: string;
}

interface LinuxRequirements {
  minimum: string;
  recommended: string;
}

interface PriceOverview {
  currency: string;
  initial: number;
  final: number;
  discount_percent: number;
  initial_formatted: string;
  final_formatted: string;
}

interface PackageGroup {
  name: string;
  title: string;
  description: string;
  selection_text: string;
  save_text: string;
  display_type: number;
  is_recurring_subscription: string;
  subs: Sub[];
}

interface Sub {
  packageid: number;
  percent_savings_text: string;
  percent_savings: number;
  option_text: string;
  option_description: string;
  can_get_free_license: string;
  is_free_license: boolean;
  price_in_cents_with_discount: number;
}

interface Platforms {
  windows: boolean;
  mac: boolean;
  linux: boolean;
}

interface Metacritic {
  score: number;
  url: string;
}

interface Category {
  id: number;
  description: string;
}

interface Genre {
  id: string;
  description: string;
}

interface Screenshot {
  id: number;
  path_thumbnail: string;
  path_full: string;
}

interface Movie {
  id: number;
  name: string;
  thumbnail: string;
  webm: Webm;
  mp4: Mp4;
  highlight: boolean;
}

interface Webm {
  '480': string;
  max: string;
}

interface Mp4 {
  '480': string;
  max: string;
}

interface Recommendations {
  total: number;
}

interface Achievements {
  total: number;
  highlighted: Highlighted[];
}

interface Highlighted {
  name: string;
  path: string;
}

interface ReleaseDate {
  coming_soon: boolean;
  date: string;
}

interface SupportInfo {
  url: string;
  email: string;
}

interface ContentDescriptors {
  ids: number[];
  notes: string;
}

interface Ratings {
  esrb: Esrb;
  pegi: Pegi;
  usk: Usk;
  oflc: Oflc;
  nzoflc: Nzoflc;
  dejus: Dejus;
  steam_germany: SteamGermany;
}

interface Esrb {
  rating: string;
  descriptors: string;
}

interface Pegi {
  rating: string;
  descriptors: string;
}

interface Usk {
  rating: string;
}

interface Oflc {
  rating: string;
  descriptors: string;
}

interface Nzoflc {
  rating: string;
  descriptors: string;
}

interface Dejus {
  rating: string;
  descriptors: string;
  required_age: string;
}

interface SteamGermany {
  rating_generated: string;
  rating: string;
  required_age: string;
  banned: string;
  use_age_gate: string;
  descriptors: string;
}
