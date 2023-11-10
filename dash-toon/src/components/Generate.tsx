import React, { ChangeEvent, FormEvent, Component } from 'react';
import Container from 'react-bootstrap/Container'
import '../index.css'
import './Output'
import { IndvImage } from './Image';
import { Spinner } from './Spinner';

interface State {
    ispending: boolean;
    description: string;
    image: Blob[] | null,
    error: Error | null;
}

class Generate extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            ispending: true, // set to true (for testing only)
            description: '',
            image: null,
            error: null,
        };
    }

    async query(data: any) {
        console.log('found data: ', data);
        const empty: { inputs: string } = { inputs: data };
        const response = await fetch(
            "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
            {
                headers: {
                    "Accept": "image/png",
                    "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(empty),
            }
        );
        if (!response.ok) {
            throw new Error(`Http error code ${response.status}`);
        }
        const image = await response.blob(); //change to blob
        return image;
        // this.setState({ image })
        // console.log("Success");
    }

    async fetchall(data: any) {
        console.log('Fetching all', data);
        const queryArr: string[] = data.split(',');
        const imageBlobs: Promise<Blob>[] = []
        for (const q of queryArr) {
            imageBlobs.push(this.query(q));
        }
        const image = await Promise.all(imageBlobs);
        this.setState({ image });
        const ispending = true; // set to true
        this.setState({ ispending });
    }


    handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            [e.target.name]: e.target.value,
        } as unknown as Pick<State, keyof State>);
    };

    handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const ispending = false;
        const image = null;
        this.setState({ ispending });
        this.setState({ image });
        console.log('Input:', this.state);
        this.fetchall(this.state.description);
    };

    render() {
        const { ispending, description, image, error } = this.state;
        return (
            <div className='task-page'>
                <div className='image-prompt-form-wrapper'>
                    <form className='image-prompt-form desktop' autoComplete='off' onSubmit={this.handleSubmit}>
                        {/* <label><span className="screen-reader-text">Search for:</span></label> */}
                        <input
                            type="text"
                            name="description"
                            className="text-input text-input-outlined image-prompt-input"
                            placeholder='Start with a detailed description'
                            value={description}
                            onChange={this.handleChange}
                        />
                        <button className='btn btn-filled btn-secondary image-prompt-btn' type='submit'>Generate</button>
                    </form>
                </div>

                <div className='loading'>
                    {ispending ? (<div> </div>) : (<Spinner />)}
                </div>

                <div className='task-page-generations'>
                    {image ? (<IndvImage image={image} />) : (<div> </div>)}
                </div>
            </div>

        );
    }
}

export default Generate;
