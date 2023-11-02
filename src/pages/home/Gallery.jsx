import { useState } from "react";
import Divider from "../../components/Divider";
import Navbar from "../../components/Navbar";
import Images from "./Images";
import toast from "react-hot-toast";

const Gallery = () => {
  const [selectedImages, setSelectedImages] = useState(0);
  const [fileList, setFileList] = useState([]);
  const [checkedImages, setCheckedImages] = useState([]);

  const deleteFiles = () => {
    const updatedFileList = [...fileList];
    for (const index of checkedImages) {
      updatedFileList.splice(index, 1);
    }

    setSelectedImages(0);
    setCheckedImages([]);
    setFileList(updatedFileList);
    toast.success("Files deleted successfully");
  };

  return (
    <div className="bg-white rounded-lg">
      <Navbar selectedImages={selectedImages} deletFiles={deleteFiles} />
      <Divider />
      <Images
        setSelectedImages={setSelectedImages}
        fileList={fileList}
        setFileList={setFileList}
        checkedImages={checkedImages}
        setCheckedImages={setCheckedImages}
      />
      {/* <Test /> */}
    </div>
  );
};

export default Gallery;
