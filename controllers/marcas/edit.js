const fs=require('fs');
const {Marcas}=require('../../models');


module.exports={
    edit:(req, res)=>{
        Marcas.findOne({
            where:{id:req.query.id}
        }).the((results)=>{
            res.render('marcas/edit', {data:results})
        })
    }
}