export const Color = (mood = 'light') => {
    if (mood === 'light') {
        return {
            bg: '#FBF2FF',
            color: '#000',
            buttonBg: 'linear-gradient(200deg, #F09 0%, #22202E 100%)'
        }
    }
    return {
        bg: '#292545',
        color: '#fff',
        buttonBg: 'linear-gradient(200deg, #F09 0%, #22202E 100%)'
    }
}