import { getAllBoilerplates } from "@/actions/boilerplates";
import { useEffect, useState } from "react";
import { Skeleton } from "../skeleton";
import { ExternalLinkIcon, EyeOpenIcon } from "@radix-ui/react-icons";

const Core = () => {
    const [boilerPlates, setBoilerPlates] = useState<any>(null)
    const [isBoilerplatesLoading, setIsBoilerplatesLoading] = useState(true)
    const getBoilerplateData =async () =>{
        const data= await getAllBoilerplates()
        if(data){
console.log(data);

            setBoilerPlates(data)
            setIsBoilerplatesLoading(false)
        }
        
    }
    useEffect(() => {
      if(!boilerPlates){
        getBoilerplateData()
      }
    }, [boilerPlates])
    
	return (
		<div className="min-h-[852px] p-6 bg-slate-800 rounded-xl" >
            {!isBoilerplatesLoading?<div>
{/*Filter */}
<div className="w-full">
        
</div>
{/*Filter */}
<div>
<div className="flex flex-wrap gap-4">

{boilerPlates?.map((boilerplate:any)=>{
return(
<div className="card w-64 bg-slate-900 shadow-xl h-82 hadow-lg transition-all duration-700 hover:scale-105">
<figure><img src={(process.env.NEXT_PUBLIC_SUPABASE_URL ?? '') + process.env.NEXT_PUBLIC_SUPABASE_STORAGE_PATH+ boilerplate?.lp_image} alt="lp_image" className="h-[9rem]"/></figure>
  <div className="p-4">
<div className="flex flex-row justify-between w-full items-center">
  <div className=" pb-2 flex items-center  gap-2 h-8">
    {
        boilerplate?.boilerplates_techs?.map((boilerplates_tech:any)=>{
            return(
<div className="w-full">
    <div className="tooltip  z-10" data-tip={boilerplates_tech?.techs?.name}>
    <div className="w-6 ">

      <img src={(process.env.NEXT_PUBLIC_SUPABASE_URL ?? '') + process.env.NEXT_PUBLIC_SUPABASE_STORAGE_PATH+ boilerplates_tech?.techs?.image_id} className="cursor-pointer"/>
    </div>
    </div>
  </div>
            )
        })
    }
 
</div>
 <a href={boilerplate?.link} target="_blank">  <ExternalLinkIcon  className="cursor-pointer"/></a></div>
    <h2 className="text-lg font-bold">{boilerplate?.name}</h2>
    <p className="text-sm line-clamp-2">{boilerplate?.description} </p>
    <div className="card-actions justify-end">
    <div className="avatar">
  <div className="w-12 rounded-full mt-2">
    <img src={(process.env.NEXT_PUBLIC_SUPABASE_URL ?? '') + process.env.NEXT_PUBLIC_SUPABASE_STORAGE_PATH+ boilerplate?.creators?.image_id} />
  </div>
</div>
    </div>
  </div>
</div>)})}

</div>
</div>
</div>:<div className="flex flex-wrap">
    <Skeleton/>
    <Skeleton/>
    <Skeleton/>
    <Skeleton/>
    <Skeleton/>
    <Skeleton/>


    </div>}
		</div>
	);
};

export default Core;
