const URL = 'https://internshipassignmentbackend.onrender.com/users/'

export const fetchTable1 = async () => {
    try {
        const response = await fetch(URL + 'condition1');
        const data = await response.json();
        return { success: true, ...data }
    } catch (error) {
        console.log(error)
        return { success: false }
    }
}

export const fetchTable2 = async () => {
    try {
        const response = await fetch(URL + 'condition2');
        const data = await response.json();
        return { success: true, ...data }
    } catch (error) {
        console.log(error)
        return { success: false }
    }
}

export const fetchTable3 = async () => {
    try {
        const response = await fetch(URL + 'condition3');
        const data = await response.json();
        return { success: true, ...data }
    } catch (error) {
        console.log(error)
        return { success: false }
    }
}

export const fetchTable4 = async () => {
    try {
        const response = await fetch(URL + 'condition4');
        const data = await response.json();
        return { success: true, ...data }
    } catch (error) {
        console.log(error)
        return { success: false }
    }
}

export const fetchTable5 = async () => {
    try {
        const response = await fetch(URL + 'condition5');
        const data = await response.json();
        const { users: cities } = data;
        const processedData = { cities };
        return { success: true, ...processedData }
    } catch (error) {
        console.log(error)
        return { success: false }
    }
}