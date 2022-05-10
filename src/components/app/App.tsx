import React from 'react';
import {Route, Routes} from 'react-router-dom';
import browserHistory from "../../browser-history";
import HistoryRouter from "../history-router/history-router";
import MainPage from "../main-page/main-page";

function App() {
  return (
    <React.Fragment>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            index element={
            <MainPage></MainPage>
          }/>
        </Routes>
      </HistoryRouter>
    </React.Fragment>
  )
}

export default App;
