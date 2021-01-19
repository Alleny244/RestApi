const express=require('express');
const router=express.Router();
const People=require("../models/peopleDetails")


const getpeople=async(req,res,next)=>{
    let sus;
   try {
        
       sus=await People.findById(req.params.id);
       if(sus==null){
           return res.status(404).json({
               message:"No such user"
           })
       }
       
   } catch (error) {
      
   }
   res.sus=sus;
   next();
};

router.get('/',async (req,res)=>{
    try {
        const list= await People.find();
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.json(list);
    } catch (error) {
        res.status(500).send({
            message:error.message
        })

    }
 
});

router.get('/:id',getpeople,(req,res)=>{
    res.send(res.sus.name)

});

router.post('/',async (req,res)=>{
    const p=new People({
        name:req.body.name,
        age:req.body.age,
        hobby:req.body.hobby

    })

    try {
        const newp = await p.save();
        res.status(201).json(newp);
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
});
router.patch('/:id',getpeople,async (req,res)=>{
 if(req.body.name!==null){
     res.sus.name=req.body.name;
 }
 if(req.body.age!==null){
    res.sus.age=req.body.age;
}
if(req.body.hobby!==null){
    res.sus.hobby=req.body.hobby;
}
try {
    const upd=await res.sus.save();
    res.json(upd);
} catch (error) {
    res.json({message:error.message})
}
});
router.delete('/:id', getpeople,async(req,res)=>{
try {
    await res.sus.remove();
    res.json({message:"Sucessfully removed"})
} catch (error) {
    res.json({message:error.message})
}

});

module.exports=router;