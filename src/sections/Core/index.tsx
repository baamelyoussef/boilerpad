import { getAllBoilerplates } from "@/actions/boilerplates";
import { useEffect, useState } from "react";
import { Skeleton } from "../skeleton";
import { ExternalLinkIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import Filters from "@/components/Filter";
import { useAtom } from "jotai/react";
import { selectedCreatorIds, selectedTechsIds } from "@/atoms";

const Core = () => {
  const [boilerPlates, setBoilerPlates] = useState<any>(null);
  const [allBoilerPlates, setAllBoilerPlates] = useState<any>(null);
  const [atomSelectedTechs, setAtomSelectedTechs] = useAtom(selectedTechsIds)
  const [atomSelectedCreators, setAtomSelectedCreators] = useAtom(selectedCreatorIds)
  const [isBoilerplatesLoading, setIsBoilerplatesLoading] = useState(true);
  const getBoilerplateData = async () => {
    const data = await getAllBoilerplates();
    if (data) {
setBoilerPlates(data)
      setAllBoilerPlates(data);
      setIsBoilerplatesLoading(false);
    }
  };
  
  useEffect(() => {
    const filterBoilerplates = () => {
      if (!atomSelectedTechs?.length && !atomSelectedCreators?.length) {
        // If no filters selected, set all boilerplates
        setBoilerPlates(allBoilerPlates);
      } else {
        // Filter boilerplates based on selected techs and creators
        const filteredBoilerplates = allBoilerPlates?.filter((boilerplate:any) => {
          // Check if any of the selected techs exists in boilerplate's techs
          const hasSelectedTech = boilerplate?.boilerplates_techs.some((tech:any) =>
            atomSelectedTechs.includes(tech.techs.id)
          );
          // Check if any of the selected creators match the boilerplate's creator name
          const hasSelectedCreator = atomSelectedCreators?.includes(boilerplate.creators.id);
          return hasSelectedTech || hasSelectedCreator;
        });
        setBoilerPlates(filteredBoilerplates);
      }
    };
  
    filterBoilerplates();
  }, [atomSelectedTechs, atomSelectedCreators]);
    useEffect(() => {
    if (!boilerPlates) {
      getBoilerplateData();
    }
  }, [boilerPlates]);

  return (
    <div className='min-h-[852px] w-[100%] p-6 bg-slate-800 rounded-xl'>
      <Filters />
      {!isBoilerplatesLoading ? (
        <div>
          {/*Filter */}
          <div className='w-full'></div>
          {/*Filter */}
          <div>
            <div className='flex flex-wrap gap-4'>
              {boilerPlates?.map((boilerplate: any, index: number) => {
                return (
                  <div
                    key={index}
                    className='card w-[250px] bg-slate-900 shadow-xl h-82 hadow-lg transition-all duration-700 hover:scale-105'>
                    <figure>
                      <img
                        src={
                          (process.env.NEXT_PUBLIC_SUPABASE_URL ?? "") +
                          process.env.NEXT_PUBLIC_SUPABASE_STORAGE_PATH +
                          boilerplate?.lp_image
                        }
                        alt='lp_image'
                        className='h-[9rem]'
                      />
                    </figure>
                    <div className='p-4'>
                      <div className='flex flex-row justify-between w-full items-center'>
                        <div className=' pb-2 flex items-center  gap-2 h-8'>
                          {boilerplate?.boilerplates_techs?.map(
                            (boilerplates_tech: any, index: number) => {
                              return (
                                <div className='w-full' key={index}>
                                  <div
                                    className='tooltip  z-10'
                                    data-tip={boilerplates_tech?.techs?.name}>
                                    <div className='w-6 '>
                                      <img
                                        src={
                                          (process.env
                                            .NEXT_PUBLIC_SUPABASE_URL ?? "") +
                                          process.env
                                            .NEXT_PUBLIC_SUPABASE_STORAGE_PATH +
                                          boilerplates_tech?.techs?.image_id
                                        }
                                        className='cursor-pointer'
                                      />
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                        <a href={boilerplate?.link} target='_blank'>
                          {" "}
                          <ExternalLinkIcon className='cursor-pointer' />
                        </a>
                      </div>
                      <h2 className='text-lg font-bold'>{boilerplate?.name}</h2>
                      <p className='text-sm line-clamp-2'>
                        {boilerplate?.description}{" "}
                      </p>
                      <div className='card-actions justify-between items-center'>
                        <div className='flex gap-1 text-sm items-center'>
                          Starting at{" "}
                          <p className='font-bold text-[#fadc57] text-lg'>
                            ${boilerplate?.price_from}
                          </p>
                        </div>
                        <div className='w-12  mt-2  '>
                          <div
                            className='tooltip  z-10'
                            data-tip={boilerplate?.creators?.name}>
                            <a
                              href={boilerplate?.creators?.twitter_link}
                              target='_blank'>
                              <img
                                className='rounded-full cursor-pointer'
                                src={
                                  (process.env.NEXT_PUBLIC_SUPABASE_URL ?? "") +
                                  process.env
                                    .NEXT_PUBLIC_SUPABASE_STORAGE_PATH +
                                  boilerplate?.creators?.image_id
                                }
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className='flex flex-wrap gap-6'>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      )}
    </div>
  );
};

export default Core;
