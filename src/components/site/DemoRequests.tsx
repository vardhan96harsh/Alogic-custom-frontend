// import { useQuery } from "@tanstack/react-query";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
// import { Loader2 } from "lucide-react";
// import { API_BASE_URL, getStoredToken } from "@/lib/api";

// export default function DemoRequests() {
//   const demoRequestsQuery = useQuery({
//     queryKey: ["demo-requests"],
//     queryFn: async () => {
//       const res = await fetch(`${API_BASE_URL}/api/mail/requests`, {
//         headers: { Authorization: `Bearer ${getStoredToken()}` },
//       });
//       const data = await res.json();
//       return data.requests ?? [];
//     },
//   });

//   return (
//     <section className="rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] overflow-hidden mt-10">
//       <div className="border-b border-border p-6">
//         <h2 className="text-xl font-semibold text-foreground">Demo Requests</h2>
//         <p className="text-sm text-muted-foreground">All users who requested a demo.</p>
//       </div>
//       <div className="overflow-x-auto">
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>Name</TableHead>
//               <TableHead>Email</TableHead>
//               <TableHead>Organization</TableHead>
//               <TableHead>Message</TableHead>
//               <TableHead>Date</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {demoRequestsQuery.isLoading ? (
//               <TableRow>
//                 <TableCell colSpan={5} className="py-10 text-center text-muted-foreground">
//                   <Loader2 className="mr-2 inline h-4 w-4 animate-spin" />
//                   Loading demo requests…
//                 </TableCell>
//               </TableRow>
//             ) : demoRequestsQuery.data.length === 0 ? (
//               <TableRow>
//                 <TableCell colSpan={5} className="py-10 text-center text-muted-foreground">
//                   No demo requests yet.
//                 </TableCell>
//               </TableRow>
//             ) : (
//               demoRequestsQuery.data.map((req: any) => (
//                 <TableRow key={req._id}>
//                   <TableCell>{req.name}</TableCell>
//                   <TableCell>{req.email}</TableCell>
//                   <TableCell>{req.organization}</TableCell>
//                   <TableCell>{req.message || "N/A"}</TableCell>
//                   <TableCell>{req.createdAt ? new Date(req.createdAt).toLocaleDateString() : "—"}</TableCell>
//                 </TableRow>
//               ))
//             )}
//           </TableBody>
//         </Table>
//       </div>
//     </section>
//   );
// }