import React from "react";
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
    <div style={{ backgroundColor: "#f2f0ec" }}>
      <HeroSection
        title="Segredos da Argiloterapia Capilar para uso pessoal e profissional"
        subtitle="Aprenda técnicas naturais e eficazes para cuidar dos cabelos — ideal para você e para aplicar em clientes no salão."
        ctaText="Quero Começar Agora"
        backgroundImage="/fundo-hero.png"
        textColor="#462c1f"
        buttonColor="#8a5a44"
        linkHotmart="https://hotmart.com/ebookargiloterapia"
      />

      <VideoSection
        title="Veja como o eBook pode transformar seus cuidados ou seu atendimento profissional"
        videoSrc="/videos/video.mp4"
      />

      <SobreValeskaSection />
      <EbookDestaqueSection />

      <BenefitsSection
        benefits={[
          "Revitalização do couro cabeludo",
          "Controle de oleosidade e caspa",
          "Estímulo ao crescimento capilar",
          "Uso terapêutico com argilas específicas",
          "Atendimento mais profissional e diferenciado para seus clientes",
        ]}
      />
      <FeaturesSection
        features={[
          "Tipos de argilas e seus benefícios",
          "Passo a passo da aplicação",
          "Combinações com óleos e extratos naturais",
          "Contraindicações e erros comuns",
          "Dicas exclusivas para aplicar em clientes e elevar seu serviço",
        ]}
      />
      <TestimonialsSection
        testimonials={[
          {
            text: "Minha autoestima voltou depois que comecei a usar as técnicas do ebook!",
            author: "Juliana S.",
            image:
              "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=300&fit=crop",
          },
          {
            text: "Informações claras e transformadoras!",
            author: "Fernanda M.",
            image:
              "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop",
          },
          {
            text: "Já recomendei para todas as minhas amigas!",
            author: "Camila R.",
            image:
              "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop",
          },
          {
            text: "Simplesmente amei o conteúdo! Vale cada centavo.",
            author: "Daniela A.",
            image:
              "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&fit=crop",
          },
          {
            text: "Nunca imaginei que argila ajudaria tanto meu cabelo!",
            author: "Renata G.",
            image:
              "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop",
          },
          {
            text: "Comecei a aplicar nas minhas clientes e os resultados foram incríveis!",
            author: "Luciana R. — Cabeleireira",
            image:
              "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop",
          },
        ]}
      />

      <PricingSection
        originalPrice="R$ 97,00"
        currentPrice="R$ 37,00"
        parcelPrice="10x de R$ 3,70"
        ctaText="Comprar com Desconto"
        buttonColor="#8a5a44"
        linkHotmart="https://hotmart.com/ebookargiloterapia"
      />
      <CallToAction
        title="Garanta já o seu acesso!"
        subtitle="Ideal para uso pessoal e também para quem quer oferecer um serviço diferenciado no salão."
        ctaText="Quero Me Inscrever"
        linkHotmart="https://hotmart.com/seu-link"
        backgroundImage="/fundo.png"
        buttonColor="#8a5a44"
        textColor="#fff"
      />

      <FAQSection
        faqs={[
          {
            question: "Preciso ter conhecimento prévio para aplicar?",
            answer: "Não! O ebook explica tudo passo a passo.",
          },
          {
            question: "É seguro para cabelos com química?",
            answer:
              "Sim! O conteúdo orienta quais argilas usar e como aplicar.",
          },
          {
            question: "Quando recebo o acesso?",
            answer:
              "Imediatamente após a confirmação de pagamento pela Hotmart.",
          },
          {
            question: "Funciona para qualquer tipo de cabelo?",
            answer:
              "Sim! As técnicas podem ser adaptadas para cada necessidade.",
          },
          {
            question: "Sou cabeleireiro(a), esse conteúdo é útil para o salão?",
            answer:
              "Sim! O conteúdo é ideal para você aplicar profissionalmente, oferecendo um serviço mais natural, terapêutico e valorizado.",
          },
        ]}
      />
      <Contact whatsapp="https://wa.me/5521988359825" />
      <Footer />
    </div>
  );
};

export default EbookValeskaPage;
