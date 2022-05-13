import {Navigate} from "react-router-dom";
import {GOTECH_QUESTIONNAIRE} from "./questIDs";
import QuestionnairePage from "../pages/QuestionnairePage";
import NotFoundPage from "../pages/NotFoundPage";

export const routes = [
    {
        path: '/',
        element: <Navigate to={`questionnaires/${GOTECH_QUESTIONNAIRE}`} replace/>
    },
    {
        path: 'questionnaires/:id',
        element: <QuestionnairePage/>
    },
    {
        path: '*',
        element: <NotFoundPage/>
    }
]