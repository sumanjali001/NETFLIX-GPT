import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";

const client = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});
