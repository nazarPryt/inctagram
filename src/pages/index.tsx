import {getLayoutWithHeader} from '_app/Layouts/unauthorized/Unauthorized'

const Home = () => {
    return (
        <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolores ea hic, natus neque qui
            voluptate? Animi aut commodi, ea facere facilis inventore magnam nostrum sapiente sequi soluta vel voluptas?
        </div>
    )
}

Home.getLayout = getLayoutWithHeader
export default Home
