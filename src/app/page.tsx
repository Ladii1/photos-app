"use client"
import { CldImage} from 'next-cloudinary';
import { CldUploadButton } from 'next-cloudinary';
import { useState } from 'react';

export default function Home() {

  const [resources, setResources] = useState();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
          <CldUploadButton 
            onSuccess={(result) => {
              setResources(result.info.public_id);
            }}
          uploadPreset="svsgd1wx" />
 
            {resources && (
             <CldImage
               width="960"
               height="600"
               src={resources}
               sizes="100vw"
               alt="Description of my image"
             />
            )}
        
      </main>
               
    </div>
  );
}
