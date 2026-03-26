import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Droplets, Paintbrush, Link2 } from "lucide-react";
import processEnamel from "@/assets/process-enamel.jpg";

const tabs = [
  {
    id: "metals",
    icon: Layers,
    label: "Металлы",
    items: [
      { name: "Золото", detail: "375 / 585 / 750 / 999 проба" },
      { name: "Серебро", detail: "925 стерлинговое серебро" },
      { name: "Платина", detail: "950 проба" },
      { name: "Палладий", detail: "500 / 850 проба" },
    ],
  },
  {
    id: "coatings",
    icon: Droplets,
    label: "Покрытия",
    items: [
      { name: "Родирование", detail: "Белый блеск, защита от потускнения" },
      { name: "Золочение", detail: "Гальваническое золочение 999" },
      { name: "Чернение", detail: "Патинирование для контраста" },
      { name: "Оксидирование", detail: "Благородная состаренная текстура" },
    ],
  },
  {
    id: "enamel",
    icon: Paintbrush,
    label: "Эмаль",
    items: [
      { name: "Горячая эмаль", detail: "Ювелирная, стеклоподобная — для премиум-сегмента" },
      { name: "Холодная эмаль", detail: "Полимерная — для тиражных решений и масс-маркета" },
    ],
  },
  {
    id: "fasteners",
    icon: Link2,
    label: "Крепления",
    items: [
      { name: "Цанга (булавка)", detail: "Классическое крепление для нагрудных знаков" },
      { name: "Винт", detail: "Надёжная фиксация для форменных элементов" },
      
    ],
  },
];

const TechnologiesSection = () => {
  const [active, setActive] = useState("metals");
  const activeTab = tabs.find((t) => t.id === active)!;

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
          className="mb-16"
        >
          <p className="label-text gold-text mb-4">Технологии</p>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter">
            Материалы и технологии
          </h2>
        </motion.div>

        <div className="grid grid-cols-12 gap-6">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
            className="col-span-12 md:col-span-5 glass-card overflow-hidden"
          >
            <img
              src={processEnamel}
              alt="Процесс нанесения горячей эмали"
              className="w-full h-full object-cover min-h-[300px]"
              loading="lazy"
            />
          </motion.div>

          {/* Tabs */}
          <div className="col-span-12 md:col-span-7 flex flex-col">
            <div className="flex gap-2 mb-6 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-sm text-sm font-medium luxury-transition border ${
                    active === tab.id
                      ? "bg-primary text-primary-foreground border-primary"
                      : "glass-card text-muted-foreground hover:text-foreground border-transparent"
                  }`}
                >
                  <tab.icon className="w-4 h-4" strokeWidth={1.5} />
                  {tab.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
                className="flex-1 space-y-3"
              >
                {activeTab.items.map((item, i) => (
                  <div key={i} className="glass-card p-6 flex justify-between items-start gap-4">
                    <div>
                      <h4 className="font-medium text-sm mb-1">{item.name}</h4>
                      <p className="text-xs font-light text-muted-foreground">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
