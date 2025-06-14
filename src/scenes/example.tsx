import {
  Circle,
  Icon,
  Layout,
  makeScene2D,
  Rect,
  Txt,
} from "@motion-canvas/2d";
import { all, createRef, map, tween, waitFor } from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  // // Create your animations here

  // const circle = createRef<Circle>();

  // view.add(<Circle ref={circle} size={320} fill={'lightseagreen'} />);

  // yield* circle().scale(2, 2).to(1, 2);

  const rect = createRef<Rect>();

  view.add(
    <Rect
      layout
      fill="black"
      padding={40}
      radius={20}
      direction="column"
      gap={10}
      ref={rect}
    >
      <Layout direction="row" gap={10} alignItems="center">
        <Icon
          icon="material-symbols-light:notifications-sharp"
          size={50}
          color="white"
        />
        <Txt text="notifications" fontSize={30} fill="white" />
        <Layout grow={1} width={100} />
        <Circle size={40} fill="#a6e3a1" />
        <Circle size={40} fill="#f9e2af" />
        <Circle size={40} fill="#f38ba8" />
      </Layout>
      <Txt text="Hello, world!" fontSize={60} fill="white" />
    </Rect>,
  );

  rect().opacity(0);
  rect().scale(0.5);
  rect().y(-200);

  yield* all(
    rect().opacity(1, 0.5),
    rect().scale(1, 0.5),
    rect().y(0, 0.5),
  );

  yield* waitFor(1);
});
