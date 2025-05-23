// External library
import useSWR from "swr";

// Context
import { useLogin } from "@contexts/AuthContext";

// Service
import { getDirectories } from "@services/directories/[userId].directory.get";

export function useDirectories() {
  const { user } = useLogin();

  const shouldFetch = Boolean(user?.id);

  const { data, error, isLoading, mutate } = useSWR(
    shouldFetch ? `/${user?.id}/directory` : null,
    fetchDirectories,
    {
      revalidateOnFocus: false,
    }
  );

  async function fetchDirectories() {
    if (!user) return;

    try {
      console.log(user.token);
      return getDirectories(user.id);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    directories: data,
    isLoading,
    error,
    mutate,
  };
}
