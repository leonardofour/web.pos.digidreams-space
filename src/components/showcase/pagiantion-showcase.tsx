import React from "react";
import Pagination from "@/components/common/pagination/pagination";
import { usePagination } from "../../hooks/usePagination";

const sampleData = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
  description: `This is item number ${i + 1}`,
}));

const SimpleExample = () => {
  const { currentData, currentPage, totalPages, setCurrentPage } =
    usePagination({
      data: sampleData,
      itemsPerPage: 5,
    });

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <div
        style={{
          display: "grid",
          gap: "12px",
          marginBottom: "32px",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        {currentData.map((item) => (
          <div
            key={item.id}
            style={{
              padding: "16px",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              backgroundColor: "#f9fafb",
            }}
          >
            <h4 style={{ margin: "0 0 8px 0", color: "#1f2937" }}>
              {item.name}
            </h4>
            <p style={{ margin: 0, color: "#6b7280", fontSize: "14px" }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default SimpleExample;
