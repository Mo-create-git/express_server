import express from "express";

const app = express();
const PORT = 5004;



app.use(express.json());

app.get("/", (req,res) => {
    res.send("hello");
});

app.get("/global", (req,res) => {
    res.send("Hello global");
});

app.post("/register",(req,res) => {
    const userData =req.body;

    console.log("📥 Incoming /register payload:", userData)
});

app.post("/students/:rollno", (req,res) => {
    let id = req.params.rollno;
    console.log("📥 Incoming /students/rollno payload:", id);
    res.json(id)
});

app.post( PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

app.get("/url/:link",(req,res) => {
    try{
        res.redirect("https://www.google.com")
    }catch(error){
        console.log(error)
    }
}) 

app.get("/download",(req,res) => 
{
    try{
        res.download("./img.jpeg")
    } catch (error) {
        console.log(error)
    }
})

app.listen(PORT, () => {  console.log("Server is Running");});
