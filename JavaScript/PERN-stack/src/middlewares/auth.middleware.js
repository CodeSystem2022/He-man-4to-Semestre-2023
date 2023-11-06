import jwt from "jasonwebtoken";
export const isAuth = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: 'No estas autorizado'
        });
    }

    jwt.verify(token, "xyz123",(err, decoded) => {
        if (err) {
            return res.status(401).json ({
                message: 'No estas autirizado'

            });
            
            
        }
        req.usuarioId = decoded.id;
        next();
    });

    

};