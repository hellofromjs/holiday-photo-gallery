import './Layout4.scss'

export default function Layout4({photoUrls})
{
    console.log(photoUrls)
    return (
        <div>
            {photoUrls[0] && <img className='img-fluid' src={photoUrls[0].url} />}
        </div>
    )
}