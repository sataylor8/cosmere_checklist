import type { BookName, BookStatusType } from "./BookData";
import BookData, { SystemNames } from "./BookData";
import { ProgressBar } from "@fluentui/react-components";

function Progress(props: {statusState: BookStatusType}) {
    let progress = 0;
    let total = 0;
    SystemNames.forEach(system => {
        Object.keys(props.statusState[system].books).forEach((key) => {
            const bookName = key as BookName;
            const book = BookData[system].books[bookName];
            progress += (props.statusState[system].books[key as BookName]!/100)*book?.minutes!;
            total += BookData[system].books[key as BookName]!.minutes;
        })
    });

    let percentageNumber = ((progress/total)*100);
    let percentage = percentageNumber.toFixed(2);
  return (
    <div className="Progress_Root">
      <p className="Progress_Value">{`Progress: ${percentage}%`}</p>
      <ProgressBar className="Progress_Bar" value={percentageNumber} thickness="large" max={100}/>
    </div>
    
  )
}

export default Progress
