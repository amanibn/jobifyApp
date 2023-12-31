import User from "../models/User.js"
import { StatusCodes } from 'http-status-codes';
import { BadRequestError } from '../errors/index.js'


const register = async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        throw new BadRequestError('Please provide all values')
    }
    const user = await User.create({ name, email, password })
    res.status(StatusCodes.CREATED).json({ user })
}
const login = (req, res) => {
    res.send('login user')
}
const updateUser = (req, res) => {
    res.send('updtateUser')
}
export { register, login, updateUser }