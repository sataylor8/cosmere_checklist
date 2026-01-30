import { Slider, type SliderOnChangeData } from "@fluentui/react-components"
import type { BookName, SystemName, BookStatusType} from "./BookData";
import * as React from 'react';
import { GetImage } from "./BookImages";

function BookView(props: { systemKey: SystemName, bookKey: BookName, statusState: BookStatusType, updateStatus: (systemKey: SystemName, bookKey: BookName, status: number) => void }) {
    const {systemKey, bookKey, statusState, updateStatus} = props;
    const currentVaule = statusState[systemKey].books[bookKey];
    const onSliderChange = React.useCallback((ev: React.ChangeEvent<HTMLInputElement>, data: SliderOnChangeData) => {
        ev.currentTarget;
        updateStatus(systemKey, bookKey, data.value);
    }, [systemKey, bookKey])
    const onClick = React.useCallback(() => {
        let newValue = 100
        if (currentVaule === 100) {
            newValue = 0;
        }
        updateStatus(systemKey, bookKey, newValue)
    }, [currentVaule]);

    return (
        <div className="BookView_Root">
            <img src={GetImage(bookKey)} className="BookView_Image" onClick={onClick}/>
            <p className="BookView_Title">{bookKey}</p>
            <div className="BookView_Slider_Container">
                <Slider className="BookView_Slider" value={currentVaule} max={100} onChange={onSliderChange}/>
            </div>
        </div>
    )
}

export default BookView
