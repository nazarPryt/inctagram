import { FC } from 'react'

import { EditorButtonsWrapper } from './styled'

import ArrowLeft from 'shared/assets/icons/arrowLeft.svg'
import { useTranslation } from 'shared/hooks/useTranslation'
import { Button } from 'shared/ui/Button/Button'

type EditorButtonsType = {
  title: string
  step: string
  isLoading: boolean
  onChangeStep: (step: string) => void
}

export const EditorButtons: FC<EditorButtonsType> = ({ step, onChangeStep, isLoading, title }) => {
  const { t } = useTranslation()
  const STEPS = [
    t.create.steps.addPhoto,
    t.create.steps.cropping,
    t.create.steps.filters,
    t.create.steps.describe,
    'SENDING',
  ]
  const nextStep = STEPS.findIndex(el => el === step)

  return (
    <EditorButtonsWrapper>
      <div>
        <Button disabled={isLoading} variant="text" onClick={() => onChangeStep(STEPS[nextStep - 1])}>
          <ArrowLeft />
        </Button>
      </div>
      <span>{title}</span>
      <div>
        <Button disabled={isLoading} variant="text" onClick={() => onChangeStep(STEPS[nextStep + 1])}>
          {step === t.create.steps.describe ? t.create.editorButtons.publish : t.create.editorButtons.next}
        </Button>
      </div>
    </EditorButtonsWrapper>
  )
}
