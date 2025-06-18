// External library
import useSWR from "swr";

// Context
import { useLogin } from "@contexts/AuthContext";

// Service
import { getRecentDirectoriesAccessed } from "@services/directories/[userId].directory.recents.get";

export function useRecentDirectories() {
  const { user } = useLogin();

  const shouldFetch = Boolean(user?.id);

  const { data, error, isLoading, mutate } = useSWR(
    shouldFetch ? `/${user?.id}/directory/recents` : null,
    fetchRecentAccessed,
    {
      revalidateOnFocus: false,
    }
  );

  async function fetchRecentAccessed() {
    if (!user) return;

    try {
      return getRecentDirectoriesAccessed({ userId: user.id });
    } catch (error) {
      console.log(error);
    }
  }

  return {
    recentDirectoriesAccessed: data,
    isLoading,
    error,
    refreshRecentAccess: mutate,
  };
}
