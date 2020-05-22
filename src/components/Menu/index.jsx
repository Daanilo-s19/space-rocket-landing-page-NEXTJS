import Button from "../Button";
import { Navbar } from "./styles";

export default function Menu() {
  return (
    <Navbar>
      <div className="content-logo">
        <img src="assets/logo.svg" />
      </div>
      <div className="content-menu">
        <a>Home</a>
        <a>Serviços</a>
        <a>Sobre nós</a>
        <a>Blog</a>
        <Button>comece um projeto</Button>
      </div>
    </Navbar>
  );
}
