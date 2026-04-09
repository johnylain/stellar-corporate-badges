import { motion } from "framer-motion";
import iconPen from "@/assets/icon-pen.png";
import iconEye from "@/assets/icon-eye.png";
import iconShield from "@/assets/icon-shield.png";
import iconClock from "@/assets/icon-clock.png";

const advantages = [
  {
    icon: iconPen,
    title: "Индивидуальный подход",
    desc: "Мы не штампуем. Садимся и рисуем, учитывая ваш брендбук, корпоративные цвета и ценности.",
  },
  {
    icon: iconEye,
    title: "Прозрачность этапов",
    desc: "Вы получаете 3D-визуализацию будущего знака до начала производства. Никаких сюрпризов.",
  },
  {
    icon: iconShield,
    title: "Свой литейный цех",
    desc: "Контроль качества на каждом этапе. Гарантия на замки и покрытие.",
  },
  {
    icon: iconClock,
    title: "Точные сроки",
    desc: "Производим партию от 10 штук от 14 рабочих дней. Соблюдаем дедлайны.",
  },
];

const AdvantagesSection = () => {
  return (
    <section className="section-padding light-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
          className="mb-16 max-w-2xl"
        >
          <p className="label-text gold-text mb-4">Преимущества</p>
          <h2 className="text-[2rem] md:text-[3.25rem] font-medium tracking-tighter">
            Почему 90% клиентов возвращаются за новыми тиражами
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {advantages.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.2, 0, 0, 1] }}
              className="glass-card-hover p-10 flex gap-6"
            >
              <img src={a.icon} alt={a.title} className="w-24 h-24 flex-shrink-0 object-contain" />
              <div>
                <h3 className="text-lg font-medium tracking-tight mb-3">{a.title}</h3>
                <p className="text-sm font-light leading-relaxed text-muted-foreground">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
