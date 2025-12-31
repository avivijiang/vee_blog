import { Navigation } from "@/components/Navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Plane, MapPin, Globe, Flag } from "lucide-react";

const visitedCountries = [
  // 东亚
  { name: "中国", nameEn: "China", flag: "🇨🇳", region: "东亚", regionEn: "East Asia" },
  { name: "日本", nameEn: "Japan", flag: "🇯🇵", region: "东亚", regionEn: "East Asia" },
  // 东南亚
  { name: "新加坡", nameEn: "Singapore", flag: "🇸🇬", region: "东南亚", regionEn: "Southeast Asia" },
  { name: "泰国", nameEn: "Thailand", flag: "🇹🇭", region: "东南亚", regionEn: "Southeast Asia" },
  // 南亚
  { name: "尼泊尔", nameEn: "Nepal", flag: "🇳🇵", region: "南亚", regionEn: "South Asia" },
  // 中东
  { name: "土耳其", nameEn: "Turkey", flag: "🇹🇷", region: "中东", regionEn: "Middle East" },
  { name: "阿联酋", nameEn: "UAE", flag: "🇦🇪", region: "中东", regionEn: "Middle East" },
  // 非洲
  { name: "埃及", nameEn: "Egypt", flag: "🇪🇬", region: "非洲", regionEn: "Africa" },
  // 欧洲
  { name: "法国", nameEn: "France", flag: "🇫🇷", region: "欧洲", regionEn: "Europe" },
  { name: "意大利", nameEn: "Italy", flag: "🇮🇹", region: "欧洲", regionEn: "Europe" },
  { name: "瑞士", nameEn: "Switzerland", flag: "🇨🇭", region: "欧洲", regionEn: "Europe" },
];

const chinaProvinces = [
  "北京", "天津", "河北", "辽宁", "吉林", "黑龙江", "上海", "江苏", "浙江", 
  "安徽", "福建", "江西", "山东", "河南", "湖北", "湖南", "广东", "海南",
  "重庆", "四川", "贵州", "云南", "西藏", "陕西", "甘肃", "青海", "内蒙古",
  "广西", "新疆", "香港"
];

const notVisitedProvinces = ["宁夏", "澳门", "山西", "台湾"];

const allProvinces = [...chinaProvinces, ...notVisitedProvinces];

export default function TravelMap() {
  const { i18n } = useTranslation();
  const isZh = i18n.language === "zh";

  const stats = {
    countries: 11,
    provinces: chinaProvinces.length,
    totalProvinces: 34,
    continents: 5,
  };

  const regions = [
    { name: "东亚", nameEn: "East Asia" },
    { name: "东南亚", nameEn: "Southeast Asia" },
    { name: "南亚", nameEn: "South Asia" },
    { name: "中东", nameEn: "Middle East" },
    { name: "非洲", nameEn: "Africa" },
    { name: "欧洲", nameEn: "Europe" },
  ];

  return (
    <div className="min-h-screen bg-gradient-animated bg-blobs bg-grain">
      <Navigation />
      <LanguageSwitcher />
      <main className="container mx-auto px-4 pt-32 pb-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              {isZh ? "旅行足迹" : "Travel Footprints"}
            </h1>
            <p className="text-muted-foreground text-lg">
              {isZh ? "用脚步丈量世界，用心感受每一程" : "Measuring the world with footsteps, feeling every journey with heart"}
            </p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-sm border border-white/50">
              <Globe className="w-8 h-8 mx-auto mb-2 text-blue-500" />
              <div className="text-3xl font-bold font-display">{stats.countries}</div>
              <div className="text-sm text-muted-foreground">{isZh ? "个国家" : "Countries"}</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-sm border border-white/50">
              <MapPin className="w-8 h-8 mx-auto mb-2 text-red-500" />
              <div className="text-3xl font-bold font-display">{stats.provinces}/{stats.totalProvinces}</div>
              <div className="text-sm text-muted-foreground">{isZh ? "中国省份" : "CN Provinces"}</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-sm border border-white/50">
              <Flag className="w-8 h-8 mx-auto mb-2 text-green-500" />
              <div className="text-3xl font-bold font-display">{stats.continents}</div>
              <div className="text-sm text-muted-foreground">{isZh ? "大洲" : "Continents"}</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-sm border border-white/50">
              <Plane className="w-8 h-8 mx-auto mb-2 text-purple-500" />
              <div className="text-3xl font-bold font-display">∞</div>
              <div className="text-sm text-muted-foreground">{isZh ? "下一站" : "Next Stop"}</div>
            </div>
          </motion.div>

          {/* World Countries - Passport Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
              <Globe className="w-6 h-6" />
              {isZh ? "世界足迹" : "World Footprints"}
            </h2>
            <div className="space-y-6">
              {regions.map((region) => {
                const regionCountries = visitedCountries.filter(c => c.region === region.name);
                if (regionCountries.length === 0) return null;
                return (
                  <div key={region.name}>
                    <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      {isZh ? region.name : region.nameEn}
                      <span className="text-xs font-normal">({regionCountries.length})</span>
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {regionCountries.map((country, index) => (
                        <motion.div
                          key={country.nameEn}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 + 0.3 }}
                          className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border-2 border-amber-200/50 shadow-md hover:shadow-lg transition-shadow group overflow-hidden"
                        >
                          <div className="absolute top-0 right-0 w-16 h-16 bg-amber-100/50 rounded-full -mr-8 -mt-8" />
                          <div className="relative">
                            <div className="text-3xl mb-2">{country.flag}</div>
                            <div className="font-display font-bold">
                              {isZh ? country.name : country.nameEn}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* China Map - Province Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
              <span className="text-2xl">🇨🇳</span>
              {isZh ? "中国足迹" : "China Footprints"}
              <span className="text-sm font-normal text-muted-foreground ml-2">
                {chinaProvinces.length}/{allProvinces.length}
              </span>
            </h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/50">
              <div className="flex flex-wrap gap-2">
                {allProvinces.sort().map((province, index) => {
                  const isVisited = chinaProvinces.includes(province);
                  return (
                    <motion.div
                      key={province}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.02 + 0.5 }}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                        isVisited
                          ? "bg-gradient-to-r from-emerald-400 to-teal-500 text-white shadow-sm"
                          : "bg-neutral-100 text-neutral-400 border border-dashed border-neutral-300"
                      }`}
                    >
                      {province}
                      {isVisited && <span className="ml-1">✓</span>}
                    </motion.div>
                  );
                })}
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500" />
                  <span>{isZh ? "已到访" : "Visited"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-neutral-100 border border-dashed border-neutral-300" />
                  <span>{isZh ? "待探索" : "To Explore"}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Travel Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center"
          >
            <blockquote className="text-xl italic text-muted-foreground font-display">
              "{isZh ? "世界是一本书，不旅行的人只读了其中一页" : "The world is a book, and those who do not travel read only one page"}"
            </blockquote>
            <p className="text-sm text-muted-foreground mt-2">— Saint Augustine</p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
