import React, { Component, useRef, useState, RefObject, Context } from 'react';
import context from 'react-bootstrap/esm/AccordionContext';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';

interface TextObject {
    text: string;
    x: number;
    y: number;
}

interface CanvasComponentState {
    isImageLoaded: boolean;
    text: string;
    blobs: Blob[] | null;
}


export class CanvasEditor extends Component<{}, CanvasComponentState> {
    private canvasRef: RefObject<HTMLCanvasElement>;
    private location: ReturnType<typeof useLocation>;
    constructor(props: {}) {
        super(props);
        this.state = {
            isImageLoaded: false,
            text: '',
            blobs: null
        };
        this.canvasRef = React.createRef();
        // this.location = useLocation();
        // this.loadImage()
    }

    // loadImage = ():void => {
    //     console.log('drawing process')
        // const canvas = this.canvasRef.current!;
        // const context = canvas.getContext('2d');
        // const location = useLocation();
        // const blobs = location.state.image;
        // console.log('drawing');

        // const img = new Image();
        // img.onload = () => {
        //     context!.drawImage(img, 0, 0, canvas.width, canvas.height);
        //     this.setState({ isImageLoaded: true });
        // };
        // const uri = URL.createObjectURL(image);
        // img.src = uri; // change to url later
        // URL.revokeObjectURL(uri)
    // };

    componentDidMount() {
        // console.log('canvas:',this.canvasRef.current)

        // const location = useLocation();
        // const blobs = location.state.image;
        // if (canvas) {
        //     // const url = URL.createObjectURL(blob);
        //     // this.loadImage();

        //     // URL.revokeObjectURL(url);
        // }
        console.log('todo')
    }
    componentDidUpdate() {
        // if (prevProps.blob !== this.props.blob) {
        //     const { blob } = this.props;
        //     if (blob) {
        //         const url = URL.createObjectURL(blob);
        //         // this.loadImage();
        //         URL.revokeObjectURL(url);
        //     }
        // }
    }

    handleAddText = () => {
        if (this.state.text.trim() !== '') {
            // setTextObjects([
            //     ...textObjects,
            //     {
            //         text,
            //         x: Math.random() * 400,
            //         y: Math.random() * 400,
            //     },
            // ]);
            // setText('');
            console.log('TODO');
        }
    };
    handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value;
        this.setState({ text });
    };

    drawTextObjects = () => {
        const canvas = this.canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // textObjects.forEach(({ text, x, y }) => {
        //     ctx.fillStyle = '#000';
        //     ctx.font = '20px Arial';
        //     ctx.fillText(text, x, y);
        // });
        console.log('TODO')
    };

    render() {
        const { isImageLoaded, text } = this.state;
        return (
            <div>
                <p>Not in a working phase</p>
                <button onClick={this.handleAddText}>Add Text</button>
                <canvas
                    ref={this.canvasRef}
                    width={500}
                    height={500}
                    style={{ border: '1px solid #ccc' }}
                    onClick={this.drawTextObjects}
                />
                <input
                    type="text"
                    placeholder="Type here..."
                    value={text}
                    onChange={this.handleTextChange}
                    style={{ marginBottom: '10px' }}
                />
            </div>
        );
    }
}
export default CanvasEditor;