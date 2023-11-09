import React from "react"
import './image.css'
export const IndvImage = ({ image }: { image: Blob[] }) => {
    return (
        <div className="container-image">
            {image.map((imgblob, index) => (
                <div key={index} className="gallery-item">
                    <div className='gallery-image'>
                        <img src={URL.createObjectURL(imgblob)} />
                    </div>
                </div>
            ))}
        </div>
    )
}