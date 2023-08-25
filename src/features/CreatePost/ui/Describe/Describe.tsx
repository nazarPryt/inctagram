import React, {ChangeEvent} from 'react'
import Image from 'next/image'
import {AvatarWrapper, DescribeWrapper} from './styled'
import {TextArea} from 'shared/ui/TextArea/TextArea'
import {useGetUserProfileQuery} from 'redux/api/profileAPI'
import SkeletonAvatar from 'shared/assets/icons/skeletonCycle.svg'
import SkeletonTitle from 'shared/assets/icons/skeletonTitle.svg'
import {useAppDispatch, useAppSelector} from 'shared/hooks/reduxHooks'
import {createPostAC} from '../../model/slice/createPostSlice'
import {useTranslation} from 'shared/hooks/useTranslation'

export const Describe = () => {
    const {t} = useTranslation()
    const dispatch = useAppDispatch()
    const describeText = useAppSelector(state => state.createPost.describeText)

    const {data, isLoading} = useGetUserProfileQuery()
    console.log(data)
    const changeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(createPostAC.setDescribeText(e.target.value.trim()))
    }

    return (
        <DescribeWrapper>
            <div className='headerBlock'>
                <AvatarWrapper>
                    {data ? (
                        <Image
                            src={data.avatars.length ? data.avatars[0].url : ''}
                            width={data.avatars.length ? data.avatars[0].width : 100}
                            height={data.avatars.length ? data.avatars[0].height : 100}
                            alt={'avatar'}
                        />
                    ) : (
                        <SkeletonAvatar />
                    )}
                </AvatarWrapper>
                <div className='userNameWrapper'>
                    <span>{data ? data.userName : <SkeletonTitle />}</span>
                </div>
            </div>
            <TextArea defaultValue={describeText} onChange={e => changeTextHandler(e)} label={t.create.describe} />
            <div>{t.create.addLocation} : tobeContinued...</div>
        </DescribeWrapper>
    )
}
