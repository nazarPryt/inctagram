import {useTranslation} from '@/shared/hooks/useTranslation'
import {ArrowLeft, Button, IconButton} from '@nazar-pryt/inctagram-ui-kit'

import {EditorButtonsWrapper} from './styled'

type EditorButtonsType = {
    isLoading: boolean
    onChangeStep: (step: string) => void
    step: string
    title: string
}

export const EditorButtons = (props: EditorButtonsType) => {
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
                <IconButton disabled={props.isLoading} onClick={() => props.onChangeStep(STEPS[nextStep - 1])}>
                    <ArrowLeft />
                </IconButton>
            </div>
            <span>{props.title}</span>
            <div>
                <Button
                    disabled={props.isLoading}
                    onClick={() => props.onChangeStep(STEPS[nextStep + 1])}
                    variant={'text'}
                >
                    {props.step === t.create.steps.describe
                        ? t.create.editorButtons.publish
                        : t.create.editorButtons.next}
                </Button>
            </div>
        </EditorButtonsWrapper>
    )
}
