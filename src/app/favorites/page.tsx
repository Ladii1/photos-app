import cloudinary from "cloudinary";
import { GalleryImage } from "../gallery/gallary-image";
import { SearchResult } from "../gallery/page";

export default async function FavoritesPage() {

   const result = (await cloudinary.v2.search
    .expression('resource_type:image AND tags=favorite')
    .sort_by('created_at','desc')
    .with_field("tags")
    .max_results(10)
    .execute()) as { resources: SearchResult[] };
    
    return <section>
        <div className="flex flex-col gap-8">
            
            <div className="flex justify-between">
                <h1 className="text-4xl font-bold">Favorites</h1>
            </div>

            <div className="grid grid-cols-4 gap-4">
                {result.resources.map((result) =>( 
                    <GalleryImage
                        key={result.public_id}
                        imageData = {result} 
                        width="400"
                        height="300"
                        alt= "an image"
                    />
                ))}
            </div>

        </div>
    </section>
}