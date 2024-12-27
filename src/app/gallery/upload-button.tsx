"use client"
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";

export default function UploadButton() {

    const router = useRouter();

    return(
            <CldUploadButton className="px-10"
             onSuccess={(result) => {
              //setResources(result.info.public_id);
              setTimeout(() =>{
                    router.refresh();
                    },1000);
                }}
                uploadPreset="svsgd1wx" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
                    </svg>
            </CldUploadButton>
        )
}