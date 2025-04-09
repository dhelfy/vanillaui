import axios from "axios"

export const fetchComponents = async () => {
    const result = await axios.get("http://localhost:5000/components")
    return result.data
}

export const fetchComponentByID = async (id: string) => {
    const result = await axios.get(`http://localhost:5000/components/${id}`)
    return result.data
}