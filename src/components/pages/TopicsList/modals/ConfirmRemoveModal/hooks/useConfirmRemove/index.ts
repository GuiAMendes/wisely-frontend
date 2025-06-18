// External Libraries
import { useState } from "react";
import { toast } from "sonner";

// Hooks
import { deactivateTopic, Topic } from "@services/topic";

// Types
import { UseConfirmRemoveParams } from "./types";
import { TopicInfos } from "./types/topicInfos";
import { makeInitialInfos } from "./utils";

export function useConfirmRemove({ refresh }: UseConfirmRemoveParams) {
  // States
  const [visible, setVisible] = useState(false);
  const [topicInfos, setTopicInfos] = useState<TopicInfos>(makeInitialInfos);

  // Functions
  function handleRefMethods() {
    return { open: handleOpen, close: handleClose };
  }

  function handleOpen(topic: Topic) {
    setTopicInfos({ name: topic.props.topicName, id: topic.props.id });
    setVisible(true);
  }

  function handleClose() {
    setVisible(false);
    setTopicInfos(makeInitialInfos);
  }

  async function handleRemoveInfo() {
    if (!topicInfos.id) return;

    try {
      deactivateTopic({ topicId: topicInfos.id });
      toast.success(`Topic removed`);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await refresh();
    } catch (error) {
      toast.error(`Topic is not removed because ${(error as Error).message}`);
    }
  }

  function cancelAction() {
    handleClose();
  }

  return {
    topicInfos,
    visible,
    handleClose,
    handleRemoveInfo,
    cancelAction,
    handleRefMethods,
  };
}
