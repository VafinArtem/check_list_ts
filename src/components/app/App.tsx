import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import browserHistory from "../../browser-history";
import HistoryRouter from "../history-router/history-router";

function App() {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          index element={
            <div>123</div>
          // <MainPage
          //   selectedPointId={activeCardState.id}
          //   onCardItemHover={onCardItemHover}
          // />
        }
        />
      </Routes>
    </HistoryRouter>
  )
}

export default App;
