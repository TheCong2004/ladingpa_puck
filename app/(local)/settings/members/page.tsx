"use client";

import { useState } from "react";
import { AddMemberModal } from "@/components/settings/members/AddMemberModal";
import { MembersHeader } from "@/components/settings/members/MembersHeader";
import { MembersTable } from "@/components/settings/members/MembersTable";

export default function SettingsMembersPage() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="w-full px-8 py-6 lg:px-24">
                <div className="mx-auto w-full max-w-380">
                    <MembersHeader onOpenAddMember={() => setIsOpen(true)} />
                    <MembersTable />
                </div>
            </div>

            <AddMemberModal open={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}
