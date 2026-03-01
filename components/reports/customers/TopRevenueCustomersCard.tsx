import { TopRevenueCustomer } from "./data";

interface TopRevenueCustomersCardProps {
  customers: TopRevenueCustomer[];
}

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND", maximumFractionDigits: 0 }).format(amount);

export const TopRevenueCustomersCard = ({ customers }: TopRevenueCustomersCardProps) => {
  return (
    <div className="rounded-xl border border-neutral-200 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm md:p-5">
      <h2 className="text-[13px] font-extrabold text-neutral-900">Top 10 khách hàng doanh thu cao nhất</h2>
      <p className="mt-2 text-[13px] text-indigo-900/70">Danh sách top 10 khách hàng mang lại doanh thu cao nhất</p>

      <div className="mt-4 overflow-x-auto rounded-lg border border-neutral-200">
        <table className="min-w-full text-[13px] text-neutral-700">
          <thead className="bg-neutral-50 text-neutral-800">
            <tr>
              <th className="px-4 py-3 text-left font-extrabold">Tên khách hàng</th>
              <th className="px-4 py-3 text-left font-extrabold">Địa chỉ email</th>
              <th className="px-4 py-3 text-left font-extrabold">Số điện thoại</th>
              <th className="px-4 py-3 text-right font-extrabold">Tổng tiền</th>
            </tr>
          </thead>
          <tbody>
            {customers.length > 0 ? (
              customers.map((customer) => (
                <tr key={`${customer.email}-${customer.purchaseDate}`} className="transition-colors hover:bg-neutral-50">
                  <td className="border-t border-neutral-100 px-4 py-3">{customer.name}</td>
                  <td className="border-t border-neutral-100 px-4 py-3">{customer.email}</td>
                  <td className="border-t border-neutral-100 px-4 py-3">{customer.phone}</td>
                  <td className="border-t border-neutral-100 px-4 py-3 text-right font-semibold">
                    {formatCurrency(customer.amount)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-neutral-500">
                  Không có dữ liệu theo bộ lọc hiện tại
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
