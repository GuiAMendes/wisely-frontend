import { TopicInfos } from "../types/directoryInfos";
import { Topic } from "@services/topic";

export function buildTopicInfos(topic: Topic): TopicInfos {
  return {
    name: topic.props.topicName,
  };
}
