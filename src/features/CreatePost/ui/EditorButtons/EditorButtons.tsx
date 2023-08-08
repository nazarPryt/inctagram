import React from 'react'
import ArrowLeft from 'shared/assets/icons/arrowLeft.svg'
import {EditorButtonsWrapper} from './styled'
import {useTranslation} from 'shared/hooks/useTranslation'
import {Button} from 'shared/ui/Button/Button'

type EditorButtonsType = {
    title: string
    step: string
    isLoading: boolean
    onChangeStep: (step: string) => void
}

export const EditorButtons: React.FC<EditorButtonsType> = props => {
    const {t} = useTranslation()
    const STEPS = [
        t.create.steps.addPhoto,
        t.create.steps.cropping,
        t.create.steps.filters,
        t.create.steps.describe,
        'SENDING',
    ]
    const nextStep = STEPS.findIndex(el => el === props.step)
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
                    {props.step === t.create.steps.describe
                        ? t.create.editorButtons.publish
                        : t.create.editorButtons.next}
                </Button>
            </div>
        </EditorButtonsWrapper>
    )
}
