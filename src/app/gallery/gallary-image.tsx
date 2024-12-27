"use client";
import { Heart } from "@/components/icon/heart";
import { CldImage, cloudinaryLoader } from "next-cloudinary";
import { SetkAsFavoriteAction } from "./actions";
import { useTransition } from "react";
import { SearchResult } from "./page";
import { FullHeart } from "@/components/icon/fullheart";

export function GalleryImage(props :any & {imageData: SearchResult}) {
    
    const [transition, starttransition] = useTransition();

    const {imageData} = props;

    const isFavorite = imageData.tags.includes("favorite");

    return <div className="relative">
            <CldImage {...props} src={imageData.public_id}/>
            {isFavorite ? 
                <FullHeart 
                onClick={() => {
                  starttransition(() => {
                  SetkAsFavoriteAction(imageData.public_id, false);
                  });
                }}
                className="absolute top-2 right-2 hover:text-white text-red-500 cursor-pointer"
            />
                
                :
                
                <Heart 
                onClick={() => {
                    starttransition(() => {
                  SetkAsFavoriteAction(props.public_id, true);
                  });
                }}
                className="absolute top-2 right-2 hover:text-red-500 cursor-pointer"
            />
            }
            
        </div>
}