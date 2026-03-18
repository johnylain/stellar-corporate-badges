import { motion } from "framer-motion";
import { Crown, Users, Gift, Award, CalendarDays } from "lucide-react";

const segments = [
  {
    icon: Crown,
    title: "Для топ-менеджмента",
    desc: "Эксклюзивные знаки из золота и платины с бриллиантами для наград и ротации руководства.",
  },
  {
    icon: Users,
    title: "Для персонала",
    desc: "Строгие корпоративные значки для хостес, администраторов и охраны.",
  },
  {
    icon: Gift,
    title: "Для партнёров",
    desc: "Подарочные булавки с логотипом — VIP-мерч для ключевых партнёров.",
  },
  {
    icon: Award,
    title: "Для ветеранов",
    desc: "Памятные знаки «За заслуги» из серебра с горячей эмалью.",
  },
  {
    icon: CalendarDays,
    title: "Для мероприятий",
    desc: "Сувенирные значки участникам конференций, форумов и корпоративных событий.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.2, 0, 0, 1] },
  }),
};

const SegmentsSection = () => {
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
          <p className="label-text gold-text mb-4">Сегменты</p>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter">
            Ваш знак отличия для любой задачи
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {segments.map((seg, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i}
              className="glass-card-hover p-8 flex flex-col"
            >
              <seg.icon className="w-6 h-6 gold-icon mb-6" strokeWidth={1} />
              <h3 className="text-base font-medium mb-3 tracking-tight">{seg.title}</h3>
              <p className="text-sm font-light leading-relaxed text-muted-foreground">{seg.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SegmentsSection;
