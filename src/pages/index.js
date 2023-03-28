import Hero from "@/components/hero/hero";
import Head from "next/head";
import Footer from "@/components/layout/footer";
import Supporter from "@/components/supporter/supporter";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Koodakan Charity" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Supporter />
        <Footer />
      </main>
    </>
  );
}
