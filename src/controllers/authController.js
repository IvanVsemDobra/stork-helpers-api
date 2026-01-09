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


export const loginUser = async ( req, res, next ) =>
{
  try
  {
    const { email, password } = req.body;

    const user = await User.findOne( { email } );
    if ( !user )
    {
      next( createHttpError( 401, "Invalid credentials" ) );
    }

    const isValidPassword = bcrypt.compare( password, user.password );

    if ( !isValidPassword )
    {
      next( createHttpError( 401, "Invalid credentials" ) );
    }

    res.status( 200 ).json( user );

  } catch ( error )
  {
    return next( error );
  };


};
