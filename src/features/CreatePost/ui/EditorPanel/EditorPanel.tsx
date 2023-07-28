import React, {ChangeEvent, useRef, useState} from 'react'
import RatioIcon from '../../../../shared/assets/icons/ratio.svg'
import ZoomIcon from '../../../../shared/assets/icons/zoom.svg'
import CropOriginal from '../../../../shared/assets/icons/cropOriginal.svg'
import Crop1x1 from '../../../../shared/assets/icons/crop1x1.svg'
import Crop4x5 from '../../../../shared/assets/icons/crop4x5.svg'
import Crop16x9 from '../../../../shared/assets/icons/crop16x9.svg'
import AddIcon from '../../../../shared/assets/icons/addIcon.svg'
import CloseIcon from '../../../../shared/assets/icons/close.svg'
import {EditorPanelWrapper, LibraryPicture, LibraryWrapper, SelectWrapper, ZoomWrapper} from './styled'
import {LibraryPictureType} from '../../CreatePost'
import {Button} from '../../../../shared/ui/Button/Button'
import {InputFile} from '../../../../shared/ui/InputFile/InputFile'
import {EmptyAvatar} from '../../../../shared/assets/icons/emptyAvatar'

type EditorButtonsType = {
    valueZoom: string
    width: number
    height: number
    libraryPictures: LibraryPictureType[]
    handleCreatePost: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeGeneralPicture: (id: string) => void
    onDeletePicture: (id: string) => void
    onChangeResize: (width: number, height: number) => void
    onChangeZoom: (e: ChangeEvent<HTMLInputElement>) => void
}

const ORIGINAL_SIZE = {
    width: 485,
    height: 465,
}

const ASPECT_RATIO = {
    Original: 0,
    OneToOne: 1,
    FourToFive: 4 / 5,
    SixteenToNine: 16 / 9,
}

export const EditorPanel: React.FC<EditorButtonsType> = props => {
    const selectPhotoRef = useRef<HTMLInputElement>(null)

    const [selectHidden, setSelectHidden] = useState(false)
    const [zoomHidden, setZoomHidden] = useState(false)
    const [libraryHidden, setLibraryHidden] = useState(false)
    const ratioData = [
        {id: 1, value: 0, title: 'Original', icon: CropOriginal},
        {id: 2, value: 1, title: '1:1', icon: Crop1x1},
        {id: 3, value: 4 / 5, title: '4:5', icon: Crop4x5},
        {id: 4, value: 16 / 9, title: '16:9', icon: Crop16x9},
    ]

    const handlerCrop = (aspectRatio: number) => {
        if (aspectRatio === ASPECT_RATIO.OneToOne) {
            const newSize = Math.round(Math.sqrt(props.width * props.height))
            return props.onChangeResize(newSize, newSize)
        }

        if (aspectRatio === ASPECT_RATIO.FourToFive || aspectRatio === ASPECT_RATIO.SixteenToNine) {
            const newWidth = Math.round(Math.sqrt(props.width * props.height * aspectRatio))
            const newHeight = Math.round(newWidth / aspectRatio)
            return props.onChangeResize(newWidth, newHeight)
        }

        if (aspectRatio === ASPECT_RATIO.Original) {
            return props.onChangeResize(ORIGINAL_SIZE.width, ORIGINAL_SIZE.height)
        }
    }

    const handlerAddPhoto = () => {
        selectPhotoRef && selectPhotoRef.current?.click()
    }

    return (
        <EditorPanelWrapper width={props.width}>
            <div className='popUpBtn'>
                <div className='wrapper'>
                    <div className='select'>
                        <RatioIcon onClick={() => setSelectHidden(!selectHidden)} />
                        <SelectWrapper hidden={selectHidden}>
                            {ratioData.map(el => (
                                <div key={el.id} onClick={() => handlerCrop(el.value)}>
                                    <span>{el.title}</span>
                                    <el.icon />
                                </div>
                            ))}
                        </SelectWrapper>
                    </div>
                    <div className='zoom'>
                        <ZoomIcon onClick={() => setZoomHidden(!zoomHidden)} />
                        <ZoomWrapper hidden={zoomHidden}>
                            <input
                                type='range'
                                value={props.valueZoom}
                                onChange={props.onChangeZoom}
                                min={1}
                                max={12}
                                step='0.1'
                            />
                        </ZoomWrapper>
                    </div>
                </div>
                <div className='library'>
                    <span onClick={() => setLibraryHidden(!libraryHidden)}>
                        <EmptyAvatar />
                    </span>
                    <EmptyAvatar />
                    <LibraryWrapper hidden={libraryHidden}>
                        <div className={'OVER'}>
                            {props.libraryPictures.map(el => (
                                <div key={el.id}>
                                    <LibraryPicture
                                        image={el.img}
                                        onClick={() => props.onChangeGeneralPicture(el.id)}
                                    />
                                    {props.libraryPictures.length > 1 && (
                                        <Button
                                            className='close'
                                            variant={'isIcon'}
                                            onClick={() => props.onDeletePicture(el.id)}
                                        >
                                            <CloseIcon />
                                        </Button>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div>
                            <Button variant={'isIcon'} onClick={handlerAddPhoto}>
                                <AddIcon />
                            </Button>
                        </div>
                        <InputFile
                            title={'Select from Computer'}
                            ref={selectPhotoRef}
                            onChange={props.handleCreatePost}
                            accept={'image/png, image/jpeg'}
                            multiple={false}
                        />
                    </LibraryWrapper>
                </div>
            </div>
        </EditorPanelWrapper>
    )
}
