import { GetFormStat } from "@/actions/formbuilder";
import StatusCards from "@/app/(root)/(home)/_components/StatusCards";




export default async function Home() {
  const stats = await GetFormStat();


  return (
    <div className="flex flex-col w-full container mx-auto pt-4" >
      <StatusCards loading={false} data={stats} />
    </div>
  );
}



