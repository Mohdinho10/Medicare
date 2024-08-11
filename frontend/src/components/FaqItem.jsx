/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function FaqItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="mb-5 cursor-pointer rounded-[12px] border border-solid border-[#d9dce2] p-3 lg:p-5 ">
      <div
        className="flex items-center justify-between gap-5"
        onClick={toggleAccordion}
      >
        <h4 className="text-[16px] leading-7 text-headingColor lg:text-[20px] lg:leading-8 ">
          {item.question}
        </h4>
        <div
          className={`${isOpen && "border-none bg-primaryColor text-white"}  flex h-7 w-7 items-center justify-center rounded border border-solid border-[#141f21] transition-all duration-300 lg:h-8 lg:w-8`}
        >
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      {isOpen && (
        <div className="mt-4  transition-all duration-300">
          <p className="text-[14px] font-[400] leading-6 text-textColor transition-all duration-300  lg:text-[16px] lg:leading-7 ">
            {item.content}
          </p>
        </div>
      )}
    </div>
  );
}

export default FaqItem;
