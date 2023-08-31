import { getAuthorizedLayout } from '_app/Layouts/authorized/AuthorizedLayout'
import { AllPostsList } from 'widgets/AllPostsList/AllPostsList'

export default function Home(): JSX.Element {
  return <AllPostsList posts={data.items} />
}

Home.getLayout = getAuthorizedLayout

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
          uploadId: '1',
        },
        {
          url: 'https://loremflickr.com/500/500/cat',
          width: 300,
          height: 300,
          fileSize: 300,
          uploadId: '2',
        },
        {
          url: 'https://loremflickr.com/500/500/car',
          width: 300,
          height: 300,
          fileSize: 300,
          uploadId: '3',
        },
      ],
      createdAt: '2023-07-14T14:50:09.268Z',
      updatedAt: '2023-07-14T14:50:09.268Z',
    },
    {
      id: 2,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolores ea hic, natus neque qui voluptate? Animi aut commodi, ea facere facilis inventore magnam nostrum sapiente sequi soluta vel voluptas',
      location: 'location',
      images: [
        {
          url: 'https://loremflickr.com/500/500/dog',
          width: 300,
          height: 300,
          fileSize: 300,
          uploadId: '1',
        },
        {
          url: 'https://loremflickr.com/500/500/rain',
          width: 300,
          height: 300,
          fileSize: 300,
          uploadId: '2',
        },
      ],
      createdAt: '2023-07-14T14:50:09.268Z',
      updatedAt: '2023-07-14T14:50:09.268Z',
    },
  ],
}
