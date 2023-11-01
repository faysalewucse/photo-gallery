import { Checkbox } from "antd";
import { useState } from "react";
import { BiImage } from "react-icons/bi";

function Images() {
  const [fileList, setFileList] = useState([]);

  const handleFileSelect = (event) => {
    const files = event.target.files;
    const updatedFileList = [...fileList];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const imageURL = URL.createObjectURL(file);
      updatedFileList.push({ url: imageURL, file });
    }

    setFileList(updatedFileList);
  };

  const [checkedImages, setCheckedImages] = useState([]);

  return (
    <div className="p-5">
      <div className="grid lg:grid-cols-6 md:grid-cols-5 grid-cols-2 gap-4">
        {[...fileList, {}].map((item, index) => (
          <div
            key={index}
            className={`${index === 0 && "col-span-2 row-span-2"} ${
              index === fileList.length &&
              "border-dashed bg-dark/5 hover:bg-dark/10"
            } rounded-md relative group border`}
          >
            {index < fileList.length ? (
              <>
                <img
                  className="rounded-md"
                  src={item.url}
                  alt={`Image ${index}`}
                />
                <div className="rounded-md absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300">
                  <Checkbox className="group-hover:block hidden m-2" />
                </div>
              </>
            ) : (
              <div className="relative flex justify-center items-center">
                <div className="absolute z-0 top-10 px-5 w-full h-full">
                  <BiImage className="mx-auto text-xl mb-3" />
                  <p className="text-center">Add Photo</p>
                </div>
                <input
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  multiple
                  className="cursor-pointer z-10 opacity-0 w-28 h-28 m-2"
                  onChange={handleFileSelect}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Images;