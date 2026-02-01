import { Slider, type SliderOnChangeData } from "@fluentui/react-components"
import { CheckmarkCircleColor } from "@fluentui/react-icons";
import type { BookName, SystemName, BookStatusType} from "./BookData";
import * as React from 'react';
import { GetImage } from "./BookImages";

function BookView(props: { systemKey: SystemName, bookKey: BookName, statusState: BookStatusType, updateStatus: (systemKey: SystemName, bookKey: BookName, status: number) => void }) {
    const {systemKey, bookKey, statusState, updateStatus} = props;
    const currentValue = statusState[systemKey].books[bookKey];
    const [showLabel, setShowLabel] = React.useState<boolean>(false);
    const onSliderChange = React.useCallback((ev: React.ChangeEvent<HTMLInputElement>, data: SliderOnChangeData) => {
        ev.currentTarget;
         if (!showLabel) {
            setShowLabel(true)
        }
        updateStatus(systemKey, bookKey, data.value);
    }, [systemKey, bookKey, showLabel, setShowLabel])
    const onClick = React.useCallback(() => {
        let newValue = 100
        if (currentValue === 100) {
            newValue = 0;
        }
       
        updateStatus(systemKey, bookKey, newValue)
    }, [currentValue]);

    
    const onSliderBlur = React.useCallback(() => {
        setShowLabel(false);
    }, [setShowLabel]);

    return (
        <div className="BookView_Root">
            <img src={GetImage(bookKey)} className={currentValue == 100 ? "BookView_Image_Done" : "BookView_Image"} onClick={onClick}/>
            <p className="BookView_Title">{bookKey}</p>
            <div className="BookView_Slider_Container">
                <Slider className="BookView_Slider" value={currentValue} max={100} onChange={onSliderChange} onBlur={onSliderBlur} thumb={showLabel ? (<p className="BookView_SliderLabel">{currentValue}</p>) : <></>}/>
            </div>
            {currentValue == 100 && <CheckmarkCircleColor className="BookView_Checkmark" fontSize={48}/>}
        </div>
    )
}

export default BookView
