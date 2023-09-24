import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { EmailPage } from '../Pages/Register/EmailPage'
import { VerifyCodePage } from '../Pages/Register/VerifyCodePage'
import { NamePage } from '../Pages/Register/NamePage'
import { GenderPage } from '../Pages/Register/GenderPage'
import { AddImgPage } from '../Pages/Register/AddImgPage'
import { PasswordPage } from '../Pages/Register/PasswordPage'
import { LocationPage } from '../Pages/Register/LocationPage'
import { PurposePage } from '../Pages/Register/PurposePage'
import { BirthDatePage } from '../Pages/Register/BirthDatePage'
import { LanguagePage } from '../Pages/Register/LanguagePage'
import { NationalityPage } from '../Pages/Register/NationalityPage'
import { LoginPage } from '../Pages/Login/Index'
import { ForgotPassword } from '../Pages/ForgotPassword'
import { ConfirmForgotPassword } from '../Pages/ConfirmForgotPassword'
import { NewPassword } from '../Pages/NewPassword'
import { MainPage } from '../Pages/Main'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />} />
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
                <Route path='/login' element={<LoginPage />} />
                <Route path='/forgotpassword' element={<ForgotPassword />} />
                <Route path='/confirmcode' element={<ConfirmForgotPassword />} />
                <Route path='/newpassword' element={<NewPassword />} />
            </Routes>
        </BrowserRouter>
    )
}
// NewPassword