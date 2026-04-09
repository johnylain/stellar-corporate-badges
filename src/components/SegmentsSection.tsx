import { motion } from "framer-motion";
import iconCrown from "@/assets/icon-crown.png";
import iconUsers from "@/assets/icon-users.png";
import iconGift from "@/assets/icon-gift.png";
import iconAward from "@/assets/icon-award.png";
import iconCalendar from "@/assets/icon-calendar.png";

const segments = [
  {
    icon: iconCrown,
    title: "Для топ-менеджмента",
    desc: "Эксклюзивные знаки из золота и платины с бриллиантами для наград и ротации руководства.",
  },
  {
    icon: iconUsers,
    title: "Для персонала",
    desc: "Строгие корпоративные значки для хостес, администраторов и охраны.",
  },
  {
    icon: iconGift,
    title: "Для партнёров",
    desc: "Подарочные булавки с логотипом — VIP-мерч для ключевых партнёров.",
  },
  {
    icon: iconCalendar,
    title: "Для мероприятий",
    desc: "Сувенирные значки участникам конференций, форумов и корпоративных событий.",
  },
];

const easeOut: [number, number, number, number] = [0.2, 0, 0, 1];

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.7, ease: easeOut },
  }),
};

const SegmentsSection = () => {
  return (
    <section className="section-padding light-section" style={{ backgroundImage: "url('/images/marble-milky.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
          className="mb-16"
        >
          <p className="label-text gold-text mb-4">Сегменты</p>
          <h2 className="text-[2rem] md:text-[3.25rem] font-medium tracking-tighter">
            Ваш знак отличия для любой задачи
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {segments.map((seg, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i}
              className="glass-card-hover p-8 flex flex-col items-center text-center"
            >
              <img src={seg.icon} alt={seg.title} className="w-20 h-20 mb-6 object-contain" />
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
