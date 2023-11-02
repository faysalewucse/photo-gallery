import { Checkbox } from "antd";
import { useDrag, useDrop } from "react-dnd";
import { BiImage } from "react-icons/bi";

const Image = ({
  url,
  index,
  checked,
  onCheck,
  onMove,
  fileList,
  handleFileSelect,
}) => {
  const [, ref] = useDrag({
    type: "Image",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "Image",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        onMove(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => ref(drop(node))}
      className={`transition-all duration-700 ${
        index === 0 && fileList.length !== 0 && "col-span-2 row-span-2"
      } ${
        index === fileList.length && "border-dashed bg-gray-50 hover:bg-dark/10"
      } border rounded-md relative group h-full w-full`}
    >
      {index < fileList.length ? (
        <div className={`${checked ? "opacity-60" : ""} h-full w-full`}>
          <img
            src={url}
            className="rounded-md object-cover h-full w-full"
            alt={`Image ${index}`}
          />

          <div
            onClick={() => onCheck(!checked)}
            className="rounded-md absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 cursor-pointer"
          >
            <Checkbox
              checked={checked}
              className={`${
                checked ? "inline-block" : "hidden"
              } group-hover:inline-block m-2`}
            />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          <div className="z-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <BiImage className="mx-auto text-2xl mb-3" />
            <p className="text-center">Add Photo</p>
          </div>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            multiple
            className="cursor-pointer z-10 opacity-0 m-2 h-40"
            onChange={handleFileSelect}
          />
        </div>
      )}
    </div>
  );
};

export default Image;
