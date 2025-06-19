// External Libraries
import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/router";

// Utils
import {
  buildTopicInfos,
  checkErrors,
  makeInitialErrors,
  makeInitialUserInfos,
} from "./utils";

// Services
import { TopicInfos } from "./types/directoryInfos";
import { createTopic, RenameTopic, Topic } from "@services/topic";

// Hooks
import { useLogin } from "@contexts/AuthContext";

// Types
import { UseManageTopicParams } from "./types";
import { createSummary } from "@services/summary";

export function useManageTopic({ refresh }: UseManageTopicParams) {
  // States
  const [visible, setVisible] = useState(false);
  const [topicInfos, setTopicInfos] =
    useState<TopicInfos>(makeInitialUserInfos);
  const [topicId, setTopicId] = useState<string>();
  const [errors, setErros] = useState<TopicInfos>(makeInitialErrors);

  const { user } = useLogin();
  const { query } = useRouter();

  const idJourney = query["journey-id"] as string;

  // Functions
  function handleRefMethods() {
    return { open: handleOpen, close: handleClose };
  }

  function handleTopicInfosChange(changes: Partial<TopicInfos>) {
    setErros(makeInitialErrors);
    setTopicInfos({ ...topicInfos, ...changes });
  }

  async function handleManageTopic() {
    if (!user) return;

    const errors = checkErrors(topicInfos);

    setErros(errors);
    if (Object.values(errors).some((e) => e)) return;

    try {
      if (topicId) {
        await RenameTopic({
          topicId,
          newTopicName: topicInfos.name,
        });
      } else {
        const response = await createTopic({
          idJourney,
          name: topicInfos.name,
        });

        if (response) {
          await createSummary({
            idTopic: response?.id,
            title: "<h1>Topic name</h1>",
            noteContent:
              "<h1>Topic name</h1><p>Start writing your content here...</p>",
          });
        }
      }

      handleClose();

      toast.success(`${topicInfos.name} foi criado com sucesso`);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await refresh();
    } catch (error) {
      toast.error((error as Error).message);
    }
  }

  function handleOpen(topic?: Topic) {
    if (topic) {
      setTopicId(topic.props.id);
      setTopicInfos(buildTopicInfos(topic));
    }
    setVisible(true);
  }

  function handleClose() {
    setVisible(false);
    setTopicId(undefined);
    setTopicInfos(makeInitialUserInfos);
  }

  return {
    errors,
    visible,
    isEditing: !!topicId,
    topicInfos,
    handleClose,
    handleRefMethods,
    handleTopicInfosChange,
    handleManageTopic,
  };
}
