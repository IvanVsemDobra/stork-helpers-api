export const getCurrentUser = async ( req, res, next ) =>
{
  res.status( 200 ).json( { massage: "There is me" } );
};
export const updateUser = async (req, res, next) => {};
export const updateUserAvatar = async (req, res, next) => {};
