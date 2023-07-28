import React from 'react'
import ArrowLeft from '../../../../shared/assets/icons/arrowLeft.svg'
import {EditorButtonsWrapper} from './styled'
import {Button} from '../../../../shared/ui/Button/Button'
import {StepsType} from '../../model/types/createPostSchema'

type EditorButtonsType = {
    title: string
    isLoading: boolean
    onChangeStep: (step: StepsType) => void
}

export const EditorButtons: React.FC<EditorButtonsType> = props => {
    const STEPS: StepsType[] = ['Add Photo', 'Cropping', 'Filters', 'Describe', 'SENDING']
    const nextStep = STEPS.findIndex(el => el === props.title)
    return (
        <EditorButtonsWrapper>
            <div>
                <Button
                    variant={'text'}
                    disabled={props.isLoading}
                    onClick={() => props.onChangeStep(STEPS[nextStep - 1])}
                >
                    <ArrowLeft />
                </Button>
            </div>
            <span>{props.title}</span>
            <div>
                <Button
                    variant={'text'}
                    disabled={props.isLoading}
                    onClick={() => props.onChangeStep(STEPS[nextStep + 1])}
                >
                    {props.title === 'Describe' ? 'Publish' : 'Next'}
                </Button>
            </div>
        </EditorButtonsWrapper>
    )
}
