import express from 'express';
import EmailService from '../services/email.js';

const router = express.Router();

router.post('/', async ({body}, res) => {
    try {
        const { email, text } = body;
        console.log(body);
        await EmailService.send({ email, subject:'Question?', text}, true);

        return res.status(200).send({message: 'Success'});
    } catch (e) {
        return res.status(400).send({
            message: e.toString()
        })
    }
})

export default router;