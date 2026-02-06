import Hero from "@/components/Hero/Hero";
import Layout from "@/components/Layout/Layout";
import IronPdf from "@/components/IronPdf/IronPdf";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import EarlyAccess from "@/components/EarlyAccess/EarlyAccess";

export default function App() {
  return (
    <Layout>
      <Hero />
      <IronPdf />
      <WhyChoose />
      <EarlyAccess />
    </Layout>
  );
}
