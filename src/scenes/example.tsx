import {Circle, Icon, Layout, makeScene2D, Rect, Txt} from "@motion-canvas/2d";
import {createRef} from "@motion-canvas/core";
import {IoIosNotifications} from "react-icons/io";

export default makeScene2D(function* (view) {
  // // Create your animations here

  // const circle = createRef<Circle>();

  // view.add(<Circle ref={circle} size={320} fill={'lightseagreen'} />);

  // yield* circle().scale(2, 2).to(1, 2);

  view.add(
    <Rect fill="#525B44" layout direction="column" radius={10} padding={10}>
      <Layout gap={10} justifyContent="space-between">
        <Icon icon={"material-symbols:notifications-rounded"} color="white" size={20} />
        <Layout gap={10}>
          <Circle size={20} fill="red" />
          <Circle size={20} fill="yellow" />
          <Circle size={20} fill="green" />
        </Layout>
      </Layout>
      <Txt
        text="I love JavaScript"
        fill="white"
        fontSize={20}
        fontFamily="Arial"
      />
    </Rect>
  );
});
