var hangmanApp = angular.module("hangmanApp", []);

hangmanApp.controller("HangmanController", [
  '$scope', function($scope) {
    $scope.letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    $scope.guesses = []; // number of guesses
    $scope.word  = "";
    $scope.wrong = 0;
    $scope.point = 0; // points
    // $scope.correct = false; // correct letter guessed set to false

    // saving secret word
    $scope.saveWord = function(word) {
      $scope.word = word.toLowerCase(); // automatic set word entered to lowercase letters
      $scope.inputWord = ""; // clear input field
      console.log("this is your secret word", $scope.word);
    };

    // remove previous letter from selection
    $scope.remove = function(letter) {
      return $scope.letters.splice($scope.letters.indexOf(letter), 1);
    };

    // player entry
    $scope.playerEntry = function(letter) {
      $scope.guesses.push(letter); // push guessed letter into array
      $scope.remove(letter); // removes the letters that have been guessed
      // game logic - loop over the length of the word
      for (var i = 0; i < $scope.word.length; i++ ) {
        if ($scope.word[i] === letter) {
          $scope.point += 1;

        }
      }

      // counter for wrong guesses
      $scope.wrong = $scope.guesses.length - $scope.point;
      console.log($scope.wrong);
      if ($scope.wrong > 7) {
        alert("Sorry, you lost! Please try again!");
      }
    };
  }
]);
