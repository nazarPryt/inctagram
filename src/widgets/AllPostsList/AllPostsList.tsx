import {useState} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import {Post} from '@/entities/Post/Post'
import {useGetAllPostsQuery} from '@/entities/Post/api/all-posts-api'
import {ParamsType} from '@/entities/Post/api/all-posts-api.type'

import {AllPostsListWrapper} from './AllPostsList.styled'
import {AllPostsListSkeleton} from './AllPostsListSkeleton'

const style = {
    border: '1px solid green',
    height: 30,
    margin: 6,
    padding: 8,
}

export const AllPostsList = () => {
    const params: ParamsType = {pageSize: 3}
    const [items, setItems] = useState(Array.from({length: 10}))

    console.log('items.length', items.length)
    const endCursorPostId = items.length - 1
    // const {data, isLoading} = useGetAllPostsQuery({endCursorPostId, params})

    const fetchMoreData = () => {
        setTimeout(() => {
            setItems(items.concat(Array.from({length: 5})))
        }, 1500)
    }

    // if (isLoading) {
    //     return <AllPostsListSkeleton />
    // }

    // if (data && !!data.items.length) {
    return (
        <AllPostsListWrapper id={'scrollableDiv'} style={{height: 300, overflow: 'auto'}}>
            <InfiniteScroll
                dataLength={items.length} //This is important field to render the next data
                endMessage={
                    <p style={{textAlign: 'center'}}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
                hasMore
                loader={<h4>Loading...</h4>}
                next={fetchMoreData}
                scrollableTarget={'scrollableDiv'}
                // pullDownToRefresh
                // pullDownToRefreshContent={<h3 style={{textAlign: 'center'}}>&#8595; Pull down to refresh</h3>}
                // pullDownToRefreshThreshold={50}
                // // // below props only if you need pull down functionality
                // refreshFunction={this.refresh}
                // releaseToRefreshContent={<h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>}
            >
                {items.map((post, index) => (
                    // <Post key={index} post={post} />
                    <div key={index} style={style}>
                        div - #{index}
                    </div>
                ))}
            </InfiniteScroll>
        </AllPostsListWrapper>
    )
}
//
//     return null
// }
