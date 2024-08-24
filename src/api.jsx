import axios from "axios";

const apiUrl = "https://api.unsplash.com/";
const accessKey = "ReecfsiWguG4BIjSDShhKdFUg_SbVeAFzzY7Q9wUD68";
export const fetchImages = async (query, page = 1) => {
    const response = await axios.get(
        `${apiUrl}/search/photos?client_id=${accessKey}`, {
        params: {
            query,
            page,
            // per_page: 10
        }
    });
    return response.data.results;
};




