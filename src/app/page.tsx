import {
  Banner,
  Companies,
  EmailList,
  FAQs,
  Features,
  Hero,
  PriceList,
  StatcsSect,
} from "@/components";
import SiteConfig from "@/config/stie";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <h1 className="hidden">{SiteConfig.title}</h1>
      <Hero />
      <Features />
      <Companies />
      <StatcsSect />
      <FAQs />
      <Banner />
      <PriceList />
      <EmailList />
    </>
  );
};

export default Home;
