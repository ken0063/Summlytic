import * as z from "zod";

export const schema = z.object({
  url: z.string().trim().url({ message: "Invalid URL" }),
  summary: z.string(),
});

export type Schema = z.infer<typeof schema>;
