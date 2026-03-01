"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { CreateSegmentModal } from "./CreateSegmentModal";
import { initialSegments } from "./data";
import { SegmentsTable } from "./SegmentsTable";
import type { SegmentItem, SortDirection } from "./types";
import { currentTimestamp, parseTimestamp } from "./utils";

export const CustomersSegmentsMain = () => {
  const [segments, setSegments] = useState<SegmentItem[]>(initialSegments);
  const [searchValue, setSearchValue] = useState("");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const [createdSort, setCreatedSort] = useState<SortDirection>("desc");
  const [updatedSort, setUpdatedSort] = useState<SortDirection>("desc");

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newSegmentName, setNewSegmentName] = useState("");

  const filteredSegments = useMemo(() => {
    const query = searchValue.trim().toLowerCase();

    let data = segments.filter((item) => item.name.toLowerCase().includes(query));

    data = [...data].sort((left, right) => {
      const createdCompare = createdSort === "asc"
        ? parseTimestamp(left.createdAt) - parseTimestamp(right.createdAt)
        : parseTimestamp(right.createdAt) - parseTimestamp(left.createdAt);

      if (createdCompare !== 0) {
        return createdCompare;
      }

      return updatedSort === "asc"
        ? parseTimestamp(left.updatedAt) - parseTimestamp(right.updatedAt)
        : parseTimestamp(right.updatedAt) - parseTimestamp(left.updatedAt);
    });

    return data;
  }, [segments, searchValue, createdSort, updatedSort]);

  const allChecked = filteredSegments.length > 0 && filteredSegments.every((item) => selectedIds.includes(item.id));

  const toggleSelectAll = () => {
    if (allChecked) {
      setSelectedIds([]);
      return;
    }

    setSelectedIds(filteredSegments.map((item) => item.id));
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

  const handleCreateSegment = () => {
    const trimmed = newSegmentName.trim();
    if (!trimmed) {
      return;
    }

    const now = currentTimestamp();

    const newItem: SegmentItem = {
      id: crypto.randomUUID(),
      name: trimmed,
      customers: 0,
      createdAt: now,
      updatedAt: now,
    };

    setSegments((prev) => [newItem, ...prev]);
    setNewSegmentName("");
    setIsCreateModalOpen(false);
  };

  return (
    <div className="w-full p-4 md:p-6 lg:p-8">
      <section className="rounded-2xl border border-neutral-200 bg-white p-4 md:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-3xl font-bold text-neutral-900">Quản lý Segment</h1>
          <button
            type="button"
            onClick={() => setIsCreateModalOpen(true)}
            className="h-11 rounded-xl bg-[#2F1AD7] px-5 text-[13px] font-semibold text-white hover:opacity-95"
          >
            Tạo Segment mới
          </button>
        </div>

        <label className="mb-6 flex h-11 items-center gap-2 rounded-xl border border-neutral-200 px-3">
          <Search size={18} className="text-neutral-400" />
          <input
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            type="text"
            placeholder="Tìm kiếm theo tên Segment"
            className="w-full bg-transparent text-[13px] text-neutral-700 outline-none placeholder:text-neutral-400"
          />
        </label>

        <SegmentsTable
          items={filteredSegments}
          selectedIds={selectedIds}
          allChecked={allChecked}
          onToggleSelectAll={toggleSelectAll}
          onToggleSelectOne={toggleSelectOne}
          onToggleCreatedSort={toggleCreatedSort}
          onToggleUpdatedSort={toggleUpdatedSort}
        />

        <p className="mt-4 text-[13px] text-neutral-500">
          Đang hiển thị 1 đến {filteredSegments.length} của {filteredSegments.length} bản ghi
        </p>
      </section>

      <CreateSegmentModal
        open={isCreateModalOpen}
        value={newSegmentName}
        onChange={setNewSegmentName}
        onClose={() => setIsCreateModalOpen(false)}
        onSave={handleCreateSegment}
      />
    </div>
  );
};
