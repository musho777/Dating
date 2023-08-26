export const Color = (mood = 'light') => {
    if (mood === 'light') {
        return {
            bg: '#FBF2FF',
            color: '#000',
        }
    }
    else {
        return {
            bg: '#292545',
            color: '#fff'
        }
    }
}