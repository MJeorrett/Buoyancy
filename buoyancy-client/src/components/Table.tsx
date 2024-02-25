export type TableProps<T extends { id: number }> = {
  data: T[];
  headings: string[];
  renderRowCells: (item: T) => React.ReactNode;
};

const Table = <T extends { id: number }>({
  data,
  headings,
  renderRowCells,
}: TableProps<T>) => {
  return (
    <div className="relative overflow-x-auto w-full border border-black shadow-lg rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right">
        <thead className="text-xs uppercase border-b border-black">
          <tr>
            {headings.map((heading) => (
              <th scope="col" className="px-6 py-3" key={heading}>
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-b border-gray-300 hover:bg-gray-100"
            >
              {renderRowCells(item)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
