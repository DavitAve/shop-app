import { useEffect, useState } from "react";
import SortArrow from "./SVG/SortArrow";
import Loading from "./Loading";

export interface IDTableHeadItem {
  label: string;
  key: string;
}

interface IDataTableProps<T> {
  data: T[] | undefined;
  headers: IDTableHeadItem[];
  loading?: boolean;
}

const DataTable = <T,>({ data, headers, loading }: IDataTableProps<T>) => {
  const [visiableColumns, setVisiableColumns] = useState<string[]>([]);
  const [tableData, setTableData] = useState<T[]>();
  const [activeSort, setActiveSort] = useState<string | null>(null);
  const [sortedCount, setSortedCount] = useState<number>(1);

  useEffect(() => {
    setVisiableColumns(headers.map((item: IDTableHeadItem) => item.key));
  }, [headers]);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const sortByOrder = (
    array: [string, string | number][],
    order: IDTableHeadItem[]
  ) => {
    const headers = order.map((item: IDTableHeadItem) => item.key);
    array.sort((a: [string, string | number], b: [string, string | number]) => {
      const aIndex = headers.indexOf(a[0]);
      const bIndex = headers.indexOf(b[0]);

      return aIndex - bIndex;
    });
    return array;
  };

  const handleSort = (key: keyof T) => {
    const sortArray = (array: T[], sortOrder: number) => {
      return [...array].sort((a: T, b: T) => {
        if (typeof a[key] === "string") {
          return (a[key] as string).localeCompare(b[key] as string) * sortOrder;
        } else {
          return ((b[key] as number) - (a[key] as number)) * sortOrder;
        }
      });
    };

    if (activeSort !== key) {
      setTableData((prev: T[] | undefined) => [...sortArray(prev || [], 1)]);
      setSortedCount(2);
    } else {
      if (sortedCount === 1) {
        setTableData((prev: T[] | undefined) => [...sortArray(prev || [], 1)]);
        setSortedCount((prev) => prev + 1);
      } else if (sortedCount === 2) {
        setTableData((prev: T[] | undefined) => sortArray(prev || [], -1));
        setSortedCount((prev) => prev + 1);
      } else {
        data && setTableData(data || []);
        setSortedCount(1);
        setActiveSort("");
      }
    }
    setActiveSort(key as string);
  };

  const sortType = (key: string) => {
    if (activeSort === key) {
      if (sortedCount === 2) {
        return "max";
      } else if (sortedCount === 3) {
        return "min";
      } else {
        return "";
      }
    }
    return "";
  };

  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-[#d1d1d1]">
            {headers.map((item: IDTableHeadItem, index: number) => (
              <th
                className={`text-left text-[#2e2e2e] p-3 dataTable-th ${sortType(
                  item.key
                )}`}
                key={index}
              >
                <button
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() => handleSort(item.key as keyof T)}
                >
                  {item.label}
                  <SortArrow size="15" />
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={headers.length} className="py-6">
                <Loading />
              </td>
            </tr>
          ) : (
            <>
              {tableData?.map((item: T, index: number) => (
                <tr key={index} className="border-b-2 border-[#d1d1d1]">
                  {sortByOrder(
                    Object.entries(item as [string, string | number]),
                    headers
                  ).map(([key, value], index: number) => {
                    if (visiableColumns.includes(key))
                      return (
                        <td key={index} className="text-left p-3">
                          {value}
                        </td>
                      );
                  })}
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
