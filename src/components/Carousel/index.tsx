import { Wrap, Show } from "./style";
import { top_event } from "../../apis/top_event";

export default function Carousel() {
  console.log(top_event);
  return (
    <Wrap>
      <Show>캐러셀</Show>
    </Wrap>
  );
}
