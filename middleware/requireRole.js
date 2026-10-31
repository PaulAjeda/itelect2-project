
// Builds a middleware that checks the user's role.

export default function requireRole(...allowed) {
    return (req, res, next) => {

        // verifyToken must run before this middleware.
        if (!req.user) {
            return res.status(401).json({
                error: "Log in first"
            });
        }

        // Check whether the user's role is allowed.
        if (!allowed.includes(req.user.role)) {
            return res.status(403).json({
                error: `Only ${allowed.join(" or ")} may do this`
            });
        }

        next();
    };
}
