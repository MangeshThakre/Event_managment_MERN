import React, { useRef } from "react";

function AddImage({ setImage, setImagePreview, imagePreveiw }) {
  const image = useRef(null);

  const reader = new FileReader();
  reader.addEventListener(
    "load",
    () => {
      // convert image file to base64 string
      setImagePreview(reader.result);
    },
    false
  );

  return (
    <>
      <div className="h-32 w-32  relative    shadow-md ">
        {imagePreveiw ? (
          <img src={imagePreveiw} alt="img" className="h-32 w-32  rounded-md" />
        ) : null}

        <div className="absolute flex flex-wrap gap-7 p-1 justify-center top-0 left-0 rounded-md bg-[#00000007] h-full w-full">
          {/* edit */}
          <div
            className="flex items-center justify-center  h-8 w-8   rounded-full  hover:bg-gray-300 cursor-pointer"
            onClick={() => image.current.click()}
          >
            <svg
              className="w-6 h-6"
              fill="gray"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
              <path
                fillRule="evenodd"
                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          {/* edit end */}
          {/* delete */}
          <div
            className="flex items-center justify-center  h-8 w-8   rounded-full  hover:bg-gray-300 cursor-pointer "
            onClick={() => {
              setImagePreview("");
              setImage(null);
            }}
          >
            <svg
              className="w-6 h-6"
              fill="gray"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          {/* delete end*/}
        </div>
      </div>
      <input
        type="file"
        accept="image/png, image/jpeg"
        ref={image}
        className="hidden"
        onChange={(e) => {
          setImage(e.target.files[0]);
          reader.readAsDataURL(e.target.files[0]);
        }}
      />
    </>
  );
}

export default AddImage;
