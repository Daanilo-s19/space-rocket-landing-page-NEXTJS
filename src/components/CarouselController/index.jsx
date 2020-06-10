import { Carousel } from "./styles";

export default function CarouselController(props) {
  const { index, totalItem, back, skip } = props;
  return (
    <Carousel>
      <div className="view-controller">
        <span>{index}</span>
        <img src="assets/line_controller.svg" />
        <span>{totalItem}</span>
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
