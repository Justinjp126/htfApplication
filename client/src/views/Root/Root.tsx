import { Container } from '@mui/material'
import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Main from 'views/Main'
import AlreadyApplied from 'views/Tutorial/AlreadyApplied'
import { Auth, Login, Me, Register } from 'views/Tutorial/Auth'
import Axios from 'views/Tutorial/Axios'
import EmailPage from 'views/Tutorial/EmailPage'
import ExtraInfoPage from 'views/Tutorial/ExtraInfoPage'
import FormCompleted from 'views/Tutorial/FormCompleted'
import GradePage from 'views/Tutorial/GradePage'
import QuestionsPage1 from 'views/Tutorial/QuestionsPage1'
import QuestionsPage2 from 'views/Tutorial/QuestionsPage2'
import QuestionsPage3 from 'views/Tutorial/QuestionsPage3'
import QuestionsPage4 from 'views/Tutorial/QuestionsPage4'
import QuestionsPage5 from 'views/Tutorial/QuestionsPage5'
import Redux from 'views/Tutorial/Redux'
import RoleChoices from 'views/Tutorial/RoleChoices'
import RolesPage from 'views/Tutorial/RolesPage'
import StartPage from 'views/Tutorial/StartPage'
import SubmitNext from 'views/Tutorial/SubmitNext'
import SubmitPrevious from 'views/Tutorial/SubmitPrevious'

export default function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path="axios" element={<Axios />} />
        <Route path="redux" element={<Redux />} />
        <Route path="auth">
          <Route index element={<Auth />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="me" element={<Me />} />
        </Route>
        <Route path="StartPage" element={<StartPage />} />
        <Route path="AlreadyApplied" element={<AlreadyApplied />} />
        <Route path="EmailPage" element={<EmailPage />} />
        <Route path="GradePage" element={<GradePage />} />
        <Route path="QuestionsPage1" element={<QuestionsPage1 />} />
        <Route path="QuestionsPage2" element={<QuestionsPage2 />} />
        <Route path="QuestionsPage3" element={<QuestionsPage3 />} />
        <Route path="QuestionsPage4" element={<QuestionsPage4 />} />
        <Route path="QuestionsPage5" element={<QuestionsPage5 />} />
        <Route path="RolesPage" element={<RolesPage />} />
        <Route path="SubmitPrevious" element={<SubmitPrevious />} />
        <Route path="SubmitNext" element={<SubmitNext />} />
        <Route path="ExtraInfoPage" element={<ExtraInfoPage />} />
        <Route path="RoleChoices" element={<RoleChoices />} />
        <Route path="FormCompleted" element={<FormCompleted />} />
        <Route path="*" element={<Container sx={{ p: 5 }}>404</Container>} />
      </Routes>
    </BrowserRouter>
  )
}
