import { motion } from "framer-motion";
import { Factory, Palette, Gem } from "lucide-react";
import heroBadge from "@/assets/hero-badge.jpg";

const uspItems = [
  {
    icon: Factory,
    text: "Собственное ювелирное производство, а не посредники",
  },
  {
    icon: Gem,
    text: "Работа с любыми металлами и эмалями (холодная / горячая)",
  },
  {
    icon: Palette,
    text: "Помощь в разработке дизайна под корпоративный стиль",
  },
];

const easeOut: [number, number, number, number] = [0.2, 0, 0, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.8, ease: easeOut },
  }),
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBadge}
          alt="Ювелирный корпоративный знак с синей эмалью"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="label-text gold-text mb-6 text-base"
          >
            Ювелирная мастерская полного цикла
          </motion.p>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tighter leading-[1.05] mb-8"
          >
            Корпоративные знаки отличия с индивидуальным дизайном
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground max-w-2xl mb-10"
          >
            Изготовление нагрудных знаков, булавок и значков с логотипом под заказ.
            Работаем с золотом, серебром и платиной.
          </motion.p>

          <motion.div variants={fadeUp} custom={3}>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block btn-gold px-10 py-5 rounded-sm font-medium tracking-wide uppercase text-sm border border-[hsl(var(--gold))]/20"
            >
              Рассчитать стоимость партии
            </motion.a>
          </motion.div>
        </motion.div>

        {/* USP strip */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-foreground/10"
        >
          {uspItems.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={4 + i}
              className="flex items-start gap-4 py-8 md:px-6 border-b md:border-b-0 md:border-r last:border-r-0 border-foreground/10"
            >
              <item.icon className="w-5 h-5 gold-icon flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <p className="text-sm font-light leading-relaxed text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
