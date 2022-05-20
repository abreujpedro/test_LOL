import { sign, verify } from 'jsonwebtoken';

abstract class Token {
    static createToken({email}: {email: string}){
        if(process.env.JWT_SECRET){
            const token = sign(
            {
                user: {
                    email
                }
            },
            process.env.JWT_SECRET,
            { expiresIn: '1d'}
            )
    
            return token;
        
    }
        
    }
    compareToken(token: string){
        if(process.env.JWT_SECRET) {
            verify(token, process.env.JWT_SECRET) as any;
        }
        
    }
}

export default Token;