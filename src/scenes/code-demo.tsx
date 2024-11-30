import {parser} from "@lezer/javascript";
import {
  Code,
  LezerHighlighter,
  lines,
  makeScene2D,
  Rect,
  Txt,
  word,
} from "@motion-canvas/2d";
import {
  all,
  chain,
  createRef,
  DEFAULT,
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
    >
      <Code ref={codeRef} fontSize={50} highlighter={tsHighlight} />
    </Rect>
  );
  windowRef().opacity(0);
  codeRef().opacity(0);

  yield* all(
    windowRef().opacity(1, 1, easeInOutCubic),
    codeRef().opacity(1, 1, easeInOutCubic)
  );
  yield* codeRef().code("const numberArray = [];", 0.5),
    yield* waitFor(1),
    yield* codeRef().code.replace(word(0, 20), "[1, 2, 3, 4, 5];", 0.5),
    yield* waitFor(1),
    yield* codeRef().code.append("\nnumberArray.map();", 0.5),
    yield* waitFor(1),
    yield* codeRef().selection(word(1, 12, 5), 0.5),
    yield* waitFor(1),
    yield* all(
      codeRef().code.replace(word(1, 15), "(() => {});", 0.5),
      codeRef().selection(word(1, 12, 13), 0.5)
    );
  yield* waitFor(1);
  // yield* waitFor(1);
  yield* codeRef().selection(word(1, 16, 8), 0.5);
  yield* waitFor(1);
  for (let i = 0; i < 15; i += 3) {
    yield* codeRef().selection(word(0, 21 + i, 1), 0.3);
    // yield* waitFor(0.001);
  }
  // yield* codeRef().selection( DEFAULT, 0.6);
  yield* waitFor(0.5);

  yield* all(
    codeRef().code.replace(word(1, 16), "(number) => {});", 0.5),
    codeRef().selection(word(1, 16, 14), 0.5)
  );
  yield* waitFor(1);

  yield* all(
    codeRef().code.replace(
      word(1, 0),
      `numberArray.map((number) => {
    return number * 2;
});
    `,
      0.5
    ),
    codeRef().selection(word(2, 0), 0.5)
  );
  yield* waitFor(1);

  yield* codeRef().selection(codeRef().findAllRanges(/\bnumber\b/gi), 0.6);
  yield* waitFor(1);

  yield* waitFor(1);

  yield* codeRef().selection(DEFAULT, 0.6);
  yield* all(
    ...codeRef()
      .findAllRanges(/\bnumber\b/gi)
      .map((range) => codeRef().code.replace(range, "1", 0.6))
  );
  yield* waitFor(1);

  yield* codeRef().code.edit(0.5)`\
const numberArray = [1, 2, 3, 4, 5];
numberArray.map((1) => {
    return 1 * 2;
}); // [2]
  `;
  yield* waitFor(1);

  yield* codeRef().code.edit(0.5)`\
const numberArray = [1, 2, 3, 4, 5];
numberArray.map((2) => {
    return 2 * 2;
}); // [2]
    `;
  yield* waitFor(1);

    yield* codeRef().code.edit(0.5)`\
const numberArray = [1, 2, 3, 4, 5];
numberArray.map((2) => {
    return 2 * 2;
}); // [2, 4]
    `;
  yield* waitFor(1);

      yield* codeRef().code.edit(0.5)`\
const numberArray = [1, 2, 3, 4, 5];
numberArray.map((3) => {
    return 3 * 2;
}); // [2, 4, 6]
    `;
  yield* waitFor(1);

        yield* codeRef().code.edit(0.5)`\
const numberArray = [1, 2, 3, 4, 5];
numberArray.map((4) => {
    return 4 * 2;
}); // [2, 4, 6, 8]
    `;
  yield* waitFor(1);

    yield* codeRef().code.edit(0.5)`\
const numberArray = [1, 2, 3, 4, 5];
numberArray.map((5) => {
    return 5 * 2;
}); // [2, 4, 6, 8, 10]
    `;
  yield* waitFor(1);

  

});
