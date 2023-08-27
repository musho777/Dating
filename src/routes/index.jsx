import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../Components/Layout'
import { EmailPage } from '../Pages/EmailPage'
import { VerifyCodePage } from '../Pages/VerifyCodePage'
import { NamePage } from '../Pages/NamePage'
import { GenderPage } from '../Pages/GenderPage'
import { AddImgPage } from '../Pages/AddImgPage'
import { PasswordPage } from '../Pages/PasswordPage'
import { LocationPage } from '../Pages/LocationPage'
import { PurposePage } from '../Pages/PurposePage'
import { BirthDatePage } from '../Pages/BirthDatePage'
import { LanguagePage } from '../Pages/LanguagePage'
import { NationalityPage } from '../Pages/NationalityPage'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/register/email' element={<EmailPage />} />
                <Route path='/register/code' element={<VerifyCodePage />} />
                <Route path='/register/name' element={<NamePage />} />
                <Route path='/register/gender' element={<GenderPage />} />
                <Route path='/register/addimg' element={<AddImgPage />} />
                <Route path='/register/password' element={<PasswordPage />} />
                <Route path='/register/location' element={<LocationPage />} />
                <Route path='/register/purpose' element={<PurposePage />} />
                <Route path='/register/birthdate' element={<BirthDatePage />} />
                <Route path='/register/language' element={<LanguagePage />} />
                <Route path='/register/nationality' element={<NationalityPage />} />

            </Routes>
        </BrowserRouter>
    )
}