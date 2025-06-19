import { TopicErros, TopicInfos } from "../types/directoryInfos";
import { makeInitialErrors } from "./makeInitialErrors";

export function checkErrors(topic: TopicInfos): TopicErros {
  const errors = makeInitialErrors();
  if (!topic.name) errors.name = `Required field`;
  if (topic.name.length < 8)
    errors.name = "The topic name must be at least 8 characters long";
  return errors;
}
