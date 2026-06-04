export function calculateComplexity(
  code: string
) {
  const matches = code.match(
    /if|for|while|switch|catch|\?/g
  );

  return matches ? matches.length + 1 : 1;
}