import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Arbese Musliu',
        email: 'arbese@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Arboja Musliu',
        email: 'arboja@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users