import User from "../models/user.js";

export function createUser(req, res) {
    const user = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        gender: req.body.gender,
        phone: req.body.phone,
        // birthday: req.body.birthday,
        // avatar: req.body.avatar,
    })
    return user
        .save()
        .then((newUser) => {
            res.status(200).json({
                success: true,
                message: 'New user was created',
                User: newUser
            })
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                success: false,
                message: "Server error. Please try again.",
                error: error.message
            });
        })
}

export function getAllUser(req, res) {
    User.find()
        .select("_id email username password phone")
        .then((allUser) => {
            return res.status(200).json({
                success: true,
                message: "Got an user list",
                User: allUser
            });
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                message: "Server error. Please try again.",
                error: error.message,
            });
        });
}

export function getSingleUser(req, res) {
    const id = req.params._id;
    User.findById(id)
        .then((singleUser) => {
            res.status(200).json({
                success: true,
                message: "Got an user",
                User: singleUser,
            });
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                message: "This user does not exist",
                error: error.message,
            });
        });
}

export function updateUser(req, res) {
    const id = req.params._id;
    const updateObject = req.body;
    User.findOneAndUpdate({ _id: id }, updateObject)
        .exec()
        .then(() => {
            res.status(200).json({
                success: true,
                message: 'User was updated',
                updateUser: updateObject,
            });
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.'
            });
        });
}
export function deleteUser(req, res) {
    const id = req.params._id;
    User.findByIdAndRemove(id)
        .exec()
        .then((result) => {
            console.log(result)
            if (result == null) {
                res.status(200).json({
                    success: false,
                    message: 'Can not find this user',
                })
            } else {
                res.status(200).json({
                    success: true,
                    message: 'User was deleted',
                })
            }
        })
        .catch((error) => res.status(500).json({
            success: false,
            message: error.message,
        }));
}