import React, { useEffect, useRef, useState } from "react";
import { TableHeader } from "./TableHeader";
import { TableColumn } from "./TableColumn";
import { list1, list2 } from "src/utils/data";
import { TableFooter } from "./TableFooter";

export const TableWrapper = () => {
  const tableWrapperRef = useRef(null);
  const tableColumnsRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);
  const [heightInsideElements, setHeightInsideElements] = useState(0);

  console.log("maxHeight", maxHeight);
  console.log("heightInsideElements", heightInsideElements);

  useEffect(() => {
    // const children = [...tableWrapperRef.current.children];
    // const filteredChildren = children.filter(
    //   (child) => child !== tableColumnsRef.current
    // );

    // const height = filteredChildren.reduce((acc, curr) => {
    //   return acc + curr.offsetHeight;
    // }, 0);

    // setGlobalHeight(height);
    const style = getComputedStyle(tableWrapperRef.current);
    const { padding, gap, maxHeight } = style;
    // console.log("maxHeight", maxHeight);
    const children = [...tableWrapperRef.current.children];
    const filteredChildren = children.filter(
      (child) => child !== tableColumnsRef.current
    );
    const height = filteredChildren.reduce((acc, curr) => {
      return acc + curr.offsetHeight;
    }, 0);
    // console.log(
    //   "height",
    //   height + parseInt(padding) * 2 + parseInt(gap) * children.length - 1
    // );

    setMaxHeight(parseInt(maxHeight));
    setHeightInsideElements(
      height + parseInt(padding) * 2 + parseInt(gap) * children.length - 1
    );
  }, [heightInsideElements]);

  return (
    <div
      className="border-[1px] border-slate-500 rounded-lg p-2 backdrop-blur-sm w-[calc(100vw-40px)] max-h-[calc(100vh-40px)] flex flex-col gap-2"
      ref={tableWrapperRef}
    >
      <TableHeader />
      <div
        className={`grid grid-cols-2 gap-2 overflow-y-auto`}
        ref={tableColumnsRef}
      >
        <TableColumn
          list={list1}
          maxHeight={maxHeight}
          heightInsideElements={heightInsideElements}
        />
        <TableColumn
          list={list2}
          maxHeight={maxHeight}
          heightInsideElements={heightInsideElements}
        />
      </div>
      <TableFooter />
    </div>
  );
};

// h-[${
//   maxHeight - heightInsideElements
// }px] overflow-y-auto
