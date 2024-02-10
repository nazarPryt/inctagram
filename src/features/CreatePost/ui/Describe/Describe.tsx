import {ChangeEvent} from 'react'

import {useGetUserProfileQuery} from '@/redux/api/profileAPI'
import {useAppDispatch, useAppSelector} from '@/shared/hooks/reduxHooks'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {EmptyAvatar, Skeleton, TextArea} from '@nazar-pryt/inctagram-ui-kit'
import Image from 'next/image'

import {createPostAC} from '../../model/slice/createPostSlice'
import {AvatarWrapper, DescribeWrapper} from './styled'

export const Describe = () => {
    const {t} = useTranslation()
    const dispatch = useAppDispatch()
    const describeText = useAppSelector(state => state.createPost.describeText)

    const {data, isLoading} = useGetUserProfileQuery()
    const UserImage = data?.avatars.length ? (
        <Image alt={'avatar'} height={data.avatars[0].height} src={data.avatars[0].url} width={data.avatars[0].width} />
    ) : (
        <EmptyAvatar />
    )
    const changeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(createPostAC.setDescribeText(e.target.value.trim()))
    }

    return (
        <DescribeWrapper>
            <div className={'headerBlock'}>
                <AvatarWrapper>{data ? UserImage : <Skeleton circle height={40} width={40} />}</AvatarWrapper>
                <div className={'userNameWrapper'}>
                    <span>{data ? data.userName : <Skeleton height={30} width={100} />}</span>
                </div>
            </div>
            <TextArea defaultValue={describeText} label={t.create.describe} onChange={e => changeTextHandler(e)} />
            <div>{t.create.addLocation} : tobeContinued...</div>
        </DescribeWrapper>
    )
}
