import { motion } from "framer-motion";
import { PenTool, Eye, ShieldCheck, Clock } from "lucide-react";

const advantages = [
  {
    icon: PenTool,
    title: "Индивидуальный подход",
    desc: "Мы не штампуем. Садимся и рисуем, учитывая ваш брендбук, корпоративные цвета и ценности.",
  },
  {
    icon: Eye,
    title: "Прозрачность этапов",
    desc: "Вы получаете 3D-визуализацию будущего знака до начала производства. Никаких сюрпризов.",
  },
  {
    icon: ShieldCheck,
    title: "Свой литейный цех",
    desc: "Контроль качества на каждом этапе. Гарантия на замки и покрытие.",
  },
  {
    icon: Clock,
    title: "Точные сроки",
    desc: "Производим партию от 10 штук от 14 рабочих дней. Соблюдаем дедлайны.",
  },
];

const AdvantagesSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
          className="mb-16 max-w-2xl"
        >
          <p className="label-text gold-text mb-4">Преимущества</p>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter">
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
              <a.icon className="w-8 h-8 gold-icon flex-shrink-0" strokeWidth={1} />
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
