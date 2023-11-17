const jwt = require("jsonwebtoken");

exports.auth = async(req,res,next)=>{
    try {

        // extracting token
        const token = req.cookie.token ||
        req.body.token ||
        req.headers.authorization.replace("Bearer ","");

        // token not found
        if(!token){
            return res.status(401).json({
                success : false,
                message : "Token not found "
            })
        }

        // verify token

        try {
            const decode = jwt.verify(token,"ramkumarsha256");
            req.user = decode;
        } catch (error) {
            return res.status(401).json({
                success : false,
                message : "Invalid token"
            })
        }

        next();
        
    } catch (error) {
        return res.status(401).json({
            success : false,
            message : "something went worng while validating token"
        })
    }
}