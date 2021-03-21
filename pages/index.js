import Head from "next/head";
import ContainerStyled from "../src/components/ContainerStyled";
import Figure from '../src/components/Figure';

export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>Article Preview Component</title>
      </Head>

      <main>
        <ContainerStyled>
          <Figure />
        </ContainerStyled>
      </main>
    </div>
  );
}
