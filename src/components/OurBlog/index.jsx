import { useState } from "react";
import SectionDefault from "../SectionDefault";
import { ItemBlog, Content } from "./styles";
import AboutMore from "../AboutMore";
import PropTypes from "prop-types";
import CarouselController from "../CarouselController";

export default function BlogSection(props) {
  const { title, subtitle, more, blog } = props;
  const [controller, setController] = useState(1);

  return (
    <>
      <SectionDefault title={title} subtitle={subtitle}>
        {blog &&
          blog.map((list, index) => {
            return (
              controller % blog.length === index &&
              list.map((element, index) => (
                <ItemBlog key={index} assets={element.img}>
                  <div className="content-image">
                    <div className="tag">{element.tag}</div>
                  </div>
                  <div className="content">
                    <label>{element.title}</label>
                    <p>{element.description}</p>
                    <AboutMore title={more} />
                  </div>
                </ItemBlog>
              ))
            );
          })}
      </SectionDefault>
      <Content>
        <CarouselController
          dots={true}
          index={(blog ? controller % blog.length : 0) + 1}
          totalItem={blog.length}
          item={blog || []}
          back={() => setController(controller - 1)}
          skip={() => setController(controller + 1)}
        />
      </Content>
    </>
  );
}
BlogSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  more: PropTypes.string,
  blog: PropTypes.any.isRequired,
};
