import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true, 'please provide a username'],
        minLength : 3,
        maxLength : 255,
        unique : true
    },
    password : {
        type :String,
        required : [true, 'please provide a password'],
        minLength : [6, 'should contain more than 6 characters']
    },
    admin : {
        type : Boolean,
        default : false
    }
    
});


userSchema.pre('save', async function () {
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.validatePassword = async function(password)  {
    return await bcrypt.compare(password, this.password);
}

const User = mongoose.model('User', userSchema);

export {User}