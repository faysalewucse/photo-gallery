import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Image from "../../components/Image";

function Images({
  setSelectedImages,
  fileList,
  setFileList,
  checkedImages,
  setCheckedImages,
}) {
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

  const checkedImageHandler = (index) => {
    if (checkedImages.includes(index)) {
      setCheckedImages((prevCheckedImages) =>
        prevCheckedImages.filter((item) => item !== index)
      );
      setSelectedImages((prev) => prev - 1);
    } else {
      setSelectedImages((prev) => prev + 1);
      setCheckedImages((prevCheckedImages) => [...prevCheckedImages, index]);
    }
  };

  const onMove = (from, to) => {
    const movedImage = fileList[from];
    const updatedFileList = [...fileList];
    updatedFileList.splice(from, 1);
    updatedFileList.splice(to, 0, movedImage);
    setFileList(updatedFileList);
  };

  return (
    <div className="p-5">
      <DndProvider backend={HTML5Backend}>
        <div className="grid lg:grid-cols-6 md:grid-cols-5 grid-cols-2 gap-4">
          {[...fileList, {}].map((item, index) => (
            <Image
              key={index}
              url={item.url}
              index={index}
              checked={checkedImages.includes(index)}
              onCheck={() => checkedImageHandler(index)}
              onMove={onMove}
              fileList={fileList}
              handleFileSelect={handleFileSelect}
            />
          ))}
        </div>
      </DndProvider>
    </div>
  );
}

export default Images;
