export const useCounter = () => useState<number>("counter", () => 0);
export const useColor = () => useState<string>("color", () => "pink");
export const userState = () =>
  useState("user", () => ({
    id: 3,
    name: "Michael",
    profile: "...",
  }));
