import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../Components/Layout'
import { EmailPage } from '../Pages/EmailPage'
import { VerifyCodePage } from '../Pages/VerifyCodePage'
import { NamePage } from '../Pages/NamePage'
import { GenderPage } from '../Pages/GenderPage'
import { AddImgPage } from '../Pages/AddImgPage'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/register/email' element={<EmailPage />} />
                <Route path='/register/code' element={<VerifyCodePage />} />
                <Route path='/register/name' element={<NamePage />} />
                <Route path='/register/gender' element={<GenderPage />} />
                <Route path='/register/fileinput' element={<AddImgPage />} />
            </Routes>
        </BrowserRouter>
    )
}