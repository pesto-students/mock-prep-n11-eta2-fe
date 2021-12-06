import { packages } from '../../constant/data'
import Bundle from '../Primary Components/Interview Bundle/Bundle'

export default function Packages () {
    return(<>
            <section className="package-details">
                {packages.map(pack => (
                   <Bundle id={pack.id} title={pack.title} description={pack.description} details={pack.details} />
                ))}
            </section>
         </>
    )
}