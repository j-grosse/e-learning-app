// "use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Course = {
  _id: string
  id: number
  title: string
  description: string
  tutor: string
  image: string
}

export const columns: ColumnDef<Course>[] = [
  {
    accessorKey: "title",
    header: "Course",
    cell: ({row}) => {
      return <div className="flex items-center gap-4">
        <img className="w-12 shadow-md rounded-sm aspect-video object-cover" src={row.original.image} alt="course image" />
        <h3>{row.getValue("title")}</h3>
      </div>
    }
  },
  {
    accessorKey: "tutor",
    header: "Tutor"
  },
  {
    accessorKey: "id",
    header: "Price",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("id")) * 10
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
      
      return <div className="text-left font-medium">{formatted}</div>
    }
  },
  {
    accessorKey: "remove",
    header: "",
    cell: () => <span className="text-red-600 hover:cursor-pointer hover:underline">Remove</span>
  },
]
