import React, {useState} from 'react'
import {PostCommentsWrapper} from 'entities/Post/ui/PostComments/PostComments.styled'
import {TextArea} from '../../../../shared/ui/TextArea/TextArea'
import {Button} from '../../../../shared/ui/Button/Button'
import {Modal} from '../../../../shared/ui/Modal/Modal'

export const PostComments = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (
        <PostCommentsWrapper>
            <button onClick={() => setIsModalOpen(true)}>{`View All Comments ${114}`}</button>
            <form className={'textAreaWrapper'}>
                <TextArea placeholder={'Add a Comment...'} />
                <Button variant={'outlined'}>Publish</Button>
            </form>
            <Modal isOpen={isModalOpen} handleClose={handleCloseModal} title={'modal'}>
                <div>PostComments content</div>
            </Modal>
        </PostCommentsWrapper>
    )
}
