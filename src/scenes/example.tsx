import { Circle, Layout, makeScene2D, Rect, Txt } from "@motion-canvas/2d";
import { createRef } from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  // // Create your animations here

  // const circle = createRef<Circle>();

  // view.add(<Circle ref={circle} size={320} fill={'lightseagreen'} />);

  // yield* circle().scale(2, 2).to(1, 2);

  view.add(
    <Rect layout fill="black" padding={40} radius={20} direction="column">
      <Layout direction="row" gap={10} alignItems="center">
        <Txt text="title" fontSize={100} fill="white" />
        <Circle size={100} fill="white" />
        <Circle size={100} fill="white" />
        <Circle size={100} fill="white" />
      </Layout>
      <Txt text="Hello, world!" fontSize={100} fill="white" />
    </Rect>,
  );
});
