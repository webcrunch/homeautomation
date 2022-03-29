import express from "express";
import { rmSync } from "fs";
import api from './templates/data.js';
import fs from 'fs';
import path from "path";
const app = express();
const __dirname = fs.realpathSync('.');
const appRoot = path.normalize(__dirname + '/frontend/automation/');
app.use(express.json())
app.use(express.static(path.join(appRoot, 'dist/automation')))
app.get('/homes/:id/data', async (req,res) =>{
    // getting data for the current house. 
    const datagetter = await api.getTemplateHouseData(req.params.id);
    res.status(200).json(datagetter);
})

app.get('/homes', (req,res) => {
    // get an list of homes to display on an list on frontend. Adding an total temperature on the whole house
    const allHouses = api.gettAllHouses();
    res.status(200).json(allHouses)
})

app.get('/', (req,res)=>{
    res.sendFile('index.html', {
        root: 'dist/automation'
    });    
})


export default app;
