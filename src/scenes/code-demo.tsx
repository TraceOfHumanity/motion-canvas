import {parser} from "@lezer/javascript";
import {
  Code,
  LezerHighlighter,
  makeScene2D,
  Rect,
  Txt,
} from "@motion-canvas/2d";
import {createRef} from "@motion-canvas/core";

const tsHighlight = new LezerHighlighter(
  parser.configure({
    dialect: "typescript javascript",
  })
);

export default makeScene2D(function* (view) {
  const codeRef = createRef<Code>();
  view.add(
    <Rect
      fill="#1B1833"
      layout
      direction="column"
      radius={10}
      padding={10}
      offset={[-1, -1]}
    >
      <Code
        ref={codeRef}
        code={"const a = 1;"}
        fontSize={20}
        highlighter={tsHighlight}
      />
    </Rect>
  );

  codeRef().position(codeRef().size().div(-2));
});
