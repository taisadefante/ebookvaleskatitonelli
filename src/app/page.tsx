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
        subtitle="Aprenda técnicas naturais e eficazes para cuidar dos cabelos.  Ideal para você e para aplicar em clientes no salão."
        ctaText="Quero Começar Agora"
        backgroundImage="/fundo-hero.png"
        textColor="#462c1f"
        buttonColor="#8a5a44"
        linkHotmart="https://pay.hotmart.com/F100157059H"
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
          },
          {
            text: "Informações claras e transformadoras!",
            author: "Fernanda M.",
          },
          {
            text: "Já recomendei para todas as minhas amigas!",
            author: "Camila R.",
          },
          {
            text: "Simplesmente amei o conteúdo! Vale cada centavo.",
            author: "Daniela A.",
          },
          {
            text: "Nunca imaginei que argila ajudaria tanto meu cabelo!",
            author: "Renata G.",
          },
          {
            text: "Esse eBook foi um divisor de águas para mim! Sofria com caspa e sensibilidade no couro cabeludo, e com as receitas e dicas de argiloterapia, senti uma melhora absurda. Recomendo muito!",
            author: "Ana Silva ",
          },
          {
            text: "Simplesmente maravilhoso! Sempre quis aprender sobre argiloterapia capilar, mas nunca encontrava informações completas e confiáveis.",
            author: "Vanessa Andrade ",
          },
          {
            text: "Estava perdida sobre qual argila usar para o meu tipo de cabelo, e esse eBook me salvou!",
            author: "Marta Nascimento ",
          },
        ]}
      />

      <PricingSection
        originalPrice="R$ 59,90,00"
        currentPrice="R$ 29,90"
        parcelPrice=""
        ctaText="Comprar com Desconto"
        buttonColor="#8a5a44"
        linkHotmart="https://pay.hotmart.com/F100157059H"
      />
      <CallToAction
        title="Garanta já o seu acesso!"
        subtitle="Ideal para uso pessoal e também para quem quer oferecer um serviço diferenciado no salão."
        ctaText="Quero Me Inscrever"
        linkHotmart="https://pay.hotmart.com/F100157059H"
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
      <Contact />
      <Footer />
    </div>
  );
};

export default EbookValeskaPage;
