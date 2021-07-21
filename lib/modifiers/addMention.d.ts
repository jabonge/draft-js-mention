import { EditorState } from "draft-js";
import { MentionData } from "..";
export default function addMention(editorState: EditorState, mention: MentionData, mentionTrigger: string, entityMutability: "SEGMENTED" | "IMMUTABLE" | "MUTABLE"): EditorState;
