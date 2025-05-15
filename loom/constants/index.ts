export const MAX_VIDEO_SIZE = 500 * 1024 * 1024;
export const MAX_THUMBNAIL_SIZE = 10 * 1024 * 1024;

export const BUNNY = {
  STREAM_BASE_URL: "https://video.bunnycdn.com/library",
  STORAGE_BASE_URL: "https://sg.storage.bunnycdn.com/snapcast",
  CDN_URL: "https://snapcast.b-cdn.net",
  EMBED_URL: "https://iframe.mediadelivery.net/embed",
  TRANSCRIPT_URL: "https://vz-47a08e64-84d.b-cdn.net",
};

export const emojis = ["😂", "😍", "👍"];

export const filterOptions = [
  "Most Viewed",
  "Most Recent",
  "Oldest First",
  "Least Viewed",
];

export const visibilities: Visibility[] = ["public", "private"];

export const ICONS = {
  record: "/assets/icons/record.svg",
  close: "/assets/icons/close.svg",
  upload: "/assets/icons/upload.svg",
};

export const initialVideoState = {
  isLoaded: false,
  hasIncrementedView: false,
  isProcessing: true,
  processingProgress: 0,
};

export const infos = ["transcript", "metadata"];

export const DEFAULT_VIDEO_CONFIG = {
  width: { ideal: 1920 },
  height: { ideal: 1080 },
  frameRate: { ideal: 30 },
};

export const DEFAULT_RECORDING_CONFIG = {
  mimeType: "video/webm;codecs=vp9,opus",
  audioBitsPerSecond: 128000,
  videoBitsPerSecond: 2500000,
};

export const dummyCards = [
  {
    id: 1,
    title: "SnapCast Message",
    thumbnail: "/assets/samples/thumbnail (1).png",
    createdAt: new Date("2023-06-30T00:00:00"),
    username: "Alice",
    views: 10,
    visibility: "public",
    duration: 149,
    userImg: "/assets/images/jason.png",
  },
  {
    id: 2,
    title: "React Tutorial",
    thumbnail: "/assets/samples/thumbnail (2).png",
    createdAt: new Date("2023-07-01T12:30:00"),
    username: "Bob",
    views: 25,
    visibility: "public",
    duration: 210,
    userImg: "/assets/images/jason.png",
  },
  {
    id: 3,
    title: "UI Design Tips",
    thumbnail: "/assets/samples/thumbnail (3).png",
    createdAt: new Date("2023-07-02T09:15:00"),
    username: "Clara",
    views: 42,
    visibility: "private",
    duration: 180,
    userImg: "/assets/images/jason.png",
  },
  {
    id: 4,
    title: "Next.js Deep Dive",
    thumbnail: "/assets/samples/thumbnail (4).png",
    createdAt: new Date("2023-07-03T18:45:00"),
    username: "David",
    views: 33,
    visibility: "public",
    duration: 300,
    userImg: "/assets/images/jason.png",
  },
  {
    id: 5,
    title: "Funny Cat Compilation",
    thumbnail: "/assets/samples/thumbnail (5).png",
    createdAt: new Date("2023-07-04T14:20:00"),
    username: "Eva",
    views: 120,
    visibility: "public",
    duration: 95,
    userImg: "/assets/images/jason.png",
  },
  {
    id: 6,
    title: "Productivity Hacks",
    thumbnail: "/assets/samples/thumbnail (6).png",
    createdAt: new Date("2023-07-05T08:00:00"),
    username: "Frank",
    views: 58,
    visibility: "private",
    duration: 160,
    userImg: "/assets/images/jason.png",
  },
  {
    id: 7,
    title: "Travel Vlog: Japan",
    thumbnail: "/assets/samples/thumbnail (7).png",
    createdAt: new Date("2023-07-06T20:10:00"),
    username: "Grace",
    views: 77,
    visibility: "public",
    duration: 240,
    userImg: "/assets/images/jason.png",
  },
  {
    id: 8,
    title: "Quick Cooking Tips",
    thumbnail: "/assets/samples/thumbnail (8).png",
    createdAt: new Date("2023-07-07T11:05:00"),
    username: "Henry",
    views: 64,
    visibility: "public",
    duration: 130,
    userImg: "/assets/images/jason.png",
  },
];