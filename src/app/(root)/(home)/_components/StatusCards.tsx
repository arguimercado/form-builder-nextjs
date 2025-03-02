import { GetFormStat } from "@/actions/formbuilder";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { LuView } from "react-icons/lu";

interface IStatusCardProps {
   title: string;
   icon?: React.ReactNode;
   helperText: string;
   value: string;
   loading: boolean;
   className?: string;
}

const StatusCard = ({
   title,
   icon,
   helperText,
   value,
   loading,
   className,
}: IStatusCardProps) => {
   return (
      <div
         className={cn(
            "w-full p-4 bg-neutral-200 text-black dark:bg-neutral-800 dark:text-white rounded-lg border dark:border-slate-600 relative",
            className
         )}
      >
         <div className="flex flex-row items-center">
            {icon && <div className="top-0 right-0 absolute p-2">{icon}</div>}
            <div>
              {loading ? <Skeleton className="w-12 h-12 rounded-full" /> : <h2 className="dark:text-slate-50 text-neutral-800">{value}</h2>}
               
            </div>
            <div className="flex flex-col ml-4">
               <h4>{title}</h4>
               <p className="text-sm">{helperText}</p>
            </div>
         </div>
      </div>
   );
};

interface IProps {
   data: Awaited<ReturnType<typeof GetFormStat>>;
   loading: boolean;
}

const StatusCards = ({ loading, data }: IProps) => {
   return (
      <div className="w-full pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
         <StatusCard
            title="Total Visits"
            icon={<LuView className="text-neutral-600 dark:text-neutral-200" />}
            helperText="All time visits"
            value={data.visits.toLocaleString()}
            loading={loading}
            className="shadow-md"
         />
         <StatusCard
            title="Total Submits"
            icon={<LuView className="text-neutral-600 dark:text-neutral-200" />}
            helperText="All form submitted"
            value={data.visits.toLocaleString()}
            loading={loading}
            className="shadow-md"
         />
      </div>
   );
};

export default StatusCards;
