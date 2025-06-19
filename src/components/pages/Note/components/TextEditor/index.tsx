import React, { useCallback } from "react";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import debounce from "lodash.debounce";
import { FaBold, FaHeading } from "react-icons/fa";

import { Container, EditorWrapper, Button, BubbleMenuWrapper } from "./styles";
import { Header } from "../Header";
import { Summary } from "@services/summary";

interface Props {
  summary: Summary;
  onSaveContent: (content: string) => void;
}

export const TextEditor: React.FC<Props> = ({ summary, onSaveContent }) => {
  
  const debouncedSave = useCallback(
    debounce((content: string) => {
      onSaveContent(content);
    }, 500),
    []
  );

  const editor = useEditor({
    extensions: [StarterKit],
    content: summary.props.note.props.content,
    onUpdate({ editor }) {
      const content = editor.getHTML();
      debouncedSave(content);
    },
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
