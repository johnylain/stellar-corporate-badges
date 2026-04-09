import { motion } from "framer-motion";
import iconDoc from "@/assets/icon-doc.png";
import iconCalc from "@/assets/icon-calc.png";
import iconCheck from "@/assets/icon-check.png";
import iconHammer from "@/assets/icon-hammer.png";
import iconPackage from "@/assets/icon-package.png";

const steps = [
  {
    icon: iconDoc,
    title: "Заявка / бриф",
    desc: "Вы отправляете задачу и референсы.",
  },
  {
    icon: iconCalc,
    title: "Расчёт и концепт",
    desc: "Просчитываем стоимость в разных металлах и создаём 3D-макет.",
  },
  {
    icon: iconCheck,
    title: "Согласование",
    desc: "Утверждаем дизайн и тестовый образец",
  },
  {
    icon: iconHammer,
    title: "Производство",
    desc: "Запускаем производство с контролем качества",
  },
  {
    icon: iconPackage,
    title: "Доставка",
    desc: "Получаете готовые знаки в стильной упаковке. Есть опция фирменной упаковки.",
  },
];

const ProcessSection = () => {
  return (
    <section className="section-padding dark-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
          className="mb-16"
        >
          <p className="label-text gold-text mb-4 text-lg">Процесс</p>
          <h2 className="text-[2rem] md:text-[3.25rem] font-medium tracking-tighter">
            Как создаются ваши проекты
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-foreground/10" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.2, 0, 0, 1] }}
                className={`relative flex items-start gap-8 md:gap-16 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-1 w-[9px] h-[9px] rounded-full bg-accent border-2 border-background z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:text-right md:pr-0" : "md:text-left md:pl-0"}`}>
                  <div className={`bg-foreground/[0.08] backdrop-blur-md border border-foreground/20 rounded-2xl p-8 inline-flex ${i % 2 === 0 ? "md:ml-auto md:flex-row-reverse" : "md:flex-row"} flex-col md:flex-row items-start gap-4`}>
                    <img src={step.icon} alt={step.title} className="w-20 h-20 object-contain flex-shrink-0" />
                    <div>
                      <h3 className="text-base font-medium tracking-tight mb-2">{step.title}</h3>
                      <p className="text-sm font-light leading-relaxed text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
