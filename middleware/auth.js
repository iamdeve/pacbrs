const jwt = require('jsonwebtoken');

module.exports.verify = (req, res, next) => {
	try {
		const token = req.headers.authorization;
		const decodedToken = jwt.verify(token, process.env.JWT_SECRET || '*ab1248$asf');
		// console.log('approved');
		// console.log(decodedToken);
		req.user = decodedToken;
		return next();
	} catch {
		res.status(401).json({
			error: 'Auhorization error! please send a valid token via authorization header!',
		});
	}
};
