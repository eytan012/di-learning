export const FNAME = 'FIRST_NAME';
export const SNAME = 'SECOND_NAME'

export const setFName = (name) => {
    return {
        type: FNAME,
        payload: name
    }
}

export const setSName = (name) => {
    return {
        type: SNAME,
        payload: name
    }
}