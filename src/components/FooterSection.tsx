import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Send as TelegramIcon } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="section-padding border-t border-foreground/10 dark-section">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}>
            
            <p className="label-text gold-text mb-6">Контакты</p>
            <div className="space-y-4 text-sm font-light text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 gold-icon flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>г. Казань, ул. Фатыха Карима д.9<br />Шоурум по записи</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 gold-icon flex-shrink-0" strokeWidth={1.5} />
                <a href="tel:+79506666605" className="hover:text-foreground luxury-transition">+7 950 666 66 05</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 gold-icon flex-shrink-0" strokeWidth={1.5} />
                <a href="mailto:jewelerkitchen@gmail.com" className="hover:text-foreground luxury-transition">jewelerkitchen@gmail.com</a>
              </div>
              <div className="flex gap-4 pt-2">
                <a href="#" className="glass-card p-3 hover:bg-[hsl(var(--surface-glass-hover))] luxury-transition" aria-label="WhatsApp">
                  <MessageCircle className="w-4 h-4 gold-icon" strokeWidth={1.5} />
                </a>
                <a href="#" className="glass-card p-3 hover:bg-[hsl(var(--surface-glass-hover))] luxury-transition" aria-label="Telegram">
                  <TelegramIcon className="w-4 h-4 gold-icon" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.2, 0, 0, 1] }}
            className="glass-card overflow-hidden min-h-[250px]">
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5!2d49.1221!3d55.7879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415ead0f1b1c3b3d%3A0x0!2z0KTQsNGC0YvRhSDQmtCw0YDQuNC80LAsIDksINCa0LDQt9Cw0L3RjA!5e0!3m2!1sru!2sru!4v1"
              className="w-full h-full min-h-[250px] border-0 grayscale invert opacity-60"
              loading="lazy"
              title="Карта расположения мастерской" />
            
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.2, 0, 0, 1] }}>
            
            <p className="label-text gold-text mb-6">Реквизиты</p>
            <div className="space-y-2 text-xs font-light text-muted-foreground font-mono">
              <p>ИП Адизова Д.Р.</p>
              <p>ИНН 162902245821</p>
              <p>ОГРНИП 323169000082577</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-light">
            © {new Date().getFullYear()} ИП Адизова Д.Р.. Все права защищены.
          </p>
          <a href="#" className="text-xs text-muted-foreground font-light hover:text-foreground luxury-transition">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>);

};

export default FooterSection;