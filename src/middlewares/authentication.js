import jwt from 'jsonwebtoken';

const auth = (role) => async (req, res, next) => {
    try {
        const token = req.headers.token
        if (!token)
            res.status(400).send("token is required")
        jwt.verify(process.env.secret, token, (err, decoded) => {
            if (err)
                return res.status(403).send("please authenticate")
            else {
                if (decoded.role !== role)
                    return res.status(401).send("not authorise")
                req.user = decoded
                next()
            }
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export default auth