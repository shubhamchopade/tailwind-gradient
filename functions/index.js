const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data, context) => {
  // get user and add custom claim (admin)
  return admin
    .auth()
    .getUserByEmail(data.email)
    .then((user) => {
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: true,
      });
    })
    .then(() => {
      return {
        message: `Success! ${data.email} has been made an admin.`,
      };
    })
    .catch((err) => {
      return err;
    });
});

exports.allUsers = functions.https.onRequest((data) => {
  return function listAllUsers(nextPageToken) {
    // List batch of users, 1000 at a time.
    admin
      .auth()
      .listUsers(1000, nextPageToken)
      .then(function (listUsersResult) {
        listUsersResult.users.forEach(function (userRecord) {
          return "user", userRecord.toJSON();
        });
        if (listUsersResult.pageToken) {
          // List next batch of users.
          listAllUsers(listUsersResult.pageToken);
        }
      })
      .catch(function (error) {
        return "Error listing users:", error;
      });
  };
  // Start listing users from the beginning, 1000 at a time.
});
