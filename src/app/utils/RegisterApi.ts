import axios from 'axios';

export const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('working')
    e.preventDefault();
    try {
        const res = await axios.post(`https://api-itnh.onrender.com/auth/register`, {
            email: "aveghost35923@gmail.com",
            password: "test",
            first_name: "test",
            last_name: "test2"
        }, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        console.log(res.data);
    } catch (err) {
        console.error(err);
    }
};
