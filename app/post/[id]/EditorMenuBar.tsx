import { Editor } from "@tiptap/react";
import React from "react";
import ListItem from "@tiptap/extension-list-item";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import HorizontalRuleOutlinedIcon from "@mui/icons-material/HorizontalRuleOutlined";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatTextdirectionLToRIcon from "@mui/icons-material/FormatTextdirectionLToR";
import CodeIcon from "@mui/icons-material/Code";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import SourceIcon from "@mui/icons-material/Source";
import FormatClearIcon from "@mui/icons-material/FormatClear";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import StrikethroughSIcon from "@mui/icons-material/StrikethroughS";

type Props = {
  editor: Editor | null;
};

const EditorMenuBar = ({ editor }: Props) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={
            editor.isActive("bold")
              ? "bg-wh-500 text-wh-50 p-1 rounded-md"
              : "p-1"
          }
        >
          <FormatBoldIcon aria-label="Bold" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={
            editor.isActive("italic")
              ? "bg-wh-500 text-wh-50 p-1 rounded-md"
              : "p-1"
          }
        >
          <FormatItalicIcon aria-label="Italic" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={
            editor.isActive("strike")
              ? "bg-wh-500 text-wh-50 p-1 rounded-md"
              : "p-1"
          }
        >
          <StrikethroughSIcon aria-label="Strike Through" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={
            editor.isActive("code")
              ? "bg-wh-500 text-wh-50 p-1 rounded-md"
              : "p-1"
          }
        >
          <CodeIcon aria-label="Code" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
        >
          <FormatClearIcon aria-label="Unset all marks" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().clearNodes().run()}
        >
          <ClearAllIcon aria-label="Clear Nodes" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={
            editor.isActive("paragraph")
              ? "bg-wh-500 text-wh-50 p-1 rounded-md"
              : "p-1"
          }
        >
          <FormatTextdirectionLToRIcon aria-label="Paragraph" />
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 })
              ? "bg-wh-500 text-wh-50 p-1 rounded-md"
              : "p-1"
          }
        >
          H<span className="text-xs">1</span>
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 })
              ? "bg-wh-500 text-wh-50 p-1 rounded-md"
              : "p-1"
          }
        >
          H<span className="text-xs">2</span>
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 })
              ? "bg-wh-500 text-wh-50 p-1 rounded-md"
              : "p-1"
          }
        >
          H<span className="text-xs">3</span>
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={
            editor.isActive("heading", { level: 4 })
              ? "bg-wh-500 text-wh-50 p-1 rounded-md"
              : "p-1"
          }
        >
          H<span className="text-xs">4</span>
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={
            editor.isActive("heading", { level: 5 })
              ? "bg-wh-500 text-wh-50 p-1 rounded-md"
              : "p-1"
          }
        >
          H<span className="text-xs">5</span>
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={
            editor.isActive("heading", { level: 6 })
              ? "bg-wh-500 text-wh-50 p-1 rounded-md"
              : "p-1"
          }
        >
          H<span className="text-xs">6</span>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={
            editor.isActive("bulletList")
              ? "bg-wh-500 text-wh-50 p-1 rounded-md"
              : "p-1"
          }
        >
          <FormatListBulletedIcon arial-label="Bullet list" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={
            editor.isActive("orderedList")
              ? "bg-wh-500 text-wh-50 p-1 rounded-md"
              : "p-1"
          }
        >
          <FormatListNumberedIcon arial-label="Ordered list" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={
            editor.isActive("codeBlock")
              ? "bg-wh-500 text-wh-50 p-1 rounded-md"
              : "p-1"
          }
        >
          <SourceIcon arial-label="Code Block" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={
            editor.isActive("blockquote")
              ? "bg-wh-500 text-wh-50 p-1 rounded-md"
              : "p-1"
          }
        >
          <FormatQuoteIcon arial-label="Block Quote" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <HorizontalRuleOutlinedIcon arial-label="Horizontal Rule" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setHardBreak().run()}
        >
          <KeyboardReturnIcon arial-label="Hard Break" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          <UndoOutlinedIcon arial-label="Undo" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          <RedoOutlinedIcon arial-label="Redo" />
        </button>
      </div>
    </div>
  );
};

export default EditorMenuBar;
