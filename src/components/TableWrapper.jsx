import React, { useEffect, useRef, useState } from "react";
import { TableHeader } from "./TableHeader";
import { TableColumn } from "./TableColumn";
import { list1, list2 } from "src/utils/data";
import { TableFooter } from "./TableFooter";

export const TableWrapper = () => {
  const tableWrapperRef = useRef(null);
  const tableColumnsRef = useRef(null);
  const [globalHeight, setGlobalHeight] = useState(0);
  console.log(globalHeight);

  useEffect(() => {
    const children = [...tableWrapperRef.current.children];
    const filteredChildren = children.filter(
      (child) => child !== tableColumnsRef.current
    );

    const height = filteredChildren.reduce((acc, curr) => {
      return acc + curr.offsetHeight;
    }, 0);

    setGlobalHeight(height);
  }, []);

  return (
    <div
      className="border-[1px] border-slate-500 rounded-lg p-2 backdrop-blur-sm w-[calc(100vw-40px)] max-h-[calc(100vh-40px)]"
      ref={tableWrapperRef}
    >
      <TableHeader />
      <div className="grid grid-cols-2 gap-2" ref={tableColumnsRef}>
        <TableColumn list={list1} maxH={globalHeight} />
        <TableColumn list={list2} maxH={globalHeight} />
      </div>
      <TableFooter />
    </div>
  );
};
