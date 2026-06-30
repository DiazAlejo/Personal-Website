export function buildAskAiUrl(baseUrl: string, prompt: string): string {
  const separator = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${separator}q=${encodeURIComponent(prompt)}`;
}
