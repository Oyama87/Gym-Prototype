var today = {
  "date"=""//Use whatever date finding method available
  "sessions": [ {
      "sessionName": "";// Placeholder for user input to be passed to.
      "sessionWork": [ {
        "exerciseName": "",      //
        "exerciseCatg": "",      // Placeholders for user input to be passed to.
        "exerciseLoad": 0,       //
        "exerciseLoadUnit": "",
        "exerciseReps": 0,
        "exerciseRepUnits": ""
        }
      ]
    }
  ]
}

};

function addSession() {
  var currentSession = {
    "sessionName": "";// Placeholder for user input to be passed to using jQuery
    "sessionWork": [ {
      "exerciseName": "",      //
      "exerciseCatg": "",      // Placeholders for user input to be passed to using jQuery
      "exerciseLoad": 0,       //
      "exerciseLoadUnit": "",
      "exerciseReps": 0,
      "exerciseRepUnits": ""
  }
}
  today.sessions.push(currentSession);
};

function saveSession() {
  /* Express code here:
   * Back end code to update server/database, replacing JSON file with
   * updated data from after the .push(). JSON file on server will have
   * new session object in the array, effectively saving the session.
   * PseudoCode:
   * var json = require(data/json.js);
   * json.calendar.push(today);
   * rewrite json.js with updated calendar array stored in the json variable.
   */
}
