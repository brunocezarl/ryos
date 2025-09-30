import { openai } from "@ai-sdk/openai";
import { anthropic } from "@ai-sdk/anthropic";
import { google } from "@ai-sdk/google";
import { LanguageModelV2 } from "@ai-sdk/provider";
import {
  SupportedModel as ImportedSupportedModel,
  DEFAULT_AI_MODEL,
} from "../../src/types/aiModels";

// Re-export the type
export type SupportedModel = ImportedSupportedModel;

export const DEFAULT_MODEL = DEFAULT_AI_MODEL;

// Factory that returns a LanguageModelV2 instance for the requested model
export const getModelInstance = (model: SupportedModel): LanguageModelV2 => {
  const modelToUse: SupportedModel = model ?? DEFAULT_MODEL;

  switch (modelToUse) {
    case "gemini-2.5-pro":
      return google("gemini-2.5-pro");
    case "gemini-2.5-flash":
      return google("gemini-2.5-flash");
    case "claude-4.5":
      return anthropic("claude-sonnet-4-5");
    case "claude-4":
      return anthropic("claude-4-sonnet-20250514");
    case "claude-3.7":
      return anthropic("claude-3-7-sonnet-20250219");
    case "claude-3.5":
      return anthropic("claude-3-5-sonnet-20241022");
    case "gpt-5":
      return openai("gpt-5");
    case "gpt-5-mini":
      return openai("gpt-5-mini");
    case "gpt-4o":
      return openai("gpt-4o");
    case "gpt-4.1":
      return openai("gpt-4.1");
    case "gpt-4.1-mini":
      return openai("gpt-4.1-mini");
    default:
      // Fallback – should never happen due to exhaustive switch
      return openai("gpt-5");
  }
};
