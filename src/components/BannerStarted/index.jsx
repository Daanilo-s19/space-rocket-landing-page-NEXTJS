import { Banner } from "./styles";
import Button from "../Button";
export default function BannerStarted(props) {
  return (
    <Banner>
      <div>
        <h4>Não sabe por onde começar?</h4>
        <span>Nós vamos ajudá-lo a descobrir.</span>
      </div>
      <img src="assets/line_banner.svg" />
      <Button bgColor="#C7DEFF" childrenColor="#552EE5" shadow={true}>
        Vamos conversar
      </Button>
    </Banner>
  );
}
