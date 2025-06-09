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
        <title>Argiloterapia Capilar Profissional | Valeska Titonelli</title>
        <meta
          name="description"
          content="Domine a argiloterapia capilar com o eBook da Valeska Titonelli. Técnicas naturais e eficazes para atendimento em salão e clínicas capilares."
        />
        <meta
          name="keywords"
          content="argiloterapia capilar, ebook, salão de beleza, couro cabeludo, tratamento natural, profissional, Valeska Titonelli"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Valeska Titonelli" />
        <meta httpEquiv="content-language" content="pt-BR" />
        <meta property="og:type" content="product" />
        <meta property="og:title" content="Ebook Argiloterapia Profissional" />
        <meta
          property="og:description"
          content="Aprenda a aplicar argilas terapêuticas com segurança e eficiência no salão. Diferencie seu atendimento e fidelize clientes."
        />
        <meta
          property="og:image"
          content="https://www.seusite.com.br/capa-ebook.png"
        />
        <meta property="og:url" content="https://www.seusite.com.br" />
        <meta property="og:site_name" content="Valeska Titonelli" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ebook Argiloterapia Profissional | Valeska Titonelli"
        />
        <meta
          name="twitter:description"
          content="Descubra como aplicar a argiloterapia de forma terapêutica no salão e elevar o padrão do seu atendimento."
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
            subtitle="Aprenda técnicas naturais e terapêuticas para aplicar com segurança e diferenciação no seu atendimento no salão."
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
            title="Veja como o eBook pode transformar seu atendimento profissional com argiloterapia"
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
              "Revitalização do couro cabeludo com argilas naturais",
              "Redução da oleosidade e caspa em clientes",
              "Estímulo ao crescimento capilar em atendimentos profissionais",
              "Argilas terapêuticas com aplicações específicas",
              "Diferencial competitivo no seu serviço de salão",
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
              "Tipos de argilas e suas funções terapêuticas",
              "Passo a passo detalhado para aplicação no salão",
              "Misturas com óleos e extratos para potencializar resultados",
              "Contraindicações e cuidados importantes",
              "Dicas para fidelizar clientes com um atendimento diferenciado",
            ]}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <TestimonialsSection
            testimonials={[
              {
                text: "Esse eBook mudou completamente meu atendimento no salão. Me sinto mais segura e as clientes amaram!",
                author: "Juliana S.",
              },
              {
                text: "Finalmente um conteúdo confiável e direto ao ponto sobre argiloterapia profissional.",
                author: "Fernanda M.",
              },
              {
                text: "A aplicação das argilas se tornou um diferencial no meu serviço!",
                author: "Camila R.",
              },
              {
                text: "Ganhei confiança e consegui aumentar meu ticket médio com esse novo serviço.",
                author: "Daniela A.",
              },
            ]}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Destaque estratégico para aumento de ticket médio */}
          <div style={{ padding: "40px 20px", textAlign: "center" }}>
            <h3 style={{ fontWeight: "bold", color: "#8a5a44" }}>
              Quer aumentar seu ticket médio? <br />
              Domine a Argiloterapia para Couro Cabeludo com nosso e-book
              completo!
            </h3>
          </div>

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
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <CallToAction
            title="Garanta já o seu acesso!"
            subtitle="Comece agora a aplicar argiloterapia profissional e transforme seus atendimentos com técnicas valorizadas no mercado."
            ctaText="Quero me destacar no salão"
            linkHotmart="https://pay.hotmart.com/F100157059H"
            backgroundImage="/fundo.png"
            buttonColor="#8a5a44"
            textColor="#fff"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <FAQSection
            faqs={[
              {
                question: "Preciso ter conhecimento prévio sobre argilas?",
                answer:
                  "Não! O eBook ensina tudo passo a passo para uso profissional.",
              },
              {
                question: "É indicado para clientes com química?",
                answer:
                  "Sim! Você aprenderá a escolher e aplicar com segurança mesmo em cabelos quimicamente tratados.",
              },
              {
                question: "Quando recebo o acesso?",
                answer:
                  "Imediatamente após a confirmação do pagamento pela Hotmart.",
              },
              {
                question: "Posso aplicar esse conhecimento no meu salão?",
                answer:
                  "Sim! O conteúdo foi desenvolvido especificamente para uso em atendimentos profissionais.",
              },
              {
                question: "Esse serviço ajuda a valorizar meu atendimento?",
                answer:
                  "Com certeza! A argiloterapia agrega valor ao seu serviço e ajuda a fidelizar clientes.",
              },
            ]}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
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
