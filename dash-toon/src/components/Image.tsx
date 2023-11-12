import React, {useRef} from "react"
import './image.css'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export const IndvImage = ({ image }: { image: Blob[] }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    let imageURL = null;
    const handleDownloadGrid = async () => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');

            if (context) {
                const p = 5; //padding
                const colm = 2;
                const rows = Math.ceil(image.length / colm);
                canvas.width = colm * 256 + (colm)*p;
                canvas.height = rows * 256 + (colm)*p;

                context.fillStyle = "#ffffff";
                context.fillRect(0, 0, canvas.width, canvas.height);

                const imagePromises = image.map((blob) => {
                    return new Promise<HTMLImageElement>((resolve) => {
                        const img = new Image();
                        img.onload = () => {
                            resolve(img);
                        };
                        img.src = URL.createObjectURL(blob);
                    });
                });

                const images = await Promise.all(imagePromises);

                images.forEach((img, i) => {
                    const x = (i % colm) * 256;
                    const y = Math.floor(i / colm) * 256;
                    context.drawImage(img, x+p, y+p, 256, 256);
                });

                const link = document.createElement('a');
                imageURL = canvas.toDataURL('image/png');
                link.href = imageURL;
                link.download = 'panel_10.png';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    }

    // const handleButtonEditor = () => {
    //     if (imageURL == null) {
    //         handleDownloadGrid;
    //     }

    // }
    return (
        <div className="container-image">
            {image.map((imgblob, index) => (
                <div key={index} className="gallery-item">
                    <div className='gallery-image'>
                        <img src={URL.createObjectURL(imgblob)} />
                    </div>
                </div>
            ))}

            <div className='download-wrap'>
                <Link to="/editor" state={{image}}>
                    <button className="circle-rev">
                        <i className='fa fa-arrow-right'></i>
                    </button>
                </Link>
                <button className="circle" onClick={handleDownloadGrid}>
                    <i className='fa fa-arrow-right'></i>
                </button>
            </div>
            <canvas ref={canvasRef} style={{display: 'none'}} />
        </div>
    )
}