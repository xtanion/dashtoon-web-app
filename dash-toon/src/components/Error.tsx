import './error.css'

export const ErrorMessage = ({ message }: { message: string }) => {
    return (
        <div className="err-wrapper">
            <div className="error-img">
                <img src='/dead-cat.svg' alt='ERROR' width={100} height={100}/>
                <p className="error-text">{message}</p>
            </div>
        </div>
    )
}