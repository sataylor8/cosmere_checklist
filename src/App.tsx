import { SystemNames } from './BookData.ts';
import type { SystemName, BookName, BookStatusType} from './BookData.ts';
import SystemView from './SystemView.tsx';
import './App.css';
import { FluentProvider, webDarkTheme } from '@fluentui/react-components';
import Progress from './Progress.tsx';
import { GetStorageData, UpdateBookStatus } from './StorageLayer.ts';
import * as React from 'react';

function App() {
  const [state, setState] = React.useState<BookStatusType>(GetStorageData());

  const updateStatus = React.useCallback((systemKey: SystemName, bookKey: BookName, status: number) => {
    let localState = {...state};
    localState[systemKey].books[bookKey] = status;
    setState(localState);
    UpdateBookStatus(systemKey, bookKey, status);
  }, [])

  return (
    <FluentProvider theme={webDarkTheme}>
      <div className="App_Root">
        <Progress statusState={state}/>
        <div className="App_SystemsViewContainer">
          {SystemNames.map(system => {
            return <SystemView systemKey={system} statusState={state} updateStatus={updateStatus}/>
          })}
        </div>
      </div>
    </FluentProvider>
  )
}

export default App
