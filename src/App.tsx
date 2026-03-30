/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Instagram, Send, Mail, ArrowRight, Quote, Plus, Menu, X } from "lucide-react";
import ParticleBackground from './components/ParticleBackground';

const GridCell = ({ children, className = "", label = "" }: { children: React.ReactNode; className?: string; label?: string }) => (
  <div className={`relative p-6 md:p-10 border-b border-white-bg/10 ${className}`}>
    {label && <span className="label-micro absolute top-4 left-6 md:top-6 md:left-10">{label}</span>}
    {children}
  </div>
);

const Button = ({ children, primary = false, className = "", href }: { children: React.ReactNode; primary?: boolean; className?: string; href?: string }) => {
  const content = (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`px-6 py-4 md:px-8 md:py-4 text-[10px] md:text-xs font-bold uppercase transition-all duration-300 rounded-none text-center ${
        primary 
          ? "bg-dark-base text-white-bg border border-white-bg/10 hover:bg-light-accent hover:border-light-accent" 
          : "border border-white-bg/20 text-white-bg hover:bg-white-bg hover:text-dark-base"
      } ${className}`}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block w-full">
        {content}
      </a>
    );
  }

  return content;
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const heroPhoto = "https://res.cloudinary.com/dset5uqua/image/upload/v1774688322/Photo_63_1_rbongl.png";

  const navLinks = [
    { name: "Про мене", href: "#about" },
    { name: "Кейси", href: "#works" },
    { name: "Послуги", href: "#services" },
    { name: "Контакти", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-dark-base text-white-bg selection:bg-primary-accent selection:text-white-bg overflow-x-hidden">
      {/* Header / Nav */}
      <header className="grid grid-cols-2 lg:grid-cols-4 border-b border-white-bg/10 sticky top-0 z-50 bg-dark-base/80 backdrop-blur-md">
        <div className="p-4 md:p-8 border-r border-white-bg/10 flex items-center">
          <span className="text-base md:text-xl font-black uppercase whitespace-nowrap">Olesia Dmitriieva</span>
        </div>
        
        <div className="hidden lg:flex p-8 border-r border-white-bg/10 items-center justify-center gap-8 text-[10px] uppercase text-white-bg/60">
          {navLinks.slice(0, 3).map((link) => (
            <a key={link.name} href={link.href} className="hover:text-white-bg transition-colors">{link.name}</a>
          ))}
        </div>
        
        <div className="hidden lg:flex p-8 border-r border-white-bg/10 items-center justify-center">
          <span className="label-micro">Доступна для нових проєктів</span>
        </div>
        
        <div className="flex items-center justify-end">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-4 text-white-bg"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
          <a href="https://t.me/olesia_dmitriyeva" target="_blank" rel="noopener noreferrer" className="hidden lg:flex h-full px-8 bg-dark-base text-white-bg border-l border-white-bg/10 text-[10px] uppercase font-bold hover:bg-light-accent transition-all items-center gap-2 [word-spacing:0.2em]" aria-label="Зв'язатися в Telegram">
            Обговорити проєкт <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </a>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-dark-base pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-5xl md:text-7xl font-normal uppercase border-b border-white-bg/10 pb-6"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        {/* Background Image / Main Visual */}
        <div className="relative h-[70vh] md:h-[85vh] overflow-hidden bg-dark-base">
            <motion.img 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src={heroPhoto}
              alt="Olesia Dmitriieva - Web Designer & Developer"
              width={1920}
              height={1080}
              fetchPriority="high"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          
          {/* Large Name Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 pointer-events-none">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-[18vw] md:text-[12vw] lg:text-[14vw] leading-[0.8] font-black -mb-[2vw] text-white-bg flex flex-col"
            >
              <span>OLESIA</span>
              <span className="self-end">DMITRIIEVA</span>
            </motion.h1>
          </div>

          {/* Micro Text in Hero */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute top-[35%] right-6 md:top-10 md:right-10 max-w-[180px] md:max-w-[240px] pointer-events-none"
          >
            <p className="text-[10px] md:text-xs uppercase leading-relaxed text-dark-base font-medium text-left">
              Створюю цифрові рішення, які виглядають дорого та працюють ефективно — сайти, що допомагають сучасним брендам рости.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Metadata Grid Below Hero */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 border-b border-white-bg/10"
        >
          <GridCell label="Локація" className="col-span-1 border-r border-white-bg/10">
            <p className="text-[10px] md:text-xs uppercase mt-4">Чернівці, Україна</p>
          </GridCell>
          <GridCell label="Сфера" className="col-span-1 lg:border-r border-white-bg/10">
            <p className="text-[10px] md:text-xs uppercase mt-4">Дизайн та розробка</p>
          </GridCell>
          <GridCell label="Філософія" className="col-span-1 border-r border-white-bg/10">
            <p className="text-[10px] md:text-xs uppercase mt-4">Сенс. Структура. Результат.</p>
          </GridCell>
          <GridCell label="Ніша" className="col-span-1">
            <p className="text-[10px] md:text-xs uppercase mt-4">Інфобізнес та експертні ніші</p>
          </GridCell>
        </motion.section>

      {/* About Section */}
      <motion.section 
        id="about" 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-white-bg/10"
      >
        <div className="p-8 md:p-12 md:border-r lg:border-r border-white-bg/10 flex flex-col justify-start min-h-[100px] lg:min-h-[400px]">
          <h2 className="text-5xl md:text-7xl font-bold uppercase">Про мене</h2>
        </div>
        <div className="md:col-span-1 lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 bg-light-bg text-dark-base">
          <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-dark-base/10 p-8 md:p-12 flex flex-col justify-between min-h-[400px]">
            <div>
              <span className="label-micro mb-8 md:mb-12 block opacity-40">• Спеціалізація</span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-8 font-normal">
                Я працюю з інфобізнесом та експертними нішами — там, де дизайн має не прикрашати, а пояснювати і переконувати.
              </h3>
            </div>
            <p className="text-dark-base/60 text-sm md:text-base font-light leading-relaxed max-w-xl">
              Серед моїх клієнтів: експерти, лікарі, коучі, HR та SMM агенції. Проєкти, в яких важливо не просто показати, а донести цінність і сформувати довіру.
            </p>
          </div>
          <div className="p-8 md:p-12 flex flex-col items-center justify-center gap-12">
             <div className="relative aspect-[3/4] w-full max-w-[240px] overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dset5uqua/image/upload/v1774786980/Photo_61_pfemd4.jpg" 
                  alt="Olesia Dmitriieva - Професійний портрет" 
                  width={600}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-100 transition-opacity duration-500"
                  referrerPolicy="no-referrer"
                />
             </div>
             <p className="text-[10px] uppercase tracking-widest font-light leading-relaxed text-center opacity-60">
               Естетика • Структура • Маркетинг
             </p>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        id="services" 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-dark-base/10 bg-light-bg text-dark-base relative"
      >
        <div className="p-8 md:p-12 md:border-r lg:border-r border-dark-base/10 flex flex-col justify-start min-h-[200px] lg:min-h-[400px] sticky top-0 md:relative bg-light-bg z-20">
          <h2 className="text-5xl md:text-7xl font-bold uppercase">Послуги</h2>
        </div>
        <div className="md:col-span-1 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Лендинги для інфопродуктів",
            "багатосторінкові сайти",
            "Сайти для HR та рекрутингу",
            "Сайти для SMM агенцій",
            "Презентації",
            "Візуали для Instagram"
          ].map((service, i) => (
            <div 
              key={i} 
              style={{ 
                top: `${70 + (i * 2)}px`,
                zIndex: 10 + i 
              }}
              className="sticky md:static p-8 md:p-12 border-b border-dark-base/10 sm:[&:nth-child(odd)]:border-r lg:[&:not(:nth-child(3n))]:border-r border-dark-base/10 group hover:bg-dark-base hover:text-white-bg transition-all duration-500 cursor-pointer bg-light-bg shadow-[0_-10px_30px_rgba(0,0,0,0.08)] md:shadow-none"
            >
              <span className="text-[10px] mb-6 md:mb-8 block opacity-40">0{i + 1}</span>
              <h3 className="text-xl md:text-2xl mb-8 md:mb-12 uppercase">{service}</h3>
              <Plus className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
            </div>
          ))}
          <div 
            style={{ 
              top: `${70 + (6 * 2)}px`,
              zIndex: 16
            }}
            className="sticky md:static p-8 md:p-12 border-b border-dark-base/10 lg:[&:not(:nth-child(3n))]:border-r border-dark-base/10 flex flex-col justify-between bg-dark-base/5 group hover:bg-dark-base hover:text-white-bg transition-all duration-500 cursor-pointer bg-light-bg shadow-[0_-10px_30px_rgba(0,0,0,0.08)] md:shadow-none"
          >
            <div>
              <span className="text-[10px] mb-6 md:mb-8 block opacity-40">07</span>
              <h3 className="text-xl md:text-2xl mb-8 md:mb-12 uppercase">Комплексна підтримка</h3>
            </div>
            <div className="flex items-end justify-between">
              <Button primary href="https://t.me/olesia_dmitriyeva" className="bg-dark-base text-white-bg border-dark-base hover:bg-light-accent hover:text-white-bg group-hover:bg-white-bg group-hover:text-dark-base w-full uppercase">Обговорити</Button>
              <Plus className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ml-4 shrink-0" aria-hidden="true" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Cases Section */}
      <motion.section 
        id="works" 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="border-b border-white-bg/10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-white-bg/10">
          <div className="p-8 md:p-12 md:border-r lg:border-r border-white-bg/10">
            <h2 className="text-4xl md:text-5xl">Кейси</h2>
          </div>
          <div className="md:col-span-1 lg:col-span-3 p-8 md:p-12 flex items-center">
            <p className="label-micro">Вибрані проєкти 2024-2025</p>
          </div>
        </div>
        
        {[
          {
            title: "Анна Саєнко",
            subtitle: "Експертний лендинг",
            description: "Цей сайт було створено як персональний бренд-простір для Анни Саєнко — з фокусом на експертність, естетику та чітку комунікацію цінності послуг.\n\nОсновне завдання проєкту — не просто представити особистий бренд, а вибудувати логічний користувацький шлях: від першого враження до розуміння, хто ця людина, чим вона корисна і як з нею працювати.\n\nСайт працює як інструмент довіри та конверсії, поєднуючи мінімалістичний дизайн, структурований контент і зрозумілий UX.",
            img: "https://res.cloudinary.com/dset5uqua/image/upload/v1774710639/01_fgimtp.png",
            link: "https://www.annasaienko.com"
          },
          {
            title: "Nemova Agency",
            subtitle: "SMM Агенція",
            description: "Nemova Agency — це діджитал-агентство з Німеччини, що спеціалізується на брендингу та маркетингу в соціальних мережах. Метою проєкту було створення сучасної, орієнтованої на конверсію цільової сторінки Webflow, яка чітко передає послуги, досвід та ціннісну пропозицію агентства, водночас зміцнюючи довіру до бренду та видимість в Інтернеті.",
            img: "https://res.cloudinary.com/dset5uqua/image/upload/v1774710640/02_igak01.png",
            link: "https://nemova-agency.de/"
          },
          {
            title: "Recruiting Support",
            subtitle: "HR Агенція",
            description: "Ми продумали структуру, дизайн і візуальну мову, яка підкреслює професійність та досвід команди, що надає послуги рекрутингу",
            img: "https://res.cloudinary.com/dset5uqua/image/upload/v1774710641/05_lsyyho.png",
            link: "https://recruiting-support.com.ua/"
          },
          {
            title: "Інна Курилюк",
            subtitle: "Лікар-гінеколог, хірург",
            description: "Інна Курилюк — лікар-гінеколог, хірург і спеціалістка з естетичної медицини, яка надає персоналізовану, доказову допомогу у сфері жіночого здоров’я та краси. Основна увага приділяється як професійному медичному підходу, так і комфорту пацієнток. Інна Курилюк пропонує повний спектр послуг — від гінекологічних консультацій і малоінвазивних хірургічних втручань до сучасних естетичних процедур.",
            img: "https://res.cloudinary.com/dset5uqua/image/upload/v1774710639/04_lty1tr.png",
            link: "https://www.innakuryliuk.com/"
          }
        ].map((work, i) => (
          <a 
            key={i} 
            href={work.link || "#"} 
            target={work.link ? "_blank" : undefined}
            rel={work.link ? "noopener noreferrer" : undefined}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-white-bg/10 group cursor-pointer"
          >
            <div className="md:col-span-1 lg:col-span-3 relative h-[300px] sm:h-[400px] md:h-[60vh] overflow-hidden md:border-r lg:border-r border-white-bg/10">
              <motion.img 
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                src={work.img} 
                alt={`Кейс: ${work.title} - ${work.subtitle}`} 
                width={1200}
                height={800}
                loading="lazy"
                className="w-full h-full object-cover object-top md:group-hover:scale-105 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-between bg-light-bg text-dark-base md:group-hover:bg-dark-base md:group-hover:text-white-bg transition-colors duration-500 min-h-[150px] md:min-h-0">
              <div>
                <h3 className="text-2xl md:text-3xl mb-2">{work.title}</h3>
                <p className="text-xs md:text-sm uppercase opacity-60 mb-6">{work.subtitle}</p>
                {work.description && (
                  <p className="text-xs md:text-sm font-light leading-relaxed opacity-80 block md:hidden md:group-hover:block transition-all duration-500 whitespace-pre-line">
                    {work.description}
                  </p>
                )}
              </div>
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 self-end" aria-hidden="true" />
            </div>
          </a>
        ))}
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        id="reviews"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-white-bg/10"
      >
        <div className="p-8 md:p-12 md:border-r lg:border-r border-white-bg/10 flex flex-col justify-start min-h-[100px] lg:min-h-[400px]">
          <h2 className="text-5xl md:text-7xl font-bold uppercase">Відгуки</h2>
        </div>
        <div className="md:col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-3">
          {[
            {
              name: "Анна Саєнко",
              role: "Експерт",
              text: "Працювати було дуже комфортно — все чітко, структурно і без зайвих пояснень. Мені особливо сподобалось, як ти відчула мій запит і змогла передати його через дизайн. Сайт вийшов саме таким, як я хотіла — стриманий, сучасний і дуже “мій”. І найголовніше — він реально працює і викликає довіру у клієнтів."
            },
            {
              name: "Інна Курилюк",
              role: "Лікар-гінеколог",
              text: "Я довго не могла зрозуміти, як правильно подати свій продукт — було багато інформації і хаос в голові. Ти це дуже круто структурувала і зробила з цього зрозумілий, логічний сайт. Зараз клієнтам набагато простіше орієнтуватися, і я сама почала більш впевнено презентувати свої послуги. Дякую за такий підхід і увагу до деталей."
            },
            {
              name: "Recruiting Support",
              role: "HR Агенція",
              text: "Для нас було важливо зробити сайт, який виглядає професійно і зрозуміло для кандидатів та клієнтів. В результаті отримали чистий, структурований дизайн, який добре передає нашу експертність і не перевантажує інформацією. Окремо хочемо відзначити логіку подачі — все чітко і по суті."
            }
          ].map((t, i) => (
            <div key={i} className={`p-8 md:p-12 flex flex-col justify-center ${i !== 2 ? 'border-b md:border-b-0 md:border-r' : ''} border-white-bg/10 ${i % 2 === 1 ? 'bg-light-bg/5' : ''}`}>
              <Quote strokeWidth={1} className="w-6 h-6 md:w-8 md:h-8 text-white-bg mb-6 md:mb-8 opacity-50" aria-hidden="true" />
              <p className="text-sm md:text-base font-light italic leading-relaxed mb-8 md:mb-12 opacity-80">
                "{t.text}"
              </p>
              <p className="label-micro">{t.name}, {t.role}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Footer / Contact */}
      <footer 
        id="contact" 
        className="border-t border-white-bg/10 relative overflow-hidden bg-dark-base"
      >
        <ParticleBackground />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-white-bg/10">
            <div className="border-b md:border-b-0 md:border-r lg:border-r border-white-bg/10 overflow-hidden h-[400px] lg:h-auto">
              <img 
                src="https://res.cloudinary.com/dset5uqua/image/upload/v1774687666/6464A40A-40A2-4739-A462-C0E308BB3950_1_105_c_kmxvvc.jpg" 
                alt="Olesia Dmitriieva - Дизайнер та розробник" 
                width={800}
                height={1200}
                loading="lazy"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="md:col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
              <div className="md:col-span-1 lg:col-span-2 p-8 md:p-12 border-b md:border-b-0 md:border-r lg:border-r border-white-bg/10 flex flex-col justify-between min-h-[300px] lg:min-h-[400px]">
                <div>
                  <span className="label-micro mb-8 md:mb-12 block opacity-40">• Співпраця</span>
                  <h2 className="text-4xl md:text-6xl lg:text-7xl leading-[0.9] font-black uppercase opacity-90">
                    LET'S CREATE <br/> SOMETHING <br/> EXCEPTIONAL
                  </h2>
                </div>
                <div className="mt-12">
                  <Button primary href="https://t.me/olesia_dmitriyeva" className="w-full sm:w-auto [word-spacing:0.2em]">
                    Обговорити проєкт
                  </Button>
                </div>
              </div>

              <div className="flex flex-col">
                <GridCell label="Email" className="border-b border-white-bg/10">
                  <a href="mailto:olesiazhulkovska@gmail.com" className="text-xs md:text-sm uppercase font-bold hover:text-primary-accent transition-colors mt-4 block truncate" aria-label="Надіслати email">
                    olesiazhulkovska@gmail.com
                  </a>
                </GridCell>
                <GridCell label="Social" className="border-b border-white-bg/10">
                  <div className="flex flex-col gap-2 mt-4">
                    <a href="https://www.instagram.com/olesia_dmitriieva/" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest hover:text-primary-accent transition-colors">Instagram</a>
                    <a href="https://t.me/olesia_dmitriyeva" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest hover:text-primary-accent transition-colors">Telegram</a>
                    <a href="https://www.behance.net/olesiadmitriy" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest hover:text-primary-accent transition-colors">Behance</a>
                  </div>
                </GridCell>
                <GridCell label="Location" className="border-b-0">
                  <p className="text-[10px] uppercase tracking-widest opacity-50 mt-4">
                    Чернівці, Україна <br/> Працюю по всьому світу
                  </p>
                </GridCell>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4">
            <div className="p-6 border-r border-white-bg/10 flex items-center justify-center lg:justify-start">
              <span className="text-[8px] uppercase tracking-[0.3em] opacity-30">© 2026 Olesia Dmitriieva</span>
            </div>
            <div className="hidden lg:flex p-6 border-r border-white-bg/10 items-center justify-center">
              <span className="text-[8px] uppercase tracking-[0.3em] opacity-30">Design & Art Direction</span>
            </div>
            <div className="hidden lg:flex p-6 border-r border-white-bg/10 items-center justify-center">
              <span className="text-[8px] uppercase tracking-[0.3em] opacity-30">Premium Web Solutions</span>
            </div>
            <div className="p-6 flex items-center justify-center lg:justify-end">
               <Plus className="w-4 h-4 text-primary-accent opacity-20" aria-hidden="true" />
            </div>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}

