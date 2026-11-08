/* =========================================================
   כאן עורכים את כל התוכן של האתר — אין צורך לגעת בקבצים אחרים.

   איך מוסיפים פרויקט?
   מעתיקים בלוק { ... } ברשימת PROJECTS וממלאים:
     title       – שם הפרויקט
     category    – מזהה קטגוריה מתוך CATEGORIES (למשל "video")
     year        – שנה
     description – תיאור קצר (משפט-שניים)
     role        – מה עשית בפרויקט (לא חובה)
     tags        – מילות מפתח / כלים (לא חובה)
     image       – נתיב לתמונה, למשל "images/clip.jpg" (לא חובה)
     video       – קישור YouTube / Vimeo — יוצג בתוך האתר (לא חובה)
     link        – קישור חיצוני (לא חובה)
     featured    – true כדי להציג בראש האתר ב"נבחרים" (לא חובה)

   תמונות: יוצרים תיקייה בשם images ליד הקובץ הזה ושמים בה את הקבצים.
   ========================================================= */

const SITE = {
  name: "נעה",
  role: "יצירה · עיצוב · קוד — מהרעיון ועד הביצוע",
  about:
    "מה שמניע אותי: לבנות דברים שאנשים רואים, שומעים ומרגישים — מסרטונים ואתרים ועד עיצוב גרפי ותאורת במה.",
  email: "noagk10@gmail.com",
  phone: "",            // למשל "050-0000000"
  linkedin: "",         // קישור מלא לפרופיל
  instagram: "",        // קישור מלא לפרופיל
  cv: "",               // קישור לקובץ PDF של קורות החיים (לא חובה)
};

const CATEGORIES = [
  { id: "video",    label: "וידאו",   color: "#ff4d2e" },
  { id: "web",      label: "אתרים",   color: "#3d7bff" },
  { id: "graphics", label: "גרפיקה",  color: "#ff3d9a" },
  { id: "lighting", label: "תאורה",   color: "#ffc21a" },
  { id: "software", label: "תוכנה",   color: "#22e3a0" },
];

const PROJECTS = [
  {
    title: "אמא, אל תפסיקי לבקש",
    category: "video",
    year: 2025,
    description: "סרטון מרגש לרגל תחילת זמן אלול — בני הישיבות מבקשים מהאמהות להמשיך להתפלל להצלחתם בתורה.",
    role: "",
    tags: [],
    video: "https://www.youtube.com/watch?v=OXe-8PBgooc",
    image: "https://img.youtube.com/vi/OXe-8PBgooc/hqdefault.jpg",
    link: "",
  },
  /* ---------- אתרים ---------- */
  {
    title: "כרטיסי אשריך",
    featured: true,
    category: "web",
    year: 2026,
    description: "האתר של רשת ההטבות אשריך — כרטיסי הטבות וכוח קנייה לציבור החרדי, עם הרשמה לקבלת הכרטיס, מידע על הרשת ועמוד לבעלי עסקים.",
    role: "עיצוב ופיתוח",
    tags: ["TypeScript", "Vercel"],
    image: "images/site-hilech-laorayta.jpg",
    link: "https://hilech-laorayta.vercel.app",
  },
  {
    title: "אשריך לעסקים",
    category: "web",
    year: 2026,
    description: "האזור האישי לבעלי העסקים ברשת אשריך: סטטוס, הטבה, חוזה, הודעות וקבצים — כניסה בקישור אישי בלי סיסמה, וממשק ניהול.",
    role: "עיצוב ופיתוח",
    tags: ["TypeScript", "Supabase", "Vercel"],
    image: "images/site-ashrecha-business.jpg",
    link: "https://ashrecha-business.vercel.app",
  },
  {
    title: "Quick Market",
    featured: true,
    category: "web",
    year: 2026,
    description: "אתר דילים מעלי אקספרס — מוצרים נבחרים במחירים הכי שווים, קופונים להעתקה וחיפוש מוצרים.",
    role: "עיצוב ופיתוח",
    tags: ["HTML", "CSS", "JavaScript", "Netlify"],
    image: "images/site-quick-market.jpg",
    link: "https://quickmarket-il.netlify.app",
  },
  {
    title: "ניהול משימות — אשריך",
    category: "web",
    year: 2026,
    description: "מערכת לניהול משימות בארגון: מה צריך לעשות, מי אחראי, עד מתי ומה הסטטוס — כולל משימות חוזרות, תזכורות והתחברות עם Google.",
    role: "אפיון ופיתוח",
    tags: ["React", "TypeScript", "PostgreSQL"],
    link: "https://mesimot-ashrecha.vercel.app",
  },
  {
    title: "רשימת משימות",
    category: "web",
    year: 2026,
    description: "רשימת משימות אישית עם קטגוריות, משימות שבוצעו ופתקים — באתר וגם כאפליקציה למחשב.",
    role: "עיצוב ופיתוח",
    tags: ["React", "PostgreSQL", "Electron"],
    link: "https://reshimat-mesimot.vercel.app",
  },
  {
    title: "שטויות של כלות",
    category: "web",
    year: 2026,
    description: "אתר מגניב לשימוש של כלות — עם הרשמה, התחברות ואזור ניהול.",
    role: "עיצוב ופיתוח",
    tags: ["Next.js", "Tailwind", "Prisma"],
    link: "https://shtuyot-shel-kalot.vercel.app",
  },
  {
    title: "קהילת האופים",
    category: "web",
    year: 2026,
    description: "אתר קהילתי למתכוני אפייה — עוגות, עוגיות ומאפים שהקהילה מעלה, עם חיפוש וקטגוריות.",
    role: "עיצוב ופיתוח",
    tags: ["Next.js", "TypeScript"],
    image: "images/site-recipes-community.jpg",
    link: "https://recipes-community-one.vercel.app",
  },
  {
    title: "YouDown",
    category: "web",
    year: 2026,
    description: "אתר להורדת סרטונים, שירים ופלייליסטים מיוטיוב בעיצוב בסגנון יוטיוב: וידאו עד 4K, אודיו בכמה פורמטים, פלייליסט שלם כ-ZIP, חיפוש, היסטוריה ומצב בהיר/כהה.",
    role: "עיצוב ופיתוח",
    tags: ["Python", "Flask", "yt-dlp"],
    image: "images/site-youdown.jpg",
  },
  {
    title: "אתי · צילומי ניו בורן",
    category: "web",
    year: 2026,
    description: "אתר תדמית לצלמת ניו בורן — עיצוב רך ונקי עם גלריה, שירותים ויצירת קשר.",
    role: "עיצוב ופיתוח",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "images/app-photographer.jpg",
  },
  {
    title: "אתר ומערכת לקוחות לצלמות",
    category: "web",
    year: 2026,
    description: "מערכת שלמה לצלמת: אתר ציבורי, ניהול תוכן האתר, וניהול לקוחות — הצעות מחיר, חוזים, בחירת תמונות ומסירה, ואזור אישי ללקוח.",
    role: "אפיון ופיתוח",
    tags: ["Python", "Django"],
  },
  {
    title: "אתר תיק עבודות",
    category: "web",
    year: 2026,
    description: "האתר הזה — נבנה מאפס ב-HTML, CSS ו-JavaScript.",
    role: "עיצוב ופיתוח",
    tags: ["HTML", "CSS", "JS"],
    image: "images/app-portfolio.jpg",
  },

  /* ---------- תוכנה ---------- */
  {
    title: "CineLook — מעבדת צבע קולנועית",
    featured: true,
    category: "software",
    year: 2026,
    description: "תוכנה שהופכת כל וידאו למראה של סרט קולנוע: לוקים מוכנים, התאמת צבע לפריים רפרנס וספריית לוקים אישית. הכול רץ על כרטיס המסך, בלי להעלות קבצים.",
    role: "עיצוב ופיתוח",
    tags: ["JavaScript", "עיבוד וידאו", "צבע"],
    image: "images/app-cinelook.jpg",
  },
  {
    title: "סטודיו סרטוני AI",
    category: "software",
    year: 2026,
    description: "אתר מקומי שיוצר סרטונים מהנחיות בעברית — רץ על כרטיס המסך במחשב, בלי תשלום ובלי הגבלת כמות.",
    role: "פיתוח",
    tags: ["AI", "ComfyUI", "Python"],
  },
  {
    title: "סטודיו פלייבקים",
    featured: true,
    category: "software",
    year: 2026,
    description: "הפרדת שירה מפלייבק, יצירת פלייבק חדש מתיאור, עיבוד שיר לסגנון אחר ורמיקסים ל-DJ — הכול עם מודלי AI שרצים על המחשב.",
    role: "פיתוח",
    tags: ["AI", "Python", "אודיו"],
    image: "images/app-playbacks.jpg",
  },
  {
    title: "מחולל שירים AI",
    category: "software",
    year: 2026,
    description: "מערכת ליצירת שירים — מבקשה, דרך תור עבודות, ועד שיר מוכן להאזנה ולהורדה. תומכת בעברית.",
    role: "אפיון ופיתוח",
    tags: ["TypeScript", "Node.js", "AI"],
    image: "images/app-songs.jpg",
  },
  {
    title: "סדנת לוגו",
    category: "software",
    year: 2026,
    description: "כלי לעיצוב לוגו: מקלידים שם עסק ומקבלים גלריית הצעות עם פונטים, אייקונים וצבעים, ואפשר לערוך כל אחת.",
    role: "עיצוב ופיתוח",
    tags: ["HTML", "JavaScript", "עיצוב"],
    image: "images/app-logo.jpg",
  },
  {
    title: "היומן שלי",
    category: "software",
    year: 2026,
    description: "יומן ומשימות אישי עם תאריך עברי ולועזי, משימות לשבוע וקטגוריות — מותקן כאפליקציה במחשב.",
    role: "עיצוב ופיתוח",
    tags: ["PWA", "JavaScript"],
    image: "images/app-yoman.jpg",
  },
  {
    title: "העברת קבצים",
    category: "software",
    year: 2026,
    description: "שירות להעברת קבצים גדולים בין משתמשים, בסגנון ג'מבו מייל.",
    role: "פיתוח",
    tags: ["Node.js", "Express", "Cloudflare"],
    image: "images/app-transfer.jpg",
  },
  {
    title: "שחזור קבצים",
    category: "software",
    year: 2026,
    description: "תוכנה למחשב לשחזור קבצים שנמחקו מכרטיסי זיכרון ודיסקים — קוראת את הכונן בלי לשנות אותו ומזהה קבצים מחוקים.",
    role: "אפיון ופיתוח",
    tags: ["Rust", "Tauri"],
    image: "images/app-recovery.jpg",
  },
  {
    title: "מאיר בדרך לחתונה",
    category: "software",
    year: 2026,
    description: "משחק פלטפורמה בדפדפן: מאיר צריך לעבור אתר בנייה ולאסוף יהלומים כדי להגיע לחתונה בזמן.",
    role: "עיצוב ופיתוח",
    tags: ["משחק", "JavaScript"],
    image: "images/app-game.jpg",
  },
  {
    title: "מוריד הסרטונים",
    category: "software",
    year: 2026,
    description: "תוכנה ל-Windows שמורידה סרטונים מיוטיוב כ-MP4 או כ-MP3: מדביקים קישור, בוחרים פורמט ולוחצים הורדה. קובץ אחד, בלי התקנה.",
    role: "עיצוב ופיתוח",
    tags: ["Python", "Windows", "yt-dlp"],
    image: "images/app-morid.jpg",
    link: "https://github.com/NOAGK10/morid-sratonim",
  },
  {
    title: "תוסף יוטיוב — כפתור הורדה",
    category: "software",
    year: 2026,
    description: "תוסף לדפדפן שמוסיף כפתור הורדה אדום ליד כפתור ההרשמה בכל סרטון ביוטיוב. בוחרים MP4 או MP3, ותוכנת מוריד הסרטונים נפתחת ומורידה לבד.",
    role: "פיתוח",
    tags: ["JavaScript", "Chrome Extension"],
    link: "https://github.com/NOAGK10/morid-sratonim",
  },
  {
    title: "מערכת הודעות כשרה",
    category: "software",
    year: 2026,
    description: "מערכת הודעות כשרה — שרת וממשק אינטרנטי לנמענים.",
    role: "פיתוח",
    tags: ["TypeScript", "שרת"],
  },
  {
    title: "תוסף כרום — הלכה יומית",
    category: "software",
    year: 2026,
    description: "תוסף לדפדפן Chrome שמציג הלכות יומיות.",
    role: "פיתוח",
    tags: ["JavaScript", "Chrome Extension"],
    image: "images/app-ext.jpg",
  },
  {
    title: "מילון חרדי",
    category: "software",
    year: 2026,
    description: "כותבים מילה בעברית ומקבלים את השם שלה באנגלית.",
    role: "פיתוח",
    tags: ["מילון"],
  },
];
