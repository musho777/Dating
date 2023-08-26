import * as S from './styles'
import './styles.css'
export const FileInput = ({ getImg }) => {
    return <div>
        {<S.Card>
            <label id={'lable'} for="images" class="drop-container"> + </label>
            <input multiple type={'file'} onChange={(e) => getImg(e)} id={'images'} accept="image/png, image/jpeg"></input>
        </S.Card>}
    </div>
}