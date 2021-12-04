import { packages } from '../../constant/interviewer'
import Bundle from '../Primary Components/Interview Bundle/Bundle'

export default function Packages () {
    return(<>
            <h1 className="headline">Explore Our Packages </h1>
            <section className="package-details">
                {packages.map(pack => (
                   <Bundle id={pack.id} title={pack.title} description={pack.description} details={pack.details} />
                ))}
            </section>
         </>
    )
}