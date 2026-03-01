"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { CreateTagModal } from "./CreateTagModal";
import { initialTags } from "./data";
import { TagsTable } from "./TagsTable";
import type { CustomerTagItem, SortDirection } from "./types";

export const CustomersTagsMain = () => {
  const [tags, setTags] = useState<CustomerTagItem[]>(initialTags);
  const [searchValue, setSearchValue] = useState("");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const [createdSort, setCreatedSort] = useState<SortDirection>("desc");
  const [updatedSort, setUpdatedSort] = useState<SortDirection>("desc");

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newTagName, setNewTagName] = useState("");

  const filteredTags = useMemo(() => {
    const query = searchValue.trim().toLowerCase();

    let data = tags.filter((item) => item.name.toLowerCase().includes(query));

    data = [...data].sort((left, right) => {
      const createdCompare = createdSort === "asc"
        ? new Date(left.createdAt).getTime() - new Date(right.createdAt).getTime()
        : new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime();

      if (createdCompare !== 0) {
        return createdCompare;
      }

      return updatedSort === "asc"
        ? new Date(left.updatedAt).getTime() - new Date(right.updatedAt).getTime()
        : new Date(right.updatedAt).getTime() - new Date(left.updatedAt).getTime();
    });

    return data;
  }, [tags, searchValue, createdSort, updatedSort]);

  const allChecked = filteredTags.length > 0 && filteredTags.every((item) => selectedIds.includes(item.id));

  const toggleSelectAll = () => {
    if (allChecked) {
      setSelectedIds([]);
      return;
    }

    setSelectedIds(filteredTags.map((item) => item.id));
  };

  const toggleSelectOne = (id: string) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((value) => value !== id) : [...prev, id]));
  };

  const toggleCreatedSort = () => {
    setCreatedSort((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const toggleUpdatedSort = () => {
    setUpdatedSort((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const handleCreateTag = () => {
    const trimmed = newTagName.trim();
    if (!trimmed) {
      return;
    }

    const now = new Date().toISOString();

    const newItem: CustomerTagItem = {
      id: crypto.randomUUID(),
      name: trimmed,
      count: 0,
      createdAt: now,
      updatedAt: now,
    };

    setTags((prev) => [newItem, ...prev]);
    setNewTagName("");
    setIsCreateModalOpen(false);
  };

  return (
    <div className="w-full p-4 md:p-6 lg:p-8">
      <section className="rounded-2xl border border-neutral-200 bg-white p-4 md:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-3xl font-bold text-neutral-900">Quản lý Tag</h1>
          <button
            type="button"
            onClick={() => setIsCreateModalOpen(true)}
            className="h-11 rounded-xl bg-[#2F1AD7] px-5 text-[13px] font-semibold text-white hover:opacity-95"
          >
            Tạo Tag mới
          </button>
        </div>

        <label className="mb-6 flex h-11 items-center gap-2 rounded-xl border border-neutral-200 px-3">
          <Search size={18} className="text-neutral-400" />
          <input
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            type="text"
            placeholder="Tìm kiếm theo tên tag"
            className="w-full bg-transparent text-[13px] text-neutral-700 outline-none placeholder:text-neutral-400"
          />
        </label>

        <TagsTable
          items={filteredTags}
          selectedIds={selectedIds}
          allChecked={allChecked}
          onToggleSelectAll={toggleSelectAll}
          onToggleSelectOne={toggleSelectOne}
          onToggleCreatedSort={toggleCreatedSort}
          onToggleUpdatedSort={toggleUpdatedSort}
        />
      </section>

      <CreateTagModal
        open={isCreateModalOpen}
        value={newTagName}
        onChange={setNewTagName}
        onClose={() => setIsCreateModalOpen(false)}
        onSave={handleCreateTag}
      />
    </div>
  );
};
