import {Circle, Icon, Layout, makeScene2D, Rect, Txt} from "@motion-canvas/2d";
import {all, createRef, easeInOutCubic, waitFor} from "@motion-canvas/core";
import {IoIosNotifications} from "react-icons/io";

export default makeScene2D(function* (view) {
  // // Create your animations here

  // const circle = createRef<Circle>();

  // view.add(<Circle ref={circle} size={320} fill={'lightseagreen'} />);

  // yield* circle().scale(2, 2).to(1, 2);
  const windowRef = createRef<Rect>();
  const textRef = createRef<Txt>();

  view.add(
    <Rect
      ref={windowRef}
      fill="#525B44"
      layout
      direction="column"
      radius={10}
      padding={10}
    >
      <Layout gap={10} justifyContent="space-between">
        <Icon
          icon={"material-symbols:notifications-rounded"}
          color="white"
          size={20}
        />
        <Layout gap={10}>
          <Circle size={20} fill="red" />
          <Circle size={20} fill="yellow" />
          <Circle size={20} fill="green" />
        </Layout>
      </Layout>
      <Txt
        ref={textRef}
        text="I love JavaScript"
        fill="white"
        fontSize={20}
        fontFamily="Arial"
      />
    </Rect>
  );

  windowRef().opacity(0);
  windowRef().scale(0.5);
  windowRef().y(100);

  yield* all(
    windowRef().y(-100, 1, easeInOutCubic).to(0, 1),
    windowRef().scale(1, 1, easeInOutCubic).to(1, 1),
    windowRef().opacity(1, 1, easeInOutCubic).to(1, 1)
  );
  yield* waitFor(1);
  const Empty = "\u2800";

  yield* textRef().text(Empty.repeat(10), 0.5);
  yield* textRef().text("I love TypeScript", 0.5);
  yield* waitFor(1);


  yield* textRef().text(Empty.repeat(10), 0.5);
  yield* textRef().text("I love JavaScript", 0.5);
  yield* waitFor(1);
});
