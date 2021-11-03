import '../styles/error-page.css';

export const ErrorPage = () => {
    const imageUrl = `https://http.cat/${404}`
    return (
        <img className='error_image'src={imageUrl} alt="error response" />
    )
}