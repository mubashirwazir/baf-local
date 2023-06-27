import Buttons from "../Components/Buttons";
import Content from "../Components/Content";
import ImagesGallery from "../Components/ImagesGallery";
import Layout from "../Components/Layout";

const index = () => {
  return (
    <>
      <Layout>
        <div className=" h-20 flex items-center py-8 pl-8 text-3xl font-bold font-serif text-white">
          Gallery
        </div>
        <div className=" h-20 py-4 flex items-center justify-between mx-4">
          <Buttons />
          <Content />
        </div>
        <ImagesGallery />
      </Layout>
    </>
  );
};

export default index;
