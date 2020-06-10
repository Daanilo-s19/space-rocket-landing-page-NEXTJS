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
        {blog.map((list, index) => {
          return (
            controller % blog.length === index &&
            list.map((element, index) => (
              <ItemBlog>
                <div className="content-image">
                  <div className="tag">{element.tag}</div>
                </div>
                <div className="content">
                  <label>{element.title}</label>
                  <p>{element.description}</p>
                  <AboutMore title="Ler Mais" />
                </div>
              </ItemBlog>
            ))
          );
        })}
      </SectionDefault>
      <Content>
        <CarouselController
          dots={true}
          index={(controller % blog.length) + 1}
          totalItem={blog.length}
          item={blog}
          back={() => setController(controller - 1)}
          skip={() => setController(controller + 1)}
        />
      </Content>
    </>
  );
}
BlogSection.propTypes = {
  blog: PropTypes.array.isRequired,
};
