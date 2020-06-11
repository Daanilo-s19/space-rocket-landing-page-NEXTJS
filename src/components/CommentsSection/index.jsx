import { useState } from "react";
import CarouselController from "../CarouselController";
import PropTypes from "prop-types";
import { Section } from "./styles";

export default function CommentsSection(props) {
  const { title, subtitle, comments } = props;
  const [controller, setController] = useState(1);
  return (
    <>
      <div className="content-center-header">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
      </div>
      <Section>
        {comments &&
          comments.map((item, index) => {
            return (
              controller % comments.length === index && (
                <div className="comments">
                  <p>{item.comments}</p>
                  <div className="legends">
                    <img src={item.imageUser} />
                    <div>
                      <label>{item.name}</label>
                      <span>{item.role}</span>
                    </div>
                  </div>
                </div>
              )
            );
          })}
        <CarouselController
          index={(controller % comments.length) + 1}
          item={comments}
          back={() => setController(controller - 1)}
          skip={() => setController(controller + 1)}
        />
      </Section>
    </>
  );
}

CommentsSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
};
