import { 
  ActivityItem, 
  RitualItem, 
  CoordinatorItem, 
  TimelineSlot, 
  TravelDestination, 
  MascotShirt, 
  MvItem, 
  FaqItem 
} from '../types';

export const FESTIVAL_INFO = {
  name: "FESTIVAL BÁO CHÍ TRUYỀN THÔNG NHÂN VĂN",
  shortName: "LIÊN CHUỒNG",
  subtitle: "Thắp lên ngọn lửa nhiệt huyết tuổi trẻ SJC",
  statusBadge: "Mùa thứ 17 (2009 - 2026)",
  milestone: "MÙA THỨ 17 (2009 - 2026)",
  foundedYear: 2009,
  currentYear: 2026,
  organization: "Sinh viên Viện Đào tạo Báo chí và Truyền thông (SJC), Trường ĐH KHXH&NV tự tổ chức",
  hotline: "",
  email: "festivalbcnv.lienchuong@gmail.com",
  fanpageUrl: "https://www.facebook.com/share/19pgn5r3wd/?mibextid=wwXIfr",
  tiktokUrl: "https://www.tiktok.com/@festivalbcttnv?_r=1&_t=ZS-9AaE4YOIMsO",
};

export const HIGHLIGHT_STATS = [
  { value: "17", label: "Mùa rực rỡ", desc: "Hành trình ngọn lửa bất diệt 2009 - 2026" },
  { value: "1000+", label: "Người tham gia / Mùa", desc: "Sinh viên, giảng viên và cựu sinh viên hội tụ" },
  { value: "100K+", label: "Lượt tiếp cận truyền thông", desc: "Sức lan tỏa bùng nổ trên các nền tảng số" },
  { value: "100%", label: "Nhiệt huyết SJC", desc: "Cháy hết mình không khoảng cách, không âu lo" },
];

export const FOUR_MAIN_ACTIVITIES: ActivityItem[] = [
  {
    id: "team-games",
    title: "Chuỗi Game Đồng Đội",
    tagline: "Nhân văn nhưng không đáng kể",
    description: "Chuỗi trò chơi liên hoàn dã ngoại đầy thách thức, nơi sinh viên các khóa lăn xả không màng hình tượng, đoàn kết vượt chướng ngại vật và săn lùng phần thưởng bí ẩn của BTC.",
    details: [
      "Vượt chướng ngại vật bùn đất & thử thách thể lực đồng đội",
      "Giải mã mật thư tư duy phản biện đậm chất truyền thông",
      "Xé bảng tên sinh tồn và đại chiến bột màu rực lửa",
      "Giải thưởng bí ẩn chỉ được trao cho chiến binh quả cảm nhất"
    ],
    vibe: "Lăn xả · Kịch tính · Cười ra nước mắt",
    iconName: "Swords",
    color: "#a855f7"
  },
  {
    id: "gala-night",
    title: "Đêm Gala Bùng Nổ",
    tagline: "Sân khấu nghệ thuật đỉnh cao của dân Truyền thông",
    description: "Đêm nhạc hội hoành tráng được đầu tư âm thanh ánh sáng chuyên nghiệp. Mỗi tiểu trại là một vở nhạc kịch, tiết mục nhảy bốc lửa, khép lại bằng set nhạc DJ cực căng.",
    details: [
      "Các tiết mục kịch nghệ & vũ đạo tự biên tự diễn của từng trại",
      "Sự xuất hiện của dàn Vedette DJ & Ca sĩ khách mời bí mật",
      "Sàn nhảy ngoài trời hàng nghìn người cùng hòa nhịp",
      "Vinh danh các đội thi xuất sắc nhất mùa giải"
    ],
    vibe: "Âm nhạc · Ánh sáng · Năng lượng bùng nổ",
    iconName: "Music",
    color: "#c084fc"
  },
  {
    id: "phoenix-fire",
    title: "Phượng Hoàng Lửa",
    tagline: "Nghi thức thiêng liêng nhất của Liên Chuồng",
    description: "Khoảnh khắc thiêng liêng khi Founder Phong Anh cùng các thế hệ Chuồng Chúa nhóm ngọn lửa truyền thống, đốt cháy mô hình Phượng Hoàng Lửa khổng lồ rực sáng bầu trời đêm dã ngoại.",
    details: [
      "Lễ rước đuốc truyền thống từ tay các thế hệ tiền bối",
      "Nghi thức châm ngòi Phượng Hoàng Lửa thắp sáng bầu trời đêm",
      "Hàng nghìn cánh tay nắm chặt, cất cao vang ca Liên Chuồng",
      "Biểu tượng của sự tái sinh, kiên định và lòng quả cảm người làm báo"
    ],
    vibe: "Thiêng liêng · Xúc động · Rực cháy tâm can",
    iconName: "Flame",
    color: "#f59e0b"
  },
  {
    id: "cultural-space",
    title: "Không Gian Giao Lưu Văn Hoá",
    tagline: "Nhâm nhi thức uống, tâm sự thâu đêm",
    description: "Sau đêm Gala cuồng nhiệt, góc lều trại trở thành không gian ấm cúng bên ánh than hồng. Tiếng guitar mộc mạc, chén trà ấm và những câu chuyện nghề chân thực từ các thế hệ đi trước.",
    details: [
      "Quầy mocktail & đồ uống dã ngoại phong cách Chuồng",
      "Đêm nhạc Acoustic mộc mạc dưới bầu trời ngàn sao",
      "Tâm sự nghề báo & kinh nghiệm thực chiến cùng cựu sinh viên",
      "Khoảnh khắc thức trắng cùng nhau đón bình minh đầu ngày"
    ],
    vibe: "Lắng đọng · Kết nối · Kỷ niệm khắc sâu",
    iconName: "Sparkles",
    color: "#e879f9"
  }
];

export const THREE_RITUALS: RitualItem[] = [
  {
    id: "ritual-fingerprint",
    order: "01",
    title: "Lễ Điểm Chỉ",
    subtitle: "Cam kết đoàn kết - In dấu ấn cá nhân vào đại gia đình",
    description: "Mỗi chiến binh trước khi chính thức bước vào Chuồng đều phải đặt dấu vân tay đỏ rực của mình lên dải đại kỳ Liên Chuồng. Một cái chạm tay, vạn lời hứa danh dự gắn bó.",
    significance: "Dấu ấn biểu tượng cho lời thề: Dù mưa gió, dù cam go, sinh viên Báo chí luôn kề vai sát cánh và không một ai bị bỏ lại phía sau.",
    highlight: "Bức đại kỳ in dấu vân tay của hơn 1000 sinh viên được treo trang trọng tại sân khấu trung tâm suốt 2 ngày 1 đêm."
  },
  {
    id: "ritual-mv",
    order: "02",
    title: "MV Nhà Làm",
    subtitle: "Huyền thoại 'Báo, em là sinh viên Báo' & Các bản hit tự biên",
    description: "Đặc sản không thể thiếu trước thềm hội khoa: MV ca nhạc do chính sinh viên SJC sáng tác, thu âm, đạo diễn và diễn xuất. Giai điệu bắt tai, ca từ hài hước nhưng chan chứa niềm tự hào nghề nghiệp.",
    significance: "Minh chứng cho năng lực sản xuất truyền thông đa phương tiện thực chiến của sinh viên Nhân Văn ngay từ khi còn ngồi trên ghế nhà trường.",
    highlight: "Mỗi mùa một MV chủ đề, tạo nên chuỗi 7 MV kinh điển đạt hàng triệu lượt xem trên các nền tảng mạng xã hội."
  },
  {
    id: "ritual-roadshow",
    order: "03",
    title: "Tuyên Truyền Trực Tiếp",
    subtitle: "Gõ cửa từng giảng đường, khuấy động giảng đường KTX",
    description: "Biệt đội tuyên truyền mang theo trống, cờ và năng lượng rực cháy ùa vào từng lớp học, giảng đường 100 Nguyễn Trãi và ký túc xá Mễ Trì để 'bắt cóc' sự chú ý của mọi tân binh.",
    significance: "Truyền lửa trực tiếp từ người sang người. Phá vỡ mọi sự e dè, rụt rè của sinh viên năm nhất để sẵn sàng bùng nổ tại dã ngoại.",
    highlight: "Những màn flashmob bất ngờ và tiếng hô khẩu hiệu 'BÁO - CHÍ - LIÊN - CHUỒNG' rung chuyển cả dãy nhà học."
  }
];

export const CHUONG_CHUA_LIST: CoordinatorItem[] = [
  {
    id: "cc-phonganh",
    name: "Anh Phong Anh",
    term: "Founder & Người Thắp Lửa (Từ 2009)",
    role: "Sáng lập Liên Chuồng",
    quote: "Liên Chuồng không chỉ là một chuyến đi, đó là lò luyện tinh thần và nơi lưu giữ thanh xuân thuần khiết nhất của người Nhân Văn.",
    motto: "Ngọn lửa Phượng Hoàng không bao giờ tắt."
  },
  {
    id: "cc-k55",
    name: "Ban Điều Hành Thế Hệ Vàng",
    term: "Mùa 2012 - 2016",
    role: "Định hình format 2N1Đ Dã ngoại",
    quote: "Chúng tôi mang sinh viên ra khỏi 4 bức tường giảng đường, đem họ về với núi rừng để thấy tình anh em lớn đến nhường nào.",
    motto: "Lăn xả hết mình - Cháy trọn đam mê."
  },
  {
    id: "cc-k60",
    name: "Thế Hệ Đột Phá Đa Phương Tiện",
    term: "Mùa 2017 - 2021",
    role: "Bùng nổ truyền thông số & 7 MV Huyền thoại",
    quote: "Một chiến dịch truyền thông thành công là khi tất cả mọi người cùng hát một giai điệu và nhớ mãi một cái tên: SJC.",
    motto: "Sáng tạo không biên giới."
  },
  {
    id: "cc-k65",
    name: "Ban Tổ Chức Mùa Thứ 17 (2026)",
    term: "Mùa Thứ 17 (Hiện tại)",
    role: "Kế thừa & Nâng tầm Bản sắc",
    quote: "17 năm rực rỡ là bệ phóng để chúng tôi tạo nên một kỳ Festival Báo chí bùng nổ nhất từ trước tới nay. Chuồng đã sẵn sàng mở!",
    motto: "Thắp sáng thế hệ mới."
  }
];

export const TIMELINE_SCHEDULE: { day1: TimelineSlot[]; day2: TimelineSlot[] } = {
  day1: [
    {
      time: "06:30 - 08:30",
      title: "Hội Quân & Xuất Phát 'Bão Đỏ'",
      description: "Tập trung tại sảnh trường ĐH KHXH&NV, nhận kit áo Chuồng và cất cánh bằng đoàn xe dài tiến về căn cứ dã ngoại.",
      location: "336 Nguyễn Trãi -> Địa điểm bí mật",
      icon: "Bus"
    },
    {
      time: "09:00 - 11:30",
      title: "Nhập Chuồng & Dựng Trại Sáng Tạo",
      description: "Các tiểu đội nhận nguyên vật liệu tre, bạt, màu nước để xây dựng lều trại bản sắc riêng dưới sự hướng dẫn của BTC.",
      location: "Khu vực Trại Trung Tâm",
      icon: "Tent"
    },
    {
      time: "11:30 - 13:30",
      title: "Cơm Trại & Nạp Năng Lượng",
      description: "Thưởng thức bữa cơm đồng đội ấm cúng, nghỉ trưa chuẩn bị tinh thần cho trận địa thể lực buổi chiều.",
      location: "Khu vực Nhà Bạt & Nghỉ ngơi",
      icon: "Coffee"
    },
    {
      time: "14:00 - 17:30",
      title: "Đại Chiến Game Đồng Đội 'Không Khoan Nhượng'",
      description: "Vượt chướng ngại vật liên hoàn, đại chiến bột màu, xé bảng tên và giải mã mật thư tác nghiệp báo chí.",
      location: "Bãi cỏ / Vùng bùn lầy dã ngoại",
      icon: "Swords"
    },
    {
      time: "18:00 - 19:30",
      title: "Tiệc Nướng BBQ Hoàng Hôn",
      description: "Nướng thịt ngoài trời cùng đồng đội, check-in hoàng hôn rực rỡ và chuẩn bị trang phục cho đêm Gala.",
      location: "Khu vực Bếp Lửa Dã Ngoại",
      icon: "Utensils"
    },
    {
      time: "20:00 - 22:30",
      title: "Đêm Gala SJC & Set Nhạc Vedette DJ",
      description: "Sân khấu nhạc kịch, vũ đạo bốc lửa của các tiểu trại và set nhạc DJ điện tử đốt cháy hàng nghìn con tim.",
      location: "Sân khấu Trung Tâm",
      icon: "Music"
    },
    {
      time: "22:30 - 23:30",
      title: "Nghi Thức Thắp Sáng 'Phượng Hoàng Lửa'",
      description: "Thời khắc thiêng liêng châm ngòi linh vật Phượng Hoàng khổng lồ, hàng nghìn sinh viên nắm tay hát vang Liên Chuồng Ca.",
      location: "Bãi Lửa Thiêng",
      icon: "Flame"
    },
    {
      time: "23:30 - 03:00+",
      title: "Không Gian Giao Lưu & Tâm Sự Thâu Đêm",
      description: "Acoustic mộc mạc bên ánh lửa tàn, trà ấm, sẻ chia chuyện nghề chuyện đời cùng các thế hệ cựu sinh viên.",
      location: "Khu Trại Đêm",
      icon: "Moon"
    }
  ],
  day2: [
    {
      time: "06:00 - 07:30",
      title: "Đón Bình Minh Sương Sớm & Tập Thể Dục",
      description: "Hít thở không khí núi rừng trong lành, yoga/khởi động tái tạo năng lượng và bữa sáng năng lượng.",
      location: "Bãi Cỏ Ven Hồ",
      icon: "Sun"
    },
    {
      time: "08:00 - 10:30",
      title: "Chung Kết Game Trí Tuệ & Bế Mạc",
      description: "Phần thi gắn kết cuối cùng, trao cúp vô địch và các giải thưởng bí ẩn danh giá của Hội đồng Chuồng Chúa.",
      location: "Sân khấu Trung Tâm",
      icon: "Award"
    },
    {
      time: "10:30 - 11:30",
      title: "Dọn Trại 'Không Rác Thải' & Chụp Ảnh Kỷ Niệm",
      description: "Tinh thần Nhân Văn xanh sạch đẹp: thu dọn toàn bộ hiện trường và lưu lại hàng nghìn bức ảnh thanh xuân.",
      location: "Toàn bộ Căn Cứ",
      icon: "Camera"
    },
    {
      time: "11:30 - 13:30",
      title: "Lên Xe Khứ Hồi Về Hà Nội",
      description: "Tạm biệt căn cứ dã ngoại, mang theo balo đầy ắp kỷ niệm, tình bạn mới và rổ meme để đời trở về thủ đô.",
      location: "Đoàn xe Liên Chuồng",
      icon: "Bus"
    }
  ]
};

export const TRAVEL_DESTINATIONS: TravelDestination[] = [
  {
    id: "thai-nguyen",
    year: "Mùa Đầu Tiên",
    name: "Làng Du Lịch Sinh Thái Thái Nguyên",
    location: "Thái Nguyên",
    terrain: "Đồi chè bát ngát, suối trong và rừng cọ",
    highlight: "Nơi ngọn lửa Liên Chuồng mùa đầu tiên được nhen nhóm, khai sinh văn hóa cắm trại dã ngoại của SJC.",
    memory: "Những đêm ngủ lều bạt dã chiến đầu tiên dưới bầu trời sao phương Bắc."
  },
  {
    id: "son-tinh-camp",
    year: "Mùa Huyền Thoại",
    name: "Sơn Tinh Camp (Đồng Mô)",
    location: "Sơn Tây, Hà Nội",
    terrain: "Bán đảo ven hồ, rừng thông và bãi cỏ lộng gió",
    highlight: "Địa điểm gắn liền với nhiều mùa giải rực rỡ nhất, bối cảnh ra đời của những trận đại chiến vượt bùn kinh điển.",
    memory: "Trận kéo co nghìn người bên mép nước hồ Đồng Mô phủ đầy khói pháo sáng."
  },
  {
    id: "mai-chau",
    year: "Mùa Bản Sắc",
    name: "Thung Lũng Mai Châu",
    location: "Hòa Bình",
    terrain: "Thung lũng ruộng bậc thang và nhà sàn truyền thống",
    highlight: "Sự kết hợp hoàn hảo giữa văn hóa bản địa vùng cao và nhiệt huyết tuổi trẻ của dân Truyền thông.",
    memory: "Tiếng trống hội rộn rã trong sương mù và điệu múa sạp thâu đêm cùng đồng bào Thái."
  },
  {
    id: "ban-xoi",
    year: "Mùa Bùng Nổ",
    name: "Thung Lũng Bản Xôi",
    location: "Ba Vì, Hà Nội",
    terrain: "Đảo cỏ tự nhiên giữa lòng hồ nước ngọt",
    highlight: "Không gian biệt lập lý tưởng để tổ chức sân khấu Gala quy mô lớn và đêm hội Phượng Hoàng Lửa bốc cao ngút ngàn.",
    memory: "Khoảnh khắc cả thung lũng Bản Xôi cùng sáng rực trong sắc tím neon và ánh lửa thiêng."
  },
  {
    id: "hoa-lac",
    year: "Mùa Thế Hệ Mới",
    name: "Phân Hiệu ĐHQGHN Tại Hòa Lạc",
    location: "Hòa Lạc, Hà Nội",
    terrain: "Đô thị đại học xanh hiện đại giữa thung lũng công nghệ",
    highlight: "Đánh dấu bước chuyển mình kết nối các thế hệ sinh viên học tập tại đô thị đại học mới của ĐHQGHN.",
    memory: "Những bước chạy tiếp sức giữa giảng đường thông minh và không gian sinh thái bạt ngàn."
  }
];

export const MASCOT_SHIRTS: MascotShirt[] = [
  {
    id: "shirt-17",
    season: "Mùa 17",
    year: "2026",
    colorName: "Deep Violet Neon",
    hexColor: "#9d4edd",
    mascot: "Phượng Hoàng Lửa Thế Hệ Mới",
    concept: "Sự kết hợp giữa tím huyền bí của Nhân Văn và ánh sáng neon hiện đại của kỷ nguyên số.",
    quote: "Đốt cháy giới hạn - Tái sinh rực rỡ",
    image: "anhtapthe1.jpg"
  },
  {
    id: "shirt-16",
    season: "Mùa 16",
    year: "2025",
    colorName: "Royal Flame Purple",
    hexColor: "#7928ca",
    mascot: "Kỳ Lân Truyền Thông",
    concept: "Tôn vinh bản lĩnh kiên cường, sắc bén của người làm truyền thông chân chính.",
    quote: "Bút sắc lòng trong - Tâm hồn rực lửa",
    image: "anhtapthe2.jpg"
  },
  {
    id: "shirt-15",
    season: "Mùa 15",
    year: "2024",
    colorName: "Cyber Plum",
    hexColor: "#a855f7",
    mascot: "Chiến Mã Báo Chí",
    concept: "Tốc độ dấn thân và tinh thần không lùi bước trước mọi tin tức thời sự.",
    quote: "Xung phong mọi nẻo đường",
    image: "anhtapthe3.jpg"
  },
  {
    id: "shirt-14",
    season: "Mùa 14",
    year: "2023",
    colorName: "Vivid Amethyst",
    hexColor: "#8b5cf6",
    mascot: "Sư Tử Kiêu Hãnh",
    concept: "Tiếng gầm dõng dạc của ngòi bút chính trực, dấn thân và khai phá sự thật đến cùng.",
    quote: "Tiếng nói công lý - Khí phách kiên cường",
    image: "anhtapthe4.jpg"
  },
  {
    id: "shirt-13",
    season: "Mùa 13",
    year: "2022",
    colorName: "Electric Violet",
    hexColor: "#6d28d9",
    mascot: "Báo Đốm Thần Tốc",
    concept: "Sự linh hoạt nhạy bén, tốc độ xử lý thông tin đa phương tiện thần tốc trong thời đại số.",
    quote: "Nhanh như chớp - Chuẩn từng giây",
    image: "anhtapthe5.jpg"
  },
  {
    id: "shirt-vintage",
    season: "Mùa Di Sản",
    year: "2015 - 2020",
    colorName: "Classic Heritage Violet",
    hexColor: "#5b1bb8",
    mascot: "Đại Bàng SJC",
    concept: "Chiếc áo màu tím kinh điển đã theo chân hàng chục thế hệ sinh viên qua các kỳ dã ngoại lịch sử.",
    quote: "Một lần là Chuồng - Trọn đời là Anh Em",
    image: "anhtapthe6.jpg"
  }
];

export const MV_ARCHIVE: MvItem[] = [
  {
    id: "mv-1",
    title: "Báo, Em Là Sinh Viên Báo",
    season: "MV Kinh Điển",
    year: "Huyền thoại SJC",
    views: "500K+ Lượt xem",
    description: "Ca khúc 'thánh ca' của mọi thế hệ sinh viên Báo chí Nhân Văn. Giai điệu rộn ràng, ca từ hóm hỉnh kể về những đêm chạy bài, chiếc máy ảnh cồng kềnh và tình yêu nghề vô bờ.",
    lyricHook: "'Báo, em là sinh viên Báo... Thức trắng đêm sâu nhưng tim vẫn cháy ngàn màu!'"
  },
  {
    id: "mv-2",
    title: "Đốt Cháy Bầu Trời",
    season: "Mùa 14",
    year: "2023",
    views: "250K+ Lượt xem",
    description: "Bản rock ballad đầy nội lực mang âm hưởng dã ngoại hoang dã, ghi lại những thước phim flycam tuyệt đẹp tại thung lũng Bản Xôi.",
    lyricHook: "'Đêm nay ta nắm tay nhau, đốt cháy bầu trời bằng ngọn lửa của thanh xuân!'"
  },
  {
    id: "mv-3",
    title: "Khát Khao Nhà Chuồng",
    season: "Mùa 12",
    year: "2021",
    views: "180K+ Lượt xem",
    description: "Ra đời trong giai đoạn đặc biệt, là lời hiệu triệu gắn kết hàng nghìn sinh viên giữ vững niềm tin và tinh thần lạc quan.",
    lyricHook: "'Dù cách xa nghìn dặm, tiếng gọi Chuồng vẫn vang vọng trong tim!'"
  },
  {
    id: "mv-4",
    title: "Chạm Vào Ánh Lửa",
    season: "Mùa 10 (Thập Kỷ)",
    year: "2019",
    views: "320K+ Lượt xem",
    description: "Cột mốc tròn 10 năm thành lập Liên Chuồng, quy tụ dàn diễn viên là cựu sinh viên các thế hệ từ khắp mọi miền đất nước trở về.",
    lyricHook: "'Mười năm một chặng đường, ngọn lửa năm ấy chưa từng nguội tàn!'"
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    id: "faq-1",
    question: "Đi 1 về 2? Liệu có thoát ế khi tham gia Liên Chuồng?",
    shortQ: "Đi 1 về 2?",
    answer: "Chắc chắn 'lãi' to! Ít nhất là bạn sẽ lãi thêm một hội anh em chí cốt sẵn sàng gánh deadline cùng bạn suốt 4 năm đại học, kèm theo một rổ meme 'dìm hàng' để đời. Còn nếu duyên tới bên ánh lửa trại bập bùng thì chúc mừng, bạn đã chính thức gia nhập hội các cặp đôi nên duyên từ Liên Chuồng!",
    category: "Trải nghiệm"
  },
  {
    id: "faq-2",
    question: "Ngập deadline môn học và công việc thì có nên đi không?",
    shortQ: "Ngập deadline?",
    answer: "Càng ngập deadline thì càng phải đi! Hãy gác lại 2 ngày 1 đêm lên đường tìm cảm hứng. Nạp đầy năng lượng từ thiên nhiên, tiếng cười đồng đội và lửa trại sẽ giúp bạn mở khóa những ý tưởng sáng tạo đột phá khi trở về. Deadline thì năm nào cũng có, nhưng thanh xuân cùng Liên Chuồng thì chỉ có một lần!",
    category: "Thời gian"
  },
  {
    id: "faq-3",
    question: "Sinh viên năm nhất (K1) còn rụt rè, đi có sợ bị lạc lõng không?",
    shortQ: "K1 sợ lạc lõng?",
    answer: "Tuyệt đối không! Toàn bộ cơ chế trò chơi và sinh hoạt của Liên Chuồng được thiết kế để kết nối 100%. Bạn sẽ được chia về các tiểu đội với sự dẫn dắt của các 'anh chị Chuồng' cực kỳ nhiệt tình. Nghi thức Phượng Hoàng Lửa và chuỗi game đồng đội sẽ xóa nhòa mọi khoảng cách khóa trên - khóa dưới chỉ sau vài giờ đầu tiên.",
    category: "Gắn kết"
  },
  {
    id: "faq-4",
    question: "CV còn trắng tinh, chưa có kinh nghiệm có được làm CTV Ban Tổ Chức không?",
    shortQ: "CV trắng làm CTV?",
    answer: "Hãy bắt đầu chính từ Liên Chuồng! BTC không tìm kiếm những bộ CV hoàn hảo có sẵn, mà tìm kiếm những trái tim đam mê và tinh thần học hỏi. Tại đây, bạn sẽ được 'cầm tay chỉ việc' từ khâu lên kế hoạch, sản xuất truyền thông, dựng sân khấu, đạo diễn sự kiện đến hậu cần thực chiến.",
    category: "Ứng tuyển"
  },
  {
    id: "faq-5",
    question: "Sinh viên các khoa hoặc trường khác ngoài SJC có được đăng ký tham gia không?",
    shortQ: "Trường khác tham gia?",
    answer: "Liên Chuồng là ngày hội khoa truyền thống đặc thù mang đậm bản sắc và văn hóa riêng của Viện Đào tạo Báo chí và Truyền thông (SJC) - ĐH KHXH&NV. Vì vậy, số lượng xuất tham gia giới hạn được ưu tiên tuyệt đối cho sinh viên, giảng viên và cựu sinh viên SJC. Tuy nhiên, bạn hoàn toàn có thể theo dõi Fanpage để thưởng thức các sản phẩm truyền thông và đêm Gala phát trực tiếp!",
    category: "Đối tượng"
  },
  {
    id: "faq-6",
    question: "Thể lực yếu, không quen dã ngoại thì có tham gia được các trò chơi không?",
    shortQ: "Thể lực yếu?",
    answer: "Đừng lo, tại Liên Chuồng 'không ai bị bỏ lại phía sau'! Các hoạt động không chỉ có trò chơi vận động thể lực mà còn có giải mật thư, sáng tạo đạo cụ, nấu nướng, chụp ảnh, văn nghệ và giao lưu cắm trại. Bất kỳ ai cũng có vị trí tỏa sáng theo cách riêng của mình.",
    category: "Sức khỏe"
  },
  {
    id: "faq-7",
    question: "Quyền lợi và giá trị thực tế nhận được khi làm Cộng tác viên (CTV) là gì?",
    shortQ: "Quyền lợi CTV?",
    answer: "Bạn nhận được chứng nhận (Certificate) từ Ban Tổ Chức sinh viên Liên Chuồng SJC, rèn luyện kỹ năng tổ chức sự kiện quy mô hàng nghìn người (portfolio giá trị cao khi đi làm), mở rộng mối quan hệ mật thiết với các phóng viên, BTV, chuyên gia truyền thông là cựu sinh viên, và quan trọng nhất: một gia đình thứ hai keo sơn gắn bó suốt đời.",
    category: "Quyền lợi"
  }
];
