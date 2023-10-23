import jwt from 'jsonwebtoken';
const createAcccesToken = (apylod) => {
    return new Promise {(resolve, reject) => {
        jwt.sign(paylod, "xyz123", {expiresIn: "1d" },
        (err, token) => {
            if (err) reject(err);
            resolve(token);
        });
    
        
    }};
    

}