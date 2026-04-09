import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Заявка отправлена", description: "Мы свяжемся с вами в течение часа." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding light-section" style={{ backgroundImage: "url('/images/microconcrete-light.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
          >
            <p className="label-text gold-text mb-4">Контакт</p>
            <h2 className="text-[2rem] md:text-[3.25rem] font-medium tracking-tighter mb-6">
              Получите расчёт стоимости вашего тиража за 1 час
            </h2>
            <p className="text-sm font-light leading-relaxed text-muted-foreground max-w-md">
              Заполните форму — наш менеджер проектов свяжется с вами и подготовит
              индивидуальный расчёт в нескольких вариантах металлов и покрытий.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.2, 0, 0, 1] }}
            className="space-y-5"
          >
            <div>
              <label className="label-text text-muted-foreground block mb-2">Имя *</label>
              <input
                type="text"
                required
                className="w-full bg-secondary border border-foreground/10 rounded-sm px-5 py-4 text-sm font-light text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent luxury-transition"
                placeholder="Иван Петров"
              />
            </div>
            <div>
              <label className="label-text text-muted-foreground block mb-2">Телефон *</label>
              <input
                type="tel"
                required
                className="w-full bg-secondary border border-foreground/10 rounded-sm px-5 py-4 text-sm font-light text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent luxury-transition"
                placeholder="+7 (___) ___-__-__"
              />
            </div>
            <div>
              <label className="label-text text-muted-foreground block mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-secondary border border-foreground/10 rounded-sm px-5 py-4 text-sm font-light text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent luxury-transition"
                placeholder="email@company.ru"
              />
            </div>
            <div>
              <label className="label-text text-muted-foreground block mb-2">Эскиз / логотип</label>
              <input
                type="file"
                accept="image/*,.pdf,.ai,.eps,.svg"
                className="w-full bg-secondary border border-foreground/10 rounded-sm px-5 py-4 text-sm font-light text-muted-foreground file:mr-4 file:py-1 file:px-4 file:rounded-sm file:border-0 file:text-xs file:font-medium file:bg-primary file:text-primary-foreground cursor-pointer"
              />
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-gold px-10 py-5 rounded-sm font-medium tracking-wide uppercase text-sm border border-[hsl(var(--gold))]/20 flex items-center justify-center gap-3 disabled:opacity-60"
            >
              <Send className="w-4 h-4" />
              {loading ? "Отправка..." : "Хочу такой знак для своей компании"}
            </motion.button>

            <p className="text-xs text-muted-foreground font-light leading-relaxed">
              Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
              и даёте согласие на обработку персональных данных.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
