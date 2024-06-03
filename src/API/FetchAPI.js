import axios from "axios"

const FetchAPi = async (endpoints) => {

    try {

        const response = await axios.get('http://localhost:10000/api/v1' + endpoints);
        console.log(response.data);
        return response.data;
    } catch (err) {

        return err
    }

}

export default FetchAPi;