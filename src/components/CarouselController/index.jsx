import PropTypes from "prop-types";
import { Carousel } from "./styles";

export default function CarouselController(props) {
  const { index, item, back, skip, dots } = props;

  return (
    <Carousel>
      <div className="view-controller">
        {dots ? (
          item.map((dot, idx) => (
            <div className={index === idx + 1 ? "dot-selected" : "dot"}></div>
          ))
        ) : (
          <>
            <span>{index}</span>
            <img src="assets/line_controller.svg" />
            <span>{item.length}</span>
          </>
        )}
      </div>

      <div className="controllers">
        <div onClick={back}>
          <img src="assets/arrow_left.svg" />
        </div>
        <div onClick={skip}>
          <img src="assets/arrow_right.svg" />
        </div>
      </div>
    </Carousel>
  );
}

CarouselController.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.array.isRequired,
  back: PropTypes.func.isRequired,
  skip: PropTypes.func.isRequired,
  dots: PropTypes.bool,
};
