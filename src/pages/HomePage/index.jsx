import { useEffect } from "react";
import Menu from "../../components/Menu";
import Hero from "../../components/Hero";
import AwardsSection from "../../components/AwardsSection";
import ServicesSection from "../../components/OurServices";
import MethodSection from "../../components/methodSection";
import CasesSection from "../../components/casesSection";
import CommentsSection from "../../components/CommentsSection";
import PressSection from "../../components/OurPress";
import BlogSection from "../../components/OurBlog";
import useI18n from "../../hooks/use-i18n";
import en from "../../locales/en.json";
import pt from "../../locales/pt.json";
import BannerStarted from "../../components/BannerStarted";
import Footer from "../../components/Footer";

export default function Home() {
  const i18n = useI18n();

  useEffect(() => {
    if (navigator.language) {
      i18n.locale("", navigator.language === "pt-BR" ? pt : en);
    } else i18n.locale("", en);
  }, []);

  return (
    <>
      <Menu
        item={{
          button: "comece um projeto",
          menu: ["Home", "Serviços", "Sobre nós", "Blog"],
        }}
      />
      <Hero
        title={i18n.t("hero.title")}
        subtitle={i18n.t("hero.subtitle")}
        textButton={i18n.t("hero.button")}
      />
      <AwardsSection
        title="Premiações"
        subtitle="Reconhecimento de muito trabalho"
        item={[
          {
            years: "2019",
            local: "Correio de Futuro",
            awards: "1° lugar",
          },
          {
            years: "2018",
            local: "Desafios Bahia Mercado Agri",
            awards: "1° lugar",
          },
          {
            years: "2017",
            local: "Desafios Bahia emprega",
            awards: "1° lugar",
          },
          {
            years: "2017",
            local: "Inova mais saúde",
            awards: "1° lugar",
          },
          {
            years: "2019",
            local: "Hackathon Solidário",
            awards: "Finalista",
          },
        ]}
      />
      <ServicesSection
        title="serviços"
        subtitle="A solução ideal para o seu negócio digital"
        item={[
          {
            img: "assets/Union.svg",
            title: "Aplicativos",
            subtitle:
              "Construímos aplicativos personalizados para seu empreendimento, soluções exclusivas para dispositivos Android e IOS.",
          },
          {
            img: "assets/web_services.svg",
            title: "Web Sites",
            subtitle:
              "Criamos e atualizamos seu website com um design customizado e elementos atrativos, pensando sempre em estabelecer a presença da sua empresa na internet.",
          },
          {
            img: "assets/plataform_services.svg",
            title: "Plataformas Web",
            subtitle:
              " Desenvolvemos sistemas web visando automatizar e facilitar funções e processos da sua empresa, trazendo um diferencial competitivo para o seu negócio.",
          },
        ]}
      />
      <MethodSection
        title="Metodologia"
        subtitle="Disponibilizamos de um processo simplificado do desenvolvimento da sua
          solução:"
        method={{
          method01: {
            img: "assets/method01.svg",
            title: "Reunião Exploratória",
            description: "",
          },
          method02: {
            img: "assets/method02.svg",
            title: "Criação do design",
            description: "",
          },
          method03: {
            img: "assets/method03.svg",
            title: "Desenvolvimento",
            description:
              "Nessa etapa sua ideia será analisada a fundo onde será estabelecido todas as etapas do fluxo do projeto para os próximos passos.",
          },
          method04: {
            img: "assets/method04.svg",
            title: "Entrega e Feedback",
            description:
              "Nessa etapa sua ideia será analisada a fundo onde será estabelecido todas as etapas do fluxo do projeto para os próximos passos.",
          },
        }}
      />
      <CasesSection
        title="Cases"
        subtitle="subtitle"
        allCases={
          <>
            Conheça todos
            <br />
            nossos projetos
          </>
        }
        cases={[
          {
            tag: "UI, Front-end, back-end",
            img: "assets/image_case_default.png",
            title: "Leitor Pauteiro",
            description:
              "O leitor pauteiro é uma plataforma desenvolvida para o jornal Correio da Bahia, onde os seus leitores podem enviar sugestões de notícias ou fazer denúncias diretamente para a redação do jornal por meio de um chatbot a Rosa. Este projeto fez parte do prêmio Correio de Futuro do ano 2019",
          },
          {
            tag: "UI, Front-end, back-end",
            img: "assets/image_case_default.png",
            title: "Data And Nutrition",
            description:
              "Data And Nutrition é uma plataforma utilizada em hospitais para gestão nutricional de pacientes internados, auxiliando ao combate à desnutrição hospitalar e proporcionando um acompanhamento contínuo do estado dos internos.",
          },
          {
            tag: "UI, Front-end, back-end",
            img: "assets/image_case_default.png",
            title: "Dizziness App",
            description:
              "Aplicativo utilizado como ferramenta auxiliar no combate da tontura e labirintite. O Dizziness App nasceu com o propósito de auxiliar especialistas em audiologia e fonoaudiologistas no processo de tratamento dos pacientes, fazendo com que os mesmos ganhem resistência a circunstâncias que provoquem desconforto.",
          },
        ]}
      />
      <CommentsSection
        comments={[
          {
            imageUser: "assets/user_default.svg",
            name: "Nilson",
            role: "(Médico Nutrologista) - Data And Nutrition",
            comments:
              "Gosto sempre de trabalhar com a turma. Sempre fazem um bom trabalho e as coisas funcionam bem.",
          },
          {
            imageUser: "assets/user_default.svg",
            name: "Danilo",
            role: "Dev",
            comments: "Os caras são fodas d++",
          },
          {
            imageUser: "assets/user_default.svg",
            name: "José",
            role: "Dev",
            comments: "Bacaaana",
          },
        ]}
      />
      <PressSection
        title="Press"
        subtitle="Aonde saimos na mídia"
        more="Matéria Completa"
        item={[
          [
            {
              img: "assets/press/image01.svg",
              title: "Leitor pauteiro: vencedor do Correio de...",
              description:
                "A ideia é que você, leitor, possa enviar sugestões de pautas e acumule pontos pelas ideias. Um robô organizará as propostas e oferecerá as melhores opções para o repórter, a depender da editoria... ",
            },
            {
              img: "assets/press/image02.svg",
              title: "Com cerca de 80 mil visitantes, Campus...",
              description:
                "A Campus Party Bahia, que terminou neste domingo (13), na Arena Fonte Nova, em Salvador, atraiu público de 80 mil visitantes desde a quarta-feira (9), além dos seis mil “campuseiros” que...",
            },
            {
              img: "assets/press/image03.svg",
              title: "Tecnologia e inovação: Campus Party...",
              description:
                "Evento mistura tecnologia, inovação, educação e empreendedorismo.",
            },
          ],
        ]}
      />
      <BlogSection
        title="Press"
        subtitle="Aonde saimos na mídia"
        more="Saiba Mais"
        blog={[
          [
            {
              img: "assets/blog/image1.svg",
              tag: "freelancer",
              title:
                "Propostas para Freelancers: como montar e como gerenciar?",
              description:
                "Muitos Freelancers possuem muita dificuldade em precificar projetos e montar propostas. Além disso, o tempo para montar uma boa proposta",
            },
            {
              img: "assets/blog/image2.svg",
              tag: "freelancer",
              title: "Sou Freelancer: Como precificar um projeto?",
              description:
                "Precificar é um dos maiores sofrimentos de qualquer freelancer, seja ele da área de humanas ou exatas. Saber quanto o seu trabalho vale...",
            },
            {
              img: "assets/blog/image3.svg",
              tag: "freelancer",
              title: "Gestão de tempo: como otimizar a sua vida freelancer",
              description:
                "Muito se fala em gestão de tempo, principalmente quando o assunto é o trabalho como freelancer. Mas como administrar clientes...",
            },
          ],
        ]}
      />
      <BannerStarted
        title="Não sabe por onde começar?"
        subtitle="Nós vamos ajudá-lo a descobrir."
        button="Vamos COnversar"
      />
      <Footer
        item={{
          tag: "Estamos contratando",
          designer: "Design por Guilherme Cavalcante",
          menu: ["Cases", "Serviços", "Sobre nós", "Trabalho Conosco", "Blog"],
        }}
      />
    </>
  );
}
