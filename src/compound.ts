export const compound = (
  principal: number,
  interest: number,
  period: number
): number => {
  if (period < 1) {
    return principal;
  }
  return compound(principal, interest, period - 1) * (1 + interest);
};
