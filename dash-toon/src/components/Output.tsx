import React, { Component } from 'react';

interface State {
    ispending: boolean;
    imageUrl: string;
    error: Error | null;
}

class ImageDisplay extends Component<{}, State> {
    constructor(props:any) {
        super(props);
        this.state = {
            ispending: true,
            imageUrl: '',
            error: null,
        };
    }

    async query(data: any) {
        const response = await fetch(
            "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
            {
                headers: {
                    "Accept": "image/png",
                    "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        if (!response.ok) {
            throw new Error(`Http error code ${response.status}`);
        }
        const imageUrl = await response.text();
        // return result;
        this.setState({imageUrl})
    }

    componentDidMount() {
        // Replace with the URL of your image API
        const imageUrl = 'https://picsum.photos/200';

        fetch(imageUrl)
            .then(response => response.blob())
            .then(blob => {
                const imageUrl = URL.createObjectURL(blob);
                this.setState({ imageUrl });
            })
            .catch(error => {
                this.setState({ error });
            });
    }

    render() {
        const { ispending, imageUrl, error } = this.state;

        return (
            <div>
                {error ? (
                    <div>Error loading image: {error.message}</div>
                ) : (
                    <img src={imageUrl} alt="Image" />
                )}
            </div>
        );
    }
}

export default ImageDisplay;
