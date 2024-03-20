import {ChangeEvent} from 'react'

import {useGetUserProfileQuery} from '@/features/User/GeneralInformation/api/userProfile/userProfile.api'
import {useAppDispatch, useAppSelector} from '@/shared/hooks/reduxHooks'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {Avatar, EmptyAvatar, Skeleton, TextArea} from '@nazar-pryt/inctagram-ui-kit'

import {createPostAC} from '../../model/slice/createPostSlice'
import {DescribeWrapper} from './styled'

export const Describe = () => {
    const {t} = useTranslation()
    const dispatch = useAppDispatch()
    const describeText = useAppSelector(state => state.createPost.describeText)

    const {data, isLoading} = useGetUserProfileQuery()

    const UserImage = data && !!data.avatars.length ? data.avatars[0].url : ''
    const changeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(createPostAC.setDescribeText(e.target.value.trim()))
    }
    const re =
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum laudantium odio repellendus sint. Asperiores debitis est excepturi impedit nesciunt nostrum odio possimus, rerum sapiente sit tempora tenetur. Aspernatur culpa cupiditate eius excepturi, exercitationem laborum maxime sit tempore vel! Accusamus alias eos error minus praesentium qui quo repellat velit voluptate?'

    return (
        <DescribeWrapper>
            <div className={'headerBlock'}>
                {data && <Avatar size={36} src={UserImage} userName={data.userName} />}

                {isLoading && <Skeleton circle height={36} width={36} />}

                <span>{data && data.userName}</span>
                {isLoading && <Skeleton height={20} width={100} />}
            </div>
            <TextArea defaultValue={describeText} label={t.create.describe} onChange={e => changeTextHandler(e)} />
            <div className={'footer'}>{t.create.addLocation} : tobeContinued...</div>
        </DescribeWrapper>
    )
}
