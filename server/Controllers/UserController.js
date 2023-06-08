import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
export const getUser = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await UserModel.findById(id);

        if (user) {

            const { password, ...otherDetails } = user._doc

            res.status(200).json(otherDetails)
        }
        else {
            res.status(404).json("user does not exists")
        }

    } catch (error) {
        res.status(500).json(error)
    }
}


export const updateUser = async (req, res) => {
    const id = req.params.id;
    const { currentUserId, CurrentUserAdminStatus, password } = req.body;

    if (id === currentUserId || CurrentUserAdminStatus) {
        try {
            if (password) {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(password, salt);
            }
            const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })
            res.status(200).json(user);


        } catch (error) {
            res.status(500).json(error);
        }
    }
    else {
        res.status(403).json("acces denied")
    }
};

export const deleteUser = async (req, res) => {
    const id = req.params.id
    const { currentUserId, CurrentUserAdminStatus, } = req.body;

    if (id === currentUserId || CurrentUserAdminStatus) {

        try {
            await UserModel.findOneAndDelete(id)
            res.status(200).json("user deleted")
        } catch (error) {
            res.status(500).json(error);
        }
    }
    else {
        res.status(403).json("acces denied")
    }
}

export const followUser=async(req, res)=>{
    const id = req.params.id

    const {currentUserId}=req.body
    if(currentUserId==id){
        res.status(403).json("action forbidden")
    }
    else{
        try {
            const followUser =await UserModel.findById(id)
            const followingUser =await UserModel.findById(currentUserId)

            if(!followUser.followers.includes(currentUserId)){

                await followUser.updateOne({$push : {followers: currentUserId}})
                await followingUser.updateOne({$push: {following:id}})
                res.status(200).json("following")
            }
            else{
                res.status(403).json("already following")
            }

        } catch (error) {
            res.status(500).json(error);
        }
    }

}

export const unFollowUser=async(req, res)=>{
    const id = req.params.id

    const {currentUserId}=req.body
    if(currentUserId==id){
        res.status(403).json("action forbidden")
    }
    else{
        try {
            const followUser =await UserModel.findById(id)
            const followingUser =await UserModel.findById(currentUserId)

            if(followUser.followers.includes(currentUserId)){

                await followUser.updateOne({$pull : {followers: currentUserId}})
                await followingUser.updateOne({$push: {following:id}})
                res.status(200).json("unfollowed")
            }
            else{
                res.status(403).json("not followed by you")
            }

        } catch (error) {
            res.status(500).json(error);
        }
    }

}