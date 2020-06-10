import { Section } from "./styles";

export default function SectionDefault(props) {
  const { title, subtitle, children } = props;
  return (
    <>
      <div className="content-center-header">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
      </div>
      <Section>
        <div className="content-item">{children}</div>
      </Section>
    </>
  );
}
