"use client";

import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import BenefitsSection from "../components/BenefitsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import PricingSection from "../components/PricingSection";
import CallToAction from "../components/CallToAction";
import FAQSection from "../components/FAQSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import VideoSection from "../components/VideoSection";
import SobreValeskaSection from "../components/SobreValeskaSection";
import EbookDestaqueSection from "../components/EbookDestaqueSection";

const EbookValeskaPage = () => {
  return (
    <>
      <Head>
        <title>Argiloterapia Profissional | Valeska Titonelli</title>
        <meta
          name="description"
          content="Domine a argiloterapia capilar com técnicas naturais e eficazes para atender clientes no salão com mais qualidade e diferenciação."
        />
        <meta
          name="keywords"
          content="argiloterapia profissional, ebook, salão de beleza, couro cabeludo, Valeska Titonelli"
        />
        <meta name="author" content="Valeska Titonelli" />
        <meta httpEquiv="content-language" content="pt-BR" />
        <meta property="og:type" content="product" />
        <meta property="og:title" content="Ebook Argiloterapia Profissional" />
        <meta
          property="og:description"
          content="Aprimore seu atendimento profissional com técnicas naturais para couro cabeludo e cabelos com o eBook da Valeska Titonelli."
        />
        <meta
          property="og:image"
          content="https://www.seusite.com.br/capa-ebook.png"
        />
        <meta property="og:url" content="https://www.seusite.com.br" />
        <meta property="og:site_name" content="Valeska Titonelli" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Argiloterapia Profissional" />
        <meta
          name="twitter:description"
          content="Domine a argiloterapia capilar com nosso eBook completo e ofereça um serviço exclusivo no salão."
        />
        <meta
          name="twitter:image"
          content="https://www.seusite.com.br/capa-ebook.png"
        />
        <meta name="twitter:creator" content="@valeskatitonelli" />
        <link rel="canonical" href="https://www.seusite.com.br" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ backgroundColor: "#f2f0ec" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <HeroSection
            title="Argiloterapia Capilar Profissional"
            subtitle="Aprenda a aplicar argilas terapêuticas de forma segura e eficaz em seus atendimentos no salão. Valorize seu serviço e conquiste mais clientes."
            ctaText="Quero Atender com Excelência"
            backgroundImage="/fundo-hero.png"
            textColor="#462c1f"
            buttonColor="#8a5a44"
            linkHotmart="https://pay.hotmart.com/F100157059H"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <VideoSection
            title="Veja como o eBook pode elevar seu atendimento profissional com argiloterapia"
            videoSrc="/videos/video.mp4"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <SobreValeskaSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <EbookDestaqueSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <BenefitsSection
            benefits={[
              "Revitalização profunda do couro cabeludo dos seus clientes",
              "Tratamento natural contra oleosidade e caspa no salão",
              "Técnicas que estimulam o crescimento capilar profissionalmente",
              "Argilas específicas com aplicações terapêuticas",
              "Serviço exclusivo e diferenciado no seu portfólio profissional",
            ]}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <FeaturesSection
            features={[
              "Como escolher e usar cada tipo de argila no salão",
              "Passo a passo completo para aplicar em clientes",
              "Combinações com ativos naturais para resultados melhores",
              "Contraindicações e cuidados essenciais",
              "Técnicas para elevar seu atendimento e fidelizar clientes",
            ]}
          />
        </motion.div>

        {/* TEXTO ESTRATÉGICO INSERIDO AQUI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          viewport={{ once: true }}
        >
          <div style={{ padding: "40px 20px", textAlign: "center" }}>
            <h3 style={{ fontWeight: "bold", color: "#8a5a44" }}>
              Quer aumentar seu ticket médio? <br />
              Domine a Argiloterapia para Couro Cabeludo com nosso e-book
              completo!
            </h3>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <PricingSection
            originalPrice="R$ 59,90"
            currentPrice="R$ 29,90"
            parcelPrice=""
            ctaText="Comprar com Desconto"
            buttonColor="#8a5a44"
            linkHotmart="https://pay.hotmart.com/F100157059H"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <CallToAction
            title="Garanta seu eBook e destaque-se no mercado!"
            subtitle="Aprenda a aplicar argiloterapia profissionalmente e ofereça um serviço valorizado e natural no seu salão."
            ctaText="Quero Me Destacar no Salão"
            linkHotmart="https://pay.hotmart.com/F100157059H"
            backgroundImage="/fundo.png"
            buttonColor="#8a5a44"
            textColor="#fff"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <FAQSection
            faqs={[
              {
                question: "Preciso ter experiência com argilas?",
                answer:
                  "Não! O conteúdo é didático e ensina desde o básico até técnicas avançadas para uso profissional.",
              },
              {
                question: "Funciona para cabelos com química?",
                answer:
                  "Sim! Você aprenderá quais argilas são compatíveis e como aplicá-las corretamente.",
              },
              {
                question: "Quando recebo o acesso?",
                answer:
                  "O acesso é imediato após a confirmação de pagamento via Hotmart.",
              },
              {
                question:
                  "Sou cabeleireiro(a), esse conteúdo é útil para o salão?",
                answer:
                  "Sim! O material foi criado especialmente para uso profissional em salões e clínicas de estética.",
              },
              {
                question: "Consigo aumentar meu ticket médio com esse serviço?",
                answer:
                  "Sim! A argiloterapia é uma técnica diferenciada e valorizada, ideal para atrair e fidelizar clientes.",
              },
            ]}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <Contact />
        </motion.div>

        <Footer />
      </div>
    </>
  );
};

export default EbookValeskaPage;
