import { MdCheckBox, MdDelete } from "react-icons/md";

const Navbar = ({ selectedImages, deletFiles }) => {
  return (
    <div className="p-5 flex items-center justify-between">
      {selectedImages === 0 ? (
        <h6 className="font-bold">Gallery</h6>
      ) : (
        <h6 className="text-sm flex items-center gap-1">
          <MdCheckBox className="text-blue-500 text-lg" />
          {selectedImages} images selected
        </h6>
      )}
      {selectedImages !== 0 && (
        <h6
          onClick={deletFiles}
          className="text-sm flex gap-1 items-center text-danger hover:text-danger2 cursor-pointer"
        >
          <MdDelete />
          Delete Files
        </h6>
      )}
    </div>
  );
};

export default Navbar;
