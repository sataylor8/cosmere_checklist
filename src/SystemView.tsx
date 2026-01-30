import { type BookName, type BookStatusType, type SystemName, BookNames } from "./BookData";
import BookView from "./BookView";

function SystemView(props: { systemKey: SystemName, statusState: BookStatusType, updateStatus: (systemKey: SystemName, bookKey: BookName, status: number) => void }) {
    const {systemKey, statusState, updateStatus} = props;

    return (
        <div className="SystemView_Root">
            <h2 className="SystemView_Name">{systemKey}</h2>
            <div className="SystemView_BookContainer">
                {BookNames[systemKey].books.map(book => {
                    return <BookView systemKey={systemKey} bookKey={book} statusState={statusState} updateStatus={updateStatus}/>
                })}
            </div>
        </div>
    )
}

export default SystemView
