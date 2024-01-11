import './Layout2.scss'

export default function Layout2({photoUrls})
{
    return (
        <div className='layout-2'>
            {photoUrls[0] && <img className='img-fluid' src={photoUrls[0].url} />}
            {photoUrls[1] && <img className='img-fluid' src={photoUrls[1].url} />}
        </div>
    )
}