interface DataTableProps {
  rows: Record<string, any>[];
}

export default function DataTable({ rows }: DataTableProps) {
  if (!rows.length) return <p>Nenhum dado encontrado.</p>;

  const headers = Object.keys(rows[0]);

  return (
    <table className="border-collapse border w-full text-sm">
      <thead>
        <tr>
          {headers.map((h) => (
            <th key={h} className="border p-2 bg-gray-100">
              {h}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, idx) => (
          <tr key={idx}>
            {headers.map((h) => (
              <td key={h} className="border p-2">
                {String(row[h])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
