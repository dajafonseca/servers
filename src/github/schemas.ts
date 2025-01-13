import { z } from "zod";

// [Previous schema definitions remain the same...]

export const CreateOrUpdateFileSchema = RepoParamsSchema.extend({
  path: z.string().describe("Path where to create/update the file"),
  content: z.object({
    content: z.string().describe("Content of the file (must be base64 encoded)"),
    encoding: z.literal("base64").describe("Must be 'base64'")
  }).describe("Content object with base64 encoded file content"),
  message: z.string().describe("Commit message"),
  branch: z.string().describe("Branch to create/update the file in"),
  sha: z
    .string()
    .optional()
    .describe(
      "SHA of the file being replaced (required when updating existing files)"
    ),
});

// [Rest of the file remains the same...]