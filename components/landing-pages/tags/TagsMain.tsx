"use client";

import { useMemo, useState } from "react";
import { CreateTagModal } from "./CreateTagModal";
import { DEFAULT_TAGS } from "./tags_data";
import { TagHero } from "./TagHero";
import { TagsTable } from "./TagsTable";
import type { NewTagPayload, TagItem } from "./tags_types";

const nowLabel = () => {
  const now = new Date();
  return now.toLocaleString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export const TagsMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<TagItem[]>(DEFAULT_TAGS);
  const [keyword, setKeyword] = useState("");

  const visibleItems = useMemo(() => {
    const normalized = keyword.trim().toLowerCase();
    if (!normalized) {
      return items;
    }

    return items.filter((item) => {
      return (
        item.name.toLowerCase().includes(normalized) ||
        item.description.toLowerCase().includes(normalized) ||
        item.status.toLowerCase().includes(normalized)
      );
    });
  }, [items, keyword]);

  const handleCreateTag = (payload: NewTagPayload) => {
    const nextTag: TagItem = {
      id: `tag-${Date.now()}`,
      name: payload.name,
      description: payload.description,
      color: payload.color,
      status: payload.status,
      usageCount: 0,
      createdAt: nowLabel(),
    };

    setItems((prev) => [nextTag, ...prev]);
  };

  const handleDeleteTag = (tagId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== tagId));
  };

  const handleToggleStatus = (tagId: string) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== tagId) {
          return item;
        }

        return {
          ...item,
          status: item.status === "Đang hoạt động" ? "Tạm ẩn" : "Đang hoạt động",
        };
      })
    );
  };

  return (
    <>
      <div className="w-full p-4 md:p-6 lg:p-8">
        <TagHero onOpenCreateModal={() => setIsOpen(true)} />

        <TagsTable
          items={visibleItems}
          keyword={keyword}
          onKeywordChange={setKeyword}
          onDelete={handleDeleteTag}
          onToggleStatus={handleToggleStatus}
        />
      </div>

      <CreateTagModal isOpen={isOpen} onClose={() => setIsOpen(false)} onCreate={handleCreateTag} />
    </>
  );
};
