import React, { useState } from "react";

export const TableColumn = ({ list }) => {
  // const [height, setHeight] = useState(0);

  // React.useEffect(() => {
  //   setHeight(maxH);
  // }, [maxH]);
  // h-[${height}px]
  return (
    <div
      className={`border-[1px] border-slate-500 rounded-lg p-2 backdrop-blur-sm overflow-y-auto 
    `}
    >
      {list.map((item, index) => (
        <div key={index} className="mb-1 ">
          {item.name}
        </div>
      ))}
    </div>
  );
};
