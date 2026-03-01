"use client";

import { useMemo } from "react";
import {
    AlignCenter,
    AlignJustify,
    AlignLeft,
    AlignRight,
    Bold,
    Code,
    Eye,
    Italic,
    Link2,
    List,
    ListOrdered,
    Underline,
} from "lucide-react";
import { EditorContent, useEditor, useEditorState } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import UnderlineExtension from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";

type Props = {
    defaultValue?: string;
};

const EMPTY_EDITOR_STATE = {
    bold: false,
    italic: false,
    underline: false,
    alignLeft: false,
    alignCenter: false,
    alignRight: false,
    alignJustify: false,
    bulletList: false,
    orderedList: false,
    link: false,
    codeBlock: false,
};

function ToolbarButton({
    onClick,
    active,
    label,
    children,
}: {
    onClick: () => void;
    active?: boolean;
    label: string;
    children: React.ReactNode;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={label}
            aria-pressed={!!active}
            title={label}
            className={`rounded p-1.5 transition-colors ${active
                    ? "bg-indigo-600 text-white shadow-sm ring-1 ring-indigo-600"
                    : "text-neutral-700 hover:bg-neutral-100"
                }`}
        >
            {children}
        </button>
    );
}

export default function RichTextEditor({ defaultValue = "" }: Props) {
    const content = useMemo(() => defaultValue, [defaultValue]);

    const editor = useEditor({
        extensions: [
            StarterKit,
            UnderlineExtension,
            Link.configure({
                openOnClick: true,
                autolink: true,
                defaultProtocol: "https",
            }),
            TextAlign.configure({
                types: ["heading", "paragraph"],
            }),
        ],
        content,
        immediatelyRender: false,
        editorProps: {
            attributes: {
                class:
                    "min-h-44 bg-neutral-50 px-3 py-2.5 text-[14px] text-neutral-900 outline-none prose prose-sm max-w-none",
            },
        },
    });

    const editorState = useEditorState({
        editor,
        selector: ({ editor }) => ({
            bold: editor?.isActive("bold") ?? false,
            italic: editor?.isActive("italic") ?? false,
            underline: editor?.isActive("underline") ?? false,
            alignLeft: editor?.isActive({ textAlign: "left" }) ?? false,
            alignCenter: editor?.isActive({ textAlign: "center" }) ?? false,
            alignRight: editor?.isActive({ textAlign: "right" }) ?? false,
            alignJustify: editor?.isActive({ textAlign: "justify" }) ?? false,
            bulletList: editor?.isActive("bulletList") ?? false,
            orderedList: editor?.isActive("orderedList") ?? false,
            link: editor?.isActive("link") ?? false,
            codeBlock: editor?.isActive("codeBlock") ?? false,
        }),
    });
    const activeState = editorState ?? EMPTY_EDITOR_STATE;

    if (!editor) {
        return (
            <div className="overflow-hidden rounded-xl border border-neutral-300 bg-white">
                <div className="h-10.5 border-b border-neutral-200 bg-white" />
                <div className="min-h-44 bg-neutral-50" />
            </div>
        );
    }

    const setLink = () => {
        const previousUrl = editor.getAttributes("link").href as string | undefined;
        const url = window.prompt("Nhập URL", previousUrl || "https://");

        if (url === null) {
            return;
        }

        if (url.trim() === "") {
            editor.chain().focus().unsetLink().run();
            return;
        }

        editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    };

    return (
        <div className="overflow-hidden rounded-xl border border-neutral-300 bg-white">
            <div className="flex flex-wrap items-center gap-1 border-b border-neutral-200 px-3 py-2">
                <ToolbarButton
                    label="Bold"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    active={activeState.bold}
                >
                    <Bold size={17} />
                </ToolbarButton>
                <ToolbarButton
                    label="Italic"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    active={activeState.italic}
                >
                    <Italic size={17} />
                </ToolbarButton>
                <ToolbarButton
                    label="Underline"
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    active={activeState.underline}
                >
                    <Underline size={17} />
                </ToolbarButton>

                <div className="mx-1 h-5 w-px bg-neutral-200" />

                <ToolbarButton
                    label="Align left"
                    onClick={() => editor.chain().focus().setTextAlign("left").run()}
                    active={activeState.alignLeft}
                >
                    <AlignLeft size={17} />
                </ToolbarButton>
                <ToolbarButton
                    label="Align center"
                    onClick={() => editor.chain().focus().setTextAlign("center").run()}
                    active={activeState.alignCenter}
                >
                    <AlignCenter size={17} />
                </ToolbarButton>
                <ToolbarButton
                    label="Align right"
                    onClick={() => editor.chain().focus().setTextAlign("right").run()}
                    active={activeState.alignRight}
                >
                    <AlignRight size={17} />
                </ToolbarButton>
                <ToolbarButton
                    label="Align justify"
                    onClick={() => editor.chain().focus().setTextAlign("justify").run()}
                    active={activeState.alignJustify}
                >
                    <AlignJustify size={17} />
                </ToolbarButton>

                <div className="mx-1 h-5 w-px bg-neutral-200" />

                <ToolbarButton
                    label="Bulleted list"
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    active={activeState.bulletList}
                >
                    <List size={17} />
                </ToolbarButton>
                <ToolbarButton
                    label="Ordered list"
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    active={activeState.orderedList}
                >
                    <ListOrdered size={17} />
                </ToolbarButton>
                <ToolbarButton
                    label="Link"
                    onClick={setLink}
                    active={activeState.link}
                >
                    <Link2 size={17} />
                </ToolbarButton>
                <ToolbarButton
                    label="Code"
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    active={activeState.codeBlock}
                >
                    <Code size={17} />
                </ToolbarButton>
                <ToolbarButton
                    label="Preview"
                    onClick={() => editor.chain().focus().run()}
                >
                    <Eye size={17} />
                </ToolbarButton>
            </div>

            <EditorContent editor={editor} />
        </div>
    );
}
