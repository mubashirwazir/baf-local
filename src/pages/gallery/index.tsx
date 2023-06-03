import Buttons from "../Components/Buttons";
import Content from "../Components/Content";
import Layout from "../Components/Layout";
import Image from "next/image";

const index = () => {
  return (
    <>
      <Layout>
        <div className="border-b-2 h-20 flex items-center  py-4 text-xl font-bold">
          Gallery
        </div>
        <div className="border-b-2 h-20 py-4 flex items-center justify-between mx-4">
          <Content />
          <Buttons />
        </div>

        <div className="flex justify-center my-4">
          <div className="flex space-x-4">
            <Image src="/test1.jpg" alt="My Photo" width={200} height={200} />
            <Image src="/test2.jpg" alt="My Photo" width={200} height={200} />
            <Image src="/test3.jpg" alt="My Photo" width={200} height={200} />
            <Image src="/test4.jpg" alt="My Photo" width={200} height={200} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default index;
