"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { CompaniesTable } from "./CompaniesTable";
import { CreateCompanyModal } from "./CreateCompanyModal";
import { initialCompanies } from "./data";
import type { CompanyItem, SortDirection } from "./types";

export const CustomersCompaniesMain = () => {
  const [companies, setCompanies] = useState<CompanyItem[]>(initialCompanies);
  const [searchValue, setSearchValue] = useState("");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [createdSort, setCreatedSort] = useState<SortDirection>("desc");
  const [updatedSort, setUpdatedSort] = useState<SortDirection>("desc");

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newCompanyName, setNewCompanyName] = useState("");

  const filteredCompanies = useMemo(() => { 
    const query = searchValue.trim().toLowerCase();

    let data = companies.filter((company) => company.name.toLowerCase().includes(query));

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
  }, [companies, searchValue, createdSort, updatedSort]);

  const allChecked = filteredCompanies.length > 0 && filteredCompanies.every((item) => selectedIds.includes(item.id));

  const toggleSelectAll = () => {
    if (allChecked) {
      setSelectedIds([]);
      return;
    }

    setSelectedIds(filteredCompanies.map((item) => item.id));
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

  const handleCreateCompany = () => {
    const trimmed = newCompanyName.trim();
    if (!trimmed) {
      return;
    }

    const now = new Date().toISOString();

    const newItem: CompanyItem = {
      id: crypto.randomUUID(),
      name: trimmed,
      createdAt: now,
      updatedAt: now,
    };

    setCompanies((prev) => [newItem, ...prev]);
    setNewCompanyName("");
    setIsCreateModalOpen(false);
  };

  return (
    <div className="w-full p-4 md:p-6 lg:p-8">
      <section className="rounded-2xl border border-neutral-200 bg-white p-4 md:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-3xl font-bold text-neutral-900">Danh sách công ty</h1>
          <button
            type="button"
            onClick={() => setIsCreateModalOpen(true)}
            className="h-11 rounded-xl bg-[#2F1AD7] px-5 text-[13px] font-semibold text-white hover:opacity-95"
          >
            Thêm công ty mới
          </button>
        </div>

        <label className="mb-6 flex h-11 items-center gap-2 rounded-xl border border-neutral-200 px-3">
          <Search size={18} className="text-neutral-400" />
          <input
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            type="text"
            placeholder="Tìm kiếm công ty theo tên"
            className="w-full bg-transparent text-[13px] text-neutral-700 outline-none placeholder:text-neutral-400"
          />
        </label>

        <CompaniesTable
          items={filteredCompanies}
          selectedIds={selectedIds}
          allChecked={allChecked}
          onToggleSelectAll={toggleSelectAll}
          onToggleSelectOne={toggleSelectOne}
          onToggleCreatedSort={toggleCreatedSort}
          onToggleUpdatedSort={toggleUpdatedSort}
        />
      </section>

      <CreateCompanyModal
        open={isCreateModalOpen}
        value={newCompanyName}
        onChange={setNewCompanyName}
        onClose={() => setIsCreateModalOpen(false)}
        onSave={handleCreateCompany}
      />
    </div>
  );
};
