import './Layout3.scss'

export default function Layout3({photoUrls})
{
    console.log(photoUrls)
    return (
        <div className='layout-3'>
            {photoUrls[0] && <img className='img-fluid' src={photoUrls[0].url} />}
            {photoUrls[1] && <img className='img-fluid' src={photoUrls[1].url} />}
            {photoUrls[2] && <img className='img-fluid' src={photoUrls[2].url} />}
            {photoUrls[3] && <img className='img-fluid' src={photoUrls[3].url} />}
        </div>
    )
}