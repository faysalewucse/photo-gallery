import { Checkbox } from "antd";
import { useDrag, useDrop } from "react-dnd";

const Image = ({
  url,
  index,
  checked,
  onCheck,
  onMove,
  setHoveringOn,
  hoveringOn,
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
    hover: () => {
      setHoveringOn(index);
    },
    drop: (draggedItem) => {
      setHoveringOn();
      if (draggedItem.index !== index) {
        onMove(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => ref(drop(node))}
      className={`transition-all duration-500 ${
        hoveringOn === index ? "opacity-0" : "opacity-100"
      } ${
        index === 0 && "col-span-2 row-span-2"
      } border rounded-md relative group h-full w-full`}
    >
      <div className={`${checked ? "opacity-60" : ""} h-full w-full`}>
        <img
          src={url}
          className={`rounded-md object-cover h-full w-full`}
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
    </div>
  );
};

export default Image;
