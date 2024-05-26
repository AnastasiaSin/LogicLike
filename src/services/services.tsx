import axios from "axios";

export interface IItems {
    bgColor?: string,
    id: string,
    image: string,
    name: string,
    tags?: String[]
}

const getUniqueElements = (arrays: string[][]): string[] => {
    const flattenedArray = arrays.flat();
    const uniqueElementsSet = new Set(flattenedArray);
    return Array.from(uniqueElementsSet);
}

export async function getCards() {
    try {
        const response = await axios.get('https://logiclike.com/docs/courses.json');
        const data:IItems[] = response.data;
        console.log(data)
        return data
    } catch (error) {
        console.error(error);
        return []
    }
}


export async function getThemes() {
    try {
        const response = await axios.get('https://logiclike.com/docs/courses.json');
        const data = response.data.map((tags: IItems) => tags.tags);
        const tags = getUniqueElements(data)
        return tags
    } catch (error) {
        console.error(error);
        return []
    }
}







