import {parser} from "@lezer/javascript";
import {
  Code,
  LezerHighlighter,
  makeScene2D,
  Rect,
  Txt,
} from "@motion-canvas/2d";
import {
  all,
  chain,
  createRef,
  easeInOutCubic,
  waitFor,
} from "@motion-canvas/core";

const tsHighlight = new LezerHighlighter(
  parser.configure({
    dialect: "typescript javascript",
  })
);

export default makeScene2D(function* (view) {
  const codeRef = createRef<Code>();
  const windowRef = createRef<Rect>();

  view.add(
    <Rect
      ref={windowRef}
      fill="#1B1833"
      layout
      direction="column"
      radius={10}
      padding={10}
      // offset={[-1, -1]}
      // position={[-950, -400]}
    >
      <Code
        ref={codeRef}
        // code={"const numberArray = [1, 2, 3, 4, 5];"}
        fontSize={20}
        highlighter={tsHighlight}
      />
    </Rect>
  );

  // windowRef().opacity(0);
  // windowRef().scale(0.5);

  codeRef().opacity(0);

  yield* chain(
    // windowRef().scale(1, 1, easeInOutCubic),
    // windowRef().opacity(1, 1, easeInOutCubic),
    codeRef().opacity(1, 1, easeInOutCubic),

    codeRef().code("const numberArray = [1, 2, 3, 4, 5];", 0.5)
  );

  yield* waitFor(1);

  yield* codeRef().code.append("\nnumberArray.map((num) => num * 2);", 0.5);
  yield* waitFor(1);

});
