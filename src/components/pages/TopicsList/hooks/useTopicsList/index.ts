// Types
import useSWR from "swr";
import { useRouter } from "next/router";
import { toast } from "sonner";
import { completeTopic, getTopics, Topic } from "@services/topic";

export function useTopicsList() {
  // Hooks
  const { query } = useRouter();

  // Constants
  const journeyId = query["journey-id"] as string;

  const { data, isLoading, mutate } = useSWR(
    `/journey/${journeyId}/topic`,
    fetchTopics,
    {
      revalidateOnFocus: false,
    }
  );

  // Functions
  function fetchTopics() {
    if (!journeyId) return;
    try {
      return getTopics({ journeyId });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleCompletTopic(topic: Topic) {
    try {
      completeTopic({ topicId: topic.props.id });
      toast.success(`Topic is completed`);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await mutate();
    } catch (error) {
      toast.error(`Topic is not completed because ${(error as Error).message}`);
    }
  }

  return {
    topics: data,
    isLoading,
    mutate,
    handleCompletTopic,
  };
}
