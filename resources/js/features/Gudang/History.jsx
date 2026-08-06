import { useState } from "react";
import { Head, router } from "@inertiajs/react";
import Breadcrumb from "@/components/Breadcrumb";
import StandardContainer from "@/components/ui/StandardContainer";
import SearchInput from "@/components/ui/SearchInput";
import { H1 } from "@/components/ui/CustomTag";
import KasirSelect from "@/components/KasirSelect";
import BaselineHistoryIcon from "@iconify-react/ic/baseline-history";
import HistoryTable from "./Components/HistoryTable";
import dayjs from "dayjs";
import "dayjs/locale/id";

dayjs.locale("id");

export default function History({ transfers, staffList, selectedUserId }) {
    const [search, setSearch] = useState("");

    const handleFilterChange = (userId) => {
        router.get("/gudang/riwayat", { user_id: userId }, { preserveState: true });
    };

    const filteredTransfers = transfers.filter(
        (t) =>
            t.product?.name.toLowerCase().includes(search.toLowerCase()) ||
            t.user?.name.toLowerCase().includes(search.toLowerCase()),
    );

    return (
        <div className="w-full h-full text-blue-2 font-inter flex flex-col relative overflow-hidden">
            <Head title="Riwayat Buka Segel" />
            <Breadcrumb
                items={[
                    { label: "Dashboard", href: "/dashboard" },
                    { label: "Gudang", href: "/gudang" },
                    { label: "Riwayat Buka Segel" },
                ]}
            />
            <H1 />

            <StandardContainer
                header={
                    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="w-full max-w-sm">
                            <SearchInput
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Cari nama barang atau staf..."
                            />
                        </div>
                        {staffList && staffList.length > 0 && (
                            <KasirSelect 
                                value={selectedUserId}
                                onChange={handleFilterChange}
                                kasirList={staffList}
                                label="Akun:"
                                defaultOption="Semua Akun"
                            />
                        )}
                    </div>
                }
            >
                <HistoryTable filteredTransfers={filteredTransfers} />
            </StandardContainer>
        </div>
    );
}
