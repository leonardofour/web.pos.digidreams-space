export const getUserProfile = async () => {
  const res = await fetch("/api/profile");
  const json = await res.json();
  if (!res.ok || !json.success) throw new Error(json.error || "Failed to fetch");
  return json.data;
};