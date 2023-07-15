import React from 'react'
import {PostsList} from 'widgets/PostsList/PostsList'
import {getAuthorizedLayout} from '_app/Layouts/authorized/AuthorizedLayout'

const data = {
    totalCount: 10,
    pagesCount: 2,
    page: 1,
    pageSize: 10,
    items: [
        {
            id: 1,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolores ea hic, natus neque qui voluptate? Animi aut commodi, ea facere facilis inventore magnam nostrum sapiente sequi soluta vel voluptas',
            location: 'location',
            images: [
                {
                    url: 'https://loremflickr.com/500/500',
                    width: 300,
                    height: 300,
                    fileSize: 300,
                    uploadId: 'string',
                },
            ],
            createdAt: '2023-07-14T14:50:09.268Z',
            updatedAt: '2023-07-14T14:50:09.268Z',
        },
    ],
}

export default function Home() {
    return <PostsList posts={data.items} />
}

Home.getLayout = getAuthorizedLayout
