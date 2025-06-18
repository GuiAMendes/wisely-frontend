import { TopicErros, TopicInfos } from "../types/directoryInfos";

export function checkErrors(directory: TopicInfos): TopicErros {
  return {
    name: directory.name ? `` : `Campo obrigatorio`,
  };
}
