import React, { useRef } from "react";

export const TableColumn = ({ list, maxHeight, heightInsideElements }) => {
  const tableColumnRef = useRef(null);

  return (
    <div
      className={`border-[1px] border-slate-500 rounded-lg p-2 backdrop-blur-sm overflow-y-auto ${
        tableColumnRef.current?.offsetHeight > maxHeight - heightInsideElements
          ? `h-[${maxHeight - heightInsideElements}px]`
          : `h-fit`
      }
    `}
      ref={tableColumnRef}
    >
      {list.map((item, index) => (
        <div key={index} className="mb-1 ">
          {item.name}
        </div>
      ))}
    </div>
  );
};
