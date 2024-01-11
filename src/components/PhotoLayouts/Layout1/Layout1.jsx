import './Layout1.scss'

export default function Layout1({photoUrls})
{
    return (
        <div>
            {photoUrls[0] && <img className='img-fluid layout-1' src={photoUrls[0].url} />}
        </div>
    )
}