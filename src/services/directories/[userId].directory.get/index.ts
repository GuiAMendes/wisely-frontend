import API from "@services/api";

export async function getDirectories(userId: number, token: string) {
  const url = `/${userId}/directory`;

  const response = await API.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
