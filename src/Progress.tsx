import type { BookName, BookStatusType } from "./BookData";
import BookData, { SystemNames } from "./BookData";

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

    let percentage = ((progress/total)*100).toFixed(2);
  return (
    <p className="Progress">{`Progress: ${percentage}%`}</p>
  )
}

export default Progress
