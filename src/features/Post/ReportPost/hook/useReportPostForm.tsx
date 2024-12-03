import {Controller, SubmitHandler, useForm} from 'react-hook-form'

import {useTranslation} from '@/shared/hooks/useTranslation'
import {zodResolver} from '@hookform/resolvers/zod'
import {Select, TextArea} from '@nazar-pryt/inctagram-ui-kit'
import {z} from 'zod'

import {ReportPostOptions, useReportPostOptions} from './useReportPostOptions'

const maxTextAreaValueLength = 20

const ReportPostFormSchema = z.object({
    reasonSelectValue: z.nativeEnum(ReportPostOptions),
    textAreaValue: z
        .string()
        .trim()
        .max(maxTextAreaValueLength, `Report-reason message cant be more then ${maxTextAreaValueLength} symbols!!`),
})

export type ReportPostFormSchemaType = z.infer<typeof ReportPostFormSchema>

type SchemaType = {
    [key in ReportPostOptions]: keyof ReportPostFormSchemaType
}
const Schema: SchemaType = {
    ['advertising-placement']: 'reasonSelectValue',
    ['another-reason']: 'textAreaValue',
    ['bad-behavior']: 'reasonSelectValue',
}

type PropsType = {
    handleReportPost: (banReason: string) => void
    userName: string
}

export const useReportPostForm = ({handleReportPost, userName}: PropsType) => {
    const {t} = useTranslation()
    const {
        control,
        formState: {errors},
        handleSubmit,
        setError,
        watch,
    } = useForm<ReportPostFormSchemaType>({
        defaultValues: {reasonSelectValue: undefined, textAreaValue: ''}, // todo fix console warning due to the undefined
        mode: 'all',
        resolver: zodResolver(ReportPostFormSchema),
    })
    const reportOptions = useReportPostOptions()

    const showTextArea = watch('reasonSelectValue') === ReportPostOptions.anotherReason

    const onSubmit: SubmitHandler<ReportPostFormSchemaType> = data => {
        const sendingKeyFromData = Schema[data.reasonSelectValue]

        if (data[sendingKeyFromData].length) {
            handleReportPost(data[sendingKeyFromData])
        } else {
            setError('textAreaValue', {message: 'Report-reason message is required'})
        }
    }
    const renderReportPostForm = () => {
        return (
            <form>
                <p>{t.feature.post.report.p(userName)}</p>
                <Controller
                    control={control}
                    name={'reasonSelectValue'}
                    render={({field: {onChange, value}}) => (
                        <Select
                            onChange={onChange}
                            options={reportOptions}
                            placeholder={t.feature.post.report.selectPlaceholder}
                            portal={false}
                            value={value}
                        />
                    )}
                />

                {showTextArea && (
                    <Controller
                        control={control}
                        name={'textAreaValue'}
                        render={({field: {onChange, value}}) => (
                            <TextArea
                                autoFocus
                                error={errors.textAreaValue?.message}
                                maxLength={maxTextAreaValueLength}
                                onChange={onChange}
                                style={{backgroundColor: 'gray'}}
                                value={value}
                            />
                        )}
                    />
                )}
            </form>
        )
    }

    return {
        renderReportPostForm,
        submitReportPostForm: handleSubmit(onSubmit),
    }
}
