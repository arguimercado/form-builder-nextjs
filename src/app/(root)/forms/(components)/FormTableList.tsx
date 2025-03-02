"use client";

import * as React from "react";
import {
   ColumnDef,
   ColumnFiltersState,
   SortingState,
   VisibilityState,
   flexRender,
   getCoreRowModel,
   getFilteredRowModel,
   getPaginationRowModel,
   getSortedRowModel,
   useReactTable,
} from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import {forms} from "@/data/forms";


const columns: ColumnDef<FormType>[] = [
   {
      accessorKey: "name",
      header: "Name",
      size: 20,
      cell: ({ row }) => (
         <div className="capitalize">{row.getValue("name")}</div>
      ),
   },
   {
      accessorKey: "description",
      header: "Description",
      size: 50,
      cell: ({ row }) => (
         <div className="capitalize">{row.getValue("description")}</div>
      ),
   },
   {
      accessorKey: "author",
      header: "Author",
      size: 10,
      cell: ({ row }) => (
         <div className="capitalize">{row.getValue("author")}</div>
      ),
   },
   {
      accessorKey: "isActive",
      header: "Active",
      size: 10,
      cell: ({ row }) => (
         <div 
            className="capitalize px-2 py-1 rounded-full text-xs font-semibold bg-amber-200 dark:bg-amber-600 text-center">
               {row.getValue("isActive") ? "Active" : "Disabled"}
         </div>
      ),
   },
   {
      id: "actions",
      enableHiding: false,
      size: 5,
      cell: ({ row }) => {
         const form = row.original;

         return (
            <DropdownMenu>
               <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                     <span className="sr-only">Open menu</span>
                     <MoreHorizontal />
                  </Button>
               </DropdownMenuTrigger>
               <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem
                     onClick={() => navigator.clipboard.writeText(form.id)}
                  >
                     Copy payment ID
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>View customer</DropdownMenuItem>
                  <DropdownMenuItem>View payment details</DropdownMenuItem>
               </DropdownMenuContent>
            </DropdownMenu>
         );
      },
   },
];

export function FormTableList() {

   const [sorting, setSorting] = React.useState<SortingState>([]);
   const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
      []
   );
   const [columnVisibility, setColumnVisibility] =
      React.useState<VisibilityState>({});
   const [rowSelection, setRowSelection] = React.useState({});

   const table = useReactTable<FormType>({
      data: forms,
      columns,
      onSortingChange: setSorting,
      onColumnFiltersChange: setColumnFilters,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      onColumnVisibilityChange: setColumnVisibility,
      onRowSelectionChange: setRowSelection,
      state: {
         sorting,
         columnFilters,
         columnVisibility,
         rowSelection,
      },
   });

   return (
      <div className="w-full flex items-center">
         <Table>
            <TableHeader>
               {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                     {headerGroup.headers.map((header) => (
                        <TableHead
                           style={header.getSize() == 0 ? {width: "auto"} : { width: `${header.getSize()}%` }} 
                           key={header.id} 
                           className="table-header" >
                           {header.isPlaceholder ? null : 
                           flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                           )}
                        </TableHead>
                     ))}
                  </TableRow>
               ))}
            </TableHeader>
            <TableBody>
               {table.getRowModel().rows?.length ? (
                 table.getRowModel().rows.map((row) => (
                  <TableRow 
                     key={row.id}
                     data-state={row.getIsSelected() && "selected"}
                  >
                     {row.getVisibleCells().map((cell) => (
                        <TableCell
                       
                           key={cell.id} 
                           className="table-row-cell">
                           {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                           )}
                        </TableCell>
                     ))}
                  </TableRow>
                 ))
               ) : (
                  <TableRow>
                     <TableCell colSpan={columns.length}>
                        No results.
                     </TableCell>
                  </TableRow>
               )}
            </TableBody>
         </Table>
      </div>
   );
}
