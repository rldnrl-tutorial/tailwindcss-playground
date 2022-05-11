import Button from "@/ui/Button";
import Card from "@/ui/Card";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Card
        src="/images/food1.jpg"
        alt="food1"
        title="5 Bean Chilli Stew"
        description="Recipe By Mario"
      />
      <Card
        src="/images/food2.jpg"
        alt="food2"
        title="5 Bean Chilli Stew"
        description="Recipe By Mario"
      />
    </>
  );
};

export default Home;
