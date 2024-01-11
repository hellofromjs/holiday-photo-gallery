import './Layout5.scss'

export default function Layout5({photoUrls})
{
    return (
        <div className='layout-2'>
            {photoUrls[0] && <img className='img-fluid' src={photoUrls[0].url} />}
            {photoUrls[1] && <img className='img-fluid' src={photoUrls[1].url} />}
        </div>
    )
}