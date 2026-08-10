export const dynamic = "force-dynamic"; // 👈 เพิ่มบรรทัดนี้ไว้บนสุด

import Form from "@/components/Form";
import { prisma } from "@/lib/prisma";
import React from "react";

const bookPage = async () => {
  const books = await prisma.book.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return (
    <div className="p-6 max-w-xl mx-auto space-y-6">
      <h1>Book Page</h1>

      <Form />

      <hr className="my-6 border-gray-300" />

      <h2 className="text-xl font-bold">รายการหนังสือ</h2>

      <div className="space-y-3">
        {books.map((book) => (
          <div key={book.id} className="p-4 border rounded-md shadow-sm bg-white">
            <h3 className="text-lg font-semibold">{book.title}</h3>
            <p className="text-gray-600">ราคา: {book.price} บาท</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default bookPage;