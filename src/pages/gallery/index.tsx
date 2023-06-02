import Buttons from "../Components/Buttons";
import Content from "../Components/Content";
import Layout from "../Components/Layout";
import Image from "next/image";

const index = () => {
  return (
    <>
      <Layout>
        <h1>Gallery</h1>
        <Content />
        <Buttons />
        <Image src="/test1.jpg" alt="My Photo" width={200} height={200} />
        <Image src="/test2.jpg" alt="My Photo" width={200} height={200} />
        <Image src="/test3.jpg" alt="My Photo" width={200} height={200} />
        <Image src="/test4.jpg" alt="My Photo" width={200} height={200} />
      </Layout>
    </>
  );
};

export default index;
