import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

export const auth = (req, res, next) => {
	const { authorization } = req.headers;
	if (!authorization)
		return res
			.status(403)
			.json({ msg: 'Unauthorized User. Permission Denied' });

	const token = authorization.replace('Bearer ', '');
	jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
		if (err)
      return res.status(403).json({ msg: 'Unauthorized User. Request Denied' });

    const { _id } = payload;
    const userData = await User.findById(_id);
    req.user = userData;
    next()
	});
};
