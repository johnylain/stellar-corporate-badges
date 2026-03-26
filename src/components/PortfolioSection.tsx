import { motion } from "framer-motion";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const projects = [
  {
    image: portfolio1,
    alt: "Коллекция корпоративных знаков",
    label: "РАБОТА #1",
    title: "Нагрудный знак «Федеральная Сеть»",
    meta: { metal: "Серебро 925 / Золото 585", coating: "Белый родий", enamel: "Горячая эмаль", edition: "150 ед." },
    large: true,
  },
  {
    image: portfolio2,
    alt: "Золотой значок с горячей эмалью",
    label: "РАБОТА #2",
    title: "Юбилейный знак к 25-летию",
    meta: { metal: "Золото 585", coating: "Золочение 999", enamel: "Горячая эмаль", edition: "50 ед." },
    large: false,
  },
  {
    image: portfolio3,
    alt: "Серебряный корпоративный знак",
    label: "РАБОТА #3",
    title: "Корпоративный значок для персонала",
    meta: { metal: "Серебро 925", coating: "Родирование", enamel: "Холодная эмаль", edition: "500 ед." },
    large: false,
  },
  {
    image: portfolio4,
    alt: "Булавка из розового золота с бриллиантами",
    label: "КРУПНЫЙ РИТЕЙЛЕР",
    title: "VIP-знак для совета директоров",
    meta: { metal: "Розовое золото 750", coating: "—", enamel: "—", edition: "12 ед." },
    large: true,
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding dark-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
          className="mb-16"
        >
          <p className="label-text gold-text mb-4">Портфолио</p>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter">
            Избранные работы
          </h2>
        </motion.div>

        <div className="grid grid-cols-12 gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12, duration: 0.8, ease: [0.2, 0, 0, 1] }}
              className={`${p.large ? "col-span-12 md:col-span-8" : "col-span-12 md:col-span-4"} group`}
            >
              <div className="glass-card overflow-hidden h-full flex flex-col">
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={p.image}
                    alt={p.alt}
                    className="w-full h-full object-cover luxury-transition group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="label-text gold-text mb-2">{p.label}</span>
                  <h3 className="text-lg font-medium tracking-tight mb-4">{p.title}</h3>
                  <div className="mt-auto grid grid-cols-2 gap-x-6 gap-y-1 font-mono text-xs text-muted-foreground">
                    <span>МЕТАЛЛ</span><span>{p.meta.metal}</span>
                    <span>ПОКРЫТИЕ</span><span>{p.meta.coating}</span>
                    <span>ЭМАЛЬ</span><span>{p.meta.enamel}</span>
                    <span>ТИРАЖ</span><span>{p.meta.edition}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
