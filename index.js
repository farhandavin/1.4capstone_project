import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import 'dotenv/config';
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const dogApiUrl = process.env.DOG_API_URL
app.get("/",async (req, res) => {
    try {
      const response=await axios.get(dogApiUrl);
      const secret=response.data.message;
      
      res.render("index.ejs",{
        dog:secret
      } )
      
    } catch (error) {
      console.error("Gagal mengambil data:", error.message); 
      res.status(500).send("Terjadi kesalahan saat memuat gambar."); 
    }
  });

  

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
