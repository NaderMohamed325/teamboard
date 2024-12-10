const Users = require("../models/userModel");

const getAllUsers = async (req, res) => {
    try {
        const sortQuery = req.query.sort ? req.query.sort.split(',').join(' ') : '';
        const users = await Users.find().sort(sortQuery);
        res.status(200).render('DashBoard', { users });
    } catch (err) {
        res.status(500).send("Error fetching users");
    }
};

const createUser = async (req, res) =>
{
    const newUser = req.body;
    if (newUser)
    {
        try
        {

            await Users.create(newUser);
            let users = await Users.find();


            res.status(200).render('DashBoard', {users});
        } catch (err)
        {
            res.status(500).send("Error in creating the user");
        }
    }
};

const deleteUserById = async (req, res) =>
{
    const id = req.params.id;
    try
    {
        await Users.findByIdAndDelete(id);
        const users = await Users.find();
        res.status(204).render('DashBoard', {users});
    } catch (err)
    {
        res.status(500).send("Error in deleting the user");
    }
};

const updateUser = async (req, res) =>
{
    const updatedUser = req.body;
    const id = req.params.id;
    try
    {
        await Users.findByIdAndUpdate(id, updatedUser, {new: true, runValidators: true});
        const users = await Users.find();
        res.status(200).render('DashBoard', {users});
    } catch (err)
    {
        res.status(500).send("Error in updating the user");
    }
};

module.exports = {
    getAllUsers,
    createUser,
    deleteUserById,
    updateUser
};