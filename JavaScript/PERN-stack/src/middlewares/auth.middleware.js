
export const isAuth = (req, res, next) => {
    console.log(req.header);

    next();
    
};