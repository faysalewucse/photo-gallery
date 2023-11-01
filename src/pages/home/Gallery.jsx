import { useState } from "react";
import Divider from "../../components/Divider";
import Navbar from "../../components/Navbar";
import Images from "./Images";

const Gallery = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  return (
    <div className="bg-white rounded-lg">
      <Navbar selectedImages={selectedImages} />
      <Divider />
      <Images setSelectedImages={setSelectedImages} />
    </div>
  );
};

export default Gallery;
