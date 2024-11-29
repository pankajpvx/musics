export const getText = (name) => {
  return name
    .replaceAll(/amp;|&quot;/g, "")
    .replace(/\s+/g, " ")
    .trim();
};
