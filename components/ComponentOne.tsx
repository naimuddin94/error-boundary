import { Delay } from "@/utils/delay";
import ContentContainer from "./ContentContainer";

const ComponentOne = async () => {
  await Delay(5000);

  throw new Error("Something went wrong");
  return <ContentContainer content="Dynamic Content" themeColor="lime" />;
};

export default ComponentOne;
