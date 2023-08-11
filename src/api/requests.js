const USER = {
    get: "/api/users/get/:userid",
    create: "/api/users/create",
    updatePassword: "/api/users/password/:userid",
    update: "/api/users/update",
    forgotPassword: "/api/users/forgotpassword",
    deactivate:"/api/users/deactivate/:userid",
    isMailPublic:"/api/users/mailPrivacy/:userid",
  };

export {USER};