/*
 *  The overall data structure to hold workout data
*/

var calendar = [ // Array of day objects
  {
    "date": "",
    "sessions": [// Array of workout session objects.
      {// Session1 Object, first session in the array.
        "sessionName": "", // Supplied by user and app features .
        "sessionWork": [// Array of exercise set objects.
          {// First set object with exercise, resistance, and rep data.
            "exerciseName": "",
            "exerciseCatg": "",
            "exerciseLoad": 0,
            "exerciseLoadUnit": "",
            "exerciseReps": 0,
            "exerciseRepUnits": ""
          },
          {//Second set object with exercise, resistance, and rep data.
            "exerciseName": "",
            "exerciseCatg": "",
            "exerciseLoad": 0,
            "exerciseLoadUnit": "",
            "exerciseReps": 0,
            "exerciseRepUnits": ""
          }
        ]//end array of sets
      }//end first session object in array "sessions" of day object
    ]//end of "sessions" array
  }//end of day object
]
