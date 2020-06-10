import { useState } from "react";
import SectionDefault from "../SectionDefault";
import { ItemBlog, Content } from "./styles";
import AboutMore from "../AboutMore";
import PropTypes from "prop-types";
import CarouselController from "../CarouselController";

export default function BlogSection(props) {
  const { blog } = props;
  const [controller, setController] = useState(1);
  return (
    <>
      <SectionDefault title="Blog" subtitle="Últimos Artigos">
        {blog.map((item, index) => {
          return (
            controller * index === controller && (
              <ItemBlog>
                <div className="content-image">
                  <div className="tag">freelancer</div>
                </div>
                <div className="content">
                  <label>
                    Propostas para Freelancers: como montar e como gerenciar?
                  </label>
                  <p>
                    Muitos Freelancers possuem muita dificuldade em precificar
                    projetos e montar propostas. Além disso, o tempo para montar
                    uma boa proposta
                  </p>
                  <AboutMore title="Ler Mais" />
                </div>
              </ItemBlog>
            )
          );
        })}
      </SectionDefault>
      <Content>
        <CarouselController
          index={(controller % blog.length) / 3 + 1}
          totalItem={blog.length / 3}
          back={() => setController(controller - 3)}
          skip={() => setController(controller + 3)}
        />
      </Content>
    </>
  );
}
BlogSection.propTypes = {
  blog: PropTypes.array.isRequired,
};
