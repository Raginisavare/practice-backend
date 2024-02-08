const express = require('express');
const userRepo = require('../repos/user-repo');
 const bcrypt=require('bcrypt');
 const bodyParser = require('body-parser');

const router = express.Router();

 const saltrounds=10;

router.get('/users', async (req, res) => {
    const users = await userRepo.find();
    console.log(users)
    res.send(users);
});
 
// router.get('/users/:id', async (req, res) => {
//     const {id} = req.params;
 
//     const users = await userRepo.findById(id);
 
//     if(users){
//         res.send(users);
//     }else{
//         res.sendStatus(404);
//     }
// });

router.get('/users/:email', async (req, res) => {
    const {email} = req.params;
 
    const users = await userRepo.findByEmail(email);
 
    if(users){
        res.send(users);
    }else{
        res.sendStatus(404);
    }
});
 
router.post('/users', async (req, res) => {
    const { uname, phn, email, psw } = req.body;
    const hashpass=psw;
    const bcryptpass=await bcrypt.hash(hashpass,saltrounds)
    const user = await userRepo.insert(uname, phn, email, bcryptpass);
    res.send(user);
});
 
router.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { uname, phn, email, psw} = req.body;
 
    const user = await userRepo.update(id, uname, phn, email, psw);
    if(user){
        res.send(user);
    }else{
        res.sendStatus(404);
    }
});
 
router.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    const user = await userRepo.delete(id);
    if(user){
        res.send(user);
    }else{
        res.sendStatus(404);
    }
});
 
module.exports = router;
 