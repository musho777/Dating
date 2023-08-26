export const Color = (mood = 'light') => {
    if (mood === 'light') {
        return {
            bg: '#FBF2FF',
            color: '#000',
            buttonBg: 'linear-gradient(200deg, #F09 0%, #22202E 100%)',
            checkBoxActiveColor: '#F09',
            titleColor: '#F09',
            textColor: '#000',
        }
    }
    return {
        bg: '#22202E',
        color: '#fff',
        buttonBg: 'linear-gradient(200deg, #F09 0%, #22202E 100%)',
        checkBoxActiveColor: '#F09',
        titleColor: '#F09',
        textColor: '#fff',

    }
}