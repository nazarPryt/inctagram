import {getAuthorizedLayout} from '@/_app/Layouts/authorized/AuthorizedLayout'
import {AllPostsList} from '@/widgets/AllPostsList/AllPostsList'

export default function Home() {
    return <AllPostsList posts={data.items} />
}

Home.getLayout = getAuthorizedLayout

const data = {
    items: [
        {
            createdAt: '2023-07-14T14:50:09.268Z',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolores ea hic, natus neque qui voluptate? Animi aut commodi, ea facere facilis inventore magnam nostrum sapiente sequi soluta vel voluptas',
            id: 1,
            images: [
                {
                    fileSize: 300,
                    height: 300,
                    uploadId: '1',
                    url: 'https://loremflickr.com/500/500',
                    width: 300,
                },
                {
                    fileSize: 300,
                    height: 300,
                    uploadId: '2',
                    url: 'https://loremflickr.com/500/500/cat',
                    width: 300,
                },
                {
                    fileSize: 300,
                    height: 300,
                    uploadId: '3',
                    url: 'https://loremflickr.com/500/500/car',
                    width: 300,
                },
            ],
            location: 'location',
            updatedAt: '2023-07-14T14:50:09.268Z',
        },
        {
            createdAt: '2023-07-14T14:50:09.268Z',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolores ea hic, natus neque qui voluptate? Animi aut commodi, ea facere facilis inventore magnam nostrum sapiente sequi soluta vel voluptas',
            id: 2,
            images: [
                {
                    fileSize: 300,
                    height: 300,
                    uploadId: '1',
                    url: 'https://loremflickr.com/500/500/dog',
                    width: 300,
                },
                {
                    fileSize: 300,
                    height: 300,
                    uploadId: '2',
                    url: 'https://loremflickr.com/500/500/rain',
                    width: 300,
                },
            ],
            location: 'location',
            updatedAt: '2023-07-14T14:50:09.268Z',
        },
    ],
    page: 1,
    pageSize: 10,
    pagesCount: 2,
    totalCount: 10,
}
