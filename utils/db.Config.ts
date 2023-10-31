import { MongoClient } from "mongodb";

const URL: string = "mongodb://127.0.0.1:27017";
export const client = new MongoClient(URL);

const mainConnection  = async () => {
    try {
        await client.connect();

        return "Database has been connected ............!!"

    } catch (error) {
        console.log(error);
        
    }
};

mainConnection()
.then((res) => console.log(res))

.catch((res) => console.log(res))

.finally (() =>{
    client.close();
})

export const db = client.db("StudentPortal").collection("ExamData")