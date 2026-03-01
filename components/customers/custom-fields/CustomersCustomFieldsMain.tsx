"use client";

import { ChevronDown, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { CreateCustomFieldModal } from "./CreateCustomFieldModal";
import { CustomFieldsTable } from "./CustomFieldsTable";
import { initialFields, typeOptions } from "./data";
import type { CustomerFieldItem, FieldType, FieldTypeFilter } from "./types";
import { slugify } from "./utils";

export const CustomersCustomFieldsMain = () => {
  const [fields, setFields] = useState<CustomerFieldItem[]>(initialFields);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<FieldTypeFilter>("all");

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"create" | "edit">("create");
  const [editingFieldId, setEditingFieldId] = useState<string | null>(null);
  const [displayName, setDisplayName] = useState("");
  const [fieldType, setFieldType] = useState<FieldType>("text");
  const [description, setDescription] = useState("");

  const filteredFields = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return fields.filter((item) => {
      const matchesQuery =
        item.displayName.toLowerCase().includes(normalizedQuery) ||
        item.fieldName.toLowerCase().includes(normalizedQuery);

      const matchesType = typeFilter === "all" || item.type === typeFilter;

      return matchesQuery && matchesType;
    });
  }, [fields, query, typeFilter]);

  const allChecked = filteredFields.length > 0 && filteredFields.every((item) => selectedIds.includes(item.id));

  const toggleSelectAll = () => {
    if (allChecked) {
      setSelectedIds([]);
      return;
    }

    setSelectedIds(filteredFields.map((item) => item.id));
  };

  const toggleSelectOne = (id: string) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((value) => value !== id) : [...prev, id]));
  };

  const resetModalState = () => {
    setEditingFieldId(null);
    setDisplayName("");
    setFieldType("text");
    setDescription("");
  };

  const openCreateModal = () => {
    setModalMode("create");
    resetModalState();
    setIsCreateModalOpen(true);
  };

  const openEditModal = (id: string) => {
    const current = fields.find((item) => item.id === id);
    if (!current) {
      return;
    }

    setModalMode("edit");
    setEditingFieldId(id);
    setDisplayName(current.displayName);
    setFieldType(current.type);
    setDescription(current.description);
    setIsCreateModalOpen(true);
  };

  const closeModal = () => {
    setIsCreateModalOpen(false);
    resetModalState();
  };

  const handleSaveField = () => {
    const trimmedDisplayName = displayName.trim();
    const trimmedDescription = description.trim();

    if (!trimmedDisplayName) {
      return;
    }

    const generatedFieldName = slugify(trimmedDisplayName);

    if (modalMode === "edit" && editingFieldId) {
      setFields((prev) =>
        prev.map((item) =>
          item.id === editingFieldId
            ? {
                ...item,
                displayName: trimmedDisplayName,
                fieldName: generatedFieldName,
                type: fieldType,
                description: trimmedDescription || "",
              }
            : item
        )
      );
      closeModal();
      return;
    }

    const newItem: CustomerFieldItem = {
      id: crypto.randomUUID(),
      displayName: trimmedDisplayName,
      fieldName: generatedFieldName,
      type: fieldType,
      description: trimmedDescription || "",
    };

    setFields((prev) => [newItem, ...prev]);
    closeModal();
  };

  const deleteField = (id: string) => {
    const confirmed = window.confirm("Bạn có chắc muốn xóa trường này không?");
    if (!confirmed) {
      return;
    }

    setFields((prev) => prev.filter((item) => item.id !== id));
    setSelectedIds((prev) => prev.filter((value) => value !== id));
  };

  return (
    <div className="w-full p-4 md:p-6 lg:p-8">
      <section className="rounded-2xl border border-neutral-200 bg-white p-4 md:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-3xl font-bold text-neutral-900">Trường tùy chỉnh</h1>
          <button
            type="button"
            onClick={openCreateModal}
            className="h-11 rounded-xl bg-[#2F1AD7] px-5 text-[13px] font-semibold text-white hover:opacity-95"
          >
            Tạo trường tùy chỉnh
          </button>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-3 xl:grid-cols-[minmax(0,1fr)_300px]">
          <label className="flex h-11 items-center gap-2 rounded-xl border border-neutral-200 px-3">
            <Search size={18} className="text-neutral-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Tìm kiếm theo tên hiển thị hoặc tên trường"
              className="w-full bg-transparent text-[13px] text-neutral-700 outline-none placeholder:text-neutral-400"
            />
          </label>

          <div className="relative">
            <select
              value={typeFilter}
              onChange={(event) => setTypeFilter(event.target.value as FieldTypeFilter)}
              className="h-11 w-full appearance-none rounded-xl border border-neutral-200 bg-white px-4 pr-10 text-[13px] text-neutral-700 outline-none"
            >
              {typeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400" />
          </div>
        </div>

        <CustomFieldsTable
          items={filteredFields}
          selectedIds={selectedIds}
          allChecked={allChecked}
          onToggleSelectAll={toggleSelectAll}
          onToggleSelectOne={toggleSelectOne}
          onEditField={openEditModal}
          onDeleteField={deleteField}
        />
      </section>

      <CreateCustomFieldModal
        open={isCreateModalOpen}
        mode={modalMode}
        displayName={displayName}
        fieldType={fieldType}
        description={description}
        onChangeDisplayName={setDisplayName}
        onChangeFieldType={setFieldType}
        onChangeDescription={setDescription}
        onClose={closeModal}
        onSave={handleSaveField}
      />
    </div>
  );
};
