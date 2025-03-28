import React from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";

interface Column<T> {
  key: keyof T;
  header: string;
  render?: (value: T[keyof T], item: T) => React.ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  onView?: (item: T) => void;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
}

const DataTable = <T extends Record<string, any>>({
  data,
  columns,
  onView,
  onEdit,
  onDelete,
}: DataTableProps<T>) => {
  return (
    <div className="w-full">
      {/* Desktop DataTable View */}
      <div className="hidden md:block overflow-x-auto">
        <div className="min-w-full inline-block align-middle">
          <div className="overflow-hidden border border-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#cedcf8]">
                <tr>
                  {columns.map((column) => (
                    <th
                      key={column.key as string}
                      className="px-4 py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
                    >
                      {column.header}
                    </th>
                  ))}
                  <th className="px-4 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    {columns.map((column) => (
                      <td
                        key={column.key as string}
                        className="px-4 py-4 text-sm text-gray-900"
                      >
                        {column.render
                          ? column.render(item[column.key], item)
                          : item[column.key]}
                      </td>
                    ))}
                    <td className="px-4 py-4 text-sm text-gray-900">
                      <div className="flex gap-3">
                        {onView && (
                          <button
                            onClick={() => onView(item)}
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                            aria-label="View details"
                          >
                            <Eye size={20} />
                          </button>
                        )}
                        {onEdit && (
                          <button
                            onClick={() => onEdit(item)}
                            className="text-gray-600 hover:text-green-600 transition-colors"
                            aria-label="Edit item"
                          >
                            <Pencil size={20} />
                          </button>
                        )}
                        {onDelete && (
                          <button
                            onClick={() => onDelete(item)}
                            className="text-gray-600 hover:text-red-600 transition-colors"
                            aria-label="Delete item"
                          >
                            <Trash2 size={20} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-gray-200 p-4"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="space-y-1">
                {columns.map((column, _colIndex) => (
                  <div key={column.key as string} className="text-sm">
                    <span className="font-medium">{column.header}: </span>
                    <span>
                      {column.render
                        ? column.render(item[column.key], item)
                        : item[column.key]}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 ml-4">
                {onView && (
                  <button
                    onClick={() => onView(item)}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    aria-label="View details"
                  >
                    <Eye size={20} />
                  </button>
                )}
                {onEdit && (
                  <button
                    onClick={() => onEdit(item)}
                    className="text-gray-600 hover:text-green-600 transition-colors"
                    aria-label="Edit item"
                  >
                    <Pencil size={20} />
                  </button>
                )}
                {onDelete && (
                  <button
                    onClick={() => onDelete(item)}
                    className="text-gray-600 hover:text-red-600 transition-colors"
                    aria-label="Delete item"
                  >
                    <Trash2 size={20} />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataTable;
