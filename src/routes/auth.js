import { Router } from 'express';

const router = Router();

router.post('/login', (req, res) => {
	const { username, password } = req.body;
	if (username && password) {
		if (req.session.user) {
			res.send(req.session.user);
		} else {
			req.session.user = {
				username,
			};
			res.send(req.session);
		}
	} else res.sendStatus(401);
});

export default router;
