import { useEffect, useState } from "react";
import MultiRangeSlider from "../ui/MultiRangeSlider";
import { getAllTechs } from "@/actions/techs";
import { getAllCreators } from "@/actions/creators";
import { useAtom } from "jotai/react";
import { selectedCreatorIds, selectedTechsIds } from "@/atoms";

const Filters = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [rangevalue, setRangevalue] = useState(0);
    const [techs, setTechs] = useState<any>([]);
    const [creators, setCreators] = useState<any>([]);
    const [stackName, setStackName] = useState("");
    const [atomSelectedTechs, setAtomSelectedTechs] = useAtom(selectedTechsIds)
    const [atomSelectedCreators, setAtomSelectedCreators] = useAtom(selectedCreatorIds)
    const [creatorName, setCreatorName] = useState("");
    const [selectedTechs, setSelectedTechs] = useState<any>([]);
    const [selectedCreators, setSelectedCreators] = useState<any>([]);
  
    const getTechs = async () => {
      const res = await getAllTechs();
      if (res) {
        setTechs(res);
      }
    };
    const getCreators = async () => {
      const res = await getAllCreators();
      if (res) {
        console.log(res);
        
        setCreators(res);
      }
    };
  
    useEffect(() => {
      if (techs?.length < 1 || creators?.length < 1) {
        getTechs();
        getCreators();
      }
    }, [techs, creators]);
  
    const handleCreatorNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCreatorName(e.target.value);
    };
    const handleStackNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStackName(e.target.value);
      };
    const handleTechClick = (techId: string) => {
      const index = selectedTechs.indexOf(techId);
      if (index === -1) {
        setSelectedTechs([...selectedTechs, techId]);
      } else {
        const updatedTechs = [...selectedTechs];
        updatedTechs.splice(index, 1);
        setSelectedTechs(updatedTechs);
      }
    };
    const handleCreatorClick = (creatorId: string) => {
        const index = selectedCreators.indexOf(creatorId);
        if (index === -1) {
          setSelectedCreators([...selectedCreators, creatorId]);
        } else {
          const updatedCreators = [...selectedCreators];
          updatedCreators.splice(index, 1);
          setSelectedCreators(updatedCreators);
        }
      };    
    const handleApplyTechs = () => {
        setAtomSelectedTechs(selectedTechs);
      };
      const handleApplyCreators = () => {
        setAtomSelectedCreators(selectedCreators);
      };
  return (
    <div className='mb-6'>
      <ul className='menu  lg:menu-horizontal rounded-box flex gap-2 items-center'>
        <li className=' '>
          <div className='text-black font-bold rounded-xl hover:bg-[#fadc57]	 bg-[#fadc57] py-2.5'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height='25'
              viewBox='0 0 24 24'>
              <path
                fill='#000000'
                d='M15 19.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0L9.29 16.7a.99.99 0 0 1-.29-.83v-5.12L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L15 10.75zM7.04 5L11 10.06v5.52l2 2v-7.53L16.96 5z'
              />
            </svg>{" "}
            Filters
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-4 h-4'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='m8.25 4.5 7.5 7.5-7.5 7.5'
              />
            </svg>
          </div>
        </li>
        <li>
          <div className='dropdown dropdown-bottom p-0  '>
            <div tabIndex={0} role='button' className='btn bg-transparent '>
              <a className='flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='w-6 h-6'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                  />
                </svg>
                Price Range
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='w-5 h-5'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='m19.5 8.25-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </a>
            </div>
            <div
              tabIndex={0}
              className='dropdown-content z-[100] menu p-2 shadow bg-base-100 rounded-box w-[300px] h-36 '>
              <div className='card gap-2 flex p-4'>
                <MultiRangeSlider min={0} max={1000} />
                <button className='btn bg-[#fadc57] mt-12 text-black hover:bg-[#fadc57]'>
                  Apply
                </button>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className='dropdown dropdown-bottom p-0  '>
            <div tabIndex={0} role='button' className='btn bg-transparent '>
              <a className='flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='w-6 h-6'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3'
                  />
                </svg>
                Tech Stacks
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='w-5 h-5'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='m19.5 8.25-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </a>
            </div>
            <div
              tabIndex={0}
              className='dropdown-content z-[100] menu p-2 shadow bg-base-100 rounded-box w-[300px] '>
              <div className='card gap-2 flex p-4'>
                <label className='input input-bordered flex items-center gap-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    className='w-6 h-6'>
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                    />
                  </svg>
                  <input
        type='text'
        className='grow cursor-text'
        placeholder='Name it..'
value={stackName}
        onChange={handleStackNameChange}
      />
                </label>
<div className="max-h-[200px] w-full overflow-auto -4">
{techs
          .filter((tech: any) =>
            tech.name.toLowerCase().includes(stackName.toLowerCase())
          )
          .map((tech: any) => (
            <button
              key={tech.id}
              className={`w-full btn bg-transparent mt-2 text-black ${
                selectedTechs.includes(tech.id) ? 'border-yellow-500 hover:border-yellow-500' : ''
              }`}
              onClick={() => handleTechClick(tech.id)}>
              <div className='w-full px-3 flex items-center justify-between'>
                <div className='w-6'>
                  <img
                    src={
                      (process.env.NEXT_PUBLIC_SUPABASE_URL ?? '') +
                      process.env.NEXT_PUBLIC_SUPABASE_STORAGE_PATH +
                      tech?.image_id
                    }
                    className='cursor-pointer'
                  />
                </div>
                <p className='text-[#9aa1b0]'>{tech?.name}</p>
              </div>
            </button>
          ))}</div>
                <button onClick={handleApplyTechs} className='btn bg-[#fadc57] mt-2 text-black hover:bg-[#fadc57]'>
                  Apply
                </button>
              </div>
            </div>
          </div>
        </li>
        <li>
        <div className='dropdown dropdown-bottom p-0  '>
            <div tabIndex={0} role='button' className='btn bg-transparent '>
              <a className='flex items-center gap-2'>
              <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='w-6 h-6'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                  />
                </svg>
                Creators
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='w-5 h-5'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='m19.5 8.25-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </a>
            </div>
            <div
              tabIndex={0}
              className='dropdown-content z-[100] menu p-2 shadow bg-base-100 rounded-box w-[300px] '>
              <div className='card gap-2 flex p-4'>
                <label className='input input-bordered flex items-center gap-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    className='w-6 h-6'>
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                    />
                  </svg>
                  <input
          type='text'
          className='grow cursor-text'
          placeholder='Creator Name'
          value={creatorName}
          onChange={handleCreatorNameChange}
        />
                 
                </label>
<div className="max-h-[200px] w-full overflow-auto -4">
{creators
            .filter((creator: any) =>
              creator.name.toLowerCase().includes(creatorName.toLowerCase())
            )
            .map((creator: any) => (
              <button
                key={creator.id}
                className={`w-full btn bg-transparent mt-2 text-black ${
                  selectedCreators.includes(creator.id) ? 'border-yellow-500 hover:border-yellow-500' : ''
                }`}
                onClick={() => handleCreatorClick(creator.id)}>
                <div className='w-full px-3 flex items-center justify-between'>
                  <div className='w-9 '>
                    <img
                    src={
                        (process.env.NEXT_PUBLIC_SUPABASE_URL ?? '') +
                        process.env.NEXT_PUBLIC_SUPABASE_STORAGE_PATH +
                        creator?.image_id
                      }
                      className='cursor-pointer rounded-full'
                    />
                  </div>
                  <p className='text-[#9aa1b0]'>{creator.name}</p>
                </div>
              </button>
            ))}</div>
                <button onClick={handleApplyCreators} className='btn bg-[#fadc57] mt-2 text-black hover:bg-[#fadc57]'>
                  Apply
                </button>
              </div>
            </div>
          </div>
          
        </li>
      </ul>
    </div>
  );
};

export default Filters;
