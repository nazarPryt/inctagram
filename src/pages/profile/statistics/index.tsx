import {getAuthorizedLayout} from '@/_app/Layouts/authorized'
import {Button} from '@nazar-pryt/inctagram-ui-kit'

export default function StatisticsPage() {
    const handleClick = () => {
        throw new Error('Oops, something went wrong!')
    }

    return (
        <>
            Statistics page
            <Button onClick={handleClick}>test ErrorBoundary, will throw an error</Button>
        </>
    )
}
StatisticsPage.getLayout = getAuthorizedLayout
