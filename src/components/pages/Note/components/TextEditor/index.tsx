import React from "react";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FaBold, FaHeading } from "react-icons/fa";

import { Container, EditorWrapper, Button, BubbleMenuWrapper } from "./styles";

import { Header } from "../Header";

export const TextEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `
      <h1>Topic name</h1>
      <h2>Resume</h2>
      <p>Start writing your content here...</p>
    `,
  });

  if (!editor) return null;

  return (
    <Container>
      <Header />
      <EditorWrapper>
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <BubbleMenuWrapper>
            <Button
              onClick={() => editor.chain().focus().toggleBold().run()}
              aria-label="Bold"
            >
              <FaBold />
            </Button>
            <Button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
              aria-label="Heading 1"
            >
              <FaHeading />
            </Button>
            <Button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
              aria-label="Heading 2"
            >
              <FaHeading style={{ fontSize: "0.8em" }} />
            </Button>
          </BubbleMenuWrapper>
        </BubbleMenu>

        <EditorContent editor={editor} />
      </EditorWrapper>
    </Container>
  );
};
