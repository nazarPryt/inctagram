import React, {ChangeEvent} from 'react'
import Image from 'next/image'
import {AvatarWrapper, DescribeWrapper} from './styled'
import {TextArea} from '../../../../shared/ui/TextArea/TextArea'
import {useSession} from 'next-auth/react'
import {useGetUserProfileQuery} from '../../../../redux/api/profileAPI'
import SkeletonAvatar from '../../../../shared/assets/icons/skeletonCycle.svg'
import SkeletonTitle from '../../../../shared/assets/icons/skeletonTitle.svg'
import {useAppDispatch, useAppSelector} from '../../../../shared/hooks/reduxHooks'
import {createPostAC} from '../../model/slice/createPostSlice'

export const Describe = () => {
    const dispatch = useAppDispatch()
    const describeText = useAppSelector(state => state.createPost.describeText)

    const {data: user} = useSession()
    const {data, isLoading} = useGetUserProfileQuery(user!.user.userId)

    const changeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(createPostAC.setDescribeText(e.target.value.trim()))
    }

    return (
        <DescribeWrapper>
            <div className='headerBlock'>
                <AvatarWrapper>
                    {data ? (
                        <Image
                            src={data.avatars[0].url}
                            width={data.avatars[0].width}
                            height={data.avatars[0].height}
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
            <TextArea
                defaultValue={describeText}
                onChange={e => changeTextHandler(e)}
                label='Add Publication descriptions'
            />
            <div>ADD LOCATION : tobeContinued...</div>
        </DescribeWrapper>
    )
}
