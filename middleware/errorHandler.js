export default function errorHandler(err, req, res, next) {
    if (err.name === "SequelizeValidationError") {
        return res.status(400).json({
            error: err.errors.map(e => e.message)
        });
    }

    if (err.name === "SequelizeUniqueConstraintError") {
        return res.status(409).json({
            error: "Email already registered"
        });
    }

    console.error(err.message);

    res.status(500).json({
        error: err.message
    });
}