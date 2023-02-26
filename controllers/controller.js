const {validationResult}= require('express-validator')

module.exports={
    form1: (req,res) =>{
        return res.render('form1')
    },
    form1post: (req,res) =>{
        let errors = validationResult(req)
        if(errors.isEmpty()){
            const {nombre, color, email, edad} = req.body
            let recordar = req.body.recordar
            
            req.session.user = {
                color,
                nombre,
                email,
                edad
              }
              if(recordar){
                res.cookie("usuario", req.session.user,{maxAge:60000})
            }
         res.render('form1', {user:{nombre, color, email, edad}})
        }else{
            res.render('form1', {
                errors : errors.mapped(),
                old: req.body
            })
        }
        
    },
    cierroSesion: (req,res) =>{
        return res.render('cierroSesion', {
            nombre: req.session.user.nombre,
            color: req.session.user.color,
        })
    },
    destroy:(req,res) =>{
        req.session.destroy();
        res.cookie('usuario',null,{maxAge:-1})
        return res.redirect('/')
    }

}
