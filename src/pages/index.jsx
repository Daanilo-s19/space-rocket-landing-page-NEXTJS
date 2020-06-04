import styled from "styled-components";
import Link from "next/link";
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.secundary};
`;

export default function Home() {
  return (
    <Link href="/HomePage">
      <Title>My page</Title>
    </Link>
  );
}
