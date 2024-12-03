import {useTranslation} from '@/shared/hooks/useTranslation'

export enum ReportPostOptions {
    'advertising' = 'advertising-placement',
    'anotherReason' = 'another-reason',
    'badBehavior' = 'bad-behavior',
}

type useReportPostOptionsType = {label: string; value: ReportPostOptions}[]

export const useReportPostOptions = (): useReportPostOptionsType => {
    const {t} = useTranslation()

    return [
        {
            label: t.feature.post.report.reason.bad_behavior,
            value: ReportPostOptions.badBehavior,
        },
        {
            label: t.feature.post.report.reason.advertising,
            value: ReportPostOptions.advertising,
        },
        {
            label: t.feature.post.report.reason.another,
            value: ReportPostOptions.anotherReason,
        },
    ]
}
