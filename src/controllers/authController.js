import createHttpError from 'http-errors';
import bcrypt from "bcrypt";
import { User } from "../models/user.model.js";

export const registerUser = async ( req, res, next ) =>
{
  try
  {
    const { email, password, name } = req.body;
    const isUserExist = await User.findOne( { email } );
    if ( isUserExist )
    {
      return next( createHttpError( 404, "This email is already in use" ) );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create( {
      email,
      name,
      password: hashedPassword
    } );


    res.status(201).json(newUser);



  } catch ( error )
  {
    return next( error );
  };
 };
