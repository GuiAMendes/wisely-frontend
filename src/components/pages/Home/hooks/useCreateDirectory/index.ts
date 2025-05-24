// Context
import { useLogin } from "@contexts/AuthContext";

// Service
import { createDirectory } from "@services/directories/[userId].directory.post";

// Types
import type { CreateDirectoryInput } from "../types/createDirectory";

export function useCreateDirectory() {
  const { user } = useLogin();

  async function create({ name, isTemplate }: CreateDirectoryInput) {
    if (!user) return;
    if (name == "" && !name) return;

    try {
      return createDirectory({ userId: user.id, name, isTemplate });
    } catch (error) {
      console.log(error);
    }
  }

  return {
    create,
  };
}
