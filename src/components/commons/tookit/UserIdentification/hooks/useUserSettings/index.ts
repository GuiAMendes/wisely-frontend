// Types
import useSWR from "swr";
import { UseUserSettingsParams } from "./types";
import { fingSettingsByUser, updateSettings } from "@services/settings";

import { toast } from "sonner";
import { useState } from "react";

export function useUserSettings({ userId }: UseUserSettingsParams) {
  // States
  const [isOpen, setIsOpen] = useState(false);

  const { data, mutate } = useSWR(`/${userId}/settings`, fetchSettings, {
    revalidateOnFocus: false,
  });
  // Functions
  async function fetchSettings() {
    if (!userId) return;
    try {
      return fingSettingsByUser({ userId });
    } catch {
      toast.error("erro ao buscar configuracoes do usuario");
    }
  }

  // Functions
  function onOpenChange(open: boolean) {
    setIsOpen(open);
  }

  async function updateSettingsPatch(
    primaryColor: string,
    secondaryColor: string
  ) {
    if (!userId) return;

    try {
      await updateSettings({
        userId,
        newSettings: {
          colorSchema: {
            primaryColor,
            secondaryColor,
          },
        },
      });
      mutate();
    } catch {
      toast.error("Erro ao atualizar infos do usuario");
    }
  }

  return { data, isOpen, onOpenChange, updateSettingsPatch };
}
