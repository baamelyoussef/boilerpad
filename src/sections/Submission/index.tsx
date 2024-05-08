import { addSubmission } from "@/actions/submission"
import { Cross1Icon } from "@radix-ui/react-icons"
import { useState } from "react"

export const SubmissionModal = () => {
    const [personaltwit, setPersonaltwit] = useState("")
    const [isSuccess, setIsSuccess] = useState(false)
    const [projectLink, setProjectLink] = useState("")
    const [isSubmissionLoading, setIsSubmissionLoading] = useState(false)

    const handlePersonalTwitChange = (e:any) => {
        setPersonaltwit(e.target.value)
    }

    const handleProjectLinkChange = (e:any) => {
        setProjectLink(e.target.value)
    }

    const isLinkValid = (link: string) => {
        const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
        return urlPattern.test(link)
    }

   

    return (
        <dialog id="my_modal_1" className="modal ">
            <div className="modal-box bg-[#fadc57]">
            <form
  >
                <div className="flex justify-between items-stretch"><div className="flex flex-col mb-4"><h3 className="text-xl text-[#131a29] font-bold ">Boilerplate Submission </h3>  <p className="text-[#131a29]">Just share your links & i&apos;ll gather the data myself</p></div>
                <Cross1Icon className=" text-[#131a29] cursor-pointer" onClick={()=>document.getElementById('my_modal_1').close()}/>
               </div> <label className="input input-bordered flex items-center gap-2 my-2">
                    <p className="min-w-38">Personal Twitter Link</p>
                    <input required type="text" className="grow cursor-text text-white" placeholder="https://twitter.com/boilerpader" value={personaltwit} onChange={handlePersonalTwitChange} />
                </label>
                <label className="input input-bordered flex items-center gap-2 my-2">
                    <p className="min-w-38">Project Link </p>
                    <input required type="text" className="grow cursor-text text-white" placeholder="https://shipfa.st/" value={projectLink} onChange={handleProjectLinkChange} />
                </label>
                <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button type="submit" className="btn bg-[#131a29] w-24" onClick={async (e) => {
                            e.preventDefault()
                            if (isLinkValid(personaltwit) && isLinkValid(projectLink)) {
                                setIsSubmissionLoading(true)
                                const res = await addSubmission({
                                    twitter_link: personaltwit,
                                    boilerplate_link: projectLink
                                })
                                console.log(res);
                                if(!res){
                                    setIsSubmissionLoading(false)
                                    setIsSuccess(true)
                                    setTimeout(() => {
                                        document.getElementById('my_modal_1').close()
                                        setIsSuccess(false)
                                        
                                    }, 1000);
                                }
                            }
                        }}>{isSubmissionLoading ? <span className="loading loading-bars loading-xs" /> : <p>Submit</p>}
                        </button>
                </div>
                    </form>
            </div>
            <div className="toast toast-top toast-center">
  
  {isSuccess&&<div className="alert bg-[#fadc57] text-[#131a29]">
    <span>Message sent successfully.</span>
  </div>}
</div>  
        </dialog>
    )
}
        